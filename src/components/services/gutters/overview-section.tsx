import Image from "next/image";
import Link from "next/link";

export function GuttersOverviewSection() {
  const content = {
        introParagraph:
          "New Jersey storms can be relentless, and failing drainage systems often lead to costly foundation damage or basement flooding. If you're noticing sagging channels or overflowing water, our professional gutter installation in Essex County, NJ, provides the durable defense your home needs. We specialize in high-performance seamless gutter installation in NJ, custom-fitted to your roofline to eliminate leaks and ensure efficient water diversion during heavy downpours.",
        title: "Expert Gutter Installation in",
        accent: "Essex County, NJ",
        paragraphs: [
          "As leading gutter installers in Essex County, NJ, we understand the specific needs of local homes, from historic properties in Glen Ridge to modern builds in Livingston. Our team offers affordable gutter installation in NJ using premium materials like weather-resistant aluminum.",
          "Whether you need a full gutter replacement in Essex County, NJ, or a new system for a home addition, we deliver reliable solutions that protect your siding and landscaping for years to come.",
        ],
        bullets: [
          "Leak-Free Performance: Custom-cut seamless gutter installation minimizes joints and prevents common leaks.",
          "Local Weather Resistance: We use heavy-gauge aluminum designed to withstand NJ's snow, ice, and heavy rain.",
          "Precision Fit: Expertly pitched systems ensure water flows away from your foundation, preventing soil erosion.",
          "Comprehensive Service: Serving Newark, West Orange, and all surrounding Essex County neighborhoods with expert care.",
        ],
        links: [
          {
            href: "/services/emergency-repair",
            label: "Emergency Roofing Repairs Newark",
            description: "See how gutters and roofing work together to prevent water damage.",
          },
          {
            href: "/services/siding",
            label: "Residential Siding Services NJ",
            description: "Learn how new gutters protect your home's exterior investment.",
          },
        ],
        image: "/images/service-gutters.webp",
        imageAlt: "Exterior drainage planning",
        badgeValue: "Seamless",
        badgeLabel: "Custom-Cut Systems",
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
          <p className="mb-8 text-base leading-loose text-muted-foreground">{content.introParagraph}</p>
          <p className="mb-8 text-base leading-loose text-muted-foreground">{content.paragraphs[0]}</p>
          <p className="mb-10 text-base leading-loose text-muted-foreground">{content.paragraphs[1]}</p>
          <ul className="flex flex-col gap-3.5">
            {content.bullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-sm tracking-wide text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-4 border-t border-secondary/20 pt-6">
            {content.links.map((item) => (
              <p key={item.label} className="text-sm leading-loose text-muted-foreground">
                <Link href={item.href} className="font-medium text-secondary underline-offset-4 hover:underline">
                  {item.label}
                </Link>
                {" - "}
                {item.description}
              </p>
            ))}
          </div>
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
          Professional Gutter Installation in Essex County, NJ <em className="text-secondary">| Seamless & Durable Solutions</em>
        </h3>

        <p className="text-base leading-loose text-muted-foreground">
          Protect your property with professional gutter installation in Essex County, NJ. We specialize in seamless gutter installation in NJ, providing durable, weather-resistant solutions for Newark and West Orange homes. Our expert gutter installers ensure efficient water drainage to prevent foundation damage and improve home longevity.
        </p>
      </div>
    </section>
  );
}

