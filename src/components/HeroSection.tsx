import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Heart, Lightbulb, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center bg-gradient-hero pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--hero-kicker)]">
                Swarn Aayu Foundation
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Swarn Aayu
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 font-medium leading-snug">
                We build AI that gives people back their agency — seniors, children, and everyone in
                between.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Swarn Aayu is a foundation building AI-led tools for seniors, children, and lifelong
                learners — designed not to answer for you, but to help you find your own way.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("problem")}
                className="group"
              >
                The problem we&apos;re solving
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("our-work")}>
                Our work
              </Button>
            </div>
          </div>

          <div
            className="relative animate-slide-up"
            role="img"
            aria-label="Visual for the whole foundation: wellbeing across ages, curiosity in learning, and clearer thinking — not one product alone."
          >
            <div className="relative flex min-h-[320px] max-h-[560px] flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/12 via-secondary/90 to-accent/18 p-10 shadow-hero">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                aria-hidden
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, rgb(from var(--primary) r g b / 0.25) 0%, transparent 45%),
                    radial-gradient(circle at 80% 70%, rgb(from var(--accent) r g b / 0.2) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, rgb(from var(--care) r g b / 0.12) 0%, transparent 55%)`,
                }}
              />

              <div className="relative flex flex-col items-center gap-2 text-center">
                <Sparkles className="h-9 w-9 text-[color:var(--hero-kicker)]" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--hero-kicker)]">
                  Whole foundation
                </p>
                <p className="max-w-[14rem] text-sm font-medium text-foreground/90">
                  Care, learning, and thought — one mission, many lives touched.
                </p>
              </div>

              <div className="relative grid w-full max-w-md grid-cols-3 gap-4 sm:gap-6">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-card ring-1 ring-border/60">
                    <Heart className="h-8 w-8 text-care" aria-hidden />
                  </div>
                  <span className="text-[11px] font-semibold uppercase leading-tight text-muted-foreground sm:text-xs">
                    Wellbeing and voice
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-card ring-1 ring-border/60">
                    <Lightbulb className="h-8 w-8 text-[color:var(--hero-kicker)]" aria-hidden />
                  </div>
                  <span className="text-[11px] font-semibold uppercase leading-tight text-muted-foreground sm:text-xs">
                    Curiosity and schools
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-card ring-1 ring-border/60">
                    <Brain className="h-8 w-8 text-trust" aria-hidden />
                  </div>
                  <span className="text-[11px] font-semibold uppercase leading-tight text-muted-foreground sm:text-xs">
                    Thinking and agency
                  </span>
                </div>
              </div>

              <p className="relative max-w-sm text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Not a single product shot — a lens on everything we build: humane AI for every stage
                of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
