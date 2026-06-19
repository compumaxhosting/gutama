export function CarpentryHowItWorksSection() {
  const steps = [
    "Property inspection and measurement",
    "Material selection (wood type and grade)",
    "Cutting and fabrication",
    "Structural installation or repair",
    "Finishing and alignment",
    "Final quality inspection",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Understanding The Process
          </p>

          <h2 className="mb-6 font-serif text-[clamp(32px,4vw,52px)] leading-snug text-foreground">
            How Carpentry
            <br />
            <em className="text-secondary">Services Work</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mb-10 text-base leading-loose text-muted-foreground">
            Carpentry involves designing, measuring, cutting, and installing
            wood structures based on building requirements. Professional
            carpentry ensures structural strength, safety, proper alignment,
            and long-term durability.
          </p>
        </div>

        <div className="border border-border/40 bg-card p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-2xl text-foreground">
            Basic Carpentry Process
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="border border-border/40 bg-muted/10 p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center border border-secondary/35 bg-secondary/5">
                  <span className="font-serif text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
            Proper carpentry ensures structural strength, safety, and
            long-term durability while maintaining the appearance and
            functionality of your property.
          </p>
        </div>
      </div>
    </section>
  );
}