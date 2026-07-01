export function DormersHowItWorksSection() {
  const steps = [
    "Roof inspection and structural assessment",
    "Design planning and dormer layout",
    "Roof cutting and reinforcement framing",
    "Dormer structural framing installation",
    "Window installation and sealing",
    "Roofing integration and waterproofing",
    "Interior insulation and finishing",
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Construction Overview
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-tight text-foreground">
              How Dormer
              <br />
              <em className="text-secondary">Construction Works</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="text-base leading-loose text-muted-foreground">
              Dormer installation requires structural modification of the
              existing roof system.
            </p>
          </div>

          {/* Right */}
          <div className="border border-border/40 bg-card">
            <div className="border-b border-border/40 px-8 py-6">
              <h3 className="font-serif text-2xl text-foreground">
                Step-by-Step Process
              </h3>
            </div>

            <div className="divide-y divide-border/30">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-6 px-8 py-6"
                >
                  <span className="font-serif text-xl text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-loose text-muted-foreground">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border border-secondary/20 bg-secondary/5 p-8">
          <p className="text-base leading-loose text-muted-foreground">
            Proper installation ensures structural safety, weather resistance,
            and long-term durability.
          </p>
        </div>
      </div>
    </section>
  );
}