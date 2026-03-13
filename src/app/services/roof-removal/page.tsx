import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { RoofRemovalBenefitsSection } from "@/components/services/roof-removal/benefits-section";
import { RoofRemovalCtaSection } from "@/components/services/roof-removal/cta-section";
import { RoofRemovalFaqSection } from "@/components/services/roof-removal/faq-section";
import { RoofRemovalHeroSection } from "@/components/services/roof-removal/hero-section";
import { RoofRemovalOverviewSection } from "@/components/services/roof-removal/overview-section";
import { RoofRemovalProcessSection } from "@/components/services/roof-removal/process-section";
import { RoofRemovalShowcaseSection } from "@/components/services/roof-removal/showcase-section";
import { RoofRemovalTestimonialSection } from "@/components/services/roof-removal/testimonial-section";

export const metadata: Metadata = buildMetadata({
  title: `Professional Roof Removal | ${siteConfig.business.regionLabel}`,
  description: "Complete tear-off and roof removal with safe disposal and clean site preparation for new installation.",
  path: "/services/roof-removal",
});

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <RoofRemovalHeroSection />
      <RoofRemovalOverviewSection />
      <RoofRemovalBenefitsSection />
      <RoofRemovalProcessSection />
      <RoofRemovalShowcaseSection />
      <RoofRemovalTestimonialSection />
      <RoofRemovalFaqSection />
      <RoofRemovalCtaSection />
    </div>
  );
}
