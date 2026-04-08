import Image from "next/image";
import Link from "next/link";

export function SidingOverviewSection() {
  const content = {
    title: "Expert Siding Installation ",
    accent: "in Essex County, NJ",
    paragraphs: [
      "Protecting your home from New Jersey's unpredictable weather starts with high-quality exterior solutions. As the best siding company in Essex County, NJ, we specialize in durable, weather-resistant upgrades tailored to local architecture. Whether you need a full vinyl siding installation in East Orange, NJ, or a specific siding repair in Irvington, NJ, our licensed team ensures your property remains energy-efficient and visually stunning.",
      "Homeowners often face issues like warping, moisture infiltration, or storm damage. Our siding contractors in Newark, NJ, provide immediate solutions, from minor fixes to complete house siding installation in Bloomfield, NJ. We offer premium materials, including fiber cement siding installation in Livingston, NJ, ensuring long-term curb appeal and structural protection. With our affordable siding installation in West Orange, NJ, you get expert craftsmanship without the premium price tag.",
    ],
    bullets: [
      "Weather-Ready Protection: High-durability materials designed for NJ’s harsh seasonal shifts.",
      "Energy Efficiency: Insulated siding options to lower your monthly utility bills.",
      "Expert Siding Contractors: Serving all Newark and Essex County neighborhoods since day one.",
      "Same-Day Consultations: Fast, professional assessments for siding repair and replacement.",
    ],
    links: [
      {
        href: "/contact",
        label: "Common Siding Damage Signs",
        description: "Learn when to call for a professional siding repair.",
      },
      {
        href: "/contact",
        label: "Fiber Cement vs. Vinyl",
        description: "Compare the best residential siding services for Newark homes.",
      },
    ],
    image: "/Images New/after-siding.webp",
    imageAlt: "Completed siding installation",
    badgeValue: "Same-Day",
    badgeLabel: "Consultations Available",
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
          Top-Rated <em className="text-secondary">Siding Company in Newark & East Orange, NJ</em>
        </h3>

        <p className="text-base leading-loose text-muted-foreground">
          Gutama Roofing provides expert siding installation in Essex County, NJ, specializing in vinyl, fiber cement, and professional repairs. Serving Newark and East Orange, our best siding company in Essex County, NJ ensures weather-resistant, energy-efficient protection, enhancing your home&apos;s value with affordable, high-quality residential services.
        </p>
      </div>
    </section>
  );
}
