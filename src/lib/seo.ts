import type { Metadata } from "next";

import { siteConfig, siteUrl } from "@/config/site";

const LOCALE = "en_US";

interface BuildMetadataInput {
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({ title, description, path = "/" }: BuildMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: LOCALE,
      siteName: siteConfig.business.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    description: siteConfig.business.description,
    areaServed: siteConfig.business.regionLabel,
    telephone: siteConfig.phones.english,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    url: siteUrl,
  };
}
