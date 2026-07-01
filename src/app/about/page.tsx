
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutStats } from "@/components/about/about-stats";
import { AboutValues } from "@/components/about/about-values";
import { AboutCertifications } from "@/components/about/about-certifications";
import { AboutCta } from "@/components/about/about-cta";
import { ServiceAreasSection } from "@/components/Home/service-areas-section";



export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutCertifications />
      <ServiceAreasSection />
      <AboutCta />
    </>
  );
}
