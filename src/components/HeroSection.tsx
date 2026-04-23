import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Lightbulb, Users } from "lucide-react";
import { TrinityMarkV2 } from "@/components/BrandMark";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="scroll-mt-24 relative overflow-hidden bg-background pt-[5.5rem] pb-16 md:pt-28 md:pb-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(90vw,600px)] w-[min(90vw,600px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,168,94,0.08)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(120vw,900px)] w-[min(120vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,168,94,0.06)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(140vw,1200px)] w-[min(140vw,1200px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,168,94,0.05)]"
        aria-hidden
      />

      <div className="brand-page relative z-[1]">
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16 lg:items-start">
          <div className="animate-fade-in">
            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-[color:var(--hero-kicker)] mb-10 md:mb-11">
              Swarn Aayu Foundation
            </p>

            <div className="mb-6 flex justify-start md:mb-8">
              <span className="text-[color:var(--hero-kicker)]" aria-hidden>
                <TrinityMarkV2 size={56} />
              </span>
            </div>

            <h1 className="font-serif font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(3.5rem,9vw,7rem)] text-foreground">
              Swarn <em className="italic text-[color:var(--hero-kicker)]">Aayu</em>
            </h1>

            <p className="mt-7 mb-10 max-w-xl text-[13px] font-light uppercase tracking-[0.06em] text-muted-foreground md:mb-14">
              AI for agency — seniors, children, and lifelong learners.
            </p>

            <p className="text-sm font-light leading-[1.82] text-muted-foreground max-w-xl tracking-wide mb-10 md:text-[15px] lg:mb-12">
              Swarn Aayu is a foundation building AI-led tools for seniors, children, and lifelong
              learners — designed not to answer for you, but to help you find your own way.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
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
            <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-8 overflow-hidden rounded-sm border border-border bg-card p-8 shadow-card md:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                aria-hidden
                style={{
                  backgroundImage: `radial-gradient(circle at 22% 28%, rgb(from var(--hero-kicker) r g b / 0.12) 0%, transparent 42%),
                    radial-gradient(circle at 78% 72%, rgb(from var(--accent) r g b / 0.08) 0%, transparent 44%),
                    radial-gradient(circle at 50% 50%, rgb(from var(--hero-kicker) r g b / 0.04) 0%, transparent 52%)`,
                }}
              />

              <div className="relative flex flex-col items-center gap-2 text-center">
                <p className="text-[9px] font-medium uppercase tracking-[0.34em] text-[color:var(--hero-kicker)]">
                  Whole foundation
                </p>
                <p className="max-w-[14rem] text-xs font-medium leading-relaxed text-foreground/90">
                  Care, learning, and thought — one mission, many lives touched.
                </p>
              </div>

              <div className="relative grid w-full max-w-xs grid-cols-3 gap-0.5">
                <div className="flex flex-col items-center gap-2.5 bg-muted/80 py-4 text-center ring-1 ring-border/80">
                  <Users className="h-6 w-6 text-[color:var(--hero-kicker)]" strokeWidth={1.5} aria-hidden />
                  <span className="px-1 text-[9px] font-medium uppercase leading-tight tracking-[0.2em] text-muted-foreground">
                    Wellbeing
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2.5 bg-muted/80 py-4 text-center ring-1 ring-border/80">
                  <Lightbulb className="h-6 w-6 text-[color:var(--hero-kicker)]" aria-hidden />
                  <span className="px-1 text-[9px] font-medium uppercase leading-tight tracking-[0.2em] text-muted-foreground">
                    Curiosity
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2.5 bg-muted/80 py-4 text-center ring-1 ring-border/80">
                  <Brain className="h-6 w-6 text-foreground/70" aria-hidden />
                  <span className="px-1 text-[9px] font-medium uppercase leading-tight tracking-[0.2em] text-muted-foreground">
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

        <hr className="mt-16 border-0 border-t border-border/80 md:mt-20" />
      </div>
    </section>
  );
};

export default HeroSection;
