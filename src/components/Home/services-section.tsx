import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Diamond,
  Droplets,
  Flame,
  Hammer,
  Home,
  Layers,
  PanelTop,
  Square,
  Triangle,
} from "lucide-react";

import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

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
  
 
  descriptionClampClassName = "line-clamp-2",
  cardClassName = "",
}: ServicesSectionProps = {}) {
  return (
    <Section id={id} className="bg-background">
      <Container>
        {showHeading ? (
          <Reveal>
            <SectionHeading
              eyebrow={eyebrow}
              title="Roofing & Exterior Services in Essex County NJ"
              description="We provide roof repair, roof replacement, siding, chimney, and exterior services for residential and commercial properties across Essex County, NJ."
            />
          </Reveal>
        ) : null}

        <StaggerGroup
          className={`${showHeading ? "mt-12" : ""} grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`.trim()}
          delay={0.08}
        >
          <StaggerItem>
            <Link
              href="/services/roof-removal"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Roof removal service in Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-roof-removal.webp"
                    alt="Roof removal and tear-off service in Essex County NJ by professional roofing contractor"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Layers className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SEO-OPTIMIZED TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Roof Removal & Tear-Off
                  </h3>

                  {/* ✅ CLEAN + KEYWORD SUPPORT */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Professional roof removal services in Essex County NJ with
                    safe tear-off and complete cleanup.
                  </p>

                  {/* ✅ BETTER CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/services/re-roofing"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Roof replacement service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-re-roofing.webp"
                    alt="Roof replacement in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Home className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Roof Replacement
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Professional roof replacement in Essex County NJ with
                    durable materials and clean installation.
                  </p>

                  {/* ✅ SAME CTA SIZE */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/services/flat-roof"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Flat roofing service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-flat-roof.webp"
                    alt="Flat roofing service in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Square className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Flat Roofing
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Flat roofing in Essex County NJ using TPO, EPDM, and durable
                    materials for long-lasting performance.
                  </p>

                  {/* ✅ SAME CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link
              href="/services/slate-roof"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Slate roofing service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-slate-roof.webp"
                    alt="Slate roofing service in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Diamond className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Slate Roofing
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Slate roofing in Essex County NJ with durable materials and
                    expert installation for long-lasting results.
                  </p>

                  {/* ✅ SAME CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/services/chimney"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Chimney repair service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-chimney.webp"
                    alt="Chimney repair in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Flame className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Chimney Repair
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Chimney repair in Essex County NJ including flashing,
                    sealing, and waterproof protection for lasting safety.
                  </p>

                  {/* ✅ SAME CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/services/siding"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Siding installation service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-siding.webp"
                    alt="Siding installation in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <PanelTop className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Siding Installation
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Siding installation in Essex County NJ using vinyl, fiber
                    cement, and durable exterior materials.
                  </p>

                  {/* ✅ SAME CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/services/carpentry"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Exterior carpentry service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-carpentry.webp"
                    alt="Exterior carpentry service in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Hammer className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Exterior Carpentry
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Exterior carpentry in Essex County NJ for repairs,
                    renovations, and durable custom woodwork projects.
                  </p>

                  {/* ✅ SAME CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/services/dormers"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Dormer installation service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-dormers.webp"
                    alt="Dormer installation in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Triangle className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Dormer Installation
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Dormer installation in Essex County NJ to add natural light,
                    headroom, and value to your home.
                  </p>

                  {/* ✅ SAME CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/services/additions"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Home additions service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-additions.webp"
                    alt="Home additions in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Building2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Home Additions
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Home additions in Essex County NJ designed to expand space
                    with seamless integration and lasting quality.
                  </p>

                  {/* ✅ SAME CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/services/gutters"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Gutter installation service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-gutters.webp"
                    alt="Gutter installation in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Droplets className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Gutter Installation
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Gutter installation in Essex County NJ to protect
                    foundations and manage water flow efficiently.
                  </p>

                  {/* ✅ SAME CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link
              href="/services/emergency-repair"
              className={`group block ${cardClassName ? "h-full" : ""}`.trim()}
              aria-label="Emergency roof repair service Essex County NJ"
            >
              <article
                className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-emergency.webp"
                    alt="Emergency roof repair in Essex County NJ"
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <AlertTriangle className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  {/* ✅ SAME SIZE TITLE */}
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Emergency Repair
                  </h3>

                  {/* ✅ SAME LENGTH DESCRIPTION */}
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}
                  >
                    Emergency roof repair in Essex County NJ for leaks, storm
                    damage, and urgent exterior issues.
                  </p>

                  {/* ✅ SAME CTA */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </Section>
  );
}

