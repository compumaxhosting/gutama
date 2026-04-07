import Image from "next/image";
import Link from "next/link";

export function DormersOverviewSection() {
  const content = {
        introParagraph:
          "Expand your living space and increase your property value with professional dormer installation in Essex County, NJ. Many North Jersey homeowners struggle with cramped attics and limited natural light. Our team solves these space constraints by providing expert dormer contractors in Newark, NJ, who specialize in seamless structural additions. Whether you require a functional shed dormer installation in Livingston, NJ, or a stylish roof dormer installation in East Orange, NJ, we deliver weather-resistant, high-quality results.",
        title: "Expert Dormer Installation in",
        accent: "Essex County, NJ",
        paragraphs: [
          "Our dormer addition services in Irvington, NJ, focus on structural integrity and architectural harmony. As the best dormer contractors in Essex County, we handle everything from custom dormer construction in Bloomfield, NJ, to full attic transformations.",
          "We pride ourselves on being the go-to house dormer builders in Newark, offering affordable dormer installation in West Orange, NJ, that meets strict local building codes. If you are searching for reliable dormer installation near me, our licensed experts ensure a stress-free construction process from start to finish.",
        ],
        bullets: [
          "Increased Square Footage: Transform dark attics into functional bedrooms or home offices.",
          "Enhanced Curb Appeal: Custom designs that complement your home's existing architecture.",
          "Natural Lighting: Strategically placed windows to brighten upper-level living spaces.",
          "Local Code Compliance: Expert navigation of Essex County and Newark building permits.",
        ],
        links: [
          {
            href: "/services/re-roofing",
            label: "Roofing Replacement Guide",
            description: "Ensure your roof is addition-ready before construction.",
          },
          {
            href: "/gallery",
            label: "Home Addition Gallery",
            description: "View our custom dormer projects across Essex County.",
          },
        ],
        image: "/Images New/gallery-roof-1.webp",
        imageAlt: "Dormer construction detail",
        badgeValue: "2-4 Weeks",
        badgeLabel: "Most Projects",
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
          Professional Dormer Contractors in <em className="text-secondary">Newark & East Orange, NJ</em>
        </h3>

        <p className="text-base leading-loose text-muted-foreground">
          Gutama Roofing specializes in professional dormer installation in Essex County, NJ, including Newark and East Orange. Our expert dormer contractors in Newark provide custom shed and roof dormer construction to increase living space and home value with affordable, weather-resistant structural additions across all NJ neighborhoods.
        </p>
      </div>
    </section>
  );
}
