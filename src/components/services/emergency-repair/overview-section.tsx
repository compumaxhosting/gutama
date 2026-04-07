import Image from "next/image";
import Link from "next/link";

export function EmergencyRepairOverviewSection() {
  const content = {
        introParagraph:
          "A sudden roof leak during a North Jersey storm can quickly escalate from a minor nuisance to a major structural disaster. When your home is vulnerable, you don't have time to wait for business hours. As a dedicated emergency roofing contractor in NJ, we provide rapid response and same-day roof repair in NJ to stop leaks in their tracks. Whether it's heavy wind damage in West Orange or a puncture from a fallen limb in Newark, our team is equipped to handle urgent roof repair in Essex County, NJ, protecting your interior from costly water damage.",
        title: "Reliable Emergency Roof Repair",
        accent: "in Essex County, NJ",
        paragraphs: [
          "Our 24-hour roof repair in NJ is designed to provide immediate peace of mind. We specialize in storm damage roof repair in NJ, offering professional tarping and permanent fixes that stand up to the local climate.",
          "By choosing our fast roof repair services in NJ, you're working with local experts who understand the architectural nuances of Essex County homes. We solve the immediate pain of a leaking roof with emergency roof repair in Newark, NJ, and surrounding areas, ensuring your family stays dry and safe.",
        ],
        bullets: [
          "24/7 Availability: Emergency roofing services in West Orange, NJ, and beyond are available around the clock.",
          "Rapid Response: Same-day roof repair to mitigate water damage immediately after a storm.",
          "Expert Tarping & Patching: Secure temporary solutions followed by high-quality, permanent emergency repair.",
          "Insurance Assistance: Detailed documentation for storm damage repairs to simplify claims processing.",
        ],
        links: [
          {
            href: "/services/re-roofing",
            label: "Full Roof Replacement Services",
            description: "For situations where emergency repair reveals roof end-of-life conditions.",
          },
          {
            href: "/services/gutters",
            label: "Essex County Gutter Solutions",
            description: "See how gutter flow prevents backups that often trigger emergency leaks.",
          },
        ],
        image: "/Images New/gallery-roof-3.webp",
        imageAlt: "Emergency roof repair response",
        badgeValue: "24/7",
        badgeLabel: "Hotline Response",
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
          Fast & Reliable Emergency Roofing Services in <em className="text-secondary">Newark & West Orange, NJ</em>
        </h3>

        <p className="text-base leading-loose text-muted-foreground">
          For emergency roof repair in Essex County, NJ, we offer 24-hour roof repair in NJ to fix leaks and storm damage. Our emergency roofing contractor in NJ team provides same-day roof repair in Newark and West Orange, ensuring fast, reliable protection for your home.
        </p>
      </div>
    </section>
  );
}
