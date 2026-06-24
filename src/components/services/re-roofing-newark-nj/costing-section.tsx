export function ReRoofingCostSection() {
  const factors = [
    "Roof size",
    "Roofing material",
    "Number of existing layers",
    "Roof pitch",
    "Accessibility",
    "Required repairs",
  ];

  const pricing = [
    {
      property: "Small Home",
      cost: "$4,000 - $8,000",
    },
    {
      property: "Medium Home",
      cost: "$8,000 - $15,000",
    },
    {
      property: "Large Home",
      cost: "$15,000 - $25,000+",
    },
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Pricing Guide
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            How Much Does
            <br />
            <em className="text-secondary">Re-Roofing Cost?</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Cost Factors */}
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-secondary">
              Cost Factors
            </p>

            <h3 className="mb-6 font-serif text-3xl text-foreground">
              What Affects Pricing?
            </h3>

            <p className="mb-8 text-sm leading-loose text-muted-foreground">
              The cost of re-roofing in Newark, NJ depends on several factors
              that influence labor requirements, material quantities, and
              overall project complexity.
            </p>

            <div className="space-y-4">
              {factors.map((factor) => (
                <div key={factor} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/85">
                    {factor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-secondary">
              Average Costs
            </p>

            <h3 className="mb-6 font-serif text-3xl text-foreground">
              Newark Re-Roofing Estimates
            </h3>

            <div className="overflow-hidden border border-border/40">
              <div className="grid grid-cols-2 border-b border-border/40 bg-secondary/5">
                <div className="p-4 text-sm font-medium text-foreground">
                  Property Type
                </div>
                <div className="p-4 text-sm font-medium text-foreground">
                  Estimated Cost Range
                </div>
              </div>

              {pricing.map((item) => (
                <div
                  key={item.property}
                  className="grid grid-cols-2 border-b border-border/40 last:border-0"
                >
                  <div className="p-4 text-sm text-foreground">
                    {item.property}
                  </div>

                  <div className="p-4 text-sm text-secondary font-medium">
                    {item.cost}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-loose text-muted-foreground">
              Costs vary based on project complexity, material selection, and
              structural conditions discovered during inspection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}