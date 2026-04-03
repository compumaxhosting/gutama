import { Banknote, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { BrandLink } from "@/components/ui/brand-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden"
      aria-label="Contact roofing contractor"
    >
      <div
        className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-background"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <Reveal>
          {/* ✅ SEO-OPTIMIZED HEADING */}
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Get a Free Roofing Estimate in {siteConfig.business.regionLabel}
            <br />
            <span className="text-gradient-gold">Upgrade Your Home Today</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          {/* ✅ KEYWORD + LOCATION BOOST */}
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Contact <BrandLink>{siteConfig.business.name}</BrandLink> for expert roof repair, roof
            replacement, siding, and exterior services in{" "}
            {siteConfig.business.regionLabel}. We deliver reliable, high-quality
            results for residential and commercial properties.
          </p>
        </Reveal>

        {/* ✅ Hidden SEO boost */}
        <h2 className="sr-only">
          Roofing Contractor Essex County NJ – Free Estimate for Roof Repair,
          Roof Replacement, and Exterior Services
        </h2>

        <Reveal delay={0.12}>
          {/* 💰 Financing Box */}
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border-2 border-secondary/60 bg-secondary/10 px-6 py-5 shadow-lg">
            <div className="flex items-center justify-center gap-3">
              <Banknote className="h-7 w-7 shrink-0 text-secondary" />
              <p className="text-xl font-extrabold uppercase tracking-wide text-secondary">
                100% Financing Available
              </p>
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-muted-foreground">
              No money down — start your roofing project today and pay at your
              own pace.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {/* 📞 CTA BUTTONS (IMPROVED TEXT) */}
          <div className="mt-8 mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base font-semibold"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now (English)
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary/40 px-8 py-6 text-base font-semibold text-secondary hover:bg-secondary/10"
            >
              <a href={`tel:${siteConfig.phones.spanish}`}>
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora (Español)
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          {/* 📧 CONTACT INFO */}
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>English & Español Available</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-secondary hover:text-secondary/80"
            >
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
