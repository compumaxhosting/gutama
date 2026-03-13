import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { DormersBenefitsSection } from "@/components/services/dormers/benefits-section";
import { DormersCtaSection } from "@/components/services/dormers/cta-section";
import { DormersFaqSection } from "@/components/services/dormers/faq-section";
import { DormersHeroSection } from "@/components/services/dormers/hero-section";
import { DormersOverviewSection } from "@/components/services/dormers/overview-section";
import { DormersProcessSection } from "@/components/services/dormers/process-section";
import { DormersShowcaseSection } from "@/components/services/dormers/showcase-section";
import { DormersTestimonialSection } from "@/components/services/dormers/testimonial-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: `Dormer Installation | ${siteConfig.business.regionLabel}`,
  description: "Add natural light, headroom, and value with professionally built dormers.",
  path: "/services/dormers",
});

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <DormersHeroSection />
      <DormersOverviewSection />
      <DormersBenefitsSection />
      <DormersProcessSection />
      <DormersShowcaseSection />
      <DormersTestimonialSection />
      <DormersFaqSection />
      <DormersCtaSection />
    </div>
  );
}
