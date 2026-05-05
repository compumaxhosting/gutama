import { ChimneyBenefitsSection } from "@/components/services/chimney/benefits-section";
import { ChimneyCtaSection } from "@/components/services/chimney/cta-section";
import { ChimneyFaqSection } from "@/components/services/chimney/faq-section";
import { ChimneyHeroSection } from "@/components/services/chimney/hero-section";
import { ChimneyOverviewSection } from "@/components/services/chimney/overview-section";
import { ChimneyProcessSection } from "@/components/services/chimney/process-section";
import { ChimneyShowcaseSection } from "@/components/services/chimney/showcase-section";
import { ChimneyTestimonialSection } from "@/components/services/chimney/testimonial-section";
import { RelatedServicesSection } from "@/components/services/related-services-section";

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <ChimneyHeroSection />
      <ChimneyOverviewSection />
      <ChimneyBenefitsSection />
      <ChimneyProcessSection />
      <ChimneyShowcaseSection />
      <ChimneyTestimonialSection />
      <ChimneyFaqSection />
      <RelatedServicesSection currentServiceSlug="chimney" />
      <ChimneyCtaSection />
    </div>
  );
}
