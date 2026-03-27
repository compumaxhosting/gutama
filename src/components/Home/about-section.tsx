import Image from "next/image";
import { Shield } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { BrandLink } from "@/components/ui/brand-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section
      id="about"
      className="bg-muted/20"
      aria-label="About Gutama Home Improvement roofing contractor"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About Our Company"
            title={`Trusted Roofing Contractor in ${siteConfig.business.regionLabel}`}
            description={
              <>
                <BrandLink>{siteConfig.business.name}</BrandLink> provides professional roof repair,
                roof replacement, siding, and exterior services across{" "}
                {siteConfig.business.regionLabel}. Our licensed and insured team delivers
                high-quality craftsmanship for residential and commercial properties.
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card overflow-hidden border">
              <Image
                src="/Images New/service-additions.webp"
                alt={`Roofing contractor team working on residential roofing project in ${siteConfig.business.regionLabel}`}
                width={1200}
                height={800}
                className="h-64 w-full object-cover sm:h-72 lg:h-96"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 text-muted-foreground">
              {/* ✅ SEO-OPTIMIZED CONTENT */}
              <p>
                At <BrandLink>{siteConfig.business.name}</BrandLink>, every project is built on
                trust,
                clear communication, and expert workmanship. As a leading
                roofing contractor in {siteConfig.business.regionLabel}, we
                specialize in durable roofing systems designed to protect your
                home and increase property value.
              </p>

              <p>
                From roof repair and roof replacement to siding installation,
                chimney repair, and emergency roofing services, our team
                delivers reliable solutions tailored to both residential and
                commercial properties.
              </p>

              {/* ✅ TRUST BLOCK */}
              <div className="glass-card flex items-start gap-4 border border-secondary/40 p-5">
                <Shield className="mt-0.5 h-6 w-6 text-secondary" />
                <div>
                  <p className="font-serif text-lg font-semibold text-foreground">
                    Licensed & Fully Insured Roofing Experts
                  </p>
                  <p className="text-sm">
                    Serving {siteConfig.business.regionLabel} with complete
                    peace of mind, safety, and guaranteed workmanship.
                  </p>
                </div>
              </div>

              {/* ✅ HIDDEN SEO BOOST */}
              <h2 className="sr-only">
                Roof Repair, Roof Replacement, and Exterior Services in{" "}
                {siteConfig.business.regionLabel}
              </h2>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
