export function EmergencyRepairTypesSection() {
  const services = [
    {
      title: "Leak Emergency Repair",
      desc: "Fast sealing of active roof leaks to stop water intrusion.",
    },
    {
      title: "Storm Damage Repair",
      desc: "Repair of wind, hail, and debris-related roofing damage.",
    },
    {
      title: "Tarping & Temporary Protection",
      desc: "Installation of protective tarps to prevent further water damage.",
    },
    {
      title: "Structural Stabilization",
      desc: "Reinforcement of weakened roof sections for safety.",
    },
    {
      title: "Flashing & Shingle Repair",
      desc: "Repair of missing shingles and damaged roof flashing systems.",
    },
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Emergency Roofing Solutions
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Types of Emergency
            <br />
            <em className="text-secondary">Roof Repairs We Provide</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border/40 bg-card p-8 transition-all duration-300 hover:border-secondary/30"
            >
              <div className="mb-5 h-px w-10 bg-secondary" />

              <h3 className="mb-4 font-serif text-2xl text-foreground">
                {service.title}
              </h3>

              <p className="text-sm leading-loose text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}