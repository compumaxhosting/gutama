export function SlateRoofRepairVsReplacementSection() {
  const installationBenefits = [
    "Correct structural support",
    "Proper waterproofing",
    "Longer roof lifespan",
    "Manufacturer-grade installation quality",
    "Reduced long-term repair costs",
  ];

  const repairSigns = [
    "Damage is limited to a few tiles",
    "Roof structure is still strong",
    "No widespread leaks exist",
  ];

  const replacementSigns = [
    "Roof is near end of lifespan",
    "Multiple leaks or failures exist",
    "Structural decking is damaged",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Why Choose Professional Installation */}
          <div className="border border-border/40 bg-card p-10">
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Professional Installation
            </p>

            <h2 className="mb-6 font-serif text-3xl text-foreground">
              Why Choose Professional
              <br />
              <em className="text-secondary">Slate Roofing Installation?</em>
            </h2>

            <p className="mb-8 leading-loose text-muted-foreground">
              Slate roofing is not a DIY-friendly system. It requires specialized
              installation due to weight, breakability, and structural
              requirements.
            </p>

            <div className="flex flex-col gap-4">
              {installationBenefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-border pt-8 leading-loose text-muted-foreground">
              At Gutama Home Improvement, we ensure every slate roof is installed
              to withstand New Jersey&apos;s climate conditions.
            </p>
          </div>

          {/* Repair vs Replacement */}
          <div className="border border-border/40 bg-card p-10">
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Roofing Decisions
            </p>

            <h2 className="mb-8 font-serif text-3xl text-foreground">
              Slate Roof Repair
              <br />
              <em className="text-secondary">vs Replacement</em>
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-serif text-xl text-foreground">
                  Repair Is Best When:
                </h3>

                <div className="flex flex-col gap-3">
                  {repairSigns.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-px w-5 shrink-0 bg-secondary" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-xl text-foreground">
                  Replacement Is Best When:
                </h3>

                <div className="flex flex-col gap-3">
                  {replacementSigns.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-px w-5 shrink-0 bg-secondary" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-8 border-t border-border pt-8 leading-loose text-muted-foreground">
              A professional inspection is the only reliable way to determine
              the correct solution for your slate roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}