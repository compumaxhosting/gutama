export function CarpentryInfoSection() {
  const services = [
    "Structural framing",
    "Roof and wall framing",
    "Door and window installation",
    "Deck construction and repair",
    "Trim and molding work",
    "Wood repairs and replacements",
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Professional Carpentry
          </p>

          <h2 className="mb-6 font-serif text-[clamp(32px,4vw,52px)] leading-snug text-foreground">
            What Does a
            <br />
            <em className="text-secondary">Carpenter Do?</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mb-10 text-base leading-loose text-muted-foreground">
            A professional carpenter works with wood and structural materials to
            build, repair, and maintain parts of a building. Skilled carpentry
            is essential for both new construction projects and ongoing property
            maintenance.
          </p>

          <div className="border border-border/40 bg-card p-8 md:p-10">
            <h3 className="mb-6 font-serif text-2xl text-foreground">
              Common Carpentry Services
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/80">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}