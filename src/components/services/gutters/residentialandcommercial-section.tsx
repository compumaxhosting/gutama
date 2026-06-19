export function GuttersPropertyTypesSection() {
  const residential = [
    "Single-family homes",
    "Townhouses",
    "Multi-family properties",
    "Older residential buildings",
  ];

  const residentialServices = [
    "Gutter installation",
    "Seasonal cleaning",
    "Leak repair",
    "Full system replacement",
  ];

  const commercial = [
    "Office buildings",
    "Retail centers",
    "Apartment complexes",
    "Industrial facilities",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Residential & Commercial
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Gutter Services for
            <br />
            <em className="text-secondary">Every Property Type</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Residential */}
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-foreground">
              Residential Gutter Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-muted-foreground">
              We provide complete gutter solutions for a wide range of
              residential properties throughout Essex County, NJ.
            </p>

            <div className="mb-8">
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-secondary">
                Property Types
              </h4>

              <div className="space-y-3">
                {residential.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-secondary" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-secondary">
                Common Services
              </h4>

              <div className="space-y-3">
                {residentialServices.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-secondary" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commercial */}
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-foreground">
              Commercial Gutter Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-muted-foreground">
              We also serve commercial and large-scale properties with drainage
              systems designed for high-capacity water management and long-term
              durability.
            </p>

            <div className="space-y-3">
              {commercial.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm leading-loose text-muted-foreground">
                Our systems are designed for high-capacity drainage and
                long-term durability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}