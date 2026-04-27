import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PRIMARY_NAV } from "@/config/site";
import { GendaMark } from "@/components/BrandMark";

/** Skip "Home" — the wordmark button already scrolls to #hero. */
const CENTER_NAV = PRIMARY_NAV.filter((item) => item.sectionId !== "hero");

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
      <div className="mx-auto flex w-full max-w-[min(100%,1440px)] items-center gap-4 px-4 py-3.5 sm:px-6 sm:py-4 lg:gap-8 lg:px-10 lg:py-4 min-h-[4.25rem] md:min-h-[5rem]">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex shrink-0 items-center gap-3 rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-w-0"
          aria-label="Swarn Aayu — go to top"
        >
          <span className="shrink-0 text-[color:var(--hero-kicker)]" aria-hidden>
            <GendaMark size={34} className="shrink-0" />
          </span>
          <span className="flex min-w-0 flex-col gap-1 text-left">
            <span className="font-sans text-[8px] md:text-[9px] font-medium uppercase tracking-[0.28em] text-[color:var(--hero-kicker)] leading-none">
              Swarn Aayu Foundation
            </span>
            <span className="font-serif text-[17px] md:text-[19px] font-semibold tracking-[0.02em] text-foreground leading-none">
              Swarn Aayu
            </span>
          </span>
        </button>

        <nav
          className="hidden min-w-0 flex-1 justify-center md:flex"
          aria-label="Primary"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 lg:gap-x-2">
            {CENTER_NAV.map((item) => (
              <li key={item.sectionId}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="rounded-sm border border-transparent bg-transparent px-2.5 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-border hover:bg-muted/40 hover:text-foreground sm:px-3 lg:text-[11px] lg:tracking-[0.12em] lg:px-3.5"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0 md:gap-3">
          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-flex shrink-0 rounded-sm border border-transparent text-[10px] font-semibold uppercase tracking-[0.16em] px-5 py-2.5 h-auto min-h-0 lg:text-[11px] lg:px-6"
            onClick={() => scrollToSection("contact")}
          >
            Get involved
          </Button>
          <button
            type="button"
            className="rounded-sm border border-border p-2.5 text-foreground hover:bg-muted md:hidden shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-border bg-background px-4 pb-5 pt-4 md:hidden" aria-label="Mobile primary">
          <ul className="flex flex-col gap-2">
            {PRIMARY_NAV.map((item) => (
              <li key={item.sectionId}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="w-full text-left font-sans border border-border px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <Button
                variant="default"
                size="sm"
                className="mt-1 w-full rounded-sm text-[10px] font-semibold uppercase tracking-[0.16em] px-5 py-2.5 h-auto min-h-0"
                onClick={() => scrollToSection("contact")}
              >
                Get involved
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
