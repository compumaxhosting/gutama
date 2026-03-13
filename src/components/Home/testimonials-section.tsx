import Image from "next/image";
import { Star } from "lucide-react";

import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { Testimonial } from "@/types/site";

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael R.",
    location: "West Orange, NJ",
    text: "Gutama transformed our roof with incredible professionalism. The crew was clean, efficient, and delivered premium results.",
    rating: 5,
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Sandra M.",
    location: "Bloomfield, NJ",
    text: "After a storm, their team responded quickly and handled everything with care. Excellent communication and craftsmanship.",
    rating: 5,
    image: "/images/testimonial-2.jpg",
  },
  {
    name: "Carlos D.",
    location: "Newark, NJ",
    text: "Excelente servicio. Professional team, clear process, and a finished result we are proud of.",
    rating: 5,
    image: "/images/testimonial-3.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <Section className="bg-background">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Reviews" title="What Our Clients Say" />
        </Reveal>

        <StaggerGroup className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3" delay={0.1}>
          {TESTIMONIALS.map((item) => (
            <StaggerItem key={item.name}>
              <article className="glass-card border p-7">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={`${item.name}-${idx}`} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed text-foreground">&ldquo;{item.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image src={item.image} alt={item.name} width={48} height={48} className="h-12 w-12 rounded-full border-2 border-secondary/40 object-cover" />
                  <div>
                    <p className="font-serif font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
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
