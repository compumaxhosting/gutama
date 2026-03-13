import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/contact" },
];

const TOP_SERVICES = [
  { slug: "roof-removal", shortTitle: "Roof Removal" },
  { slug: "re-roofing", shortTitle: "Re-Roofing" },
  { slug: "flat-roof", shortTitle: "Flat Roof" },
  { slug: "slate-roof", shortTitle: "Slate Roof" },
  { slug: "chimney", shortTitle: "Chimney" },
  { slug: "siding", shortTitle: "Siding" },
  { slug: "carpentry", shortTitle: "Carpentry" },
  { slug: "additions", shortTitle: "Additions" },
  { slug: "dormers", shortTitle: "Dormers" },
  { slug: "gutters", shortTitle: "Gutters" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "TikTok", href: "https://www.tiktok.com/@gutamaroofing.com", icon: Music2 },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex">
            <Image src="/images/logo2.png" alt={siteConfig.business.name} width={180} height={72} quality={60} sizes="360px" className="h-20 w-auto object-contain" />
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{siteConfig.business.description}</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={`tel:${siteConfig.phones.english}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              English: {siteConfig.phones.english}
            </a>
            <a href={`tel:${siteConfig.phones.spanish}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-4 w-4 text-secondary" />
              Espanol: {siteConfig.phones.spanish}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <Mail className="h-4 w-4 text-secondary" />
              {siteConfig.email}
            </a>
            <p className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {siteConfig.business.regionLabel}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-foreground">Quick Links</h3>
          <div className="gold-divider mx-0! my-4" />
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-foreground">Top Services</h3>
          <div className="gold-divider mx-0! my-4" />
          <div className="flex flex-col gap-2">
            {TOP_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-foreground">Need An Estimate?</h3>
          <div className="gold-divider mx-0! my-4" />
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Call us for free consultation and project planning.</p>
            <Link href="/contact" className="text-primary hover:text-primary/80">
              Go to Contact Page
            </Link>
            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Follow Us</p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-md border border-border/70 bg-card/40 text-foreground/70 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary hover:shadow-luxury"
                  >
                    <Icon className="h-4.5 w-4.5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(201,159,58,0.45)]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/40 px-4 py-5 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.</p>
        <p>Licensed & Fully Insured | {siteConfig.business.regionLabel}</p>
      </div>
    </footer>
  );
}
