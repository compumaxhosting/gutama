export function FlatRoofAreasSection() {
  const areas = [
    "Newark NJ",
    "East Orange NJ",
    "Irvington NJ",
    "Bloomfield NJ",
    "Harrison NJ",
    "Kearny NJ",
    "Orange NJ",
    "Essex County NJ",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Service Coverage
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Areas We
            <br />
            <em className="text-secondary">Serve</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
            We proudly provide emergency roof repair services throughout Essex
            County and surrounding New Jersey communities.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area}
              className="border border-border/40 bg-card px-6 py-5 text-center transition-all duration-300 hover:border-secondary/30"
            >
              <span className="text-sm font-medium text-foreground">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}