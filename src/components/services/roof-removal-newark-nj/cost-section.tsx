export function RoofRemovalCostSection() {
  const pricingFactors = [
    {
      factor: "Roof Size",
      impact: "Larger roofs cost more",
    },
    {
      factor: "Roofing Materials",
      impact: "Premium materials increase costs",
    },
    {
      factor: "Existing Roofing Layers",
      impact: "Additional layers require more labor",
    },
    {
      factor: "Structural Damage",
      impact: "Repairs add to the total cost",
    },
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Pricing Information
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Roof Replacement Cost
            <br />
            <em className="text-secondary">Newark NJ</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
            How much does roof removal cost? The total investment depends on
            your roof size, roofing materials, existing roof conditions, and
            any structural repairs that may be required during the tear-off
            process.
          </p>
        </div>

        <div className="overflow-hidden border border-border/40 bg-card">
          <div className="grid grid-cols-2 border-b border-border/40 bg-secondary/5">
            <div className="p-5 font-medium text-foreground">
              Factor
            </div>

            <div className="p-5 font-medium text-foreground">
              Affects Price
            </div>
          </div>

          {pricingFactors.map((item) => (
            <div
              key={item.factor}
              className="grid grid-cols-2 border-b border-border/40 last:border-b-0"
            >
              <div className="p-5 text-sm text-foreground">
                {item.factor}
              </div>

              <div className="p-5 text-sm text-muted-foreground">
                {item.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-secondary/20 bg-secondary/5 p-8 text-center">
          <h3 className="mb-3 font-serif text-2xl text-foreground">
            Free Roof Replacement Estimate
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-loose text-muted-foreground">
            Contact us today for a free Roof Replacement Estimate in Newark NJ.
            Our team will inspect your roof, evaluate existing conditions, and
            provide an accurate recommendation based on your property&apos;s needs.
          </p>
        </div>
      </div>
    </section>
  );
}