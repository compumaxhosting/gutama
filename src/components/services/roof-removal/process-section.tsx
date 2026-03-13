export function RoofRemovalProcessSection() {
  const content = {
        intro: "Disciplined removal protects the property, exposes real deck conditions, and creates the right base for whatever comes next.",
        timeline: "1-3 Days",
        timelineNote: "Typical timeline depending on roof size, layers, and access",
        steps: [
          { num: "01", title: "Pre-Job Protection", desc: "We protect the work zone, surrounding landscaping, and access areas before tear-off begins." },
          { num: "02", title: "Material Removal", desc: "Existing shingles or roofing layers are removed systematically to maintain control and reduce unnecessary mess." },
          { num: "03", title: "Debris Containment", desc: "Debris is collected continuously to keep the site safer, cleaner, and more manageable throughout the project." },
          { num: "04", title: "Deck Exposure", desc: "The roof deck is fully exposed so soft spots, moisture damage, and substrate issues can be identified accurately." },
          { num: "05", title: "Cleanup & Disposal", desc: "Removed material is cleared from the site and disposal is handled as part of the project scope." },
          { num: "06", title: "Ready-for-Next-Phase Review", desc: "We confirm the deck condition and transition the project cleanly into repair or replacement work." },
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
