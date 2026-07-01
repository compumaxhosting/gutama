export function EmergencyRepairDefinitionSection() {
  const emergencies = [
    "Active roof leaks",
    "Storm damage",
    "Missing shingles",
    "Fallen tree damage",
    "Wind damage",
    "Flashing failures",
    "Roof punctures",
    "Structural roof damage",
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Emergency Roofing
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
              What Is
              <br />
              <em className="text-secondary">Emergency Roof Repair?</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="text-base leading-loose text-muted-foreground">
              Emergency roof repair involves urgent roofing services designed
              to stop active leaks, secure damaged roofing materials, and
              protect a property from additional water intrusion or structural
              damage.
            </p>

            <p className="mt-8 text-base leading-loose text-muted-foreground">
              Prompt repairs can help reduce costly interior damage and
              preserve the integrity of your roofing system.
            </p>
          </div>

          <div className="border border-border/40 bg-card p-8 md:p-10">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-secondary">
              Emergency Roofing Situations Often Include
            </p>

            <div className="grid gap-4">
              {emergencies.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-border/30 pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}