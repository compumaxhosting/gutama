import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

export function AboutCta() {
  return (
    <Section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-background"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        {/* Eyebrow pill */}
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/40 px-5 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Let&apos;s Build Together
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.04}>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Ready to Work With a Team
            <br />
            <span className="text-gradient-gold">You Can Actually Trust?</span>
          </h2>
        </Reveal>

        {/* Body */}
        <Reveal delay={0.06}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Join over a thousand satisfied homeowners across {siteConfig.business.regionLabel} who
            chose {siteConfig.business.name} for quality that lasts.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8 py-6 text-base font-semibold">
              <Link href="/contact">
                Request a Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
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
                {siteConfig.phones.english}
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-muted-foreground">
            English &amp; Espa&ntilde;ol &middot;{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-secondary hover:text-secondary/80"
            >
              {siteConfig.email}
            </a>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
