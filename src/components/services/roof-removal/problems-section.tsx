
export function RoofRemovalProblemsSection() {
  const problems = [
    {
      title: "Damaged Roof Decking",
      description:
        "Water intrusion can weaken plywood and create unsafe conditions.",
    },
    {
      title: "Hidden Leaks",
      description:
        "Small leaks often go unnoticed until roofing materials are removed.",
    },
    {
      title: "Improper Ventilation",
      description:
        "Poor attic ventilation can contribute to moisture buildup, mold growth, and reduced roof lifespan.",
    },
    {
      title: "Flashing Failures",
      description:
        "Damaged flashing around chimneys, skylights, and roof penetrations can lead to water infiltration.",
    },
    {
      title: "Mold and Moisture Damage",
      description:
        "Long-term moisture exposure can affect both roofing materials and structural components.",
    },
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Roof Inspection Findings
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Common Problems Found During
            <br />
            <em className="text-secondary">Roof Removal</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            Many roofing issues remain hidden until the old roof is removed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="border border-border bg-card p-8 transition-all duration-300 hover:border-secondary/30"
            >
              <div className="mb-5 h-px w-10 bg-secondary" />

              <h3 className="mb-3 font-serif text-2xl text-foreground">
                {problem.title}
              </h3>

              <p className="leading-loose text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-5xl">
          <p className="text-base leading-loose text-muted-foreground">
            Addressing these problems during roof replacement helps prevent
            future issues and improves overall roof performance.
          </p>
        </div>
      </div>
    </section>
  );
}
