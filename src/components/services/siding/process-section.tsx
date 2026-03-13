export function SidingProcessSection() {
  const content = {
        intro: "A successful siding project depends on preparation, moisture management, straight installation lines, and refined finish detailing.",
        timeline: "3-8 Days",
        timelineNote: "Typical timeline depending on size, product, and trim scope",
        steps: [
          { num: "01", title: "Exterior Assessment", desc: "We inspect existing siding, trim, moisture exposure points, and any substrate concerns that need to be addressed." },
          { num: "02", title: "Material & Style Selection", desc: "Siding profile, color, accents, and trim options are selected to fit both performance needs and design goals." },
          { num: "03", title: "Removal & Surface Prep", desc: "Old materials are removed where required and the wall assembly is prepared for proper installation." },
          { num: "04", title: "Weather Barrier & Detailing", desc: "Critical layers, flashings, and transition points are installed before the siding itself goes on." },
          { num: "05", title: "Siding Installation", desc: "Panels, boards, or shingles are installed with consistent spacing, alignment, and clean edge handling." },
          { num: "06", title: "Trim Finish & Final Review", desc: "We complete the finish details, inspect the full exterior, and review the project with you before closeout." },
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
