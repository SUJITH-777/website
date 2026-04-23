import { Heart, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/app-links";
import { FOOTER_COLUMNS } from "@/config/site";
import { ORGANIZATION_ADDRESS, ORGANIZATION_MAPS_URL } from "@/constants/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">Find your way in</h2>

        <div className="grid md:grid-cols-3 gap-10 mb-14 max-w-5xl mx-auto">
          <div className="text-center md:text-left space-y-3">
            <h3 className="font-semibold">For seniors & families</h3>
            <p className="text-sm footer-muted leading-relaxed">
              Is there a senior in your life who deserves a companion who truly listens?
            </p>
            <a href="#aayu" className="footer-link inline-flex text-sm font-medium">
              Try Aayu →
            </a>
          </div>
          <div className="text-center md:text-left space-y-3">
            <h3 className="font-semibold">For schools & educators</h3>
            <p className="text-sm footer-muted leading-relaxed">
              Want to bring curiosity back into your classroom?
            </p>
            <a href="#contact" className="footer-link inline-flex text-sm font-medium">
              Get in touch about Curiosity Coach →
            </a>
          </div>
          <div className="text-center md:text-left space-y-3">
            <h3 className="font-semibold">For thinkers & learners</h3>
            <p className="text-sm footer-muted leading-relaxed">Ready to challenge how you think?</p>
            <a href="#thinking-matters" className="footer-link inline-flex text-sm font-medium">
              Join a Thinking Matters cohort →
            </a>
          </div>
        </div>

        <p className="text-center footer-muted max-w-5xl mx-auto mb-10 text-sm md:text-base leading-relaxed px-1">
          Swarn Aayu is a not-for-profit foundation. Everything we build is in service of one idea:
          AI that gives people back their agency.
        </p>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 border-t footer-rule pt-8 text-left sm:grid-cols-2 sm:gap-x-12 md:gap-x-20 mb-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h3 className="footer-heading">{col.title}</h3>
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

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 border-t footer-rule pt-8 md:grid-cols-2 md:gap-12 mb-12">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Swarn Aayu</h3>
              <p className="text-sm footer-muted">स्वर्ण आयु</p>
              <p className="text-sm footer-muted mt-3 max-w-md leading-relaxed">
                Foundation building Aayu, Curiosity Coach, and Thinking Matters — AI designed for
                agency, not dependence.
              </p>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-4 text-sm md:items-end">
            <div className="flex max-w-lg items-start gap-3 footer-muted">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 opacity-90" aria-hidden />
              <a href="mailto:contact@swarnaayu.com" className="footer-link break-words leading-snug">
                contact@swarnaayu.com
              </a>
            </div>
            <div className="flex max-w-lg items-start gap-3 footer-muted">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 opacity-90" aria-hidden />
              <span className="leading-snug">+91 8019081414</span>
            </div>
            <div className="flex max-w-lg items-start gap-3 footer-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-90" aria-hidden />
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
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm font-medium">Get the Aayu app</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-store-btn inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  Google Play
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </a>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-store-btn inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  App Store
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm footer-faint">
                © {currentYear} Swarn Aayu Foundation. All rights reserved.
              </div>
              <div className="footer-legal flex flex-wrap items-center justify-center gap-6 text-sm">
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
