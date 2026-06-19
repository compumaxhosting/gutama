export function DormersServicesSection() {
  const services = [
    "New dormer construction",
    "Roof dormer additions",
    "Dormer remodeling and expansion",
    "Structural reinforcement and framing",
    "Dormer leak repair and waterproofing",
    "Dormer window installation",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Our Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-snug text-foreground">
            Dormer Installation
            <br />
            <em className="text-secondary">Services We Provide</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            At Gutama Home Improvement, we specialize in professional dormer
            construction, expansion, repair, and structural improvement
            services throughout Essex County, NJ.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="border border-border/40 bg-card p-8 transition-all duration-300 hover:border-secondary/40"
            >
              <div className="mb-5 h-px w-10 bg-secondary" />

              <h3 className="font-serif text-xl leading-snug text-foreground">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}