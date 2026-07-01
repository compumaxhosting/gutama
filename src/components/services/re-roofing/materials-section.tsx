export function ReRoofingMaterialsSection() {
  const materials = [
    {
      title: "Asphalt Shingles",
      description:
        "The most popular roofing choice due to affordability, durability, and design flexibility.",
    },
    {
      title: "Architectural Shingles",
      description:
        "Premium shingles that offer enhanced durability and a more dimensional appearance.",
    },
    {
      title: "Metal Roofing",
      description:
        "Known for exceptional longevity, energy efficiency, and weather resistance.",
    },
    {
      title: "Flat Roofing Systems",
      description:
        "Ideal for commercial buildings and low-slope roofing applications.",
    },
    {
      title: "Energy-Efficient Roofing Systems",
      description:
        "Designed to help reduce heat absorption and improve overall building efficiency.",
    },
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Roofing Options
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Roofing Materials Available
            <br />
            <em className="text-secondary">for Re-Roofing</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            We offer a variety of roofing options to match your property's
            needs, performance requirements, and architectural style.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {materials.map((material) => (
            <div
              key={material.title}
              className="border border-border bg-card p-8 transition-all duration-300 hover:border-secondary/30"
            >
              <div className="mb-5 h-px w-10 bg-secondary" />

              <h3 className="mb-4 font-serif text-2xl text-foreground">
                {material.title}
              </h3>

              <p className="leading-loose text-muted-foreground">
                {material.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
