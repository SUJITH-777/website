import { Card, CardContent } from "@/components/ui/card";
import { UsersRound, Stethoscope, Users, Calendar, Brain, Smartphone } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: UsersRound,
      title: "Emotional & Social Isolation",
      description: "Nuclear families and urban migration leave many seniors feeling lonely and disconnected from their support systems.",
      stats: "65% of Indian seniors experience loneliness",
      color: "care"
    },
    {
      icon: Stethoscope,
      title: "Health Management Challenges",
      description: "Complex medication schedules, multiple doctors, and chronic condition monitoring create overwhelming healthcare burdens.",
      stats: "80% struggle with medication adherence",
      color: "trust"
    },
    {
      icon: Users,
      title: "Cultural & Personal Disconnection",
      description: "Generic care solutions fail to understand individual preferences, cultural nuances, and personal histories.",
      stats: "Limited culturally-sensitive options",
      color: "primary"
    }
  ];

  const demographics = [
    { label: "Current 60+ Population", value: "140M+" },
    { label: "Projected by 2050", value: "300M+" },
    { label: "Living in Nuclear Families", value: "70%" },
    { label: "With Chronic Conditions", value: "75%" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            India's Aging Reality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As India's population ages rapidly, millions of seniors face unprecedented challenges 
            that require innovative, culturally-sensitive solutions.
          </p>
        </div>

        {/* Demographics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {demographics.map((stat, index) => (
            <Card key={index} className="text-center bg-card shadow-soft hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            const colorClass = problem.color === 'care' ? 'text-care' : 
                              problem.color === 'trust' ? 'text-trust' : 'text-primary';
            const bgClass = problem.color === 'care' ? 'bg-care/10' : 
                           problem.color === 'trust' ? 'bg-trust/10' : 'bg-primary/10';
            
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 transform hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl ${bgClass} flex items-center justify-center mb-6`}>
                    <IconComponent className={`h-8 w-8 ${colorClass}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {problem.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <div className={`text-sm font-medium ${colorClass} bg-background px-3 py-1 rounded-full inline-block`}>
                    {problem.stats}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-care rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-care-foreground mb-4">
              These challenges demand a new approach
            </h3>
            <p className="text-care-foreground/80 text-lg">
              Swarn Aayu bridges these gaps with AI-powered, culturally-aware solutions 
              that understand the unique needs of Indian seniors and their families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;