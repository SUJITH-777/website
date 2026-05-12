import { Card, CardContent } from "@/components/ui/card";
import tvgPhoto from "@/assets/team/tvg-krishnamurthy.webp";
import ektaPhoto from "@/assets/team/ekta-tibrewal.avif";
import vijayPhoto from "@/assets/team/vijay-sharma.jpg";
import saitejaPhoto from "@/assets/team/saiteja-veera.jpeg";
import neerajPhoto from "@/assets/team/neeraj-sagar.jpg";
import akshayPhoto from "@/assets/team/akshay-saxena.webp";
import tristhaPhoto from "@/assets/team/tristha-ramamurthy.jpg";
import santoshPhoto from "@/assets/team/santosh-more.webp";
import divyaPhoto from "@/assets/team/divya-kannan.jpg";

type LeadershipProfile = {
  name: string;
  role: string;
  photo: string;
  /** CSS object-position value tuned to each headshot's framing. */
  photoPosition?: string;
  paragraphs: string[];
};

type AdvisorProfile = {
  name: string;
  role: string;
  photo: string;
  /** CSS object-position value tuned to each headshot's framing. */
  photoPosition?: string;
  bio: string;
};

const founder: LeadershipProfile = {
  name: "TVG Krishnamurthy",
  role: "Founder",
  photo: tvgPhoto,
  photoPosition: "center top",
  paragraphs: [
    `TVG Krishnamurthy has spent over four decades at the board level — working with MNCs and domestic businesses, and mentoring some of India's most recognised companies including Indegene, Ola, and Practo.`,
    `But what has always driven him isn't business. It's curiosity. Why do things need to be the way they are? How can they be rearranged to create something that actually matters?`,
    `That same curiosity led him to a lifelong interest in how people learn, how minds form beliefs, and what it truly means to think well. Swarn Aayu is the convergence of those two obsessions — decades of institution building, and a deep conviction that the most important thing AI can do is help people think better, not think for them.`,
    `He is an alumnus of IIM Ahmedabad.`,
  ],
};

const ceo: LeadershipProfile = {
  name: "Ekta Tibrewal",
  role: "Chief Executive Officer",
  photo: ektaPhoto,
  photoPosition: "center 15%",
  paragraphs: [
    `Ekta Tibrewal works at the intersection of AI and healthcare — as a builder, operator, and strategic advisor.`,
    `She came to Swarn Aayu through a career spent scaling things that matter. She founded a women's health company that grew into one of India's most engaged communities in that space, and raised funding from leading VCs across India and globally. Before that, she built and scaled digital businesses across some of India's most recognised consumer health brands.`,
    `Today her focus is on the populations most absent from how AI gets designed — seniors and children. At Swarn Aayu, she leads the foundation's vision, strategy, and growth, while also advising early-stage healthcare companies on some of the hardest problems in medicine.`,
    `She believes the most important AI work happening right now isn't the loudest. It's the work being done for the people the industry hasn't thought to build for yet.`,
  ],
};

const advisors: AdvisorProfile[] = [
  {
    name: "Vijay Sharma",
    role: "Mentor & Advisor",
    photo: vijayPhoto,
    photoPosition: "center top",
    bio: `Vijay is a serial entrepreneur and one of the early builders of India's talent technology space. A BITS Pilani alumnus, he co-founded and led one of India's pioneering AI-driven recruitment platforms, working closely with some of the country's most recognised consumer and healthcare startups. He brings deep experience in product thinking, early-stage company building, and the intersection of AI and human systems.`,
  },
  {
    name: "Saiteja Veera",
    role: "Chief Technology Officer",
    photo: saitejaPhoto,
    photoPosition: "center center",
    bio: `Saiteja is a BITS Pilani alumnus and founder of Gamyam Technologies. He has spent his career at the forefront of AI and technology-led ventures, with prior experience in building and scaling tech-first startups across India. At Swarn Aayu, he leads the technology architecture behind all three initiatives.`,
  },
  {
    name: "Neeraj Sagar",
    role: "Mentor & Advisor",
    photo: neerajPhoto,
    photoPosition: "center 30%",
    bio: `Neeraj spent fifteen years as a Senior Partner at Egon Zehnder before making a deliberate pivot at 50 — founding WisdomCircle, a platform dedicated to helping experienced professionals find relevance and purpose beyond retirement. His work is rooted in a simple conviction: the wisdom of older generations is one of India's most underutilised resources. He brings both lived experience and institutional credibility to Swarn Aayu's mission for seniors.`,
  },
  {
    name: "Akshay Saxena",
    role: "Advisor",
    photo: akshayPhoto,
    photoPosition: "center 20%",
    bio: `Akshay is the co-founder of Avanti Fellows and an Ashoka Fellow recognised globally for his work on equitable access to education. He has spent over a decade building systems that ensure children from underserved communities have the guidance and resources to reach their potential. He brings deep expertise in learning design, public school systems, and scaling impact in education to the Curiosity Coach initiative.`,
  },
  {
    name: "Dr. Tristha Ramamurthy",
    role: "Advisor",
    photo: tristhaPhoto,
    photoPosition: "center 25%",
    bio: `Dr. Tristha founded Ekya Schools in 2010, building it into one of Bangalore's most respected progressive school networks. A Stanford and King's College London alumna with a doctorate in education, she has spent her career rethinking how children learn — drawing on inquiry-based and design thinking approaches from institutions around the world. She advises Swarn Aayu on curriculum design, pedagogy, and the learning science behind Curiosity Coach.`,
  },
  {
    name: "Santosh More",
    role: "Advisor & Education Project Partner",
    photo: santoshPhoto,
    photoPosition: "center center",
    bio: `Santosh is the co-founder of Mantra4Change, a Bangalore-based nonprofit that has worked with state governments across India to transform how public schools teach and lead. A Teach For India alumnus and Schwab Fellow, his work sits at the intersection of systemic reform and grassroots school change — impacting millions of children across tens of thousands of schools. He brings that systems-level lens to Swarn Aayu's education work.`,
  },
  {
    name: "Dr. Divya Kannan",
    role: "Psychology Advisor",
    photo: divyaPhoto,
    photoPosition: "center center",
    bio: `Dr. Divya Kannan holds a PhD from the University of Memphis and spent years as a Licensed Clinical Psychologist and faculty member at Vanderbilt University Medical Center, where she specialised in trauma, PTSD, and psychotherapy outcomes research. Now based in Bangalore, she brings rigorous clinical grounding to the psychological design of Aayu — ensuring the AI's approach to emotional wellbeing, conversation, and care is rooted in evidence, not intuition.`,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="scroll-mt-32 brand-section bg-card" aria-labelledby="team-heading">
      <div className="brand-page">
        <span className="brand-label">People</span>
        <h2 id="team-heading" className="brand-heading max-w-3xl">
          Team &amp; <em>advisors</em>
        </h2>
        <p className="brand-body mb-12 md:mb-14 max-w-2xl">
          Leadership and advisors united around one mission: AI that gives people back their agency.
        </p>

        <div className="max-w-4xl space-y-0.5 mb-14 md:mb-16">
          <Card className="rounded-sm border-border/80 bg-background shadow-none">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <img
                  src={founder.photo}
                  alt={founder.name}
                  loading="lazy"
                  style={{ objectPosition: founder.photoPosition ?? "center top" }}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-sm object-cover shrink-0 border border-border/60"
                />
                <div className="space-y-4 min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[color:var(--hero-kicker)]">
                    {founder.role}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                    {founder.name}
                  </h3>
                  {founder.paragraphs.map((text, i) => (
                    <p key={`founder-${i}`} className="text-sm text-muted-foreground leading-[1.78]">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-sm border-border/80 bg-background shadow-none">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <img
                  src={ceo.photo}
                  alt={ceo.name}
                  loading="lazy"
                  style={{ objectPosition: ceo.photoPosition ?? "center top" }}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-sm object-cover shrink-0 border border-border/60"
                />
                <div className="space-y-4 min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[color:var(--hero-kicker)]">
                    {ceo.role}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                    {ceo.name}
                  </h3>
                  {ceo.paragraphs.map((text, i) => (
                    <p key={`ceo-${i}`} className="text-sm text-muted-foreground leading-[1.78]">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[color:var(--hero-kicker)] mb-6">
          Advisors
        </p>
        <div className="grid md:grid-cols-2 gap-0.5 max-w-5xl">
          {advisors.map((member) => (
            <Card key={member.name} className="rounded-sm border-border/80 bg-background shadow-none">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    style={{ objectPosition: member.photoPosition ?? "center top" }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shrink-0 border border-border/60"
                  />
                  <div className="min-w-0 pt-1">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-2">
                      {member.role}
                    </p>
                    <h4 className="font-serif text-lg font-semibold text-foreground">{member.name}</h4>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection