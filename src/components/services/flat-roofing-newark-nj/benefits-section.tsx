export function FlatRoofBenefitsSection() {
  const roofUses = [
    "HVAC systems",
    "Solar panels",
    "Rooftop patios",
    "Green roofing systems",
    "Commercial equipment",
  ];

  const benefits = [
    {
      title: "Cost-Effective Installation",
      desc: "Flat roofs generally require fewer materials and less labor than steep-slope roofing systems.",
    },
    {
      title: "Easy Maintenance",
      desc: "Flat roofing systems allow easier access for inspections, repairs, HVAC maintenance, and rooftop equipment servicing.",
    },
    {
      title: "Energy Efficiency",
      desc: "Modern roofing membranes such as TPO roofing reflect sunlight and help reduce cooling costs during New Jersey summers.",
    },
    {
      title: "Long-Term Durability",
      desc: "Properly installed flat roofing systems can withstand New Jersey's changing weather conditions for decades.",
    },
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Why Property Owners Choose Flat Roofing
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Why Flat Roofing Is Popular
            <br />
            <em className="text-secondary">In Newark NJ</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            Property owners across Newark and Essex County choose flat roofing
            because of its affordability, versatility, and long lifespan.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="border border-border/40 bg-card p-8 md:p-10"
            >
              <div className="mb-5 h-px w-10 bg-secondary" />

              <h3 className="mb-4 font-serif text-2xl text-foreground">
                {benefit.title}
              </h3>

              <p className="text-sm leading-loose text-muted-foreground">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border border-border/40 bg-card p-8 md:p-10">
          <div className="mb-5 h-px w-10 bg-secondary" />

          <h3 className="mb-6 font-serif text-2xl text-foreground">
            Maximized Roof Space
          </h3>

          <p className="mb-6 text-sm leading-loose text-muted-foreground">
            Flat roofs can accommodate:
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {roofUses.map((item) => (
              <div
                key={item}
                className="border border-border/30 px-4 py-5 text-center"
              >
                <span className="text-sm text-foreground/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}