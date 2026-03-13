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

export function EmergencyRepairBenefitsSection() {
  const content: Array<{ icon: keyof typeof ICON_MAP; title: string; desc: string }> = [
        { icon: "clock", title: "Rapid Stabilization", desc: "We prioritize immediate protection to limit interior damage and prevent the problem from spreading." },
        { icon: "shield", title: "Protection First", desc: "Temporary coverings, securement, and controlled repair sequencing help keep the property safe while permanent work is planned." },
        { icon: "users", title: "Clear Communication", desc: "We explain what happened, what needs immediate attention, and what the long-term repair should include." },
        { icon: "award", title: "Permanent Repair Quality", desc: "Urgent work is completed with long-term performance in mind, not just a quick patch." },
        { icon: "home", title: "System-Wide Thinking", desc: "We evaluate roofing, flashing, siding, and structural conditions together to solve the actual failure point." },
        { icon: "ruler", title: "Documented Scope", desc: "You receive clear documentation of damage, protection work, and recommended repair steps." },
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
