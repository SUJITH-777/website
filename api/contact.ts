import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const TYPE_LABELS: Record<string, string> = {
  general: "General",
  seniors_families: "Seniors & families",
  schools: "Schools & educators",
  thinkers: "Thinkers & learners",
};

const MAX_NAME = 200;
const MAX_EMAIL = 320;
const MAX_SUBJECT = 500;
const MAX_MESSAGE = 12_000;

function applyCors(req: VercelRequest, res: VercelResponse): "ok" | "forbidden" | "skip" {
  const allowedRaw = process.env.ALLOWED_ORIGINS?.trim();
  if (!allowedRaw) {
    return "skip";
  }
  const allowed = allowedRaw.split(",").map((s) => s.trim()).filter(Boolean);
  const origin = req.headers.origin;
  if (!origin) {
    return "ok";
  }
  if (allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Max-Age", "86400");
    return "ok";
  }
  return "forbidden";
}

function parseBody(req: VercelRequest): Record<string, unknown> {
  const raw = req.body;
  if (raw && typeof raw === "object" && !Buffer.isBuffer(raw)) {
    return raw as Record<string, unknown>;
  }
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  return {};
}

function isValidEmail(email: string): boolean {
  if (email.length > MAX_EMAIL) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    const cors = applyCors(req, res);
    if (cors === "forbidden") {
      return res.status(403).end();
    }
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const cors = applyCors(req, res);
  if (cors === "forbidden") {
    return res.status(403).json({ error: "Origin not allowed" });
  }

  const body = parseBody(req);
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const type = String(body.type ?? "general").trim();

  if (!name || name.length > MAX_NAME) {
    return res.status(400).json({ error: "Please enter a valid name." });
  }
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (subject.length > MAX_SUBJECT) {
    return res.status(400).json({ error: "Subject is too long." });
  }
  if (!message || message.length > MAX_MESSAGE) {
    return res.status(400).json({ error: "Please enter a message." });
  }

  const typeLabel = TYPE_LABELS[type] ?? type;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS ?? process.env.SMTP_PASSWORD;
  const mailFrom = process.env.SMTP_FROM;
  const mailTo = process.env.CONTACT_MAIL_TO ?? "contact@swarnaayu.com";

  if (!host || !user || !pass || !mailFrom) {
    console.error("contact api: missing SMTP_HOST, SMTP_USER, SMTP_PASS, or SMTP_FROM");
    return res.status(500).json({ error: "Server misconfigured" });
  }

  const port = Number(process.env.SMTP_PORT || "587");
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const subjectLine = `[swarnaayu.com] ${subject || "Contact form"} — ${typeLabel}`;

  const text = [`Contact type: ${typeLabel}`, `Name: ${name}`, `Email: ${email}`, "", message].join(
    "\n"
  );

  const html = `
    <p><strong>Contact type:</strong> ${escapeHtml(typeLabel)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
    <hr />
    <p style="white-space:pre-wrap;font-family:system-ui,sans-serif">${escapeHtml(message)}</p>
  `;

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: subjectLine,
      text,
      html,
    });
  } catch (err) {
    console.error("contact api: sendMail failed", err);
    return res.status(502).json({ error: "Could not send message. Please try again or email us directly." });
  }

  return res.status(200).json({ ok: true });
}
