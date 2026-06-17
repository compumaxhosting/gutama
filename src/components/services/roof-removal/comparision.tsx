export function RoofRemovalVsOverlaySection() {
  const roofRemovalBenefits = [
    "Allows full roof deck inspection",
    "Identifies hidden structural issues",
    "Provides a stronger roofing foundation",
    "Improves roof lifespan",
    "Reduces future repair costs",
    "Meets many roofing manufacturer warranty requirements",
  ];

  const roofOverlayBenefits = [
    "Lower upfront cost",
    "Faster installation process",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
          Roof Removal vs. Roof Overlay:
          <br />
          <em className="text-secondary">Which Is Better?</em>
        </h2>

        <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

        <div className="max-w-5xl">
          <p className="text-base leading-loose text-muted-foreground">
            Many property owners wonder whether they should remove their
            existing roof or install a new layer of shingles over it.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-border bg-card p-8 md:p-10">
            <h3 className="mb-6 font-serif text-3xl text-foreground">
              Roof Removal Benefits
            </h3>

            <ul className="space-y-4">
              {roofRemovalBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-border bg-card p-8 md:p-10">
            <h3 className="mb-6 font-serif text-3xl text-foreground">
              Roof Overlay Benefits
            </h3>

            <ul className="space-y-4">
              {roofOverlayBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-5xl">
          <p className="text-base leading-loose text-muted-foreground">
            While overlays may save money initially, roof removal often
            provides better long-term value and performance.
          </p>
        </div>
      </div>
    </section>
  );
}
