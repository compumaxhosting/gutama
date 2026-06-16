
export function RoofRemovalProcessSection() {
  const content = {
    intro:
      "At Gutama Home Improvement, we follow a proven roof removal process to ensure quality workmanship and customer satisfaction.",

    timeline: "1-3 Days",

    timelineNote:
      "Typical timeline depending on roof size, roofing layers, and property access",

    steps: [
      {
        num: "01",
        title: "Comprehensive Roof Inspection",
        desc:
          "We begin by evaluating the condition of your roof, identifying potential issues, and developing a customized plan for your project.",
      },

      {
        num: "02",
        title: "Property Protection",
        desc:
          "Before work begins, we protect landscaping, driveways, walkways, windows, siding, and outdoor equipment. Protecting your property remains a priority throughout the project.",
      },

      {
        num: "03",
        title: "Complete Roof Tear-Off",
        desc:
          "Our team carefully removes asphalt shingles, architectural shingles, underlayment, flashing, roofing nails, and damaged roofing materials. All materials are safely removed and properly disposed of.",
      },

      {
        num: "04",
        title: "Roof Deck Inspection",
        desc:
          "Once roofing materials are removed, we inspect the underlying roof deck for water damage, rotting wood, structural deterioration, ventilation issues, and hidden leaks. This step ensures that no problems are concealed beneath the new roof.",
      },

      {
        num: "05",
        title: "Necessary Repairs",
        desc:
          "If damaged decking or structural concerns are found, we provide recommendations and complete necessary repairs before moving forward.",
      },

      {
        num: "06",
        title: "Thorough Cleanup",
        desc:
          "We finish every project with a complete cleanup, including magnetic nail sweeps to remove stray nails and debris.",
      },
    ],
  };

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Roof Removal Process
            </p>

            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug text-foreground">
              Our Professional
              <br />
              <em className="text-secondary">Roof Removal Process</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="text-[15px] leading-loose text-muted-foreground">
              {content.intro}
            </p>

            {/* <div className="mt-10 border border-secondary/30 bg-secondary/5 p-6">
              <p className="mb-2.5 text-[11px] tracking-[0.16em] uppercase text-secondary">
                Average Timeline
              </p>

              <p className="mb-1 font-serif text-[32px] text-foreground">
                {content.timeline}
              </p>

              <p className="text-xs text-muted-foreground">
                {content.timelineNote}
              </p>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col">
          {content.steps.map((step, i) => (
            <div key={step.num}>
              <div
                className={[
                  "relative flex gap-7",
                  i < content.steps.length - 1 ? "pb-12" : "",
                ].join(" ")}
              >
                {i < content.steps.length - 1 && (
                  <div className="absolute top-14 bottom-0 left-6.75 w-px bg-linear-to-b from-secondary/40 to-secondary/10" />
                )}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-secondary/35 bg-secondary/8">
                  <span className="font-serif text-[13px] tracking-wide text-secondary">
                    {step.num}
                  </span>
                </div>

                <div className="pt-3">
                  <h3 className="mb-2 font-serif text-xl text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-loose text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
