import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { siteConfig, siteUrl } from "@/config/site";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Siding Installation Essex County NJ | 2026 Home Value Guide",
  description:
    "Expert Siding Installation Essex County NJ. Boost home value with durable, energy-efficient siding, vinyl, fiber cement & exterior remodeling.",
  keywords: [
    "Siding Installation Essex County NJ",
    "Vinyl Siding Contractors",
    "Fiber Cement Cladding",
    "Exterior Wall Panels",
    "House Facade Renovation",
    "Residential Exterior Remodeling",
    "Commercial Cladding Services",
    "Weatherproof Home Exterior",
    "Insulated Wall Systems",
    "James Hardie Installer",
    "Siding Replacement Experts",
    "Exterior Home Improvement",
    "Soffit and Fascia Repair",
    "Trim Installation Services",
    "Durable Exterior Materials",
    "Energy Efficient Cladding",
    "Storm Damage Restoration",
    "Custom Exterior Finishes",
    "Low Maintenance Panels",
    "Home Curb Appeal Upgrade",
    "Waterproof Exterior Solutions",
    "Board and Batten Styles",
    "Cedar Shake Alternatives",
    "Exterior Renovation Company",
    "Essex County Exterior Specialists",
  ],
  authors: [{ name: siteConfig.business.name }],
  alternates: {
    canonical: `${siteUrl}/blog/siding-installation-essex-county-nj-2026-guide`,
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "article",
    title: "Siding Installation Essex County NJ | 2026 Home Value Guide",
    description:
      "Upgrade your home with expert siding installation in Essex County, NJ. Durable, energy-efficient siding that boosts curb appeal and value.",
    url: `${siteUrl}/blog/siding-installation-essex-county-nj-2026-guide`,
    siteName: siteConfig.business.name,
    images: [
      {
        url: `${siteUrl}/blog/siding-installation-essex-county-nj-2026-guide.webp`,
        width: 1200,
        height: 630,
        alt: "Professional siding installation in Essex County NJ by Gutama Home Improvement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siding Installation Essex County NJ | 2026 Home Value Guide",
    description:
      "Increase your home's value with professional siding installation, fiber cement, vinyl siding, and exterior remodeling in Essex County, NJ.",
    images: [`${siteUrl}/blog/siding-installation-essex-county-nj-2026-guide.webp`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Siding Installation Essex County NJ | 2026 Home Value Guide",
    description:
      "Expert Siding Installation Essex County NJ. Boost home value with durable, energy-efficient siding, vinyl, fiber cement & exterior remodeling.",
    image: `${siteUrl}/blog/siding-installation-essex-county-nj-2026-guide.webp`,
    datePublished: "2026-08-05T00:00:00+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
    author: {
      "@type": "Organization",
      name: siteConfig.business.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.business.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/siding-installation-essex-county-nj-2026-guide`,
    },
    url: `${siteUrl}/blog/siding-installation-essex-county-nj-2026-guide`,
    inLanguage: "en-US",
  };

  return (
    <>
      {children}
      <Script
        id="blogposting-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
    </>
  );
}
