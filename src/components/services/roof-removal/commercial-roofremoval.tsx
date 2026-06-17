
export function CommercialRoofRemovalSection() {
  const properties = [
    "Office buildings",
    "Retail centers",
    "Warehouses",
    "Apartment complexes",
    "Industrial facilities",
    "Mixed-use properties",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Commercial Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Commercial
            <br />
            <em className="text-secondary">Roof Removal Services</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            We also provide roof removal services for commercial properties
            throughout Essex County.
          </p>
        </div>

        <div className="mt-12 border border-border bg-card p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-3xl text-foreground">
            Our Commercial Roofing Services Are Available For:
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <div key={property} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-muted-foreground">{property}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base leading-loose text-muted-foreground">
            We work efficiently to minimize disruptions while maintaining
            strict safety standards throughout every phase of the project.
          </p>
        </div>
      </div>
    </section>
  );
}
