export function DormersFunctionsSection() {
  const functions = [
    "Adds usable living space or storage",
    "Increases natural light through windows",
    "Improves attic airflow and ventilation",
    "Enhances roof structure and exterior design",
    "Increases overall home value",
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Understanding Dormers
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            What Does a
            <br />
            <em className="text-secondary">Dormer Do?</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mx-auto max-w-4xl text-base leading-loose text-muted-foreground">
            A dormer increases both living space and structural usability by
            extending upward from a sloped roof.
          </p>
        </div>

        <div className="border border-border/40 bg-card p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-2xl text-foreground">
            Key Functions of a Dormer
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {functions.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border border-border/40 bg-background p-4"
              >
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-sm leading-relaxed text-foreground/80">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
            Dormers are commonly used in attic conversions and home expansion
            projects across New Jersey.
          </p>
        </div>
      </div>
    </section>
  );
}