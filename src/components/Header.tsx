import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { PRIMARY_NAV } from "@/config/site";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="col-start-1 row-start-1 justify-self-start flex items-center gap-2 text-left rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-w-0"
            aria-label="Swarn Aayu — go to top"
          >
            <div className="p-2 rounded-lg bg-gradient-primary shrink-0">
              <Heart className="h-6 w-6 text-foreground" />
            </div>
            <div className="min-w-0">
              <span className="text-xl font-bold text-foreground block">Swarn Aayu</span>
              <span className="text-xs text-muted-foreground">स्वर्ण आयु</span>
            </div>
          </button>

          <nav
            className="hidden md:flex col-start-2 row-start-1 items-center justify-center gap-4 lg:gap-5 flex-wrap max-w-[min(100vw-12rem,52rem)]"
            aria-label="Primary"
          >
            {PRIMARY_NAV.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="col-start-2 md:col-start-3 row-start-1 justify-self-end flex items-center gap-2">
            <Button
              variant="hero"
              size="sm"
              className="hidden md:inline-flex shrink-0"
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
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="hero" size="sm" className="w-fit mt-2" onClick={() => scrollToSection("contact")}>
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
