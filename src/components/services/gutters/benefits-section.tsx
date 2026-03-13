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

export function GuttersBenefitsSection() {
  const content: Array<{ icon: keyof typeof ICON_MAP; title: string; desc: string }> = [
        { icon: "ruler", title: "Accurate Pitch & Sizing", desc: "Every run is laid out to move water efficiently without overflow or standing water." },
        { icon: "shield", title: "Foundation Protection", desc: "Proper downspout routing helps keep runoff away from foundation walls, walks, and planted areas." },
        { icon: "award", title: "Clean Exterior Finish", desc: "Seamless systems with tidy fastening and alignment improve both function and appearance." },
        { icon: "clock", title: "Efficient Installation", desc: "Most gutter scopes can be completed quickly with minimal disruption to daily routines." },
        { icon: "users", title: "Repair or Replace Guidance", desc: "We help you decide whether targeted repair is enough or a new system makes more sense." },
        { icon: "home", title: "Roof Edge Integration", desc: "We consider fascia condition, drip edge, and roof runoff behavior as part of the complete system." },
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
