import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PRIMARY_NAV } from "@/config/site";
import { TrinityMarkV2 } from "@/components/BrandMark";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] border-b border-white/[0.06] bg-background/92 backdrop-blur-md">
      <div className="container max-w-brand mx-auto h-full px-6 md:px-12">
        <div className="grid h-full grid-cols-[1fr_auto] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 md:gap-5">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="col-start-1 row-start-1 justify-self-start flex items-start gap-3 text-left rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-w-0"
            aria-label="Swarn Aayu — go to top"
          >
            <span className="shrink-0 text-[color:var(--hero-kicker)] mt-0.5" aria-hidden>
              <TrinityMarkV2 size={22} />
            </span>
            <span className="flex min-w-0 flex-col gap-1">
              <span className="font-display text-[8px] md:text-[9px] font-medium uppercase tracking-[0.34em] text-[color:var(--hero-kicker)] leading-none">
                Swarn Aayu Foundation
              </span>
              <span className="font-serif text-[16px] md:text-[17px] font-semibold tracking-[0.02em] text-foreground leading-none">
                Swarn Aayu
              </span>
              <span className="font-sans text-[11px] font-normal text-muted-foreground leading-none">
                स्वर्ण आयु
              </span>
            </span>
          </button>

          <nav
            className="hidden md:flex col-start-2 row-start-1 items-center justify-center gap-1 flex-wrap max-w-[min(100vw-16rem,42rem)]"
            aria-label="Primary"
          >
            {PRIMARY_NAV.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => scrollToSection(item.sectionId)}
                className="font-display border border-white/15 bg-transparent px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/45 transition-all hover:border-white/40 hover:text-foreground/90"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="col-start-2 md:col-start-3 row-start-1 justify-self-end flex items-center gap-2">
            <Button
              variant="hero"
              size="sm"
              className="hidden md:inline-flex shrink-0 rounded-none border-0 text-[10px] font-semibold uppercase tracking-[0.2em] px-6 py-2.5 h-auto min-h-0"
              onClick={() => scrollToSection("contact")}
            >
              Get involved
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-sm border border-white/15 text-foreground/80 hover:bg-white/[0.06] shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t border-white/[0.06] bg-background pb-4 pt-4" aria-label="Mobile primary">
            <div className="flex flex-col gap-2">
              {PRIMARY_NAV.map((item) => (
                <button
                  key={item.sectionId}
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-left font-display border border-white/15 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/55 transition-colors hover:border-white/35 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="hero"
                size="sm"
                className="mt-2 w-fit rounded-none border-0 text-[10px] font-semibold uppercase tracking-[0.2em] px-6 py-2.5 h-auto min-h-0"
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
