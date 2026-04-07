import {
  Award,
  Clock,
  Home,
  Ruler,
  Shield,
  Users,
} from "lucide-react";

const ICON_MAP = {
  award: Award,
  clock: Clock,
  home: Home,
  ruler: Ruler,
  shield: Shield,
  users: Users,
} as const;

export function ChimneyBenefitsSection() {
  const content: Array<{ icon: keyof typeof ICON_MAP; title: string; desc: string }> = [
        { icon: "clock", title: "Same-Day Inspections", desc: "Rapid chimney safety checks across Livingston, West Orange, and nearby Essex County towns." },
        { icon: "ruler", title: "Affordable Repairs", desc: "Budget-friendly masonry restoration, liner fixes, and targeted repair scopes that solve root issues." },
        { icon: "award", title: "Certified Sweeps", desc: "Professional chimney cleaning helps remove creosote and reduce the risk of chimney fires." },
        { icon: "shield", title: "Code-Focused Safety", desc: "Inspections and repairs are performed with local compliance and long-term fire safety in mind." },
        { icon: "users", title: "Local Service Team", desc: "Trusted by homeowners in Newark, East Orange, Bloomfield, Irvington, and surrounding areas." },
        { icon: "home", title: "All-in-One Care", desc: "From maintenance and cleanings to restoration and emergency response, we cover complete chimney care." },
      ];

  return (
    <section className="bg-muted/20 py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Why Clients Choose Us</p>
          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">The <em className="text-secondary">Difference</em> You&apos;ll Notice</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {content.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon];
            return (
              <div key={benefit.title} className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                  <Icon size={18} className="text-secondary" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-loose">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
