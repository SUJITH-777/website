import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Lightbulb, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="scroll-mt-24 bg-background pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="brand-page">
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16 lg:items-start">
          <div className="animate-fade-in">
            <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.36em] text-[color:var(--hero-kicker)] mb-10 md:mb-14">
              Swarn Aayu Foundation
            </p>

            <h1 className="font-serif font-semibold text-foreground leading-[0.92] tracking-[-0.025em] text-[clamp(3.25rem,8.5vw,6.75rem)]">
              Swarn <em className="italic text-[color:var(--hero-kicker)]">Aayu</em>
            </h1>

            <div className="h-px w-14 bg-[color:var(--hero-kicker)] opacity-40 my-8 md:my-9" aria-hidden />

            <p className="text-sm md:text-[15px] font-light text-muted-foreground tracking-[0.04em] max-w-[440px] leading-[1.8] mb-10">
              AI that gives people back their agency — seniors, children, and everyone in between.
            </p>

            <p className="text-sm md:text-[15px] font-light text-muted-foreground leading-[1.82] max-w-xl tracking-wide mb-10 lg:mb-12">
              Swarn Aayu is a foundation building AI-led tools for seniors, children, and lifelong
              learners — designed not to answer for you, but to help you find your own way.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("problem")}
                className="group brand-btn-p"
              >
                The problem we&apos;re solving
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("our-work")}
                className="brand-btn-p font-medium tracking-[0.16em]"
              >
                Our work
              </Button>
            </div>
          </div>

          <div
            className="relative animate-slide-up lg:sticky lg:top-28"
            role="img"
            aria-label="Visual for the whole foundation: wellbeing across ages, curiosity in learning, and clearer thinking — not one product alone."
          >
            <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-8 overflow-hidden rounded-sm border border-border bg-card p-8 md:p-10 shadow-card">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                aria-hidden
                style={{
                  backgroundImage: `radial-gradient(circle at 22% 28%, rgb(from var(--hero-kicker) r g b / 0.2) 0%, transparent 42%),
                    radial-gradient(circle at 78% 72%, rgb(from var(--foreground) r g b / 0.06) 0%, transparent 44%),
                    radial-gradient(circle at 50% 50%, rgb(from var(--hero-kicker) r g b / 0.05) 0%, transparent 52%)`,
                }}
              />

              <div className="relative flex flex-col items-center gap-2 text-center">
                <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[color:var(--hero-kicker)]">
                  Whole foundation
                </p>
                <p className="max-w-[14rem] text-xs font-medium text-foreground/90 leading-relaxed">
                  Care, learning, and thought — one mission, many lives touched.
                </p>
              </div>

              <div className="relative grid w-full max-w-xs grid-cols-3 gap-0.5">
                <div className="flex flex-col items-center gap-2.5 bg-background py-4 text-center ring-1 ring-border/60">
                  <Users className="h-6 w-6 text-[color:var(--hero-kicker)]" strokeWidth={1.5} aria-hidden />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground leading-tight px-1">
                    Wellbeing
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2.5 bg-background py-4 text-center ring-1 ring-border/60">
                  <Lightbulb className="h-6 w-6 text-[color:var(--hero-kicker)]" aria-hidden />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground leading-tight px-1">
                    Curiosity
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2.5 bg-background py-4 text-center ring-1 ring-border/60">
                  <Brain className="h-6 w-6 text-foreground/70" aria-hidden />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground leading-tight px-1">
                    Agency
                  </span>
                </div>
              </div>

              <p className="relative max-w-[16rem] text-center text-[11px] leading-relaxed text-muted-foreground">
                Humane AI for every stage of life — not one product alone.
              </p>
            </div>
          </div>
        </div>

        <hr className="mt-16 md:mt-20 border-0 border-t border-border w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
