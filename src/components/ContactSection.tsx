import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ORGANIZATION_ADDRESS, ORGANIZATION_MAPS_URL } from "@/constants/contact";
import { CONTACT_FORM_URL } from "@/config/contact-api";
import { Mail, Phone, MapPin, Users, Building, Heart, ExternalLink, Loader2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; ok?: boolean };

      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Message not sent",
          description: data.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We will get back to you as soon as we can.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "general",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Message not sent",
        description: "Network error. Check your connection, or email contact@swarnaayu.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactTypes = [
    { value: "general", label: "General", icon: Mail },
    { value: "seniors_families", label: "Seniors & families", icon: Heart },
    { value: "schools", label: "Schools & educators", icon: Building },
    { value: "thinkers", label: "Thinkers & learners", icon: Users },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Get involved
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Contact us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reach out about Aayu, Curiosity Coach for your school, Thinking Matters cohorts, or
            anything else you&apos;d like to explore with the foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="animate-slide-up shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Type Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    I&apos;m reaching out as:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {contactTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, type: type.value })}
                          className={`p-3 rounded-lg border transition-all duration-200 ${
                            formData.type === type.value
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <IconComponent className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-xs font-medium">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your needs or interests..."
                    rows={5}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Partnership */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Information */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">contact@swarnaayu.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-trust/10">
                      <Phone className="h-5 w-5 text-trust" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">+91 8019081414</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-care/20 shrink-0">
                      <MapPin className="h-5 w-5 text-care" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-foreground">Postal address</div>
                      <a
                        href={ORGANIZATION_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 text-muted-foreground leading-relaxed text-pretty underline-offset-4 hover:text-foreground hover:underline"
                        aria-label={`Open address in Google Maps: ${ORGANIZATION_ADDRESS}`}
                      >
                        <span>{ORGANIZATION_ADDRESS}</span>
                        <ExternalLink
                          className="inline h-3.5 w-3.5 shrink-0 translate-y-px opacity-70 group-hover:opacity-100"
                          aria-hidden
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-care text-care-foreground shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Ways to engage</h3>
                <p className="mb-6 opacity-90">
                  Pick the path that fits you — we read every message and respond as soon as we can.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-care-foreground/80">→</span>
                    <span>Try Aayu or ask about a senior in your life</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-care-foreground/80">→</span>
                    <span>Bring Curiosity Coach to your school or district</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-care-foreground/80">→</span>
                    <span>Join or host a Thinking Matters cohort</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero shadow-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Prefer to explore first?</h3>
                <p className="text-muted-foreground mb-6">
                  Scroll up to read about our initiatives, philosophy, and team — then come back here
                  when you&apos;re ready to talk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;