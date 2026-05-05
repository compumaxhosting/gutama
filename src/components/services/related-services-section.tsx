"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface RelatedService {
  name: string;
  slug: string;
  description: string;
}

const ALL_SERVICES: RelatedService[] = [
  {
    name: "Roof Repair",
    slug: "emergency-repair",
    description: "Fast and reliable roof repairs for emergencies and damage",
  },
  {
    name: "Roof Replacement",
    slug: "re-roofing",
    description: "Complete roof replacement with quality materials",
  },
  {
    name: "Flat Roof",
    slug: "flat-roof",
    description: "Specialized flat roof installation and repair",
  },
  {
    name: "Slate Roof",
    slug: "slate-roof",
    description: "Premium slate roofing solutions",
  },
  {
    name: "Siding",
    slug: "siding",
    description: "Durable siding installation and replacement",
  },
  {
    name: "Additions",
    slug: "additions",
    description: "Home additions and structural improvements",
  },
  {
    name: "Carpentry",
    slug: "carpentry",
    description: "Expert carpentry services for interior and exterior",
  },
  {
    name: "Chimney",
    slug: "chimney",
    description: "Chimney repair, cleaning, and maintenance",
  },
  {
    name: "Dormers",
    slug: "dormers",
    description: "Dormer installation and repair",
  },
  {
    name: "Gutters",
    slug: "gutters",
    description: "Gutter installation, repair, and maintenance",
  },
  {
    name: "Roof Removal",
    slug: "roof-removal",
    description: "Safe and efficient roof removal services",
  },
];

interface RelatedServicesSectionProps {
  currentServiceSlug: string;
}

export function RelatedServicesSection({
  currentServiceSlug,
}: RelatedServicesSectionProps) {
  const relatedServices = ALL_SERVICES.filter(
    (service) => service.slug !== currentServiceSlug
  );

  return (
    <Section className="bg-muted/20" aria-label="Other services we offer">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Explore More Services"
            title="Other Services We Offer"
            description="Browse our complete range of roofing and home improvement services"
          />
        </Reveal>

        <StaggerGroup
          className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.08}
        >
          {relatedServices.map((service) => (
            <StaggerItem key={service.slug}>
              <Link href={`/services/${service.slug}`}>
                <div className="glass-card group relative flex h-full flex-col border border-secondary/20 p-6 transition-all duration-300 hover:border-secondary/40 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground grow">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
