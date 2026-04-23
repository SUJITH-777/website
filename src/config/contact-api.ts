/**
 * POST target for the contact form. Server handler lives at repo root: `api/contact.ts`
 * (Vercel serverless), not under `src/`.
 *
 * - Production / Preview on Vercel: same-origin `"/api/contact"`.
 * - Local full stack: `npm run dev:vercel` with SMTP vars in `.env.local` at repo root.
 * - Local Vite-only (`npm run dev`): either use `dev:vercel`, or set `VITE_CONTACT_API_URL`
 *   to a deployed origin (and add your dev URL to `ALLOWED_ORIGINS` on Vercel).
 */
const base = (import.meta.env.VITE_CONTACT_API_URL as string | undefined)?.replace(/\/$/, "");

export const CONTACT_FORM_URL = base ? `${base}/api/contact` : "/api/contact";
