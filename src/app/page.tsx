import { AboutSection } from "@/components/Home/about-section";
import { BeforeAfterSection } from "@/components/Home/before-after-section";
import { CtaSection } from "@/components/Home/cta-section";
import { GallerySection } from "@/components/Home/gallery-section";
import { HeroSection } from "@/components/Home/hero-section";
import { PerksStrip } from "@/components/Home/perks-strip";
import { ServiceAreasSection } from "@/components/Home/service-areas-section";
import { ServicesSection } from "@/components/Home/services-section";
import { TestimonialsSection } from "@/components/Home/testimonials-section";
import { WhyChooseSection } from "@/components/Home/why-choose-section";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PerksStrip />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <WhyChooseSection />
      <BeforeAfterSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
