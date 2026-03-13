import Image from "next/image";

import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { BeforeAfterItem } from "@/types/site";

const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    title: "Roof Transformation",
    beforeImage: "/images/before-roof.jpg",
    afterImage: "/images/after-roof.jpg",
  },
  {
    title: "Siding Upgrade",
    beforeImage: "/images/before-siding.jpg",
    afterImage: "/images/after-siding.jpg",
  },
  {
    title: "Flat Roof Replacement",
    beforeImage: "/images/before-flat.jpg",
    afterImage: "/images/after-flat.jpg",
  },
];

export function BeforeAfterSection() {
  return (
    <Section className="bg-background">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Results" title="Before & After" />
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3" delay={0.1}>
          {BEFORE_AFTER_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <article className="glass-card overflow-hidden border">
                <div className="grid grid-cols-2">
                  <div className="relative h-48">
                    <Image src={item.beforeImage} alt={`Before ${item.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                    <span className="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">BEFORE</span>
                  </div>
                  <div className="relative h-48">
                    <Image src={item.afterImage} alt={`After ${item.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                    <span className="absolute left-2 top-2 rounded bg-secondary px-2 py-1 text-xs font-bold text-secondary-foreground">AFTER</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-base font-semibold text-foreground">{item.title}</h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
