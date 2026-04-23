import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/app-links";
import { FOOTER_COLUMNS } from "@/config/site";
import { ORGANIZATION_ADDRESS, ORGANIZATION_MAPS_URL } from "@/constants/contact";
import { InquiryArcMark } from "@/components/BrandMark";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer py-12 md:py-14">
      <div className="brand-page flex flex-col gap-12 md:gap-14">
        <div>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[color:var(--footer-fg)] tracking-tight mb-10 md:mb-12 text-center md:text-left">
            Find your way in
          </h2>

          <div className="grid md:grid-cols-3 gap-0.5 md:gap-1 max-w-brand mx-auto">
            <div className="bg-[color:color-mix(in_srgb,var(--footer-fg)_6%,var(--footer-bg))] border border-[color:var(--footer-edge)] p-6 md:p-8 text-center md:text-left space-y-3">
              <h3 className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[color:var(--hero-kicker)]">
                For seniors &amp; families
              </h3>
              <p className="text-sm footer-muted leading-relaxed">
                Is there a senior in your life who deserves a companion who truly listens?
              </p>
              <a href="#aayu" className="footer-link inline-flex text-[10px] font-semibold uppercase tracking-[0.16em]">
                Try Aayu →
              </a>
            </div>
            <div className="bg-[color:color-mix(in_srgb,var(--footer-fg)_6%,var(--footer-bg))] border border-[color:var(--footer-edge)] p-6 md:p-8 text-center md:text-left space-y-3">
              <h3 className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[color:var(--hero-kicker)]">
                For schools &amp; educators
              </h3>
              <p className="text-sm footer-muted leading-relaxed">
                Want to bring curiosity back into your classroom?
              </p>
              <a href="#contact" className="footer-link inline-flex text-[10px] font-semibold uppercase tracking-[0.16em]">
                Curiosity Coach →
              </a>
            </div>
            <div className="bg-[color:color-mix(in_srgb,var(--footer-fg)_6%,var(--footer-bg))] border border-[color:var(--footer-edge)] p-6 md:p-8 text-center md:text-left space-y-3">
              <h3 className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[color:var(--hero-kicker)]">
                For thinkers &amp; learners
              </h3>
              <p className="text-sm footer-muted leading-relaxed">Ready to challenge how you think?</p>
              <a href="#thinking-matters" className="footer-link inline-flex text-[10px] font-semibold uppercase tracking-[0.16em]">
                Thinking Matters →
              </a>
            </div>
          </div>
        </div>

        <p className="text-center footer-muted max-w-2xl mx-auto text-sm leading-relaxed">
          Swarn Aayu is a not-for-profit foundation. Everything we build is in service of one idea: AI
          that gives people back their agency.
        </p>

        <div className="mx-auto grid w-full max-w-brand grid-cols-1 gap-0.5 border-t footer-rule pt-10 text-left sm:grid-cols-2">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3 py-2 sm:py-0">
              <h3 className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[color:var(--footer-fg)] opacity-90">
                {col.title}
              </h3>
              <ul className="space-y-2 text-sm footer-muted">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link inline-flex items-center gap-1"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                      {link.external ? (
                        <ExternalLink className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto flex w-full max-w-brand flex-col gap-8 border-t footer-rule pt-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3">
            <span className="text-[color:var(--hero-kicker)] shrink-0 mt-0.5" aria-hidden>
              <InquiryArcMark size={26} />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[color:var(--footer-fg)]">Swarn Aayu</h3>
              <p className="text-[10px] footer-muted tracking-[0.28em] uppercase mt-1">स्वर्ण आयु</p>
              <p className="text-sm footer-muted mt-4 max-w-md leading-relaxed">
                Foundation building Aayu, Curiosity Coach, and Thinking Matters — AI designed for
                agency, not dependence.
              </p>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-3 text-sm md:items-end footer-muted">
            <div className="flex max-w-lg items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 opacity-90 text-[color:var(--hero-kicker)]" aria-hidden />
              <a href="mailto:contact@swarnaayu.com" className="footer-link break-words leading-snug">
                contact@swarnaayu.com
              </a>
            </div>
            <div className="flex max-w-lg items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 opacity-90 text-[color:var(--hero-kicker)]" aria-hidden />
              <span className="leading-snug">+91 8019081414</span>
            </div>
            <div className="flex max-w-lg items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-90 text-[color:var(--hero-kicker)]" aria-hidden />
              <a
                href={ORGANIZATION_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link inline-flex items-start gap-1.5 leading-snug text-pretty break-words"
                aria-label={`Open address in Google Maps: ${ORGANIZATION_ADDRESS}`}
              >
                <span>{ORGANIZATION_ADDRESS}</span>
                <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t footer-rule pt-8">
          <div className="mx-auto flex w-full max-w-brand flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[color:var(--footer-fg)]">
                Get the Aayu app
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-store-btn inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors"
                >
                  Google Play
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </a>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-store-btn inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors"
                >
                  App Store
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2">
              <div className="text-[9px] footer-faint uppercase tracking-[0.2em] leading-relaxed max-w-xs md:max-w-none">
                © {currentYear} Swarn Aayu Foundation. All rights reserved.
              </div>
              <div className="footer-legal flex flex-wrap items-center gap-x-6 gap-y-2 text-[9px] uppercase tracking-[0.16em]">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
