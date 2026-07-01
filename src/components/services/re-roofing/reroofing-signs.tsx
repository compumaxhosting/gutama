export function ReRoofingSignsSection() {
  const signs = [
    "Frequent roof leaks",
    "Missing or damaged shingles",
    "Curling or cracked shingles",
    "Water stains on ceilings",
    "Sagging roof sections",
    "Excessive granule loss",
    "Mold or moisture issues",
    "Storm or wind damage",
    "Increasing energy bills",
    "Roof age exceeding 20 to 30 years",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Signs You May Need
            <br />
            <em className="text-secondary">Re-Roofing</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            Many roofing problems develop gradually. Recognizing the warning
            signs early can help prevent more expensive repairs.
          </p>
        </div>

        <div className="mt-12 border border-border bg-card p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-3xl text-foreground">
            Common Signs Include:
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {signs.map((sign) => (
              <div key={sign} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-muted-foreground">{sign}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
            If your roof is showing these symptoms, a professional inspection
            can determine whether re-roofing is the most cost-effective
            solution.
          </p>
        </div>
      </div>
    </section>
  );
}
