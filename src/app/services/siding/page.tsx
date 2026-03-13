import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { SidingBenefitsSection } from "@/components/services/siding/benefits-section";
import { SidingCtaSection } from "@/components/services/siding/cta-section";
import { SidingFaqSection } from "@/components/services/siding/faq-section";
import { SidingHeroSection } from "@/components/services/siding/hero-section";
import { SidingOverviewSection } from "@/components/services/siding/overview-section";
import { SidingProcessSection } from "@/components/services/siding/process-section";
import { SidingShowcaseSection } from "@/components/services/siding/showcase-section";
import { SidingTestimonialSection } from "@/components/services/siding/testimonial-section";

export const metadata: Metadata = buildMetadata({
  title: `Premium Siding Installation | ${siteConfig.business.regionLabel}`,
  description: "Transform your exterior with premium siding installation and precise finishing.",
  path: "/services/siding",
});

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <SidingHeroSection />
      <SidingOverviewSection />
      <SidingBenefitsSection />
      <SidingProcessSection />
      <SidingShowcaseSection />
      <SidingTestimonialSection />
      <SidingFaqSection />
      <SidingCtaSection />
    </div>
  );
}
