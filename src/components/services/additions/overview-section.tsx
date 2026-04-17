import Image from "next/image";
import Link from "next/link";

export function AdditionsOverviewSection() {
  const content = {
    introParagraph:
      "Growing families and remote work demands shouldn&apos;t force you out of the neighborhood you love. Whether you&apos;re looking for a second story addition in Montclair or a spacious kitchen extension in Livingston, navigating local zoning laws and historic requirements can be daunting. As a premier general contractor in Essex County, NJ, we specialize in seamless house extensions that match your home&apos;s original character while adding modern functionality.",
    title: "Expert Custom Home Additions",
    accent: "in Essex County, NJ",
    paragraphs: [
      "Our team provides end-to-end home remodeling in Essex County, NJ, ensuring every square foot is optimized for your lifestyle. From the initial permits in West Orange to the final walkthrough in Newark, we prioritize durable, weather-resistant materials and transparent timelines.",
      "We solve your space constraints with high-quality custom home additions designed to boost both your comfort and your property value.",
    ],
    bullets: [
      "Local Permitting Expertise: We handle all Essex County building codes and township-specific zoning.",
      "Seamless Integration: Our room additions blend perfectly with your existing architecture.",
      "All-In-One Solution: As a full-service home addition contractor, we manage design, framing, and finish work.",
      "Enhanced Value: Increase your square footage and ROI with expert-grade house extensions.",
    ],
    links: [
      {
        href: "/services",
        label: "Complete Kitchen Remodeling Services",
        description:
          "A service focus on interior renovations that often accompany home additions.",
      },
      {
        href: "/services/re-roofing",
        label: "Essex County Roofing & Exterior Solutions",
        description:
          "See how additions are protected with weather-ready roofing expertise.",
      },
    ],
  };

  return (
    <section className="relative bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            What We Do
          </p>
          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            {content.title}
            <br />
            <em className="text-secondary">{content.accent}</em>
          </h2>
          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
          <p className="mb-8 text-base leading-loose text-muted-foreground">{content.introParagraph}</p>
          <p className="mb-8 text-base leading-loose text-muted-foreground">
            {content.paragraphs[0]}
          </p>
          <p className="mb-10 text-base leading-loose text-muted-foreground">
            {content.paragraphs[1]}
          </p>
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
              <Image
                src="/images/gallery-addition-1.webp"
                alt="Addition craftsmanship detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-transparent" />
            </div>
            <div className="absolute -right-6 -bottom-6 -z-10 h-28 w-28 border border-secondary/30" />
            <div className="absolute -top-6 -left-6 -z-10 h-20 w-20 border border-secondary/20" />
            <div className="absolute -left-7 bottom-7 border border-secondary/40 bg-card/85 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 font-serif text-3xl leading-none text-secondary">340+</p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-4xl text-center">
        <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

        <h3 className="mb-4 font-serif text-[clamp(24px,2.5vw,32px)] text-foreground">
          Ready to <em className="text-secondary">Expand Your Living Space?</em>
        </h3>

        <p className="text-base leading-loose text-muted-foreground">
          Contact our Essex County team today for a free consultation and personalized estimate on your home addition project.
        </p>
      </div>
    </section>
  );
}

