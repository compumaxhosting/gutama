import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function RoofingCtaSection() {
  const content = {
    image: "/images/service-re-roofing.webp",
    imageAlt: "Gutama Roofing Project in Essex County NJ",
    title: "Protect Your Property with",
    accent: "Master Roofing Craftsmanship",
    description:
      "Schedule a complimentary, comprehensive roof evaluation today. Our seasoned roofing inspectors will examine your roof, identify vulnerabilities, and provide an honest, itemized estimate.",
    buttonLabel: "Request Free Evaluation",
  };

  return (
    <section className="relative overflow-hidden py-24 px-6 border-t border-secondary/20">
      <div className="absolute inset-0">
        <Image
          src={content.image}
          alt={content.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-background/92" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_60%_50%] from-secondary/15 to-transparent" />
      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 h-12 w-px bg-linear-to-b from-transparent to-secondary" />

        <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-secondary">
          <span className="h-px w-6 bg-secondary" />
          Take the First Step
        </p>

        <h2 className="mb-6 font-serif text-[clamp(34px,5vw,60px)] leading-none text-foreground">
          {content.title}
          <br />
          <em className="text-secondary font-normal">{content.accent}</em>
        </h2>

        <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-muted-foreground">
          {content.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="h-12 px-8 text-sm uppercase tracking-[0.14em] text-amber shadow-lg"
          >
            <Link href="/contact">
              <Calendar size={15} className="mr-2 inline-block" />
              {content.buttonLabel}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"
          >
            <a href={`tel:${siteConfig.phones.english}`}>
              <Phone size={14} className="mr-2 inline-block" />
              Call {siteConfig.phones.english}
            </a>
          </Button>
        </div>

        <p className="mt-8 text-xs tracking-wide text-muted-foreground">
          Zero Obligation • Licensed & Fully Insured • {siteConfig.business.regionLabel}
        </p>

        <div className="mx-auto mt-12 h-12 w-px bg-linear-to-t from-transparent to-secondary/30" />
      </div>
    </section>
  );
}
