import Image from "next/image";
import { Star } from "lucide-react";

import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { Testimonial } from "@/types/site";
import { siteConfig } from "@/config/site";

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael R.",
    location: "West Orange, NJ",
    text: "Gutama transformed our roof with incredible professionalism. The roof replacement was done efficiently with high-quality workmanship.",
    rating: 5,
    image: "/Images New/testimonial-1.webp",
  },
  {
    name: "Sandra M.",
    location: "Bloomfield, NJ",
    text: "After a storm, their team handled our roof repair quickly and professionally. Great communication and reliable service.",
    rating: 5,
    image: "/Images New/testimonial-2.webp",
  },
  {
    name: "Carlos D.",
    location: "Newark, NJ",
    text: "Excelente servicio. Professional roofing team, smooth process, and excellent final results for our home.",
    rating: 5,
    image: "/Images New/testimonial-3.webp",
  },
];

export function TestimonialsSection() {
  return (
    <Section
      className="bg-background"
      aria-label="Customer reviews for roofing services"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title={`Trusted Roofing Contractor Reviews in ${siteConfig.business.regionLabel}`}
            description={`See what homeowners across ${siteConfig.business.regionLabel} say about our roof repair, roof replacement, and exterior services.`}
          />
        </Reveal>

        {/* ✅ Hidden SEO boost */}
        <h2 className="sr-only">
          Roofing Contractor Reviews Essex County NJ – Roof Repair, Roof
          Replacement Testimonials
        </h2>

        <StaggerGroup
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
          delay={0.1}
        >
          {TESTIMONIALS.map((item) => (
            <StaggerItem key={item.name}>
              <article className="glass-card border p-7">
                {/* ⭐ Rating */}
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={`${item.name}-${idx}`}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* 💬 Review Text (SEO enhanced but natural) */}
                <p className="text-sm italic leading-relaxed text-foreground">
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* 👤 User */}
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={`Customer review from ${item.name} in ${item.location}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border-2 border-secondary/40 object-cover"
                  />
                  <div>
                    <p className="font-serif font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.location}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
