import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { ContactInfoPanel } from "@/components/contact/contact-info-panel";
import { ContactForm } from "@/components/contact/contact-form-card";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    `Get a free, no-obligation estimate for roofing and exterior projects in ${siteConfig.business.regionLabel}. Call or fill out our form today.`,
};

export default function ContactPage() {
  return (
    <main className="border-b border-border/40 bg-[radial-gradient(circle_at_top,hsl(0_72%_45%/0.1),transparent_50%),linear-gradient(180deg,hsl(0_0%_10%)_0%,hsl(0_0%_8%)_100%)] py-10 md:py-14">
      <Container>
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
            Contact Us
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
            Share your roofing or exterior needs and we&apos;ll follow up with a free estimate.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/40 bg-black/20 shadow-luxury">
          <ContactInfoPanel />
          <div className="h-px bg-linear-to-r from-transparent via-secondary/60 to-transparent" />
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}