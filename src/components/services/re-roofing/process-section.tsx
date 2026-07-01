export function ReRoofingProcessSection() {
  const content = {
    intro:
      "At Gutama Home Improvement, we follow a proven process designed to deliver exceptional results.",

    timeline: "2-6 Days",

    timelineNote:
      "Typical timeline depending on roof size, complexity, materials, and any required repairs",

    steps: [
      {
        num: "01",
        title: "Comprehensive Roof Inspection",
        desc:
          "We thoroughly assess the roof's condition and identify any structural concerns.",
      },
      {
        num: "02",
        title: "Project Planning",
        desc:
          "Our team recommends the most suitable roofing materials based on your property, budget, and long-term goals.",
      },
      {
        num: "03",
        title: "Roof Preparation",
        desc:
          "Existing roofing materials are removed when necessary, and the roof deck is inspected for hidden damage.",
      },
      {
        num: "04",
        title: "Repairs and Reinforcement",
        desc:
          "Any damaged decking, flashing, or structural components are repaired before installation begins.",
      },
      {
        num: "05",
        title: "New Roof Installation",
        desc:
          "We install premium roofing materials according to manufacturer specifications and industry best practices.",
      },
      {
        num: "06",
        title: "Final Inspection and Cleanup",
        desc:
          "Every project concludes with a detailed inspection and complete site cleanup.",
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
              Re-Roofing Process
            </p>

            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug text-foreground">
              Our
              <br />
              <em className="text-secondary">Re-Roofing Process</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="text-[15px] leading-loose text-muted-foreground">
              {content.intro}
            </p>

            <div className="mt-10 border border-secondary/30 bg-secondary/5 p-6">
              <p className="mb-2.5 text-[11px] tracking-[0.16em] uppercase text-secondary">
                Average Timeline
              </p>

              <p className="mb-1 font-serif text-[32px] text-foreground">
                {content.timeline}
              </p>

              <p className="text-xs text-muted-foreground">
                {content.timelineNote}
              </p>
            </div>
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
