export function RoofRemovalMaterialTypesSection() {
  const flatRoofSystems = [
    "EPDM roofing",
    "TPO roofing",
    "Modified bitumen roofing",
    "Built-up roofing systems",
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Roofing Systems
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Specialized Roof Removal &
            <br />
            <em className="text-secondary">Replacement Services</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
            Different roofing systems require different removal techniques,
            disposal methods, and replacement strategies. Our team provides
            professional solutions for both traditional shingle roofs and
            modern flat roofing systems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Asphalt Shingles */}
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-secondary">
              Residential Roofing
            </p>

            <h3 className="mb-6 font-serif text-3xl text-foreground">
              Asphalt Shingle Removal
              <br />
              <em className="text-secondary text-2xl not-italic">
                Newark NJ
              </em>
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              Asphalt shingles eventually deteriorate due to New Jersey&apos;s
              harsh weather conditions, including heavy rain, snow, ice,
              humidity, and high winds. Our Asphalt Shingle Removal Newark NJ
              service safely removes damaged roofing materials and prepares your
              roof for a durable, long-lasting replacement system.
            </p>
          </div>

          {/* Flat Roofs */}
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-secondary">
              Flat Roofing Systems
            </p>

            <h3 className="mb-6 font-serif text-3xl text-foreground">
              Flat Roof Replacement
              <br />
              <em className="text-secondary text-2xl not-italic">
                Newark NJ
              </em>
            </h3>

            <p className="mb-6 text-sm leading-loose text-muted-foreground">
              Flat roofing systems require specialized installation methods,
              drainage planning, and waterproofing solutions. We replace a wide
              variety of commercial and residential flat roofing systems.
            </p>

            <div className="space-y-3">
              {flatRoofSystems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm leading-loose text-muted-foreground">
                Our roofing experts recommend the most appropriate replacement
                system based on your property&apos;s needs, budget, and long-term
                performance goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}