export function SidingHowItWorksSection() {
  const functions = [
    "Exterior wall is covered with siding panels",
    "Underlayment protects against moisture",
    "Insulation layer improves energy efficiency",
    "Siding blocks weather exposure and UV damage",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Protection System
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-snug text-foreground">
              How
              <br />
              <em className="text-secondary">Siding Works</em>
            </h2>

            <div className="mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-5 text-base leading-loose text-muted-foreground">
              Siding works as a protective envelope around your home or
              building. It shields exterior walls from moisture, wind, UV
              exposure, and seasonal weather conditions while helping improve
              insulation and overall energy performance.
            </p>

            <p className="text-base leading-loose text-muted-foreground">
              A properly installed siding system creates multiple layers of
              protection that work together to keep the structure dry,
              comfortable, and protected year-round.
            </p>
          </div>

          <div className="border border-border/40 bg-card p-10">
            <h3 className="mb-8 font-serif text-2xl text-foreground">
              Basic Function
            </h3>

            <div className="space-y-5">
              {functions.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-border/30 pb-5 last:border-0 last:pb-0"
                >
                  <span className="font-serif text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-loose text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border/40 pt-6">
              <p className="text-sm leading-loose text-muted-foreground">
                If siding becomes damaged, water can enter the structure and
                cause mold growth, wood rot, insulation failure, and costly
                structural damage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}