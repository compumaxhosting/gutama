import { DormersBenefitsSection } from "@/components/services/dormers/benefits-section";
import { DormersCtaSection } from "@/components/services/dormers/cta-section";
import { DormersFaqSection } from "@/components/services/dormers/faq-section";
import { DormersHeroSection } from "@/components/services/dormers/hero-section";
import { DormersOverviewSection } from "@/components/services/dormers/overview-section";
import { DormersProcessSection } from "@/components/services/dormers/process-section";
import { DormersShowcaseSection } from "@/components/services/dormers/showcase-section";
import { DormersTestimonialSection } from "@/components/services/dormers/testimonial-section";

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <DormersHeroSection />
      <DormersOverviewSection />
      <DormersBenefitsSection />
      <DormersProcessSection />
      <DormersShowcaseSection />
      <DormersTestimonialSection />
      <DormersFaqSection />
      <DormersCtaSection />
    </div>
  );
}
