import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Layers,
  Diamond,
  Square,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function RoofingCategoriesSection() {
  const services = [
    {
      id: "roof-repair",
      title: "Roof Repair",
      description:
        "We repair leaks, damaged shingles, flashing issues, and storm-related roof damage to help protect your home.",
      href: "/services/roof-repair",
      image: "/images/service-roof-removal.webp",
      alt: "Roof repair service in Essex County NJ",
      icon: Home,
    },
    {
      id: "roof-replacement",
      title: "Roof Replacement & Re-Roofing",
      description:
        "When repairs are no longer enough, we install durable roofing systems designed for long-term protection and curb appeal.",
      href: "/services/re-roofing",
      image: "/images/service-re-roofing.webp",
      alt: "Roof replacement and re-roofing service in Essex County NJ",
      icon: Layers,
    },
    {
      id: "flat-roofing",
      title: "Flat Roofing",
      description:
        "We install and repair low-slope and flat roofing systems, including EPDM and TPO, for residential and commercial properties.",
      href: "/services/flat-roof",
      image: "/images/service-flat-roof.webp",
      alt: "Flat roofing service in Essex County NJ",
      icon: Square,
    },
    {
      id: "slate-roofing",
      title: "Slate Roofing",
      description:
        "Our team provides slate roof repair, replacement, and restoration for properties that require long-lasting, traditional roofing materials.",
      href: "/services/slate-roof",
      image: "/images/service-slate-roof.webp",
      alt: "Slate roofing service in Essex County NJ",
      icon: Diamond,
    },
    {
      id: "roof-tear-off",
      title: "Roof Tear-Off",
      description:
        "We safely remove old roofing materials and inspect the underlying decking before installing a new roof system.",
      href: "/services/roof-removal",
      image: "/images/service-roof-removal.webp",
      alt: "Roof tear-off service in Essex County NJ",
      icon: Layers,
    },
  ];

  return (
    <section id="roofing-categories" className="relative bg-background py-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_top] from-secondary/5 via-transparent to-transparent" />

      <Container className="relative">
        {/* Intro */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Roofing Services
            </p>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Reliable Roofing for Homes &amp; Businesses
            </h2>

            <div className="gold-divider mb-5 mt-5" />

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Gutama Home Improvement provides professional roofing services
              throughout{" "}
              <strong className="text-foreground">Essex County, NJ</strong>.
              From roof repairs and complete replacements to flat and slate
              roofing, our licensed and insured team delivers dependable
              workmanship and durable roofing solutions.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether your roof has leaks, storm damage, missing shingles, or
              signs of aging, we can inspect the problem and recommend the right
              solution for your property.
            </p>
          </div>
        </Reveal>

        {/* Services */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Our Roofing Services
              </h2>

              <div className="gold-divider mb-5 mt-4" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.id}
                    className="glass-card group overflow-hidden border border-border/40 transition-all duration-500 hover:border-secondary/40 hover:shadow-luxury"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={75}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/90 shadow-lg">
                        <Icon className="h-5 w-5 text-amber" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
