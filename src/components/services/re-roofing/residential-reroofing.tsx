export function ResidentialReRoofingSection() {
  const properties = [
    "Single-family homes",
    "Townhomes",
    "Multi-family properties",
    "Custom homes",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Residential Roofing
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Residential
            <br />
            <em className="text-secondary">Re-Roofing Services</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            Our residential re-roofing services help homeowners protect their
            investment and maintain the beauty of their property.
          </p>
        </div>

        <div className="mt-12 border border-border bg-card p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-3xl text-foreground">
            We Work On:
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            {properties.map((property) => (
              <div key={property} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-muted-foreground">{property}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
            Whether you need a complete roof replacement or a re-roofing
            upgrade, our team can help.
          </p>
        </div>
      </div>
    </section>
  );
}
