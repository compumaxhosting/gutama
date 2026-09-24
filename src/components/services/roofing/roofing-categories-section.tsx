import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Diamond,
  Home,
  Layers,
  Square,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function RoofingCategoriesSection() {
  const categories = [
    {
      id: "roof-removal",
      index: "CATEGORY 01",
      title: "Roof Removal & Tear-Off",
      tagline: "Deck-Level Teardown & Structural Substrate Inspection",
      href: "/services/roof-removal",
      image: "/images/service-roof-removal.webp",
      alt: "Roof removal and tear-off service in Essex County NJ",
      icon: Layers,
      description:
        "A full roof tear-off strips away all existing layers of damaged, decayed, or multiple-layered shingles down to the wooden decking. In New Jersey, building codes prohibit more than two layers of roofing due to critical dead-load weight limits. A complete removal is essential to uncover hidden rot, water-damaged rafters, and structural sagging that overlaying cannot fix.",
      highlights: [
        "100% complete multi-layer shingle and felt paper tear-off",
        "Comprehensive structural plywood and board substrate inspection",
        "Removal and replacement of rotten decking and water-damaged rafters",
        "Heavy-duty tarping, landscape barriers, and continuous magnetic nail sweep",
        "Preparation of a perfectly clean, dry, flat substrate for the new roof",
      ],
      idealFor:
        "Roofs with multiple shingle layers, spongy or sagging decking, widespread chronic leaks, or moisture saturation.",
      badge: "Mandatory for 2+ Layers in NJ",
    },
    {
      id: "re-roofing",
      index: "CATEGORY 02",
      title: "Re-Roofing & Replacement",
      tagline: "Complete Architectural Shingle Systems Engineered for Longevity",
      href: "/services/re-roofing",
      image: "/images/service-re-roofing.webp",
      alt: "Roof replacement and re-roofing service in Essex County NJ",
      icon: Home,
      description:
        "Re-roofing provides your property with a fortified, weather-tight defense against Essex County's harsh freeze-thaw cycles, torrential rain, and nor'easters. Whether conducting a full replacement following tear-off or a code-compliant single overlay, we install multi-layer defense systems using top-grade architectural shingles, synthetic underlayment, and high-temp ice & water barriers.",
      highlights: [
        "Premium architectural and dimensional fiberglass asphalt shingles",
        "High-performance synthetic underlayment replacing obsolete tar paper",
        "Self-adhering Ice & Water Shield installed at eaves, valleys, and rakes",
        "Seamless continuous ridge ventilation and attic intake airflow balance",
        "Heavy-gauge aluminum and copper drip edge and step flashing",
      ],
      idealFor:
        "Aging roofs reaching the 20-25 year mark, curling or missing shingles, granule loss, or modern exterior value upgrades.",
      badge: "Most Popular Residential Choice",
    },
    {
      id: "flat-roof",
      index: "CATEGORY 03",
      title: "Flat Roof Systems",
      tagline: "Commercial & Residential Low-Slope Waterproofing Membranes",
      href: "/services/flat-roof",
      image: "/images/service-flat-roof.webp",
      alt: "Flat roof installation and repair in Essex County NJ",
      icon: Square,
      description:
        "Flat and low-slope roofing systems require specialized materials that form an impenetrable waterproof barrier against ponding water. We engineer high-durability solutions for Essex County brownstones, residential additions, multi-family homes, and commercial buildings utilizing puncture-resistant EPDM rubber, heat-welded TPO, and multi-ply modified bitumen membranes.",
      highlights: [
        "EPDM synthetic rubber membrane installation with bonded seams",
        "TPO (Thermoplastic Polyolefin) heat-welded reflective white roofing",
        "SBS/APP modified bitumen torch-down and cold-adhesive systems",
        "Custom tapered ISO insulation for positive water drainage and thermal efficiency",
        "Precision parapet wall flashing, coping cap seals, and industrial scuppers",
      ],
      idealFor:
        "Residential row houses, flat garage roofs, home additions, commercial storefronts, and multi-tenant buildings.",
      badge: "Low-Slope & Commercial Grade",
    },
    {
      id: "slate-roof",
      index: "CATEGORY 04",
      title: "Slate Roofing",
      tagline: "Historic Preservation & Timeless Natural Stone Craftsmanship",
      href: "/services/slate-roof",
      image: "/images/service-slate-roof.webp",
      alt: "Slate roofing installation and restoration in Essex County NJ",
      icon: Diamond,
      description:
        "Slate roofing represents the pinnacle of architectural elegance, fire resistance, and longevity, often lasting upwards of 75 to 150 years. Preserving historic estates in Montclair, South Orange, Newark, and across Essex County requires specialized artisan techniques, custom hand-cut stone replacements, and hand-soldered non-corrosive copper flashings.",
      highlights: [
        "Natural quarry slate tile repair, selective replacement, and new installs",
        "Hand-soldered copper valleys, chimney crickets, dormers, and ridges",
        "Solid brass or copper roofing nails to prevent premature fastener failure",
        "Structural load calculations and authentic historic color matching",
        "Synthetic slate alternatives available for lighter weight structural profiles",
      ],
      idealFor:
        "Historic homes, Victorian and Tudor residences, churches, prestige estates, and luxury architectural properties.",
      badge: "75–150 Year Lifespan",
    },
  ];

  return (
    <section id="roofing-categories" className="relative py-24 bg-background">
      <div className="absolute inset-0 bg-radial-[ellipse_at_top] from-secondary/5 via-transparent to-transparent pointer-events-none" />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Core Specialties
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our 4 Roofing Service Categories
            </h2>
            <div className="gold-divider mt-5 mb-5" />
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Every roof has distinct architectural requirements, pitch geometry, and structural wear.
              Explore our four specialized roofing categories to understand the scope, technology, and execution we bring to every Essex County project.
            </p>
          </div>
        </Reveal>

        {/* Categories Grid */}
        <div className="mt-16 space-y-16">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isReversed = i % 2 === 1;

            return (
              <div
                key={cat.id}
                className="glass-card overflow-hidden border border-border/40 transition-all duration-500 hover:border-secondary/40 hover:shadow-luxury"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? "lg:grid-flow-dense" : ""
                    }`}
                >
                  {/* Visual Side */}
                  <div
                    className={`relative h-80 sm:h-96 lg:h-full min-h-90 lg:col-span-5 ${isReversed ? "lg:col-start-8" : ""
                      }`}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      quality={75}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent lg:hidden" />

                    {/* Floating Pill */}
                    <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-background/80 px-3.5 py-1 backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5 text-secondary" />
                      <span className="text-[11px] font-medium uppercase tracking-wider text-secondary">
                        {cat.badge}
                      </span>
                    </div>

                    {/* Icon Box */}
                    <div className="absolute bottom-4 left-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/90 shadow-lg">
                      <Icon className="h-6 w-6 text-amber" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`p-6 sm:p-8 lg:p-10 lg:col-span-7 ${isReversed ? "lg:col-start-1" : ""
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary">
                        {cat.index}
                      </span>
                      <span className="h-px flex-1 max-w-15 bg-secondary/40" />
                    </div>

                    <h3 className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-secondary/90">
                      {cat.tagline}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {cat.description}
                    </p>

                    {/* Highlights List */}
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Key Service Inclusions:
                      </p>
                      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-1">
                        {cat.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For Box */}
                    <div className="mt-6 rounded-md border border-secondary/20 bg-secondary/5 p-3.5">
                      <p className="text-xs text-muted-foreground">
                        <strong className="text-foreground">Ideal Application: </strong>
                        {cat.idealFor}
                      </p>
                    </div>

                    {/* Dedicated Service CTA Link */}
                    <div className="mt-8 flex items-center">
                      <Link
                        href={cat.href}
                        className="group inline-flex items-center gap-2 rounded-md border border-secondary/50 bg-secondary/10 px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-secondary transition-all duration-300 hover:bg-secondary hover:text-background"
                      >
                        Explore Dedicated {cat.title} Page
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
