export function SidingSignsSection() {
  const signs = [
    "Cracked, warped, or loose siding panels",
    "Water stains inside walls",
    "Mold or mildew growth",
    "Faded or peeling exterior paint",
    "Increased energy bills",
    "Gaps or holes in siding",
    "Pest or insect entry points",
    "Rotting wood behind panels",
    "Storm or wind damage",
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Signs You Need
            <br />
            <em className="text-secondary">
              Siding Repair or Replacement
            </em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign) => (
            <div
              key={sign}
              className="border border-border/40 bg-card p-6 transition-all duration-300 hover:border-secondary/40"
            >
              <div className="mb-4 h-px w-8 bg-secondary" />

              <p className="text-sm leading-loose text-muted-foreground">
                {sign}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl border-t border-border/40 pt-8 text-center">
          <p className="text-base leading-loose text-muted-foreground">
            Early siding repairs help prevent moisture intrusion, structural
            deterioration, insulation damage, and costly replacement projects.
            A professional inspection can identify problems before they become
            major issues.
          </p>
        </div>
      </div>
    </section>
  );
}