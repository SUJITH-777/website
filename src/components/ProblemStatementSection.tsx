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
      className="scroll-mt-24 brand-section bg-background"
      aria-labelledby="problem-heading"
    >
      <div className="brand-page">
        <span className="brand-label">The challenge</span>
        <h2 id="problem-heading" className="brand-heading max-w-3xl">
          The problem we&apos;re <em>solving</em>
        </h2>
        <p className="brand-body mb-12 md:mb-14">
          Three human truths — the foundation for Aayu, Curiosity Coach, and Thinking Matters.
        </p>

        <div className="brand-grid grid-cols-1 md:grid-cols-3 max-w-brand">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.title}
                className="brand-cell bg-card p-8 md:p-10 md:min-h-[280px] flex flex-col border border-border/80"
              >
                <Icon
                  className="h-6 w-6 text-[color:var(--hero-kicker)] shrink-0 mb-6"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[color:var(--hero-kicker)] mb-3">
                  {col.title}
                </p>
                <p className="text-xs md:text-[13px] text-muted-foreground leading-[1.75]">{col.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
