
import { ReRoofingBenefitsSection } from "@/components/services/re-roofing/benefits-section";
import { ReRoofingCtaSection } from "@/components/services/re-roofing/cta-section";
import { ReRoofingFaqSection } from "@/components/services/re-roofing/faq-section";
import { ReRoofingHeroSection } from "@/components/services/re-roofing/hero-section";
import { ReRoofingOverviewSection } from "@/components/services/re-roofing/overview-section";
import { ReRoofingProcessSection } from "@/components/services/re-roofing/process-section";
import { ReRoofingShowcaseSection } from "@/components/services/re-roofing/showcase-section";
import { ReRoofingTestimonialSection } from "@/components/services/re-roofing/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";



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
      <RelatedServicesSection currentServiceSlug="re-roofing" />
      <ReRoofingCtaSection />
    </div>
  );
}
