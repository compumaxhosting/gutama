export function SidingServicesSection() {
  const services = [
    {
      title: "Siding Installation Services",
      description:
        "We install new siding systems for homes and commercial buildings using durable, weather-resistant materials designed for long-term performance and curb appeal.",
    },
    {
      title: "Siding Repair Services",
      description:
        "Our team repairs common siding issues before they lead to larger structural problems.",
      items: [
        "Cracks and holes",
        "Loose panels",
        "Water-damaged sections",
        "Storm damage",
      ],
    },
    {
      title: "Siding Replacement Services",
      description:
        "We replace aging, worn, or damaged siding systems to restore protection, improve energy efficiency, and enhance the appearance of your property.",
    },
    {
      title: "Siding Maintenance",
      description:
        "Regular inspections and minor repairs help extend siding lifespan, maintain performance, and prevent costly future issues.",
    },
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Our Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Types of
            <br />
            <em className="text-secondary">Siding Services We Provide</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border/40 bg-card p-8 transition-all duration-300 hover:border-secondary/40"
            >
              <div className="mb-5 h-px w-10 bg-secondary" />

              <h3 className="mb-4 font-serif text-2xl text-foreground">
                {service.title}
              </h3>

              <p className="text-sm leading-loose text-muted-foreground">
                {service.description}
              </p>

              {"items" in service && service.items && (
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-px w-5 shrink-0 bg-secondary" />
                      <span className="text-sm text-foreground/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}