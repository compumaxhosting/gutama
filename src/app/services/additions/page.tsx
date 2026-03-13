import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { AdditionsBenefitsSection } from "@/components/services/additions/benefits-section";
import { AdditionsCtaSection } from "@/components/services/additions/cta-section";
import { AdditionsFaqSection } from "@/components/services/additions/faq-section";
import { AdditionsHeroSection } from "@/components/services/additions/hero-section";
import { AdditionsOverviewSection } from "@/components/services/additions/overview-section";
import { AdditionsProcessSection } from "@/components/services/additions/process-section";
import { AdditionsShowcaseSection } from "@/components/services/additions/showcase-section";
import { AdditionsTestimonialSection } from "@/components/services/additions/testimonial-section";

export const metadata: Metadata = buildMetadata({
  title: `Home Additions | ${siteConfig.business.regionLabel}`,
  description:
    "Architect-led home additions with full permitting and premium craftsmanship across Essex County, New Jersey.",
  path: "/services/additions",
});

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <AdditionsHeroSection />
      <AdditionsOverviewSection />
      <AdditionsBenefitsSection />
      <AdditionsProcessSection />
      <AdditionsShowcaseSection />
      <AdditionsTestimonialSection />
      <AdditionsFaqSection />
      <AdditionsCtaSection />
    </div>
  );
}
