import { RoofingHeroSection } from "@/components/services/roofing/roofing-hero-section";
import { RoofingCategoriesSection } from "@/components/services/roofing/roofing-categories-section";
import { RoofingComparisonGuideSection } from "@/components/services/roofing/roofing-comparison-guide";
import { RoofingServiceAreasSection } from "@/components/services/roofing/roofing-service-areas";
import { RoofingFaqSection } from "@/components/services/roofing/roofing-faq-section";
import { RoofingCtaSection } from "@/components/services/roofing/roofing-cta-section";

export default function RoofingPage() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <RoofingHeroSection />
      <RoofingCategoriesSection />
      <RoofingComparisonGuideSection />
      <RoofingServiceAreasSection />
      <RoofingFaqSection />
      <RoofingCtaSection />
    </div>
  );
}
