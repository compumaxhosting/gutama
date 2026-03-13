import Image from "next/image";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { GalleryItem } from "@/types/site";

const GALLERY_ITEMS: GalleryItem[] = [
  { title: "Roof Replacement", image: "/images/gallery-roof-1.jpg", category: "roofing" },
  { title: "Architectural Shingles", image: "/images/gallery-roof-2.jpg", category: "roofing" },
  { title: "Storm Repair", image: "/images/gallery-roof-3.jpg", category: "roofing" },
  { title: "Siding Refresh", image: "/images/gallery-siding-1.jpg", category: "siding" },
  { title: "Chimney Restoration", image: "/images/gallery-chimney-1.jpg", category: "chimney" },
  { title: "Home Addition", image: "/images/gallery-addition-1.jpg", category: "additions" },
];

export function GallerySection() {
  return (
    <Section id="gallery" className="bg-background">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Project Gallery"
            title="Recent Transformations"
            description="A look at completed roofing and exterior work delivered by our team."
          />
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" delay={0.08}>
          {GALLERY_ITEMS.map((item) => (
            <StaggerItem key={item.image}>
              <article className="glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40">
                <div className="relative h-64">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-secondary">{item.category}</p>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
