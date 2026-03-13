import Image from "next/image";
import { Shield } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section id="about" className="bg-muted/20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Story"
            title="Built on Trust, Driven by Excellence"
            description={`${siteConfig.business.name} delivers premium roofing and exterior craftsmanship across ${siteConfig.business.regionLabel} with licensed, insured, and bilingual service.`}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card overflow-hidden border">
              <Image
                src="/images/about-team.jpg"
                alt={`${siteConfig.business.name} professional team`}
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 text-muted-foreground">
              <p>
                Every project reflects our commitment to clear communication, durable materials, and precision workmanship.
              </p>
              <p>
                From roofing and siding to emergency repairs, we treat each property with the same care and detail we would expect for our own homes.
              </p>
              <div className="glass-card flex items-start gap-4 border border-secondary/40 p-5">
                <Shield className="mt-0.5 h-6 w-6 text-secondary" />
                <div>
                  <p className="font-serif text-lg font-semibold text-foreground">Licensed & Fully Insured</p>
                  <p className="text-sm">Complete peace of mind on every project.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
