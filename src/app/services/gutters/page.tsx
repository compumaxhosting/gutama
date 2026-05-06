import { GuttersBenefitsSection } from "@/components/services/gutters/benefits-section";
import { GuttersCtaSection } from "@/components/services/gutters/cta-section";
import { GuttersFaqSection } from "@/components/services/gutters/faq-section";
import { GuttersHeroSection } from "@/components/services/gutters/hero-section";
import { GuttersOverviewSection } from "@/components/services/gutters/overview-section";
import { GuttersProcessSection } from "@/components/services/gutters/process-section";
import { GuttersShowcaseSection } from "@/components/services/gutters/showcase-section";
import { GuttersTestimonialSection } from "@/components/services/gutters/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";

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
      <RelatedServicesSection currentServiceSlug="gutters" />
      <GuttersCtaSection />
    </div>
  );
}
