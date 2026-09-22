import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, Award, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function RoofingHeroSection() {
  const content = {
    label: "Roofing",
    title: "Master Roofing",
    accent: "Services & Systems",
    image: "/images/Hero.webp",
    imageAlt: "Gutama Roofing Solutions in Essex County NJ",
    description:
      "Your premier roofing contractor in Essex County, NJ. From structural tear-offs and complete architectural replacements to high-performance flat membranes and historic slate restoration, explore our specialized roofing disciplines.",
    stats: [
      { value: "18+", label: "Years in Essex County" },
      { value: "1,200+", label: "Roofs Completed" },
      { value: "100%", label: "Licensed & Insured" },
      { value: "4.9★", label: "Client Satisfaction" },
    ],
  };

  return (
    <section className="relative flex min-h-[90vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-[115%] w-full">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
            quality={75}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/75 to-background/45" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 bottom-0 left-[max(24px,calc((100vw-1280px)/2))] z-10 w-px bg-linear-to-b from-transparent via-secondary/40 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-12 pb-24">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2">
          <span className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-secondary"
            >
              Home
            </Link>
            <span className="text-[8px] text-secondary/60">◆</span>
          </span>
          <span className="flex items-center gap-2">
            <Link
              href="/services"
              className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-secondary"
            >
              Services
            </Link>
            <span className="text-[8px] text-secondary/60">◆</span>
          </span>
          <span className="text-[11px] tracking-[0.12em] uppercase text-secondary">
            {content.label}
          </span>
        </nav>

        {/* Region Tag */}
        <div className="mb-7 inline-flex items-center gap-2 border border-secondary/40 bg-background/40 px-4 py-1.5 backdrop-blur-xs">
          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-secondary">
            Master Craftsmanship — {siteConfig.business.regionLabel}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="mb-4 font-serif text-[clamp(44px,7.5vw,92px)] leading-none tracking-[-0.01em] text-foreground">
          {content.title}
          <span className="block italic text-secondary">{content.accent}</span>
        </h1>

        <div className="mb-7 h-px w-48 origin-left bg-linear-to-r from-secondary via-secondary/60 to-transparent" />

        <p className="mb-10 max-w-2xl text-[clamp(15px,1.6vw,19px)] leading-relaxed text-muted-foreground">
          {content.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="h-12 px-8 text-sm uppercase tracking-[0.14em] text-amber shadow-lg"
          >
            <Link href="/contact">Request Free Estimate</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"
          >
            <a href={`tel:${siteConfig.phones.english}`}>
              <Phone size={15} className="mr-2 inline-block" />
              Call {siteConfig.phones.english}
            </a>
          </Button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 flex flex-wrap items-center gap-6 text-xs text-muted-foreground/80">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-secondary" /> NJ Licensed Home Improvement Contractor
          </span>
          <span className="inline-flex items-center gap-2">
            <Award className="h-4 w-4 text-secondary" /> Certified Shingle & Membrane Installers
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-secondary" /> Prompt Storm Damage Response
          </span>
        </div>

        {/* Stats Row */}
        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-secondary/25 pt-10">
          {content.stats.map((item) => (
            <div key={item.label}>
              <p className="mb-1 font-serif text-3xl font-bold leading-none text-secondary lg:text-4xl">
                {item.value}
              </p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
