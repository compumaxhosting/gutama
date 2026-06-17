export function FlatRoofResidentialCommercialSection() {
  const residentialProperties = [
    "Modern homes",
    "Townhomes",
    "Garages",
    "Home additions",
    "Multi-family properties",
  ];

  const commercialProperties = [
    "Office buildings",
    "Retail centers",
    "Warehouses",
    "Industrial facilities",
    "Apartment complexes",
    "Mixed-use developments",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Residential */}
          <div className="border border-border bg-card p-8 md:p-10 lg:p-12">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Residential Roofing
            </p>

            <h2 className="mb-6 font-serif text-[clamp(28px,3vw,42px)] leading-snug text-foreground">
              Residential
              <br />
              <em className="text-secondary">Flat Roof Services</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-8 text-base leading-loose text-muted-foreground">
              Our residential flat roofing services are ideal for:
            </p>

            <div className="space-y-4">
              {residentialProperties.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
              We provide complete installation, replacement, repair, and
              maintenance services.
            </p>
          </div>

          {/* Commercial */}
          <div className="border border-border bg-card p-8 md:p-10 lg:p-12">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Commercial Roofing
            </p>

            <h2 className="mb-6 font-serif text-[clamp(28px,3vw,42px)] leading-snug text-foreground">
              Commercial
              <br />
              <em className="text-secondary">Flat Roof Services</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-8 text-base leading-loose text-muted-foreground">
              We help businesses protect their investments with professional
              flat roofing solutions.
            </p>

            <div className="space-y-4">
              {commercialProperties.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
              Our team works efficiently to minimize disruption to your
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}