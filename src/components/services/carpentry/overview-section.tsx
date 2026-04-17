import Image from "next/image";
import Link from "next/link";

export function CarpentryOverviewSection() {
  const content = {
    introParagraph:
      "Elevate your home's interior with precision craftsmanship from the best carpentry company in Essex County, NJ. Whether you are looking for an expert carpenter in Newark, NJ, or specialized custom carpentry in East Orange, NJ, our team delivers high-quality solutions that blend functionality with aesthetic appeal. We solve common local pain points like aging trim, poorly fitted cabinetry, and structural wear by providing durable, handcrafted woodwork.",
    title: "Expert Carpentry Services in",
    accent: "Essex County, NJ",
    paragraphs: [
      "From intricate finish carpentry in Irvington, NJ, to comprehensive residential carpentry in Livingston, NJ, we handle every detail with professional care. As a leading woodwork contractor in Bloomfield, NJ, we specialize in everything from custom shelving to structural repairs.",
      "If you've been searching for an affordable carpenter in West Orange, NJ, who understands the unique architectural styles of North Jersey, our licensed experts are ready to transform your space with custom woodwork in Newark, NJ, and beyond.",
    ],
    bullets: [
      "Custom Design: Tailored cabinetry and shelving built to your exact specifications.",
      "Finish Excellence: Expert crown molding, baseboards, and trim for a polished look.",
      "Local Reliability: Serving all Essex County neighborhoods with same-day consultations.",
      "Durable Materials: High-quality wood selection for long-lasting structural integrity.",
    ],
    links: [
      {
        href: "/gallery",
        label: "Custom Shelving Gallery",
        description: "Explore our previous custom woodwork projects in Newark.",
      },
      {
        href: "/services/additions",
        label: "Home Renovation Services",
        description: "See how our carpentry integrates with full residential upgrades.",
      },
    ],
    image: "/images/service-carpentry.webp",
    imageAlt: "Carpentry detail work",
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
          Professional Finish & <em className="text-secondary">Custom Carpentry in Newark & East Orange, NJ</em>
        </h3>

        <p className="text-base leading-loose text-muted-foreground">
          Gutama Roofing & Chimney offers expert carpentry services in Essex County, NJ, specializing in custom carpentry in East Orange and Newark. From professional finish carpentry to residential woodwork, we provide affordable, high-quality solutions across Livingston and Bloomfield to enhance your home&apos;s beauty and structural integrity.
        </p>
      </div>
    </section>
  );
}

