import {
  Award,
  Clock,
  Home,
  Shield,
  TrendingUp,
  Wrench,
} from "lucide-react";

const ICON_MAP = {
  shield: Shield,
  clock: Clock,
  trending: TrendingUp,
  award: Award,
  home: Home,
  wrench: Wrench,
} as const;

export function ReRoofingBenefitsSection() {
  const content: Array<{
    icon: keyof typeof ICON_MAP;
    title: string;
    desc: string;
  }> = [
    {
      icon: "shield",
      title: "Enhanced Property Protection",
      desc: "A new roofing system creates a stronger barrier against rain, snow, wind, and moisture intrusion.",
    },
    {
      icon: "clock",
      title: "Longer Roof Lifespan",
      desc: "Re-roofing can add decades of protection when high-quality materials and proper installation techniques are used.",
    },
    {
      icon: "trending",
      title: "Improved Energy Efficiency",
      desc: "Modern roofing materials and ventilation systems help regulate indoor temperatures and reduce energy consumption.",
    },
    {
      icon: "award",
      title: "Increased Home Value",
      desc: "A new roof is one of the most attractive upgrades for potential buyers and can improve resale value.",
    },
    {
      icon: "home",
      title: "Better Curb Appeal",
      desc: "Re-roofing dramatically improves the appearance of residential and commercial properties.",
    },
    {
      icon: "wrench",
      title: "Reduced Maintenance Costs",
      desc: "Replacing an aging roof often eliminates recurring repairs and unexpected maintenance expenses.",
    },
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Re-Roofing Benefits
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Benefits of
            <em className="text-secondary"> Re-Roofing</em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
            Investing in a professionally installed roofing system provides
            long-term protection, improved performance, and increased value for
            your property.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {content.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon];

            return (
              <div
                key={benefit.title}
                className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                  <Icon size={18} className="text-secondary" />
                </div>

                <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-loose text-muted-foreground">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
