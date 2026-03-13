import { Banknote, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-background" aria-hidden="true" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Ready to Upgrade
            <br />
            <span className="text-gradient-gold">Your Home?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Contact us today for a free estimate. Our team is ready to deliver premium results.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border-2 border-secondary/60 bg-secondary/10 px-6 py-5 shadow-lg">
            <div className="flex items-center justify-center gap-3">
              <Banknote className="h-7 w-7 shrink-0 text-secondary" />
              <p className="text-xl font-extrabold uppercase tracking-wide text-secondary">
                100% Financing Available
              </p>
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-muted-foreground">
              No money down — we make it easy to get started today and pay at your own pace.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8 py-6 text-base font-semibold">
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.phones.english}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary/40 px-8 py-6 text-base font-semibold text-secondary hover:bg-secondary/10">
              <a href={`tel:${siteConfig.phones.spanish}`}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.phones.spanish}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>English & Espanol Available</p>
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-secondary hover:text-secondary/80">
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
