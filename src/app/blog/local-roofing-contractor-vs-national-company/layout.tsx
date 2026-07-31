import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { siteConfig, siteUrl } from "@/config/site";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Local Roofing Contractor vs National Company | Expert Guide",

  description:
    "Discover why a local roofing contractor is better than national companies for faster service, better pricing, and reliable roof repairs.",

  keywords: [
    "local roofing contractor",
    "roofing contractor near me",
    "roof repair services",
    "residential roofing",
    "roof replacement",
    "roofing company",
    "emergency roof repair",
    "local roofer",
    "national roofing company comparison",
    "best roofing contractor",
  ],

  authors: [
    {
      name: siteConfig.business.name,
    },
  ],

  creator: siteConfig.business.name,

  publisher: siteConfig.business.name,

  referrer: "strict-origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: `${siteUrl}/local-roofing-contractor-vs-national-company`,
  },

  openGraph: {
    type: "article",

    title: "Local Roofing Contractor vs National Company | Expert Guide",

    description:
      "Discover why a local roofing contractor is better than national companies for faster service, better pricing, and reliable roof repairs.",

    url: `${siteUrl}/local-roofing-contractor-vs-national-company`,

    siteName: siteConfig.business.name,

    images: [
      {
        url: `${siteUrl}/images/localvsnational.webp`,
        width: 1200,
        height: 630,
        alt: "Local roofing contractor inspecting a residential roof",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Local Roofing Contractor vs National Company | Expert Guide",

    description:
      "Discover why a local roofing contractor is better than national companies for faster service, better pricing, and reliable roof repairs.",

    images: [`${siteUrl}/images/localvsnational.webp`],
  },
};


export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: "Local Roofing Contractor vs National Company | Expert Guide",

    description:
      "Discover why a local roofing contractor is better than national companies for faster service, better pricing, and reliable roof repairs.",

    image: `${siteUrl}/images/localvsnational.webp`,

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
      "@id": `${siteUrl}/local-roofing-contractor-vs-national-company`,
    },

    url: `${siteUrl}/local-roofing-contractor-vs-national-company`,

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