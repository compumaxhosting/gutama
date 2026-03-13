import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { ServicesSection } from "@/components/Home/services-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: `Our Services | ${siteConfig.business.regionLabel}`,
  description:
    "Explore roofing, siding, chimney, gutters, dormers, additions, and emergency repair services offered across Essex County, New Jersey.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-secondary/10 via-background to-background" />
        <Container className="relative text-center">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Our Services</p>
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Full-Service Exterior Solutions
            </h1>
            <div className="gold-divider mt-5 mb-4" />
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              From roof replacements to emergency repairs, each service has its own dedicated page so you can review scope, process, and FAQs before requesting an estimate.
            </p>
          </Reveal>
        </Container>
      </section>
      <ServicesSection
        id="services-grid"
        showHeading={false}
        ctaLabel="View Details"
        descriptionClampClassName="line-clamp-3"
        cardClassName="h-full"
      />
    </>
  );
}
