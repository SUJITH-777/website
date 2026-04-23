import { Badge } from "@/components/ui/badge";

const PhilosophySection = () => {
  return (
    <section
      id="philosophy"
      className="scroll-mt-24 py-20 bg-background"
      aria-labelledby="philosophy-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary">Our philosophy</Badge>
          </div>
          <h2
            id="philosophy-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
          >
            AI that empowers. Never replaces.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Most AI today is optimised for one thing: making you feel good about using it. It
              agrees with you, flatters your ideas, and confirms your instincts. The more you use
              it, the more it reflects back exactly what you already believe.
            </p>
            <p className="font-semibold text-foreground">This is not intelligence. It&apos;s a mirror.</p>
            <p>
              At Swarn Aayu, we build AI that works in the opposite direction — that listens without
              rushing to respond, that asks before it answers, that resists easy agreement in favour
              of helping you think for yourself.
            </p>
            <p>
              Because the most important question of the AI age isn&apos;t what AI can do for us.
              It&apos;s what we risk losing if we let it do too much.
            </p>
            <p>
              Our three initiatives are different in audience and form. But identical in purpose:
              to build AI that makes people more capable, not more dependent. That measures its
              success not in answers delivered, but in agency restored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
