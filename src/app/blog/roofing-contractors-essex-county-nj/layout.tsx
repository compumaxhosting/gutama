import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Top Roofing Contractors in Essex County, NJ | Gutama Home Improvement",

  description:
    "Looking for trusted roofing contractors in Essex County, NJ? Gutama Home Improvement provides expert roof repair, replacement, and siding services across Newark, Livingston, West Orange & more.",

  keywords: [
    "roofing contractors Essex County NJ",
    "roofing company Newark NJ",
    "roof repair Essex County NJ",
    "roof replacement NJ",
    "siding contractors NJ",
    "local roofing company near me NJ",
  ],

  authors: [
    {
      name: siteConfig.business.name,
    },
  ],

  creator: siteConfig.business.name,

  publisher: siteConfig.business.name,

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: `${siteUrl}/blog/roofing-contractors-essex-county-nj`,
  },

  openGraph: {
    type: "article",

    title:
      "Top Roofing Contractors in Essex County, NJ | Gutama Home Improvement",

    description:
      "Expert roofing services across Essex County including Newark, Livingston, and West Orange. Affordable, licensed, and reliable contractors.",

    url: `${siteUrl}/blog/roofing-contractors-essex-county-nj`,

    siteName: siteConfig.business.name,

    images: [
      {
        url: `${siteUrl}/blog/roofing-blog.webp`,
        width: 1200,
        height: 630,
        alt: "Top Roofing Contractors in Essex County, NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Roofing Contractors in Essex County, NJ | Gutama Home Improvement",

    description:
      "Trusted roofing contractors serving Newark, Livingston, West Orange & surrounding areas.",

    images: [`${siteUrl}/blog/roofing-blog.webp`],
  },
};

// -----------------------------------------------------------------------------
// Viewport
// -----------------------------------------------------------------------------

export const viewport: Viewport = {
  themeColor: "#1B5E8A",
};

// -----------------------------------------------------------------------------
// Layout
// -----------------------------------------------------------------------------

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: "Top Roofing Contractors in Essex County, NJ",

    description:
      "Guide to finding reliable roofing contractors in Essex County, NJ including services, pricing, and tips.",

    image: `${siteUrl}/blog/roofing-blog.webp`,

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
      "@id": `${siteUrl}/blog/roofing-contractors-essex-county-nj`,
    },

    url: `${siteUrl}/blog/roofing-contractors-essex-county-nj`,

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