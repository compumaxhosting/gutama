const PROCESS = [
  {
    num: "01",
    title: "Discovery & Site Survey",
    desc: "We walk your property, photograph existing conditions, and discuss your vision, budget, and timeline.",
  },
  {
    num: "02",
    title: "Design & Permitting",
    desc: "Architectural drawings, structural engineering, and municipal permit filing - all managed in-house.",
  },
  {
    num: "03",
    title: "Foundation & Framing",
    desc: "Site prep, footings, and structural framing built to exceed local code requirements.",
  },
  {
    num: "04",
    title: "Envelope & Systems",
    desc: "Roofing, windows, exterior cladding, HVAC, electrical, and plumbing rough-in completed and inspected.",
  },
  {
    num: "05",
    title: "Interior Finishing",
    desc: "Insulation, drywall, flooring, trim, paint, and fixtures installed to your selections.",
  },
  {
    num: "06",
    title: "Final Walkthrough",
    desc: "Comprehensive quality review with you present. We do not close a project until you are fully satisfied.",
  },
] as const;

export function AdditionsProcessSection() {
  return (
    <section className="bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              How We Build
            </p>
            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug text-foreground">
              Our
              <br />
              <em className="text-secondary">Process</em>
            </h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="text-[15px] leading-loose text-muted-foreground">
              Six deliberate stages refined over two decades of residential addition work in Essex County.
            </p>
            <div className="mt-10 border border-secondary/30 bg-secondary/5 p-6">
              <p className="mb-2.5 text-[11px] tracking-[0.16em] uppercase text-secondary">Average Timeline</p>
              <p className="mb-1 font-serif text-[32px] text-foreground">12-28 Weeks</p>
              <p className="text-xs text-muted-foreground">From permit approval to final walkthrough</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {PROCESS.map((step, i) => (
            <div key={step.num}>
              <div className={["relative flex gap-7", i < PROCESS.length - 1 ? "pb-12" : ""].join(" ")}>
                {i < PROCESS.length - 1 && (
                  <div className="absolute top-14 bottom-0 left-6.75 w-px bg-linear-to-b from-secondary/40 to-secondary/10" />
                )}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-secondary/35 bg-secondary/8">
                  <span className="font-serif text-[13px] tracking-wide text-secondary">{step.num}</span>
                </div>
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
