import { SectionHeading } from "@/components/Home/section-heading";
import { featureIconMap } from "@/components/ui/icon-map";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { WhyChooseItem } from "@/types/site";

const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    icon: "shield",
    title: "Licensed & Fully Insured",
    description: "Complete peace of mind with proper licensing and insurance coverage.",
  },
  {
    icon: "star",
    title: "Quality Guaranteed",
    description: "We stand behind every project with high standards and proven workmanship.",
  },
  {
    icon: "clock",
    title: "Emergency Repair",
    description: "Rapid support for urgent storm damage and active leak conditions.",
  },
  {
    icon: "dollar-sign",
    title: "Free Estimates",
    description: "Clear, no-obligation estimates with transparent recommendations.",
  },
  {
    icon: "globe",
    title: "English & Espanol",
    description: "Bilingual communication for smooth coordination from start to finish.",
  },
];

export function WhyChooseSection() {
  return (
    <Section className="bg-muted/20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Why Us" title="Why Choose Gutama" />
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" delay={0.08}>
          {WHY_CHOOSE_US.map((item) => {
            const Icon = featureIconMap[item.icon];
            return (
              <StaggerItem key={item.title}>
                <article className="glass-card border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
