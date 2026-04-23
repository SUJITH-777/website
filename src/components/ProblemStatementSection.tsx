import { Users, GraduationCap, Brain } from "lucide-react";

const ProblemStatementSection = () => {
  const columns = [
    {
      icon: Users,
      title: "Seniors",
      body: `India has 150 million seniors. Most live with quiet loneliness — surrounded by family, but without someone who truly listens. As they age, they lose independence, not because they can't think, but because no one built the right tools for them.`,
    },
    {
      icon: GraduationCap,
      title: "Children",
      body: `Every AI tool built for children today does one thing: gives them the answer. Faster, cleaner, more confidently than any teacher could. But answers aren't learning. And a generation that never had to think hard, won't know how.`,
    },
    {
      icon: Brain,
      title: "Adults",
      body: `Most of us were never taught how to think — only what to think. In a world of information overload and manufactured opinions, the ability to reason clearly and act with agency is the rarest skill of all.`,
    },
  ];

  return (
    <section
      id="problem"
      className="scroll-mt-24 py-20 bg-gradient-to-b from-background to-muted/20"
      aria-labelledby="problem-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Problem We&apos;re Solving
          </h2>
          <p className="text-lg text-muted-foreground">
            Three short columns — the human truth behind each initiative.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.title}
                className="flex flex-col rounded-2xl border border-border bg-card/60 p-8 text-left shadow-soft"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{col.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{col.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
