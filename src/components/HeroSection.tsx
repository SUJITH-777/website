import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Lightbulb, Users } from "lucide-react";
import { InquiryArcMark } from "@/components/BrandMark";

function CoverArcDecor() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.35]"
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden
    >
      <path
        d="M 1000 700 A 200 200 0 0 0 740 300"
        stroke="#c9a85e"
        strokeWidth="0.8"
        opacity="0.25"
      />
      <path
        d="M 1000 700 A 320 320 0 0 0 620 180"
        stroke="#c9a85e"
        strokeWidth="0.8"
        opacity="0.18"
      />
      <path
        d="M 1000 700 A 440 440 0 0 0 500 60"
        stroke="#c9a85e"
        strokeWidth="0.8"
        opacity="0.13"
      />
      <path
        d="M 1000 700 A 560 560 0 0 0 380 -60"
        stroke="#c9a85e"
        strokeWidth="0.8"
        opacity="0.09"
      />
      <path
        d="M 1000 700 A 680 680 0 0 0 260 -160"
        stroke="#c9a85e"
        strokeWidth="0.8"
        opacity="0.06"
      />
      <path
        d="M 1000 700 A 100 100 0 0 0 860 440"
        stroke="#c9a85e"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <circle cx="1000" cy="700" r="4" fill="#c9a85e" opacity="0.5" />
    </svg>
  );
}

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="scroll-mt-28 relative min-h-[min(100svh,52rem)] overflow-hidden bg-[color:var(--cover-ink)] pt-28 pb-16 text-center md:pt-28 md:pb-24 md:text-left"
    >
      <CoverArcDecor />

      <div className="brand-page relative z-[1]">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-14">
          <div className="animate-fade-in">
            <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--hero-kicker)] opacity-70 md:mb-10">
              Swarn Aayu Foundation
            </p>

            <div className="mb-10 flex justify-center md:mb-10 md:justify-start">
              <span className="text-[color:var(--hero-kicker)]" aria-hidden>
                <InquiryArcMark size={80} />
              </span>
            </div>

            <h1 className="font-serif font-semibold leading-[0.95] tracking-[-0.015em] text-[clamp(3.25rem,9vw,6.75rem)] text-[color:var(--cover-cream)]">
              Swarn <em className="italic text-[color:var(--hero-kicker)]">Aayu</em>
            </h1>

            <div
              className="mx-auto my-8 h-16 w-px bg-[color:var(--hero-kicker)] opacity-35 md:mx-0"
              aria-hidden
            />

            <p className="mx-auto max-w-[26rem] text-[15px] font-light leading-[1.75] tracking-[0.02em] text-[color:var(--cover-muted)] md:mx-0">
              AI that gives people back their agency — seniors, children, and everyone in between.
            </p>

            <p className="mx-auto mt-8 max-w-xl text-left text-sm font-light leading-[1.82] tracking-wide text-[color:var(--cover-muted)] md:mx-0 md:mt-10 md:text-[15px]">
              Swarn Aayu is a foundation building AI-led tools for seniors, children, and lifelong
              learners — designed not to answer for you, but to help you find your own way.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-start md:mt-12">
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
                className="brand-btn-p border-white/25 bg-transparent font-medium tracking-[0.16em] text-[color:var(--cover-cream)]/90 hover:border-white/40 hover:bg-white/10 hover:text-[color:var(--cover-cream)]"
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
            <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-8 overflow-hidden rounded-sm border border-border bg-background p-8 text-foreground shadow-card md:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                aria-hidden
                style={{
                  backgroundImage: `radial-gradient(circle at 22% 28%, rgb(from var(--hero-kicker) r g b / 0.14) 0%, transparent 42%),
                    radial-gradient(circle at 78% 72%, rgb(from var(--trust) r g b / 0.1) 0%, transparent 44%),
                    radial-gradient(circle at 50% 50%, rgb(from var(--hero-kicker) r g b / 0.05) 0%, transparent 52%)`,
                }}
              />

              <div className="relative flex flex-col items-center gap-2 text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--hero-kicker)]">
                  Whole foundation
                </p>
                <p className="max-w-[14rem] text-xs font-medium leading-relaxed text-foreground/90">
                  Care, learning, and thought — one mission, many lives touched.
                </p>
              </div>

              <div className="relative grid w-full max-w-xs grid-cols-3 gap-[3px]">
                <div className="flex flex-col items-center gap-2.5 bg-muted py-4 text-center ring-1 ring-border/80">
                  <Users className="h-6 w-6 text-[color:var(--hero-kicker)]" strokeWidth={1.5} aria-hidden />
                  <span className="px-1 text-[9px] font-medium uppercase leading-tight tracking-[0.22em] text-muted-foreground">
                    Wellbeing
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2.5 bg-muted py-4 text-center ring-1 ring-border/80">
                  <Lightbulb className="h-6 w-6 text-[color:var(--hero-kicker)]" aria-hidden />
                  <span className="px-1 text-[9px] font-medium uppercase leading-tight tracking-[0.22em] text-muted-foreground">
                    Curiosity
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2.5 bg-muted py-4 text-center ring-1 ring-border/80">
                  <Brain className="h-6 w-6 text-foreground/70" aria-hidden />
                  <span className="px-1 text-[9px] font-medium uppercase leading-tight tracking-[0.22em] text-muted-foreground">
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

        <hr className="mt-16 border-0 border-t border-[color:color-mix(in_srgb,var(--cover-cream)_12%,var(--cover-ink))] md:mt-20" />
      </div>
    </section>
  );
};

export default HeroSection;
