import { SectionHeading } from "@/components/Home/section-heading";
import { featureIconMap } from "@/components/ui/icon-map";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { WhyChooseItem } from "@/types/site";
import { siteConfig } from "@/config/site";

const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    icon: "shield",
    title: "Licensed & Insured",
    description:
      "Trusted roofing contractor in Essex County NJ with full licensing and insurance coverage.",
  },
  {
    icon: "star",
    title: "Quality Workmanship",
    description:
      "Expert roof repair and replacement using durable materials built to last.",
  },
  {
    icon: "clock",
    title: "Emergency Repairs",
    description:
      "Fast response for roof leaks, storm damage, and urgent repairs.",
  },
  {
    icon: "dollar-sign",
    title: "Free Estimates",
    description: "Clear and honest roofing estimates with no obligation.",
  },
  {
    icon: "globe",
    title: "Bilingual Support",
    description:
      "English & Español communication for a smooth project experience.",
  },
];

export function WhyChooseSection() {
  return (
    <Section
      className="bg-muted/20"
      aria-label="Why choose our roofing services"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Trusted Roofing Contractor in ${siteConfig.business.regionLabel}`}
            description={`Providing reliable roof repair, replacement, and exterior services across ${siteConfig.business.regionLabel}.`}
          />
        </Reveal>

        {/* ✅ Hidden SEO boost */}
        <h2 className="sr-only">
          Roofing Contractor Essex County NJ – Roof Repair, Replacement,
          Emergency Services
        </h2>

        <StaggerGroup
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          delay={0.08}
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = featureIconMap[item.icon];
            return (
              <StaggerItem key={item.title}>
                <article className="glass-card border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>

                  <h3 className="font-serif text-base font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
