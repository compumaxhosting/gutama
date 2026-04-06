import { SlateRoofBenefitsSection } from "@/components/services/slate-roof/benefits-section";
import { SlateRoofCtaSection } from "@/components/services/slate-roof/cta-section";
import { SlateRoofFaqSection } from "@/components/services/slate-roof/faq-section";
import { SlateRoofHeroSection } from "@/components/services/slate-roof/hero-section";
import { SlateRoofOverviewSection } from "@/components/services/slate-roof/overview-section";
import { SlateRoofProcessSection } from "@/components/services/slate-roof/process-section";
import { SlateRoofShowcaseSection } from "@/components/services/slate-roof/showcase-section";
import { SlateRoofTestimonialSection } from "@/components/services/slate-roof/testimonial-section";

export default function Page() {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <SlateRoofHeroSection />
      <SlateRoofOverviewSection />
      <SlateRoofBenefitsSection />
      <SlateRoofProcessSection />
      <SlateRoofShowcaseSection />
      <SlateRoofTestimonialSection />
      <SlateRoofFaqSection />
      <SlateRoofCtaSection />
    </div>
  );
}
