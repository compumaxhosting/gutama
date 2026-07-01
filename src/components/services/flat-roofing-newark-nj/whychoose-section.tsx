export function FlatRoofWhyChooseSection() {
  const roofingSystems = [
    "EPDM Roofing",
    "TPO Roofing",
    "PVC Roofing",
    "Modified Bitumen Roofing",
    "Commercial Roofing Systems",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Why Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] text-foreground">
            Why Choose
            <br />
            <em className="text-secondary">Gutama Roofing NJ</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />
            <h3 className="mb-4 font-serif text-2xl text-foreground">
              Local Roofing Expertise
            </h3>
            <p className="text-sm leading-loose text-muted-foreground">
              We understand the unique roofing challenges faced by property
              owners throughout Newark and Essex County, from severe weather
              exposure to long-term flat roof performance requirements.
            </p>
          </div>

          <div className="border border-border/40 bg-card p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />
            <h3 className="mb-6 font-serif text-2xl text-foreground">
              Experienced Flat Roofing Contractors
            </h3>

            <div className="space-y-3">
              {roofingSystems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border/40 bg-card p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />
            <h3 className="mb-4 font-serif text-2xl text-foreground">
              Quality Materials
            </h3>
            <p className="text-sm leading-loose text-muted-foreground">
              We install premium roofing products designed to perform in New
              Jersey&apos;s climate, providing reliable protection, energy
              efficiency, and long-term durability.
            </p>
          </div>

          <div className="border border-border/40 bg-card p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />
            <h3 className="mb-4 font-serif text-2xl text-foreground">
              Honest Recommendations
            </h3>
            <p className="text-sm leading-loose text-muted-foreground">
              We prioritize long-term value and recommend solutions that best
              fit your property&apos;s needs, roofing condition, and budget rather
              than pushing unnecessary work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}