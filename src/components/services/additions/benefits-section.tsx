import { Award, Clock, Home, Ruler, Shield, Users } from "lucide-react";

const BENEFITS = [
  {
    icon: Ruler,
    title: "Seamless Integration",
    desc: "Every addition is architecturally matched to your existing structure - materials, pitch, trim, and profile.",
  },
  {
    icon: Shield,
    title: "Fully Permitted & Compliant",
    desc: "We handle all municipal permits and code compliance so your project is protected and insurable.",
  },
  {
    icon: Award,
    title: "Master Craftsmanship",
    desc: "Our crews bring decades of residential addition experience to every beam, wall, and finish detail.",
  },
  {
    icon: Clock,
    title: "Milestone-Based Schedule",
    desc: "A clear project timeline with defined milestones keeps your build on track and on budget.",
  },
  {
    icon: Users,
    title: "Dedicated Project Manager",
    desc: "One point of contact from permit to punch-list. No runarounds, no confusion.",
  },
  {
    icon: Home,
    title: "Long-Term Value",
    desc: "Thoughtfully designed additions consistently deliver the highest ROI of any home improvement.",
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
