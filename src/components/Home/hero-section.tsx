import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { BrandLink } from "@/components/ui/brand-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden py-24 md:py-32 lg:py-36"
    >
      {/* ✅ Background Image (SEO optimized alt) */}
      <div className="absolute inset-0">
        <Image
          src="/Images New/Hero.webp"
          alt="Roofing contractor working on residential roof in Essex County NJ"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <Container className="relative text-center">
        {/* ✅ Trust Badges */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {(["Certified", "Licensed", "Bonded", "Insured"] as const).map(
              (badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-widest text-primary shadow-lg ring-2 ring-white/40"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {badge}
                </span>
              ),
            )}
          </div>
        </Reveal>

        {/* ✅ MAIN H1 (CRITICAL SEO FIX) */}
        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-6 max-w-5xl font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Roofing Contractor in {siteConfig.business.regionLabel}
            <br />
            <span className="text-gradient-gold">
              Premium Roofing & Exterior Solutions
            </span>
          </h1>
        </Reveal>

        {/* ✅ SEO-OPTIMIZED SUBTEXT */}
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white md:text-xl">
            <BrandLink>Gutama Home Improvement</BrandLink> provides expert roof repair, roof
            replacement, siding, and chimney services in{" "}
            {siteConfig.business.regionLabel}. Trusted for residential and
            commercial projects with high-quality craftsmanship built to last.
          </p>
        </Reveal>

        {/* ✅ VALUE POINTS (KEYWORD SUPPORT + CONVERSION) */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
            <span>✔ Free Roof Inspections & Estimates</span>
            <span>✔ 5-Year Installation Warranty</span>
            <span>✔ Emergency Roof Repair Available</span>
            <span>✔ English & Español</span>
          </div>
        </Reveal>

        {/* ✅ CTA BUTTONS (IMPROVED TEXT) */}
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base font-semibold"
            >
              <Link href="#contact">
                Get Free Roofing Estimate
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-secondary/40 px-8 py-6 text-base font-semibold text-secondary hover:bg-secondary/10"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Roofing Expert
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}