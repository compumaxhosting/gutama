import {
  Clock,
  Shield,
  Search,
  HardHat,
  Wrench,
} from "lucide-react";

export function EmergencyRepairWhyChooseSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Response Times",
      desc: "Rapid emergency response helps minimize damage and protect your property from further exposure.",
    },
    {
      icon: Search,
      title: "Proper Leak Detection",
      desc: "Accurate inspections identify the source of water intrusion and underlying roofing issues.",
    },
    {
      icon: HardHat,
      title: "Safe Structural Handling",
      desc: "Damaged roofing systems are stabilized and handled using proper safety procedures.",
    },
    {
      icon: Shield,
      title: "Effective Temporary Protection",
      desc: "Emergency tarping and temporary repairs help prevent additional water damage.",
    },
    {
      icon: Wrench,
      title: "Long-Term Repair Solutions",
      desc: "Permanent repair recommendations help restore roof performance and durability.",
    },
  ];

  return (
    <section className="bg-muted/20 py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Professional Emergency Roofing
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Why Choose Professional
            <br />
            <em className="text-secondary">Emergency Roof Contractors?</em>
          </h2>

          <div className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
            Emergency roofing requires speed, safety, and technical expertise.
            Professional service ensures reliable protection during urgent
            roofing situations and helps prevent further property damage.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="glass-card border border-border/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
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

        <div className="mt-12 border border-border/40 bg-card p-8 text-center">
          <p className="text-base leading-loose text-muted-foreground">
            At Gutama Home Improvement, we provide emergency roofing solutions
            built for New Jersey&apos;s extreme weather conditions including
            storms, heavy rain, and wind damage.
          </p>
        </div>
      </div>
    </section>
  );
}