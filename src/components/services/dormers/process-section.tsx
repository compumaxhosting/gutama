export function DormersProcessSection() {
  const content = {
        intro: "Dormer construction succeeds when structural framing, roof integration, and exterior detailing are coordinated from day one.",
        timeline: "3-8 Weeks",
        timelineNote: "Typical timeline depending on size, structure, and finishing scope",
        steps: [
          { num: "01", title: "Site Review & Feasibility", desc: "We review the attic or upper level, roof structure, and the most effective dormer type for your goals." },
          { num: "02", title: "Design & Approvals", desc: "Plans, dimensions, and municipal permitting are coordinated before field work begins." },
          { num: "03", title: "Roof Opening & Framing", desc: "The existing roof is opened and the dormer structure is framed with proper load transfer and weather protection." },
          { num: "04", title: "Envelope Installation", desc: "Roofing, flashing, windows, siding, and exterior trim are installed to make the new dormer watertight." },
          { num: "05", title: "Interior Integration", desc: "Interior framing, insulation, drywall prep, and finish transitions are completed for a cohesive result." },
          { num: "06", title: "Final Review", desc: "We inspect fit, finish, and weatherproofing details with you before closing the project." },
        ],
      };

  return (
    <section className="bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />How We Build</p>
            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug text-foreground">Our<br /><em className="text-secondary">Process</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="text-[15px] leading-loose text-muted-foreground">{content.intro}</p>
            <div className="mt-10 border border-secondary/30 bg-secondary/5 p-6">
              <p className="mb-2.5 text-[11px] tracking-[0.16em] uppercase text-secondary">Average Timeline</p>
              <p className="mb-1 font-serif text-[32px] text-foreground">{content.timeline}</p>
              <p className="text-xs text-muted-foreground">{content.timelineNote}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {content.steps.map((step, i) => (
            <div key={step.num}>
              <div className={["relative flex gap-7", i < content.steps.length - 1 ? "pb-12" : ""].join(" ")}>
                {i < content.steps.length - 1 && <div className="absolute top-14 bottom-0 left-6.75 w-px bg-linear-to-b from-secondary/40 to-secondary/10" />}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-secondary/35 bg-secondary/8"><span className="font-serif text-[13px] tracking-wide text-secondary">{step.num}</span></div>
                <div className="pt-3">
                  <h3 className="mb-2 font-serif text-xl text-foreground">{step.title}</h3>
                  <p className="text-sm leading-loose text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
