import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import AboutSection from "@/components/AboutSection";
import InitiativesSection from "@/components/InitiativesSection";
import PhilosophySection from "@/components/PhilosophySection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemStatementSection />
        <AboutSection />
        <InitiativesSection />
        <PhilosophySection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
