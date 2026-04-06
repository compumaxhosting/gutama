
import { RoofRemovalBenefitsSection } from "@/components/services/roof-removal/benefits-section";
import { RoofRemovalCtaSection } from "@/components/services/roof-removal/cta-section";
import { RoofRemovalFaqSection } from "@/components/services/roof-removal/faq-section";
import { RoofRemovalHeroSection } from "@/components/services/roof-removal/hero-section";
import { RoofRemovalOverviewSection } from "@/components/services/roof-removal/overview-section";
import { RoofRemovalProcessSection } from "@/components/services/roof-removal/process-section";
import { RoofRemovalShowcaseSection } from "@/components/services/roof-removal/showcase-section";
import { RoofRemovalTestimonialSection } from "@/components/services/roof-removal/testimonial-section";



export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <RoofRemovalHeroSection />
      <RoofRemovalOverviewSection />
      <RoofRemovalBenefitsSection />
      <RoofRemovalProcessSection />
      <RoofRemovalShowcaseSection />
      <RoofRemovalTestimonialSection />
      <RoofRemovalFaqSection />
      <RoofRemovalCtaSection />
    </div>
  );
}
