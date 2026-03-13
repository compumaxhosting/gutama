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

export function DormersBenefitsSection() {
  const content: Array<{ icon: keyof typeof ICON_MAP; title: string; desc: string }> = [
        { icon: "home", title: "Architectural Fit", desc: "We design dormers to match roof proportions, siding lines, trim details, and overall massing." },
        { icon: "shield", title: "Weather-Tight Integration", desc: "Flashing, roofing transitions, and exterior cladding are handled as part of one protected envelope." },
        { icon: "award", title: "Finish-Ready Craftsmanship", desc: "Framing, windows, trim, and siding are installed with a high standard of finish quality." },
        { icon: "clock", title: "Managed Build Sequence", desc: "Design, approvals, structural work, and exterior finishing are kept on a clear project schedule." },
        { icon: "users", title: "One Coordinated Team", desc: "You avoid fragmented trades by working with one team managing the entire dormer scope." },
        { icon: "ruler", title: "Functional Space Gain", desc: "The layout is planned to improve how the upper level actually works, not just how it looks." },
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
