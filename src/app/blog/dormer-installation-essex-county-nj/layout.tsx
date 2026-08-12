import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";

const pagePath = "/blog/dormer-installation-essex-county-nj";
const pageUrl = `${siteUrl}${pagePath}`;
const imageUrl = `${siteUrl}/blog/dormer-installation-essex-county-nj.webp`;

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Dormer Installation Essex County NJ | Complete Guide",

  description:
    "Learn about dormer installation in Essex County NJ, including types, costs, roofing, flashing, repairs, permits, and maintenance for homeowners.",

  keywords: [
    "Dormer installation Essex County NJ",
    "Dormer contractor Essex County NJ",
    "Dormer roofing Essex County NJ",
    "Dormer repair Essex County NJ",
    "Dormer replacement Essex County NJ",
    "Dormer construction Essex County NJ",
    "Dormer renovation Essex County NJ",
    "Roof dormers Essex County NJ",
    "Custom dormers Essex County NJ",
    "Attic dormers Essex County NJ",
    "Shed dormers Essex County NJ",
    "Gable dormers Essex County NJ",
    "Dormer windows Essex County NJ",
    "Dormer additions Essex County NJ",
    "Dormer remodeling Essex County NJ",
    "Dormer specialists Essex County NJ",
    "Dormer waterproofing Essex County NJ",
    "Dormer flashing Essex County NJ",
    "Dormer leak repair Essex County NJ",
    "Dormer roof repair Essex County NJ",
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
    canonical: pageUrl,
  },

  referrer: "strict-origin-when-cross-origin",

  openGraph: {
    type: "article",
    title: "Dormer Installation Essex County NJ | Complete Guide",
    description:
      "Learn about dormer installation in Essex County NJ, including types, costs, roofing, flashing, repairs, permits, and maintenance for homeowners.",
    url: pageUrl,
    siteName: siteConfig.business.name,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Dormer installation in Essex County NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dormer Installation Essex County NJ | Complete Guide",
    description:
      "Learn about dormer installation in Essex County NJ, including types, costs, roofing, flashing, repairs, permits, and maintenance for homeowners.",
    images: [imageUrl],
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
    headline:
      "Dormer Installation in Essex County, NJ: Complete Guide for Homeowners",
    description:
      "Learn about dormer installation in Essex County NJ, including types, costs, roofing, flashing, repairs, permits, and maintenance for homeowners.",
    image: imageUrl,
    datePublished: "2026-08-12T00:00:00+00:00",
    dateModified: "2026-08-12T00:00:00+00:00",
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
      "@id": pageUrl,
    },
    url: pageUrl,
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
