import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function GuttersCtaSection() {
  const content = {
        image: "/images/service-gutters.jpg",
        imageAlt: "Gutter system background",
        title: "Ready to Improve",
        accent: "Your Drainage?",
        description: "Schedule a no-cost site visit and estimate. We'll assess runoff patterns, gutter condition, and provide a clear recommendation for repair or replacement.",
        buttonLabel: "Schedule a Free Site Visit",
      };

  return (
    <section className="relative overflow-hidden py-36 px-6">
      <div className="absolute inset-0">
        <Image src={content.image} alt={content.imageAlt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_60%_50%] from-secondary/12 to-transparent" />
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-10 h-14 w-px bg-linear-to-b from-transparent to-secondary" />
        <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Begin Your Project</p>
        <h2 className="mb-5 font-serif text-[clamp(38px,5vw,64px)] leading-none text-foreground">{content.title}<br /><em className="text-secondary">{content.accent}</em></h2>
        <p className="mx-auto mb-14 max-w-lg text-base leading-loose text-muted-foreground">{content.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="h-12 px-7 text-sm uppercase tracking-[0.14em]"><Link href="/contact">{content.buttonLabel}</Link></Button>
          <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={14} className="mr-2 inline-block" />Call {siteConfig.phones.english}</a></Button>
        </div>
        <p className="mt-7 text-xs tracking-wide text-muted-foreground">No obligation - Licensed & insured - {siteConfig.business.regionLabel}</p>
        <div className="mx-auto mt-12 h-14 w-px bg-linear-to-t from-transparent to-secondary/30" />
      </div>
    </section>
  );
}
