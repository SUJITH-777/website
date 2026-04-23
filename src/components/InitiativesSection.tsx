import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Ear,
  Clock,
  Shield,
  Users,
  Activity,
  ExternalLink,
  Lightbulb,
  Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GoldHeartSquircle, HybridMark } from "@/components/BrandMark";
import { PLAY_STORE_URL } from "@/constants/app-links";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

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
    <section id="our-work" className="scroll-mt-24 brand-strip border-b border-border" aria-labelledby="our-work-heading">
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
        <div id="aayu" className="scroll-mt-24 pb-16 md:pb-20 border-b border-border">
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
                life. From coordinating care with trusted services like Portea and Anvayaa, to
                simply being there at the end of a long day, Aayu is built around one idea: every
                senior deserves to feel heard.
              </p>
              <p>
                Designed with real senior citizens and psychologists, Aayu meets seniors where they
                are — helping them become digitally independent on their own terms, at their own pace.
              </p>
            </div>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Works with: Portea · Anvayaa · Vayah Vikas · and more
            </p>
            <div className="mt-8">
              <Button variant="hero" size="lg" className="brand-btn-p" asChild>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Download on Android
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
              className="relative animate-fade-in flex min-h-[320px] flex-col items-center justify-center gap-6 rounded-sm border border-border bg-background p-8 md:p-10 shadow-card"
              role="img"
              aria-label="Visual representing Aayu for seniors, Curiosity Coach for children, and Thinking Matters for lifelong learners"
            >
              <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[color:var(--hero-kicker)]">
                <HybridMark className="shrink-0" size={20} aria-hidden />
                One foundation, three paths
              </div>
              <div className="grid w-full max-w-sm grid-cols-3 gap-0.5 text-center">
                <div className="flex flex-col items-center gap-2 bg-card py-4 ring-1 ring-border/60">
                  <Users className="h-6 w-6 text-[color:var(--hero-kicker)]" aria-hidden />
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-muted-foreground px-1">
                    Golden years
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-card py-4 ring-1 ring-border/60">
                  <Lightbulb className="h-6 w-6 text-[color:var(--hero-kicker)]" aria-hidden />
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-muted-foreground px-1">
                    Growing minds
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-card py-4 ring-1 ring-border/60">
                  <Brain className="h-6 w-6 text-foreground/70" aria-hidden />
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-muted-foreground px-1">
                    Clear thinking
                  </span>
                </div>
              </div>
              <p className="max-w-xs text-center text-[11px] leading-relaxed text-muted-foreground">
                Warm, human-centred AI — built for agency across every stage of life.
              </p>
              <div className="absolute -top-3 -right-3 rounded-sm border border-border bg-card p-2 shadow-card text-[color:var(--hero-kicker)]">
                <HybridMark size={22} aria-hidden />
              </div>
            </div>
          </div>
        </div>

        {/* Curiosity Coach */}
        <div id="curiosity-coach" className="scroll-mt-24 py-16 md:py-20 border-b border-border">
          <div className="mb-10">
            <Badge variant="brand" className="mb-5">
              Curiosity Coach
            </Badge>
            <h3 className="brand-heading text-[clamp(1.5rem,3vw,2.25rem)] max-w-3xl">
              Meet Curiosity Coach — AI that teaches children to <em>think,</em> not what to think
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-0.5 lg:gap-1 items-start max-w-brand">
            <div className="space-y-4 text-sm text-muted-foreground leading-[1.78] bg-background border border-border/80 p-8 md:p-10">
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
            <Card className="rounded-sm border-border/80 shadow-none bg-background">
              <CardContent className="p-8 md:p-10 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-card ring-1 ring-border/60">
                  <Lightbulb className="h-6 w-6 text-[color:var(--hero-kicker)]" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Co-created with teachers and learning psychologists. Continuously measured for impact.
                </p>
                <Button variant="hero" className="brand-btn-p w-full sm:w-auto" onClick={() => scrollTo("contact")}>
                  Get in touch for your school
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thinking Matters */}
        <div id="thinking-matters" className="scroll-mt-24 pt-16 md:pt-20">
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
