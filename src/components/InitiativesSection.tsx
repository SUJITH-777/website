import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Ear,
  Clock,
  Shield,
  Users,
  MessageCircle,
  Activity,
  ExternalLink,
  Lightbulb,
  Brain,
  Sparkles,
} from "lucide-react";
import { PLAY_STORE_URL } from "@/constants/app-links";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const aayuFeatures = [
  {
    icon: Ear,
    title: "Active listening",
    description:
      "Listens, remembers, checks in, and helps navigate daily life—not just chat.",
    color: "care" as const,
  },
  {
    icon: Clock,
    title: "Continuous care",
    description: "Voice-based companion built for seniors, at their pace.",
    color: "trust" as const,
  },
  {
    icon: Shield,
    title: "Trusted coordination",
    description: "Works with care partners you trust for real-world support.",
    color: "primary" as const,
  },
  {
    icon: Heart,
    title: "Personal companion",
    description: "Designed with seniors and psychologists so every voice feels heard.",
    color: "care" as const,
  },
  {
    icon: Activity,
    title: "Daily life",
    description: "From coordinating care to simply being there at the end of the day.",
    color: "trust" as const,
  },
  {
    icon: Users,
    title: "Digital independence",
    description: "Helps seniors become digitally independent on their own terms.",
    color: "primary" as const,
  },
];

const InitiativesSection = () => {
  return (
    <section
      id="our-work"
      className="scroll-mt-24 py-6 bg-muted/20"
      aria-labelledby="our-work-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-fade-in">
          <h2
            id="our-work-heading"
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Our work
          </h2>
        </div>

        {/* Aayu */}
        <div
          id="aayu"
          className="scroll-mt-24 py-16 border-t border-border/60 first:border-t-0 first:pt-0"
        >
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Aayu
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Aayu — a companion for your golden years
            </h3>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground text-left md:text-center">
              <p>
                Loneliness is one of the most serious health risks facing India&apos;s growing
                senior population. Aayu exists to change that.
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
                are — helping them become digitally independent on their own terms, at their own
                pace.
              </p>
            </div>
            <p className="mt-6 text-sm font-medium text-foreground/90">
              Works with: Portea · Anvayaa · Vayah Vikas · and more
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Download on Android →
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid gap-6 animate-slide-up">
              {aayuFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const colorClass =
                  feature.color === "care"
                    ? "text-care"
                    : feature.color === "trust"
                      ? "text-trust"
                      : "text-primary";
                const bgClass =
                  feature.color === "care"
                    ? "bg-care/10"
                    : feature.color === "trust"
                      ? "bg-trust/10"
                      : "bg-primary/10";

                return (
                  <Card
                    key={index}
                    className="group hover:shadow-card transition-all duration-300 transform hover:scale-[1.01]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${bgClass} shrink-0`}>
                          <IconComponent className={`h-6 w-6 ${colorClass}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div
              className="relative animate-fade-in"
              role="img"
              aria-label="Visual representing Aayu for seniors, Curiosity Coach for children, and Thinking Matters for lifelong learners"
            >
              <div className="relative flex min-h-[320px] lg:min-h-[420px] flex-col items-center justify-center gap-8 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-secondary/80 to-accent/15 p-10 shadow-card">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" aria-hidden />
                  One foundation, three paths
                </div>
                <div className="grid w-full max-w-sm grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center gap-3 rounded-xl bg-card/90 p-4 shadow-soft">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-care/15">
                      <Users className="h-7 w-7 text-care" aria-hidden />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Golden years
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-3 rounded-xl bg-card/90 p-4 shadow-soft">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
                      <Lightbulb className="h-7 w-7 text-primary" aria-hidden />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Growing minds
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-3 rounded-xl bg-card/90 p-4 shadow-soft">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-trust/15">
                      <Brain className="h-7 w-7 text-trust" aria-hidden />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Clear thinking
                    </span>
                  </div>
                </div>
                <p className="max-w-xs text-center text-sm text-muted-foreground">
                  Warm, human-centred AI — built for agency across every stage of life.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 bg-care/90 text-care-foreground p-3 rounded-xl shadow-card animate-gentle-bounce">
                <MessageCircle className="h-6 w-6" aria-hidden />
              </div>
            </div>
          </div>
        </div>

        {/* Curiosity Coach */}
        <div
          id="curiosity-coach"
          className="scroll-mt-24 py-16 border-t border-border/60"
        >
          <div className="max-w-3xl mx-auto text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              Curiosity Coach
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Curiosity Coach — AI that teaches children to think, not what to think
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every AI tool built for children today does one thing well: it gives answers.
                Instantly. Confidently. Without friction.
              </p>
              <p>But friction is where learning lives.</p>
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
              <p className="font-medium text-foreground">
                We didn&apos;t build this for productivity. We built it for curiosity.
              </p>
            </div>
            <Card className="shadow-card border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Co-created with teachers and learning psychologists. Continuously measured for
                  impact.
                </p>
                <Button variant="hero" className="w-full sm:w-auto" onClick={() => scrollTo("contact")}>
                  Get in touch for your school →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thinking Matters */}
        <div
          id="thinking-matters"
          className="scroll-mt-24 py-16 border-t border-border/60 pb-4"
        >
          <div className="max-w-3xl mx-auto text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              Thinking Matters
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Thinking Matters — because most of us were never taught how to think
            </h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed mb-10">
            <p>
              We live in a world that rewards fast opinions and ready answers. But the ability to
              reason clearly, sit with complexity, and arrive at your own considered view —
              that&apos;s a skill. And like any skill, it can be taught.
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
            <p className="font-medium text-foreground italic">
              The AI will not tell you what to conclude. It will simply refuse to let you stop
              thinking.
            </p>
            <p className="text-sm pt-2">
              Built on years of live cohort experience. Now available as an AI-powered product.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" onClick={() => scrollTo("contact")}>
              Join a cohort →
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo("contact")}>
              Express interest →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
