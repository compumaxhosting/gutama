export function EmergencyRepairWhyChooseSection() {
  const features = [
    {
      title: "Fast Emergency Response",
      desc: "We understand that roofing emergencies cannot wait.",
    },
    {
      title: "Experienced Emergency Roofing Contractors",
      desc: "Our team is trained to safely handle urgent roofing situations throughout Newark and Essex County.",
    },
    {
      title: "Residential & Commercial Expertise",
      desc: "We repair asphalt shingles, flat roofing, EPDM roofing, TPO roofing, and metal roofing systems.",
    },
    {
      title: "Honest Assessments",
      desc: "We provide transparent recommendations focused on protecting your property and minimizing future issues.",
    },
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Why Homeowners Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Why Choose
            <br />
            <em className="text-secondary">Gutama Roofing NJ?</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="border border-border/40 bg-card p-8 transition-all duration-300 hover:border-secondary/30"
            >
              <div className="mb-5 h-px w-10 bg-secondary" />

              <h3 className="mb-4 font-serif text-xl leading-snug text-foreground">
                {item.title}
              </h3>

              <p className="text-sm leading-loose text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}