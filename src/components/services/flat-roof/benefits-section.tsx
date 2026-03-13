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

export function FlatRoofBenefitsSection() {
  const content: Array<{ icon: keyof typeof ICON_MAP; title: string; desc: string }> = [
        { icon: "shield", title: "Leak-Resistant Detailing", desc: "Transitions, penetrations, seams, and edge conditions are handled with waterproofing discipline." },
        { icon: "ruler", title: "Drainage Precision", desc: "We plan slope, crickets, drains, and edges to reduce ponding and extend roof life." },
        { icon: "award", title: "System-Specific Expertise", desc: "Different membranes perform differently, and we tailor installation to the exact roof system selected." },
        { icon: "clock", title: "Minimal Disruption", desc: "Work is sequenced efficiently to reduce downtime for occupied residential and commercial properties." },
        { icon: "users", title: "Clear Scope & Options", desc: "We explain repair versus replacement recommendations and the benefits of each membrane type." },
        { icon: "home", title: "Long-Term Performance", desc: "The full assembly is built for durability, weather resistance, and easier future maintenance." },
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
