import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { FlatRoofBenefitsSection } from "@/components/services/flat-roof/benefits-section";
import { FlatRoofCtaSection } from "@/components/services/flat-roof/cta-section";
import { FlatRoofFaqSection } from "@/components/services/flat-roof/faq-section";
import { FlatRoofHeroSection } from "@/components/services/flat-roof/hero-section";
import { FlatRoofOverviewSection } from "@/components/services/flat-roof/overview-section";
import { FlatRoofProcessSection } from "@/components/services/flat-roof/process-section";
import { FlatRoofShowcaseSection } from "@/components/services/flat-roof/showcase-section";
import { FlatRoofTestimonialSection } from "@/components/services/flat-roof/testimonial-section";

export const metadata: Metadata = buildMetadata({
  title: `Flat Roof Installation & Repair | ${siteConfig.business.regionLabel}`,
  description: "Specialized flat roofing systems including TPO, EPDM, and modified bitumen.",
  path: "/services/flat-roof",
});

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <FlatRoofHeroSection />
      <FlatRoofOverviewSection />
      <FlatRoofBenefitsSection />
      <FlatRoofProcessSection />
      <FlatRoofShowcaseSection />
      <FlatRoofTestimonialSection />
      <FlatRoofFaqSection />
      <FlatRoofCtaSection />
    </div>
  );
}
