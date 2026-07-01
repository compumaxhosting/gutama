import {
  Award,
  DollarSign,
  Home,
  Shield,
  Sun,
} from "lucide-react";

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    desc: "Re-roofing often costs less than a complete roof replacement when the underlying roof structure remains in good condition.",
  },
  {
    icon: Shield,
    title: "Improved Protection",
    desc: "A new roofing layer helps defend against heavy rain, wind damage, snow accumulation, ice dams, and long-term weather exposure.",
  },
  {
    icon: Home,
    title: "Enhanced Curb Appeal",
    desc: "Updated roofing materials instantly improve the appearance of your home while increasing overall property value.",
  },
  {
    icon: Sun,
    title: "Increased Energy Efficiency",
    desc: "Modern roofing systems can improve insulation performance and help regulate indoor temperatures throughout the year.",
  },
  {
    icon: Award,
    title: "Extended Roof Lifespan",
    desc: "Professionally installed re-roofing systems add years of protection and performance while delaying the need for full replacement.",
  },
] as const;

export function ReRoofingBenefitsSection() {
  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Why Homeowners Choose Re-Roofing
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Benefits of
            <em className="ml-2 text-secondary">Re-Roofing</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-card border border-border/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                <benefit.icon
                  size={18}
                  className="text-secondary"
                />
              </div>

              <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
                {benefit.title}
              </h3>

              <p className="text-sm leading-loose text-muted-foreground">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}