import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { EmergencyRepairBenefitsSection } from "@/components/services/emergency-repair/benefits-section";
import { EmergencyRepairCtaSection } from "@/components/services/emergency-repair/cta-section";
import { EmergencyRepairFaqSection } from "@/components/services/emergency-repair/faq-section";
import { EmergencyRepairHeroSection } from "@/components/services/emergency-repair/hero-section";
import { EmergencyRepairOverviewSection } from "@/components/services/emergency-repair/overview-section";
import { EmergencyRepairProcessSection } from "@/components/services/emergency-repair/process-section";
import { EmergencyRepairShowcaseSection } from "@/components/services/emergency-repair/showcase-section";
import { EmergencyRepairTestimonialSection } from "@/components/services/emergency-repair/testimonial-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: `Emergency Repair Services | ${siteConfig.business.regionLabel}`,
  description: "Rapid-response emergency repairs for storm damage, leaks, and urgent exterior issues.",
  path: "/services/emergency-repair",
});

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <EmergencyRepairHeroSection />
      <EmergencyRepairOverviewSection />
      <EmergencyRepairBenefitsSection />
      <EmergencyRepairProcessSection />
      <EmergencyRepairShowcaseSection />
      <EmergencyRepairTestimonialSection />
      <EmergencyRepairFaqSection />
      <EmergencyRepairCtaSection />
    </div>
  );
}
