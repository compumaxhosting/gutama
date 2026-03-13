import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function GuttersHeroSection() {
  const content = {
        label: "Gutters",
        title: "Gutters",
        accent: "Installation",
        image: "/images/service-gutters.jpg",
        imageAlt: "Gutter installation services",
        description: "Seamless gutter installation and repair designed to control roof runoff, protect your foundation, and preserve exterior finishes.",
        stats: [
          { value: "22+", label: "Years in Exterior Protection" },
          { value: "520+", label: "Gutter Systems Installed" },
          { value: "100%", label: "Drainage-Focused Layouts" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      };

  return (
    <section className="relative flex min-h-[90vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-[115%] w-full">
          <Image src={content.image} alt={content.imageAlt} fill priority className="object-cover object-[center_30%]" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 bottom-0 left-[max(24px,calc((100vw-1280px)/2))] z-10 w-px bg-linear-to-b from-transparent via-secondary/40 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-8 pb-24">
        <nav className="mb-10 flex items-center gap-2">
          <span className="flex items-center gap-2">
            <Link href="/" className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-secondary">Home</Link>
            <span className="text-[8px] text-secondary/60">◆</span>
          </span>
          <span className="flex items-center gap-2">
            <Link href="/services" className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-secondary">Services</Link>
            <span className="text-[8px] text-secondary/60">◆</span>
          </span>
          <span className="text-[11px] tracking-[0.12em] uppercase text-secondary">{content.label}</span>
        </nav>

        <div className="mb-7 inline-flex items-center gap-2 border border-secondary/40 bg-background/30 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-secondary">Premium Craftsmanship - {siteConfig.business.regionLabel}</span>
        </div>

        <h1 className="mb-3 font-serif text-[clamp(52px,8vw,96px)] leading-none tracking-[-0.01em] text-foreground">
          {content.title}
          <span className="block italic text-secondary">{content.accent}</span>
        </h1>

        <div className="mb-7 h-px w-45 origin-left bg-linear-to-r from-secondary to-secondary/20" />

        <p className="mb-12 max-w-lg text-[clamp(15px,1.8vw,19px)] leading-relaxed text-muted-foreground">{content.description}</p>

        <div className="flex flex-wrap gap-3.5">
          <Button asChild className="h-12 px-7 text-sm uppercase tracking-[0.14em]"><Link href="/contact">Request Free Estimate</Link></Button>
          <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={15} className="mr-2 inline-block" />{siteConfig.phones.english}</a></Button>
        </div>

        <div className="mt-18 flex flex-wrap gap-x-12 gap-y-8 border-t border-secondary/25 pt-10">
          {content.stats.map((item) => (
            <div key={item.label}>
              <p className="mb-1 font-serif text-4xl leading-none text-secondary">{item.value}</p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
