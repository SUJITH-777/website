import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, Brain, Lightbulb, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GendaMark } from "@/components/BrandMark";

const HERO_INITIATIVES: {
  id: string;
  label: string;
  title: string;
  description: string;
  sectionId: string;
  icon: LucideIcon;
}[] = [
  {
    id: "aayu",
    label: "Aayu",
    title: "Wellbeing in the golden years",
    description:
      "A voice-based AI companion for seniors — built to listen, remember, and help every elder feel heard, not hurried.",
    sectionId: "aayu",
    icon: Users,
  },
  {
    id: "curiosity",
    label: "Curiosity Coach",
    title: "Curiosity back in the classroom",
    description:
      "AI that nudges children toward questions and discovery — so learning feels alive again, not like another screen to obey.",
    sectionId: "curiosity-coach",
    icon: Lightbulb,
  },
  {
    id: "thinking",
    label: "Thinking Matters",
    title: "Agency for lifelong thinkers",
    description:
      "Tools for adults who want sharper judgment, not quick answers — AI that strengthens how you think, not what you’re told.",
    sectionId: "thinking-matters",
    icon: Brain,
  },
];

/** Time each slide stays visible before auto-advancing (ms). */
const AUTOPLAY_MS = 6000;

function HeroInitiativeCarousel({ scrollTo }: { scrollTo: (id: string) => void }) {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);

  const onSelect = useCallback((instance: CarouselApi) => {
    setActive(instance.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      api.scrollNext(false);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-full sm:max-w-md lg:mx-0 lg:max-w-none">
      <div className="relative max-w-full overflow-hidden rounded-sm border border-border bg-background text-foreground shadow-card">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage: `radial-gradient(circle at 22% 28%, rgb(from var(--hero-kicker) r g b / 0.14) 0%, transparent 42%),
              radial-gradient(circle at 78% 72%, rgb(from var(--trust) r g b / 0.1) 0%, transparent 44%),
              radial-gradient(circle at 50% 50%, rgb(from var(--hero-kicker) r g b / 0.05) 0%, transparent 52%)`,
          }}
        />

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
            /** Higher = slower, ease-out style glide between slides (Embla scroll tween). */
            duration: 52,
            watchDrag: false,
          }}
          className="relative"
          aria-label="Foundation initiatives"
        >
          <CarouselContent className="-ml-0">
            {HERO_INITIATIVES.map((item, index) => {
              const Icon = item.icon;
              return (
                <CarouselItem key={item.id} className="pl-0 basis-full">
                  <div className="flex min-h-[320px] flex-col px-6 pb-8 pt-9 text-center md:min-h-[340px] md:px-8 md:pb-9 md:pt-10">
                    <div className="mb-5 flex justify-center">
                      <span className="rounded-full border border-[color:color-mix(in_srgb,var(--hero-kicker)_35%,transparent)] bg-[color:color-mix(in_srgb,var(--hero-kicker)_10%,transparent)] p-3 text-[color:var(--hero-kicker)]">
                        <Icon className="h-7 w-7" strokeWidth={1.35} aria-hidden />
                      </span>
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--hero-kicker)]">
                      {item.label}
                    </p>
                    <h3 className="mt-3 font-serif text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 flex-1 text-center text-sm font-light leading-relaxed text-muted-foreground md:text-[15px]">
                      {item.description}
                    </p>
                    <div className="mt-6 flex justify-center">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="rounded-sm border-border/80 text-[10px] font-semibold uppercase tracking-[0.16em] hover:border-[color:var(--hero-kicker)]/50 hover:bg-muted/30"
                        onClick={() => scrollTo(item.sectionId)}
                      >
                        Learn more
                      </Button>
                    </div>
                    <span className="sr-only">
                      Slide {index + 1} of {HERO_INITIATIVES.length}
                    </span>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      <div
        className="mt-4 flex justify-center gap-2"
        role="tablist"
        aria-label="Choose initiative slide"
      >
        {HERO_INITIATIVES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Show ${item.label}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-7 bg-[color:var(--hero-kicker)]" : "w-1.5 bg-muted-foreground/35 hover:bg-muted-foreground/55"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

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
      className="scroll-mt-32 relative min-h-[min(100svh,52rem)] overflow-x-clip overflow-y-hidden bg-[color:var(--cover-ink)] pt-32 pb-16 text-center md:pt-32 md:pb-24 md:text-left"
    >
      <CoverArcDecor />

      <div className="brand-page relative z-[1]">
        <div className="grid w-full min-w-0 max-w-full items-start gap-12 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-14">
          <div className="animate-fade-in min-w-0 max-w-full">
            <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--hero-kicker)] opacity-70 md:mb-10">
              Swarn Aayu Foundation
            </p>

            <div className="mb-10 flex justify-center md:mb-10 md:justify-start">
              <span className="text-[color:var(--hero-kicker)]" aria-hidden>
                <GendaMark size={80} />
              </span>
            </div>

            <h1 className="max-w-full break-words font-serif font-semibold leading-[0.95] tracking-[-0.015em] text-[clamp(2.5rem,8vw,6.75rem)] text-[color:var(--cover-cream)]">
              Swarn <em className="italic text-[color:var(--hero-kicker)]">Aayu</em>
            </h1>

            <p className="mx-auto mt-8 max-w-full text-pretty text-[15px] font-light leading-[1.75] tracking-[0.02em] text-[color:var(--cover-muted)] sm:max-w-[26rem] md:mx-0 md:mt-10">
              AI that gives people back their agency — seniors, children, and everyone in between.
            </p>

            <p className="mx-auto mt-8 max-w-full text-pretty text-left text-sm font-light leading-[1.82] tracking-wide text-[color:var(--cover-muted)] sm:max-w-xl md:mx-0 md:mt-10 md:text-[15px]">
              Swarn Aayu is a foundation building AI-led tools for seniors, children, and lifelong
              learners — designed not to answer for you, but to help you find your own way.
            </p>

            <div className="mt-10 flex min-w-0 max-w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-start md:mt-12">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("problem")}
                className="group brand-btn-p !whitespace-normal break-words px-4 text-center sm:px-6 w-full min-w-0 sm:w-auto"
              >
                The problem we&apos;re solving
                <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("our-work")}
                className="brand-btn-p !whitespace-normal break-words px-4 text-center sm:px-6 w-full min-w-0 border-white/45 bg-transparent text-[#f5f0e8] shadow-none hover:border-white/70 hover:bg-white/10 hover:text-white sm:w-auto"
              >
                Our work
              </Button>
            </div>
          </div>

          <div className="relative min-w-0 max-w-full animate-slide-up lg:sticky lg:top-32">
            <p className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--hero-kicker)] opacity-90 lg:text-left">
              Our initiatives
            </p>
            <HeroInitiativeCarousel scrollTo={scrollToSection} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
