import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg3.png"
          alt="Residential roofing and exterior craftsmanship showcase"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <Container className="relative text-center">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {(["Certified", "Licensed", "Bonded", "Insured"] as const).map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-widest text-primary shadow-lg ring-2 ring-white/40"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-6 max-w-5xl font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Premium Roofing &
            <br />
            <span className="text-gradient-gold">Exterior Solutions</span>
            <br />
            Built to Last
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#FFFFFF] md:text-xl">
            Trusted across {siteConfig.business.regionLabel}, delivering high-craftsmanship service for residential and commercial properties.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8 py-6 text-base font-semibold">
              <Link href="#contact">
                Get Free Estimate
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-secondary/40 px-8 py-6 text-base font-semibold text-secondary hover:bg-secondary/10">
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {siteConfig.phones.english}
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
