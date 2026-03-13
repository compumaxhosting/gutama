import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/Home/section-heading";
import { serviceIconMap } from "@/components/ui/icon-map";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { services } from "@/data/services";

type ServicesSectionProps = {
  id?: string;
  showHeading?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  descriptionClampClassName?: string;
  cardClassName?: string;
};

export function ServicesSection({
  id = "services",
  showHeading = true,
  eyebrow = "What We Do",
  title = "Our Services",
  description = "Comprehensive roofing and exterior solutions tailored to your needs.",
  ctaLabel = "Learn More",
  descriptionClampClassName = "line-clamp-2",
  cardClassName = "",
}: ServicesSectionProps = {}) {
  return (
    <Section id={id} className="bg-background">
      <Container>
        {showHeading ? (
          <Reveal>
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </Reveal>
        ) : null}

        <StaggerGroup className={`${showHeading ? "mt-12" : ""} grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`.trim()} delay={0.08}>
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon];

            return (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
                  <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.shortTitle}
                        fill
                        quality={60}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                      <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-semibold text-foreground">{service.shortTitle}</h3>
                      <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>{service.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                        {ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
