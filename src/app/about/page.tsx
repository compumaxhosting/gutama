import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutStats } from "@/components/about/about-stats";
import { AboutValues } from "@/components/about/about-values";
import { AboutCertifications } from "@/components/about/about-certifications";
import { AboutCta } from "@/components/about/about-cta";
import { ServiceAreasSection } from "@/components/Home/service-areas-section";

export const metadata: Metadata = buildMetadata({
  title: `About Us | ${siteConfig.business.regionLabel}`,
  description: `Learn about ${siteConfig.business.name} — a trusted roofing and exterior contractor serving ${siteConfig.business.regionLabel} since ${siteConfig.business.foundedYear}. Licensed, bilingual, and dedicated to craftsmanship.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutCertifications />
      <ServiceAreasSection />
      <AboutCta />
    </>
  );
}
