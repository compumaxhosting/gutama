export function CarpentrySignsSection() {
  const signs = [
    "Cracked or rotting wood",
    "Sagging floors or decks",
    "Damaged trim or molding",
    "Loose door or window frames",
    "Water-damaged wood structures",
    "Pest-damaged wood",
    "Structural instability in wooden areas",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Signs You Need
            <br />
            <em className="text-secondary">Carpentry Services</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            Wood structures naturally experience wear over time due to moisture,
            weather exposure, aging, and pests. Identifying problems early can
            help prevent expensive repairs and maintain the safety and integrity
            of your property.
          </p>
        </div>

        <div className="border border-border/40 bg-card p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-2xl text-foreground">
            Common Warning Signs
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {signs.map((sign) => (
              <div
                key={sign}
                className="flex items-center gap-3 border-b border-border/30 pb-4"
              >
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-sm text-foreground/80">{sign}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
            Early repair and professional evaluation can prevent costly
            structural damage, improve safety, and extend the lifespan of your
            home&apos;s wood components.
          </p>
        </div>
      </div>
    </section>
  );
}