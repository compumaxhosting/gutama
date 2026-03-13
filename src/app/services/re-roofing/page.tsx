import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { ReRoofingBenefitsSection } from "@/components/services/re-roofing/benefits-section";
import { ReRoofingCtaSection } from "@/components/services/re-roofing/cta-section";
import { ReRoofingFaqSection } from "@/components/services/re-roofing/faq-section";
import { ReRoofingHeroSection } from "@/components/services/re-roofing/hero-section";
import { ReRoofingOverviewSection } from "@/components/services/re-roofing/overview-section";
import { ReRoofingProcessSection } from "@/components/services/re-roofing/process-section";
import { ReRoofingShowcaseSection } from "@/components/services/re-roofing/showcase-section";
import { ReRoofingTestimonialSection } from "@/components/services/re-roofing/testimonial-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: `Expert Re-Roofing Solutions | ${siteConfig.business.regionLabel}`,
  description: "Premium re-roofing services using top-quality materials for lasting protection and curb appeal.",
  path: "/services/re-roofing",
});

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <ReRoofingHeroSection />
      <ReRoofingOverviewSection />
      <ReRoofingBenefitsSection />
      <ReRoofingProcessSection />
      <ReRoofingShowcaseSection />
      <ReRoofingTestimonialSection />
      <ReRoofingFaqSection />
      <ReRoofingCtaSection />
    </div>
  );
}
