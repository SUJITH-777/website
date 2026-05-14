import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Ear,
  Clock,
  Shield,
  Users,
  Activity,
  ExternalLink,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GoldHeartSquircle, GendaMark } from "@/components/BrandMark";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/app-links";
import aayuWelcome from "@/assets/app/aayu-welcome.png";
import aayuTapToSpeak from "@/assets/app/aayu-tap-to-speak.png";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/** Time each Aayu app screenshot stays visible before auto-advancing (ms). */
const AAYU_APP_AUTOPLAY_MS = 4500;

const aayuAppScreens: { src: string; alt: string }[] = [
  {
    src: aayuWelcome,
    alt: "Aayu app welcome screen — Talk to a Friend, Anytime",
  },
  {
    src: aayuTapToSpeak,
    alt: "Aayu app home screen — Tap to Speak with Aayu",
  },
];

function AayuAppCarousel() {
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
    }, AAYU_APP_AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <div
      className="relative flex w-full flex-col items-center justify-center gap-5 animate-fade-in"
      role="region"
      aria-label="Aayu app preview"
    >
      {/* Phone frame — width-driven, floats gently */}
      <div className="relative w-full max-w-[180px] sm:max-w-[195px] md:max-w-[210px] animate-float">
        <div className="relative rounded-[2.25rem] border-[10px] border-[#1a1614] bg-[#1a1614] shadow-[0_24px_60px_-22px_rgba(0,0,0,0.45),0_10px_22px_-12px_rgba(201,168,94,0.28)]">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
              duration: 52,
              watchDrag: false,
            }}
            className="relative overflow-hidden rounded-[1.5rem]"
            aria-label="Aayu app screenshots"
          >
            <CarouselContent className="-ml-0">
              {aayuAppScreens.map((screen, index) => (
                <CarouselItem key={index} className="pl-0 basis-full">
                  <div className="relative aspect-[9/19.5] w-full bg-[#1a1614]">
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        {/* Soft warm glow under the floating phone */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-4/5 -translate-x-1/2 rounded-full bg-[color:var(--hero-kicker)] opacity-25 blur-2xl"
        />
      </div>

      {/* Dot indicators */}
      <div
        className="flex shrink-0 justify-center gap-2"
        role="tablist"
        aria-label="Choose Aayu app screen"
      >
        {aayuAppScreens.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Show app screen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i
                ? "w-7 bg-[color:var(--hero-kicker)]"
                : "w-1.5 bg-muted-foreground/35 hover:bg-muted-foreground/55"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

type AayuFeature = {
  icon: LucideIcon | "goldHeart";
  title: string;
  description: string;
};

const aayuFeatures: AayuFeature[] = [
  {
    icon: Ear,
    title: "Active listening",
    description:
      "Listens, remembers, checks in, and helps navigate daily life—not just chat.",
  },
  {
    icon: Clock,
    title: "Continuous care",
    description: "Voice-based companion built for seniors, at their pace.",
  },
  {
    icon: Shield,
    title: "Trusted coordination",
    description: "Works with care partners you trust for real-world support.",
  },
  {
    icon: "goldHeart",
    title: "Personal companion",
    description: "Designed with seniors and psychologists so every voice feels heard.",
  },
  {
    icon: Activity,
    title: "Daily life",
    description: "From coordinating care to simply being there at the end of the day.",
  },
  {
    icon: Users,
    title: "Digital independence",
    description: "Helps seniors become digitally independent on their own terms.",
  },
];

const InitiativesSection = () => {
  return (
    <section id="our-work" className="scroll-mt-32 brand-strip border-b border-border" aria-labelledby="our-work-heading">
      <div className="brand-page py-20 md:py-24">
        <span className="brand-label">Our work</span>
        <h2 id="our-work-heading" className="brand-heading max-w-3xl">
          Three paths. One <em>mission.</em>
        </h2>
        <p className="brand-body mb-16 md:mb-20">
          Aayu, Curiosity Coach, and Thinking Matters share the same spine: technology that restores
          agency instead of replacing it.
        </p>

        {/* Aayu */}
        <div id="aayu" className="scroll-mt-32 pb-16 md:pb-20 border-b border-border">
          <div className="mb-12">
            <Badge variant="brand" className="mb-5">
              Aayu
            </Badge>
            <h3 className="brand-heading text-[clamp(1.5rem,3vw,2.25rem)] max-w-3xl">
              Meet Aayu — a companion for your <em>golden years</em>
            </h3>
            <div className="space-y-4 brand-body max-w-3xl mt-6">
              <p>
                Loneliness is one of the most serious health risks facing India&apos;s growing senior
                population. Aayu exists to change that.
              </p>
              <p>
                Aayu is a voice-based AI companion built specifically for seniors. It doesn&apos;t
                just chat — it listens, remembers, checks in, and helps navigate the texture of daily
                life. From coordinating care with trusted services like Harito and Wisdom Circle, to
                simply being there at the end of a long day, Aayu is built around one idea: every
                senior deserves to feel heard.
              </p>
              <p>
                Designed with real senior citizens and psychologists, Aayu meets seniors where they
                are — helping them become digitally independent on their own terms, at their own pace.
              </p>
            </div>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Works with: Harito · Wisdom Circle · Vayah Vikas · and more
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="hero" size="lg" className="brand-btn-p" asChild>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Download on Android
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                </a>
              </Button>
              <Button variant="hero" size="lg" className="brand-btn-p" asChild>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Download on iOS
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0.5 lg:gap-1 items-stretch">
            <div className="grid gap-0.5 animate-slide-up">
              {aayuFeatures.map((feature, index) => {
                const LucideIcon = feature.icon === "goldHeart" ? null : feature.icon;
                return (
                  <Card
                    key={index}
                    className="rounded-sm border-border/80 bg-background shadow-none hover:bg-muted/20 transition-colors"
                  >
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-sm bg-card ring-1 ring-border/60 shrink-0 flex items-center justify-center">
                          {feature.icon === "goldHeart" ? (
                            <GoldHeartSquircle size={26} className="shrink-0" />
                          ) : (
                            LucideIcon && (
                              <LucideIcon className="h-5 w-5 text-[color:var(--hero-kicker)]" aria-hidden />
                            )
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1.5">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div
              className="relative animate-fade-in flex h-full min-h-[320px] flex-col items-center justify-center gap-5 rounded-sm border border-border bg-background p-6 md:p-8 shadow-card"
              role="img"
              aria-label="Aayu app preview"
            >
              <div className="flex shrink-0 items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[color:var(--hero-kicker)]">
                <GendaMark className="shrink-0" size={20} aria-hidden />
                Meet Aayu on your phone
              </div>
              <AayuAppCarousel />
              <p className="max-w-xs shrink-0 text-center text-[11px] leading-relaxed text-muted-foreground">
                Voice-first companion — designed for seniors, built for everyday use.
              </p>
              <div className="absolute -top-3 -right-3 rounded-sm border border-border bg-card p-2 shadow-card text-[color:var(--hero-kicker)]">
                <GendaMark size={22} aria-hidden />
              </div>
            </div>
          </div>
        </div>

        {/* Curiosity Coach */}
        <div id="curiosity-coach" className="scroll-mt-32 py-16 md:py-20 border-b border-border">
          <div className="mb-10">
            <Badge variant="brand" className="mb-5">
              Curiosity Coach
            </Badge>
            <h3 className="brand-heading text-[clamp(1.5rem,3vw,2.25rem)] max-w-3xl">
              Meet Curiosity Coach — AI that teaches children to <em>think,</em> not what to think
            </h3>
          </div>
          <div className="grid max-w-brand items-stretch gap-0.5 lg:grid-cols-2 lg:gap-1">
            <div className="flex h-full min-h-0 flex-col space-y-4 border border-border/80 bg-background p-8 text-sm leading-[1.78] text-muted-foreground md:p-10">
              <p>
                Every AI tool built for children today does one thing well: it gives answers.
                Instantly. Confidently. Without friction.
              </p>
              <p className="text-foreground font-medium">But friction is where learning lives.</p>
              <p>
                Curiosity Coach is an AI-powered conversational coach for children, built on a simple
                but radical idea — when a child asks a question, the right response isn&apos;t an
                answer. It&apos;s a better question back.
              </p>
              <p>
                Unlike general-purpose AI tools, Curiosity Coach is built from the ground up with
                teachers, schools, and learning psychology experts. Every interaction is designed
                around how children actually learn — and every deployment is tracked and measured for
                real impact in the classroom.
              </p>
              <p className="font-medium text-foreground text-sm">
                We didn&apos;t build this for productivity. We built it for curiosity.
              </p>
            </div>
            <Card className="flex h-full min-h-0 flex-col rounded-sm border-border/80 bg-background shadow-none">
              <CardContent className="flex flex-1 flex-col gap-6 p-8 md:p-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-card ring-1 ring-border/60">
                  <Lightbulb className="h-6 w-6 text-[color:var(--hero-kicker)]" />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Co-created with teachers and learning psychologists. Continuously measured for impact.
                </p>
                <Button
                  variant="hero"
                  className="brand-btn-p mt-auto w-full sm:w-auto"
                  onClick={() => scrollTo("contact")}
                >
                  Get in touch for your school
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thinking Matters */}
        <div id="thinking-matters" className="scroll-mt-32 pt-16 md:pt-20">
          <div className="mb-10">
            <Badge variant="brand" className="mb-5">
              Thinking Matters
            </Badge>
            <h3 className="brand-heading text-[clamp(1.5rem,3vw,2.25rem)] max-w-3xl">
              Thinking Matters — because most of us were never taught how to <em>think</em>
            </h3>
          </div>
          <div className="max-w-3xl space-y-4 text-sm text-muted-foreground leading-[1.78] mb-10">
            <p>
              We live in a world that rewards fast opinions and ready answers. But the ability to
              reason clearly, sit with complexity, and arrive at your own considered view — that&apos;s
              a skill. And like any skill, it can be taught.
            </p>
            <p>
              Thinking Matters is TVG Krishnamurthy&apos;s life&apos;s work distilled into a programme.
              It is an interactive, peer-led course focused on one question: how do we think better?
              Not what to think — but how. Participants don&apos;t receive answers. They receive
              challenges, provocations, and the company of others working through the same hard
              questions.
            </p>
            <p>
              What began as a live, cohort-based programme is now becoming an AI-powered product —
              one where the AI plays the role of a thoughtful peer, not an oracle. You can join an
              existing cohort, build your own room with people you trust, or work through it solo
              with AI as your thinking partner.
            </p>
            <p className="font-medium text-foreground italic text-sm">
              The AI will not tell you what to conclude. It will simply refuse to let you stop
              thinking.
            </p>
            <p className="text-xs pt-1 text-muted-foreground">
              Built on years of live cohort experience. Now available as an AI-powered product.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="lg" className="brand-btn-p" onClick={() => scrollTo("contact")}>
              Join a cohort
            </Button>
            <Button variant="outline" size="lg" className="brand-btn-p font-medium" onClick={() => scrollTo("contact")}>
              Express interest
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
