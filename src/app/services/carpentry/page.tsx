import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { CarpentryBenefitsSection } from "@/components/services/carpentry/benefits-section";
import { CarpentryCtaSection } from "@/components/services/carpentry/cta-section";
import { CarpentryFaqSection } from "@/components/services/carpentry/faq-section";
import { CarpentryHeroSection } from "@/components/services/carpentry/hero-section";
import { CarpentryOverviewSection } from "@/components/services/carpentry/overview-section";
import { CarpentryProcessSection } from "@/components/services/carpentry/process-section";
import { CarpentryShowcaseSection } from "@/components/services/carpentry/showcase-section";
import { CarpentryTestimonialSection } from "@/components/services/carpentry/testimonial-section";

export const metadata: Metadata = buildMetadata({
  title: `Expert Carpentry Services | ${siteConfig.business.regionLabel}`,
  description: "Skilled structural and finish carpentry for repairs and renovations.",
  path: "/services/carpentry",
});

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <CarpentryHeroSection />
      <CarpentryOverviewSection />
      <CarpentryBenefitsSection />
      <CarpentryProcessSection />
      <CarpentryShowcaseSection />
      <CarpentryTestimonialSection />
      <CarpentryFaqSection />
      <CarpentryCtaSection />
    </div>
  );
}
