import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ORGANIZATION_ADDRESS, ORGANIZATION_MAPS_URL } from "@/constants/contact";
import { CONTACT_FORM_URL } from "@/config/contact-api";
import { Mail, Phone, MapPin, Users, Building, ExternalLink, Loader2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GoldHeartSquircle } from "@/components/BrandMark";

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
        description:
          "Network error. Check your connection, or email contact@swarnaayu.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactTypes: {
    value: string;
    label: string;
    icon: LucideIcon | "goldHeart";
  }[] = [
    { value: "general", label: "General", icon: Mail },
    { value: "seniors_families", label: "Seniors & families", icon: "goldHeart" },
    { value: "schools", label: "Schools & educators", icon: Building },
    { value: "thinkers", label: "Thinkers & learners", icon: Users },
  ];

  return (
    <section id="contact" className="scroll-mt-32 brand-section bg-background">
      <div className="brand-page">
        <div className="mb-14 md:mb-16 animate-fade-in">
          <Badge variant="brand" className="mb-5">
            Get involved
          </Badge>
          <h2 className="brand-heading max-w-3xl">
            <em>Contact</em> us
          </h2>
          <p className="brand-body max-w-3xl mt-4 text-[15px]">
            Reach out about Aayu, Curiosity Coach for your school, Thinking Matters cohorts, or
            anything else you&apos;d like to explore with the foundation.
          </p>
        </div>

        <div className="grid max-w-brand items-stretch gap-0.5 lg:grid-cols-2 lg:gap-1">
          <Card className="flex h-full min-h-0 animate-slide-up flex-col rounded-sm border-border/80 bg-card shadow-none">
            <CardContent className="flex flex-1 flex-col p-8 md:p-10">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 tracking-tight">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3 block">
                    I&apos;m reaching out as
                  </label>
                  <div className="grid grid-cols-2 gap-0.5">
                    {contactTypes.map((type) => {
                      const active = formData.type === type.value;
                      const IconComponent = type.icon === "goldHeart" ? null : type.icon;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, type: type.value })}
                          className={`p-3 rounded-sm border text-left transition-colors ${
                            active
                              ? "border-primary/60 bg-primary text-primary-foreground"
                              : "border-border bg-card hover:border-foreground/20"
                          }`}
                        >
                          <span className="mb-1 block">
                            {type.icon === "goldHeart" ? (
                              <GoldHeartSquircle size={32} className={active ? "opacity-95" : ""} />
                            ) : (
                              IconComponent && (
                                <IconComponent
                                  className={`h-4 w-4 ${active ? "text-primary-foreground" : "text-[color:var(--hero-kicker)]"}`}
                                  aria-hidden
                                />
                              )
                            )}
                          </span>
                          <span className="text-[10px] font-medium uppercase tracking-wide block">
                            {type.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2 block">
                      Full name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="rounded-sm bg-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="rounded-sm bg-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    className="rounded-sm bg-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2 block">
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
                    className="rounded-sm bg-input"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full brand-btn-p" disabled={isSubmitting}>
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

          <div className="flex h-full min-h-0 flex-col gap-0.5 animate-fade-in">
            <Card className="shrink-0 rounded-sm border-border/80 bg-card shadow-none">
              <CardContent className="p-8 md:p-10">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-6 tracking-tight">
                  Get in touch
                </h3>
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--hero-kicker)]" aria-hidden />
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                        Email
                      </div>
                      <div className="text-foreground">contact@swarnaayu.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--hero-kicker)]" aria-hidden />
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                        Phone
                      </div>
                      <div className="text-muted-foreground">+91 8019081414</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--hero-kicker)]" aria-hidden />
                    <div className="min-w-0">
                      <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                        Postal address
                      </div>
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

            <Card className="flex min-h-0 flex-1 flex-col rounded-sm border-border/80 bg-card shadow-none">
              <CardContent className="flex flex-1 flex-col p-8 md:p-10">
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.28em] text-[color:var(--hero-kicker)]">
                  Ways to engage
                </p>
                <p className="mb-6 text-sm leading-relaxed text-foreground">
                  Pick the path that fits you — we read every message and respond as soon as we can.
                </p>
                <ul className="space-y-2.5 text-sm leading-relaxed text-foreground">
                  <li className="flex gap-2">
                    <span className="shrink-0 text-[color:var(--hero-kicker)]">→</span>
                    <span>Try Aayu or ask about a senior in your life</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-[color:var(--hero-kicker)]">→</span>
                    <span>Bring Curiosity Coach to your school or district</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-[color:var(--hero-kicker)]">→</span>
                    <span>Join or host a Thinking Matters cohort</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
