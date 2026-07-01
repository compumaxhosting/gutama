export function WhatIsSidingSection() {
  const materials = [
    "Vinyl Siding",
    "Fiber Cement Siding",
    "Wood Siding",
    "Aluminum Siding",
    "Engineered Wood Siding",
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Understanding Siding
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-snug text-foreground">
              What Is
              <br />
              <em className="text-secondary">Home Siding?</em>
            </h2>

            <div className="mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-5 text-base leading-loose text-muted-foreground">
              Home siding is the outer protective layer of a building&apos;s exterior
              walls. It acts as a barrier against rain, wind, snow, heat, and
              moisture while helping improve energy efficiency and overall
              aesthetics.
            </p>

            <p className="text-base leading-loose text-muted-foreground">
              The right siding system protects your property from weather
              exposure, reduces maintenance needs, and enhances curb appeal for
              years to come.
            </p>
          </div>

          <div className="border border-border/40 bg-card p-10">
            <h3 className="mb-8 font-serif text-2xl text-foreground">
              Common Siding Materials
            </h3>

            <div className="grid gap-4">
              {materials.map((material) => (
                <div
                  key={material}
                  className="flex items-center gap-4 border-b border-border/30 pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-px w-6 shrink-0 bg-secondary" />
                  <span className="text-sm tracking-wide text-foreground/80">
                    {material}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border/40 pt-6">
              <p className="text-sm leading-loose text-muted-foreground">
                Each siding material offers different levels of durability,
                maintenance requirements, appearance, and long-term value,
                allowing homeowners to choose the best option for their
                property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}