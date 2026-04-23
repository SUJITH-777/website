import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PRIMARY_NAV } from "@/config/site";
import { InquiryArcMark } from "@/components/BrandMark";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 min-h-14 border-b border-border bg-background shadow-sm">
      <div className="container max-w-brand mx-auto px-6 py-2.5 md:px-12 md:py-3">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 md:gap-x-5 md:gap-y-0">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="col-start-1 row-start-1 justify-self-start flex items-center gap-3 text-left rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-w-0"
            aria-label="Swarn Aayu — go to top"
          >
            <span className="shrink-0 text-[color:var(--hero-kicker)]" aria-hidden>
              <InquiryArcMark size={22} />
            </span>
            <span className="flex min-w-0 flex-col gap-0.5 text-left">
              <span className="font-sans text-[8px] md:text-[9px] font-medium uppercase tracking-[0.3em] text-[color:var(--hero-kicker)] leading-none">
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
            className="hidden md:flex col-start-2 row-start-1 min-h-0 min-w-0 items-center justify-start overflow-x-auto overflow-y-hidden pr-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Primary"
          >
            <div className="flex w-max shrink-0 items-center gap-2 whitespace-nowrap">
              {PRIMARY_NAV.map((item) => (
                <button
                  key={item.sectionId}
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="shrink-0 rounded-sm font-sans border border-border bg-background px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="relative z-10 col-start-2 md:col-start-3 row-start-1 justify-self-end flex shrink-0 items-center gap-2 md:pl-2">
            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex shrink-0 rounded-sm border border-transparent text-[10px] font-semibold uppercase tracking-[0.18em] px-5 py-2.5 h-auto min-h-0"
              onClick={() => scrollToSection("contact")}
            >
              Get involved
            </Button>
            <button
              type="button"
              className="md:hidden rounded-sm border border-border p-2 text-foreground hover:bg-muted shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t border-border bg-background pb-4 pt-4" aria-label="Mobile primary">
            <div className="flex flex-col gap-2">
              {PRIMARY_NAV.map((item) => (
                <button
                  key={item.sectionId}
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-left font-sans border border-border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="default"
                size="sm"
                className="mt-2 w-fit rounded-sm text-[10px] font-semibold uppercase tracking-[0.18em] px-5 py-2.5 h-auto min-h-0"
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
