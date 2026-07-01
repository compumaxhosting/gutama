export function AdditionsDecisionGuideSection() {
  const additionReasons = [
    "You like your current neighborhood",
    "You need more space but not a new house",
    "You want to increase property value",
  ];

  const movingReasons = [
    "Structural expansion is not feasible",
    "Major layout changes are required",
    "Budget exceeds renovation cost",
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Decision Guide
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Home Addition
            <br />
            <em className="text-secondary">vs Moving</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-border bg-card p-8 md:p-10">
            <div className="mb-6 h-px w-10 bg-secondary" />

            <h3 className="mb-6 font-serif text-2xl text-foreground">
              Choose a Home Addition If:
            </h3>

            <div className="space-y-4">
              {additionReasons.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-card p-8 md:p-10">
            <div className="mb-6 h-px w-10 bg-secondary" />

            <h3 className="mb-6 font-serif text-2xl text-foreground">
              Consider Moving If:
            </h3>

            <div className="space-y-4">
              {movingReasons.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}