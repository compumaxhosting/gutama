import { Award, Clock, Home, Ruler, Shield, Users } from "lucide-react";

const BENEFITS = [
  {
    icon: Shield,
    title: "Local Permitting Expertise",
    desc: "We handle Essex County building codes and municipality-specific zoning requirements from start to finish.",
  },
  {
    icon: Home,
    title: "Seamless Integration",
    desc: "Room additions are designed to blend with your existing roofline, siding, and architectural character.",
  },
  {
    icon: Users,
    title: "All-In-One Solution",
    desc: "As a full-service home addition contractor, we manage design, framing, exterior work, and final finishes.",
  },
  {
    icon: Award,
    title: "Enhanced Value",
    desc: "Expert-grade house extensions increase square footage, comfort, and long-term property ROI.",
  },
  {
    icon: Ruler,
    title: "Durable Materials",
    desc: "We prioritize weather-resistant materials suitable for New Jersey conditions and long-term performance.",
  },
  {
    icon: Clock,
    title: "Transparent Timeline",
    desc: "From permits to final walkthrough, your project follows a clear schedule with regular milestone updates.",
  },
] as const;

export function AdditionsBenefitsSection() {
  return (
    <section className="bg-muted/20 py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Why Clients Choose Us
            </p>
            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
              The <em className="text-secondary">Difference</em> You&apos;ll Notice
            </h2>
          </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title}>
              <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                  <b.icon size={18} className="text-secondary" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-loose">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
