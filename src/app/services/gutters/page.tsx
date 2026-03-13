import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { GuttersBenefitsSection } from "@/components/services/gutters/benefits-section";
import { GuttersCtaSection } from "@/components/services/gutters/cta-section";
import { GuttersFaqSection } from "@/components/services/gutters/faq-section";
import { GuttersHeroSection } from "@/components/services/gutters/hero-section";
import { GuttersOverviewSection } from "@/components/services/gutters/overview-section";
import { GuttersProcessSection } from "@/components/services/gutters/process-section";
import { GuttersShowcaseSection } from "@/components/services/gutters/showcase-section";
import { GuttersTestimonialSection } from "@/components/services/gutters/testimonial-section";

export const metadata: Metadata = buildMetadata({
  title: `Gutters Installation | ${siteConfig.business.regionLabel}`,
  description: "Seamless gutter installation and repair to protect your foundation and landscaping.",
  path: "/services/gutters",
});

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <GuttersHeroSection />
      <GuttersOverviewSection />
      <GuttersBenefitsSection />
      <GuttersProcessSection />
      <GuttersShowcaseSection />
      <GuttersTestimonialSection />
      <GuttersFaqSection />
      <GuttersCtaSection />
    </div>
  );
}
