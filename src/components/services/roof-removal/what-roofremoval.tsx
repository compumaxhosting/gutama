
export function RoofWhatSection() {
  return (
    <section className="bg-background py-8 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
          What Is <em className="text-secondary">Roof Removal?</em>
        </h2>

        <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

        <div className="max-w-5xl space-y-6">
          <p className="text-base leading-loose text-muted-foreground">
            Roof removal, also known as a roof tear-off, is the process of
            removing all existing roofing materials down to the roof deck. This
            includes old shingles, underlayment, flashing, roofing nails, and
            damaged components.
          </p>

          <p className="text-base leading-loose text-muted-foreground">
            Unlike a roof overlay, which installs new shingles over an existing
            roof, a complete roof tear-off allows contractors to inspect the
            structure beneath the roofing materials and address hidden problems
            before a new roof is installed.
          </p>
        </div>

        <div className="mt-16 rounded-sm border border-border bg-card p-8 md:p-10 lg:p-12">
          <h3 className="mb-6 font-serif text-3xl text-foreground">
            Why Is Roof Removal Important?
          </h3>

          <p className="mb-8 text-base leading-loose text-muted-foreground">
            A complete roof removal helps:
          </p>

          <ul className="grid gap-4 md:grid-cols-2">
            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-muted-foreground">
                Identify hidden roof damage
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-muted-foreground">
                Detect moisture and water intrusion
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-muted-foreground">
                Repair damaged roof decking
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-muted-foreground">
                Improve the lifespan of a new roof
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-muted-foreground">
                Meet manufacturer installation requirements
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-muted-foreground">
                Comply with local building codes
              </span>
            </li>

            <li className="flex items-center gap-3 md:col-span-2">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-muted-foreground">
                Prevent future roofing problems
              </span>
            </li>
          </ul>

          <p className="mt-8 text-base leading-loose text-muted-foreground">
            For many aging roofs, a complete tear-off is the most reliable
            long-term solution.
          </p>
        </div>
      </div>
    </section>
  );
}