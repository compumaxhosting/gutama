import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

// ✅ Metadata

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gutamaroofingnj.com"),

  title:
    "Roofing Contractor Essex County NJ | 15 Roof Repair Warning Signs | Gutama Home Improvement",

  description:
    "Discover 15 warning signs you need roof repair in Essex County, NJ. Learn when to repair or replace your roof before costly damage occurs.",

  keywords: [
    "Roofing Contractor Essex County NJ",
    "Roof Repair Essex County NJ",
    "Roof Replacement Essex County NJ",
    "Residential Roofing Essex County NJ",
    "Commercial Roofing Essex County NJ",
    "Emergency Roofing Essex County NJ",
    "Roofing Company Essex County NJ",
    "Roofing Services Essex County NJ",
    "Local Roofers Essex County NJ",
    "Licensed Roofing Contractor NJ",
    "Roof Leak Repair Essex County",
    "Asphalt Shingle Roofing NJ",
    "Flat Roof Installation Essex County",
    "Metal Roofing Essex County NJ",
    "Roof Inspection Essex County NJ",
    "Storm Damage Roof Repair NJ",
    "Gutter Installation Essex County",
    "Chimney Flashing Repair NJ",
    "Siding Installation Essex County NJ",
    "Roof Maintenance Essex County",
    "Affordable Roof Replacement NJ",
    "Best Roofing Company Essex County",
    "Roof Ventilation Services NJ",
    "New Roof Installation Essex County",
    "Trusted Roofing Experts NJ",
  ],

  authors: [
    {
      name: siteConfig.business.name,
    },
  ],

  referrer: "strict-origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gutamaroofingnj.com/blog/roofing-contractor-essex-county-nj-roof-repair-warning-signs",
  },

  openGraph: {
    type: "article",

    url:
      "https://www.gutamaroofingnj.com/blog/roofing-contractor-essex-county-nj-roof-repair-warning-signs",

    title:
      "Roofing Contractor Essex County NJ | 15 Roof Repair Warning Signs",

    description:
      "Discover 15 warning signs you need roof repair in Essex County, NJ. Prevent expensive damage with expert roofing advice.",

    siteName: siteConfig.business.name,

    images: [
      {
        url:
          "https://www.gutamaroofingnj.com/blog/roof-repair-warning-signs.webp",
        width: 1200,
        height: 630,
        alt:
          "Roofing Contractor Essex County NJ inspecting a damaged residential roof",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Roofing Contractor Essex County NJ | 15 Roof Repair Warning Signs",

    description:
      "Learn the top 15 warning signs your roof needs repair before it's too late in Essex County, NJ.",

    images: [
      "https://www.gutamaroofingnj.com/blog/roof-repair-warning-signs.webp",
    ],
  },
};

// ✅ Viewport

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// ✅ Layout

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline:
      "Roofing Contractor Essex County NJ: 15 Warning Signs You Need Roof Repair Before It's Too Late",

    description:
      "Learn the most common warning signs of roof damage, when repairs are enough, when replacement is necessary, and how homeowners in Essex County can protect their investment.",

    image:
      "https://www.gutamaroofingnj.com/blog/roof-repair-warning-signs.webp",

    datePublished: "2026-07-31T00:00:00+00:00",
    dateModified: "2026-07-31T00:00:00+00:00",

    author: {
      "@type": "Organization",
      name: siteConfig.business.name,
    },

    publisher: {
      "@type": "Organization",
      name: siteConfig.business.name,

      logo: {
        "@type": "ImageObject",
        url: "https://www.gutamaroofingnj.com/images/logo.webp",
      },
    },

    mainEntityOfPage:
      "https://www.gutamaroofingnj.com/blog/roofing-contractor-essex-county-nj-roof-repair-warning-signs",
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
