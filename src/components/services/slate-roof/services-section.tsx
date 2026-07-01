export function SlateRoofServicesSection() {
  const residentialServices = [
    "New slate roof installation",
    "Slate roof replacement",
    "Leak detection and repair",
    "Preventive maintenance",
  ];

  const commercialServices = [
    "Flat-to-slate conversions",
    "Large-scale roof installations",
    "Structural roofing upgrades",
    "Long-term maintenance plans",
  ];

  const serviceAreas = [
    "Newark",
    "East Orange",
    "Irvington",
    "Bloomfield",
    "West Orange",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Our Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Our Slate Roofing Services in
            <em className="text-secondary"> Essex County, NJ</em>
          </h2>

          <div className="h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Residential */}
          <div className="border border-border/40 bg-card p-10">
            <h3 className="mb-6 font-serif text-2xl text-foreground">
              Residential Slate Roofing
            </h3>

            <div className="flex flex-col gap-4">
              {residentialServices.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial */}
          <div className="border border-border/40 bg-card p-10">
            <h3 className="mb-6 font-serif text-2xl text-foreground">
              Commercial Slate Roofing
            </h3>

            <div className="flex flex-col gap-4">
              {commercialServices.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 border border-border/40 bg-card p-10">
          <h3 className="mb-6 font-serif text-2xl text-foreground">
            Areas We Serve
          </h3>

          <p className="mb-8 text-muted-foreground">
            We proudly provide slate roofing services throughout Essex County,
            including:
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-muted-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}