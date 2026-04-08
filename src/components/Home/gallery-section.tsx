import Image from "next/image";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { BrandLink } from "@/components/ui/brand-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { GalleryItem } from "@/types/site";

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Roof Replacement in Essex County NJ",
    image: "/Images New/gallery-roof-1.webp",
    category: "roofing",
  },
  {
    title: "Architectural Shingle Roofing Installation",
    image: "/Images New/gallery-roof-2.webp",
    category: "roofing",
  },
  {
    title: "Storm Damage Roof Repair",
    image: "/Images New/service-dormers.webp",
    category: "roofing",
  },
  {
    title: "Siding Installation & Exterior Upgrade",
    image: "/Images New/service-siding.webp",
    category: "siding",
  },
  {
    title: "Chimney Repair & Restoration",
    image: "/Images New/gallery-chimney-1.webp",
    category: "chimney",
  },
  {
    title: "Custom Home Addition Project",
    image: "/Images New/service-additions.webp",
    category: "additions",
  },
];

export function GallerySection() {
  return (
    <Section
      id="gallery"
      className="bg-background"
      aria-label="Roofing and exterior project gallery"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Project Gallery"
            title="Roofing & Exterior Projects in Essex County NJ"
            description={
              <>
                Explore recent roof replacement, siding installation, chimney repair, and exterior
                renovation projects completed by <BrandLink>Gutama Home Improvement</BrandLink>
                across Essex County, NJ.
              </>
            }
          />
        </Reveal>

        {/* ✅ HIDDEN SEO BOOST */}
        <h2 className="sr-only">
          Roof Replacement, Roof Repair, Siding, and Chimney Projects in Essex
          County NJ
        </h2>

        <StaggerGroup
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.08}
        >
          {GALLERY_ITEMS.map((item) => (
            <StaggerItem key={item.image}>
              <article className="glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={`${item.title} by roofing contractor in Essex County NJ`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={60}
                  />
                </div>

                <div className="p-4">
                  {/* ✅ CATEGORY WITH CONTEXT */}
                  <p className="text-xs uppercase tracking-[0.18em] text-secondary">
                    {item.category} project
                  </p>

                  {/* ✅ KEYWORD-ENHANCED TITLE */}
                  <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
