import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PRIMARY_NAV } from "@/config/site";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/94 backdrop-blur-[12px] border-b border-border">
      <div className="container max-w-brand mx-auto px-6 md:px-12 py-3.5 md:py-4">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 md:gap-6">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="col-start-1 row-start-1 justify-self-start flex flex-col items-start gap-1.5 text-left rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-w-0"
            aria-label="Swarn Aayu — go to top"
          >
            <span className="font-display text-[8px] md:text-[9px] font-medium uppercase tracking-[0.34em] text-[color:var(--hero-kicker)] leading-none">
              Swarn Aayu Foundation
            </span>
            <span className="font-serif text-[17px] md:text-[1.125rem] font-semibold tracking-[0.02em] text-foreground leading-none">
              Swarn Aayu
            </span>
            <span className="font-sans text-[11px] font-normal text-muted-foreground leading-none -mt-0.5">
              स्वर्ण आयु
            </span>
          </button>

          <nav
            className="hidden md:flex col-start-2 row-start-1 items-center justify-center gap-6 lg:gap-8 flex-wrap max-w-[min(100vw-14rem,40rem)]"
            aria-label="Primary"
          >
            {PRIMARY_NAV.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => scrollToSection(item.sectionId)}
                className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground px-0 py-1 transition-colors whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="col-start-2 md:col-start-3 row-start-1 justify-self-end flex items-center gap-2 self-center">
            <Button
              variant="hero"
              size="sm"
              className="hidden md:inline-flex shrink-0 rounded-none text-[10px] font-semibold uppercase tracking-[0.2em] px-6 py-2.5 h-auto min-h-0"
              onClick={() => scrollToSection("contact")}
            >
              Get involved
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-muted shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4" aria-label="Mobile primary">
            <div className="flex flex-col gap-3">
              {PRIMARY_NAV.map((item) => (
                <button
                  key={item.sectionId}
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-left font-display text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-transparent hover:border-border"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="hero"
                size="sm"
                className="w-fit mt-2 rounded-none text-[10px] font-semibold uppercase tracking-[0.2em] px-6 py-2.5 h-auto min-h-0"
                onClick={() => scrollToSection("contact")}
              >
                Get involved
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
