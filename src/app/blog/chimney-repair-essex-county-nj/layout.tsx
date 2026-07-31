import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "How to Know When You Need Chimney Repair in Essex County, NJ | Gutama Home Improvement",

  description:
    "Learn the warning signs of chimney damage in Essex County, NJ. Discover when chimney repair is needed to prevent leaks, structural damage, and costly repairs.",

  keywords: [
    "chimney repair Essex County NJ",
    "chimney repair Newark NJ",
    "chimney flashing repair",
    "chimney masonry repair",
    "chimney leak repair",
    "chimney contractor Essex County",
    "chimney inspection NJ",
    "chimney repair near me",
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
    canonical: `${siteUrl}/blog/chimney-repair-essex-county-nj`,
  },

  openGraph: {
    type: "article",

    title:
      "How to Know When You Need Chimney Repair in Essex County, NJ",

    description:
      "Learn the warning signs of chimney damage and when to schedule professional chimney repair in Essex County, NJ.",

    url: `${siteUrl}/blog/chimney-repair-essex-county-nj`,

    siteName: siteConfig.business.name,

    images: [
      {
        url: `${siteUrl}/blog/chimney-repair.webp`,
        width: 1200,
        height: 630,
        alt: "How to Know When You Need Chimney Repair in Essex County, NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "How to Know When You Need Chimney Repair in Essex County, NJ",

    description:
      "Learn how to identify chimney damage before it becomes an expensive repair.",

    images: [`${siteUrl}/blog/chimney-repair.webp`],
  },
};


export const viewport: Viewport = {
  themeColor: "#1B5E8A",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline:
      "How to Know When You Need Chimney Repair in Essex County, NJ",

    description:
      "Learn the warning signs of chimney damage, common causes, repair options, and when to call a professional in Essex County, NJ.",

    image: `${siteUrl}/blog/chimney-repair.webp`,

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
      "@id": `${siteUrl}/blog/chimney-repair-essex-county-nj`,
    },

    url: `${siteUrl}/blog/chimney-repair-essex-county-nj`,

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