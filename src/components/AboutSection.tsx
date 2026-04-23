import { Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 py-16 bg-background border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Swarn Aayu Foundation</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Building AI-led tools for seniors, children, and lifelong learners
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4 text-left md:text-center">
            <p>
              Swarn Aayu is a foundation building AI-led tools for seniors, children, and lifelong
              learners — designed not to answer for you, but to help you find your own way.
            </p>
            <p>
              Swarn Aayu is a not-for-profit foundation. Everything we build is in service of one
              idea: AI that gives people back their agency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
