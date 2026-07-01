export function EmergencyRepairPropertyTypesSection() {
  const residential = [
    "Single-family homes",
    "Townhouses",
    "Apartments",
    "Older residential buildings",
  ];

  const residentialIssues = [
    "Roof leaks",
    "Storm damage",
    "Ceiling water intrusion",
    "Missing shingles",
  ];

  const commercial = [
    "Office buildings",
    "Retail stores",
    "Warehouses",
    "Apartment complexes",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Residential & Commercial
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Emergency Roof Repair for
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
              Residential Emergency Roof Repair
            </h3>

            <p className="mb-6 text-sm leading-loose text-muted-foreground">
              We provide emergency roofing services for residential properties
              throughout Essex County, NJ.
            </p>

            <div className="mb-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-secondary">
                Property Types
              </p>

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
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-secondary">
                Common Residential Emergencies
              </p>

              <div className="space-y-3">
                {residentialIssues.map((item) => (
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
              Commercial Emergency Roof Repair
            </h3>

            <p className="mb-6 text-sm leading-loose text-muted-foreground">
              We also serve commercial properties and provide rapid-response
              roofing solutions that help reduce disruption and protect
              operations.
            </p>

            <div className="space-y-3">
              {commercial.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-border pt-6 text-sm leading-loose text-muted-foreground">
              We minimize downtime while ensuring building safety and
              compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}