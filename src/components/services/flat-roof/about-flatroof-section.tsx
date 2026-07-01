export function WhatIsFlatRoofSection() {
  const benefits = [
    "Cost-effective installation",
    "Energy efficiency",
    "Easy maintenance access",
    "Additional usable rooftop space",
    "Modern architectural appearance",
    "Long-term durability",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Flat Roofing Guide
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            What Is a
            <br />
            <em className="text-secondary">Flat Roof?</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            A flat roof is a low-slope roofing system commonly used on
            commercial buildings, apartment complexes, industrial facilities,
            and some residential properties. Although called &quot;flat,&quot; these roofs
            are designed with a slight slope to direct water toward drainage
            systems.
          </p>

          <p className="mt-6 text-base leading-loose text-muted-foreground">
            Flat roofing systems are valued for:
          </p>
        </div>

        <div className="mt-12 border border-border bg-card p-8 md:p-10 lg:p-12">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
            Flat roofs require specialized materials and professional
            installation to ensure proper waterproofing and drainage.
          </p>
        </div>
      </div>
    </section>
  );
}