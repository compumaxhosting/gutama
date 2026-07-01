export function FlatRoofReplacementSection() {
  const signs = [
    "Frequent leaks",
    "Extensive membrane damage",
    "Structural moisture issues",
    "Aging roofing system",
    "Recurring repair costs",
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Roof Replacement
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] text-foreground">
            Flat Roof Replacement
            <br />
            <em className="text-secondary">Newark NJ</em>
          </h2>

          <div className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
            When repairs are no longer cost-effective, a complete flat roof
            replacement may be the best solution.
          </p>
        </div>

        <div className="mt-12 border border-border/40 bg-card p-8 md:p-12">
          <h3 className="mb-8 font-serif text-2xl text-foreground">
            Signs You Need Flat Roof Replacement
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {signs.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-border/30 pb-4 last:border-0"
              >
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-sm text-foreground/85">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm leading-loose text-muted-foreground">
              A professional inspection can determine whether repair or
              replacement is the better long-term investment for your property,
              helping you avoid ongoing maintenance costs and unexpected roofing
              failures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}