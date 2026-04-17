import Image from "next/image";

export function SlateRoofOverviewSection() {
  const content = {
        title: "Premium Slate Roofing Installation",
        accent: "& Repair in Essex County, NJ",
        subtitle: "Expert Slate Roof Maintenance & Repair",
        paragraphs: [
          "Gutama Home Improvement is the leading slate roofing contractor in Essex County, specializing in the timeless elegance of natural slate roof installation in New Jersey. We provide expert residential slate roofing in Newark, NJ and comprehensive commercial slate roofing NJ solutions tailored to the unique architectural needs of historic North Jersey properties.",
          "Maintaining a slate roof requires specialized knowledge. Our professional slate roofing company offers dedicated slate roof repair services in NJ and routine slate roof maintenance services NJ to protect your investment. Whether you need a full slate roof replacement NJ or minor tile repairs in Livingston or Montclair, we provide affordable slate roofing services NJ without compromising on quality.",
        ],
        bullets: [
          "Longevity: We use weather-resistant, industrial-grade slate for century-long durability.",
          "Local Heritage: Serving historic districts in Newark, Glen Ridge, and South Orange.",
          "Precision: Skilled craftsmanship in every slate roofing installation NJ.",
        ],
        bottomTitle: "Slate Roofing Installation in NJ",
        bottomTitleAccent: "Elegant & Durable Roofs in Essex County",
        bottomDescription:
          "Gutama Home Improvement provides expert slate roofing installation NJ, offering homeowners and businesses in Essex County durable, high-end natural slate solutions. Our specialists provide professional repairs and replacements, ensuring your property features a weather-resistant, elegant, and long-lasting roof tailored to North Jersey's climate.",
        image: "/images/service-slate-roof.webp",
        imageAlt: "Slate roofing detail",
        badgeValue: "Essex",
        badgeLabel: "County Slate Specialists",
      };

  return (
    <section className="relative bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />What We Do</p>
          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            {content.title}
            <br />
            <em className="text-secondary">{content.accent}</em>
          </h2>
          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
          <p className="mb-6 text-base leading-loose text-muted-foreground">{content.paragraphs[0]}</p>
          <h3 className="mb-4 text-xl font-serif text-foreground">{content.subtitle}</h3>
          <p className="mb-10 text-base leading-loose text-muted-foreground">{content.paragraphs[1]}</p>
          <ul className="flex flex-col gap-3.5">
            {content.bullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-sm tracking-wide text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image src={content.image} alt={content.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-transparent" />
            </div>
            <div className="absolute -right-6 -bottom-6 -z-10 h-28 w-28 border border-secondary/30" />
            <div className="absolute -top-6 -left-6 -z-10 h-20 w-20 border border-secondary/20" />
            <div className="absolute -left-7 bottom-7 border border-secondary/40 bg-card/85 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 font-serif text-3xl leading-none text-secondary">{content.badgeValue}</p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground">{content.badgeLabel}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-4xl text-center">
        <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        <h3 className="mb-4 font-serif text-[clamp(24px,2.5vw,32px)] text-foreground">
          {content.bottomTitle}{" "}
          <em className="text-secondary">{content.bottomTitleAccent}</em>
        </h3>
        <p className="text-base leading-loose text-muted-foreground">
          {content.bottomDescription}
        </p>
      </div>
    </section>
  );
}

