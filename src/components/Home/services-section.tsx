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
          <StaggerItem>
            <Link href="/services/roof-removal" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-roof-removal.jpg"
                    alt="Roof Removal"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Layers className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Roof Removal</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Complete tear-off and removal of old roofing materials with expert precision and thorough cleanup.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/re-roofing" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-re-roofing.jpg"
                    alt="Re-Roofing"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Home className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Re-Roofing</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Premium re-roofing services using top-quality materials for lasting protection and curb appeal.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/flat-roof" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-flat-roof.jpg"
                    alt="Flat Roof"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Square className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Flat Roof</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Specialized flat roofing systems including TPO, EPDM, and modified bitumen for commercial and residential.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/slate-roof" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-slate-roof.jpg"
                    alt="Slate Roof"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Diamond className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Slate Roof</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Beautiful, timeless slate roofing installation and repair by experienced craftsmen.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/chimney" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-chimney.jpg"
                    alt="Chimney"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Flame className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Chimney</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Complete chimney repair, rebuilding, flashing, and waterproofing services.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/siding" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-siding.jpg"
                    alt="Siding"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <PanelTop className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Siding</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Transform your home&apos;s exterior with premium vinyl, fiber cement, or wood siding installation.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/carpentry" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-carpentry.jpg"
                    alt="Carpentry"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Hammer className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Carpentry</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Skilled structural and finish carpentry for repairs, renovations, and custom projects.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/additions" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-additions.jpg"
                    alt="Additions"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Building2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Additions</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Expand your living space with expertly built home additions that blend seamlessly with your existing home.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/dormers" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-dormers.jpg"
                    alt="Dormers"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Triangle className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Dormers</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Add natural light, headroom, and value to your home with professionally built dormers.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/gutters" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-gutters.jpg"
                    alt="Gutters"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <Droplets className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Gutters</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    Seamless gutter installation and repair to protect your home&apos;s foundation and landscaping.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link href="/services/emergency-repair" className={`group block ${cardClassName ? "h-full" : ""}`.trim()}>
              <article className={`glass-card overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury ${cardClassName}`.trim()}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/service-emergency.jpg"
                    alt="Emergency Repair"
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                    <AlertTriangle className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Emergency Repair</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${descriptionClampClassName}`.trim()}>
                    24/7 emergency repair services for storm damage, leaks, and urgent home exterior issues.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {ctaLabel}
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
