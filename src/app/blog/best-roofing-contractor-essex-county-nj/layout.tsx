import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";

const pagePath = "/blog/best-roofing-contractor-essex-county-nj";
const pageUrl = `${siteUrl}${pagePath}`;
const imageUrl = `${siteUrl}/blog/roofing-contractor-essex-county-nj.webp`;

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title:
        "Best Roofing Contractor in Essex County, NJ | Roof Repair & Replacement",

    description:
        "Looking for the best roofing contractor in Essex County, NJ? Get expert roof repair, replacement, installation, inspections, and leak repair services.",

    keywords: [
        "best roofing contractor Essex County NJ",
        "roofing contractor Essex County NJ",
        "roof repair Essex County NJ",
        "roof replacement Essex County NJ",
        "roof installation Essex County NJ",
        "roof leak repair Essex County NJ",
        "residential roofing Essex County NJ",
        "commercial roofing Essex County NJ",
        "roofing company Essex County NJ",
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

        title:
            "Best Roofing Contractor in Essex County, NJ | Roof Repair & Replacement",

        description:
            "Expert roof repair, replacement, installation, inspections, and leak repair services in Essex County, NJ.",

        url: pageUrl,

        siteName: siteConfig.business.name,

        images: [
            {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: "Professional roofing contractor providing roof repair and replacement in Essex County, NJ",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Best Roofing Contractor in Essex County, NJ | Roof Repair & Replacement",

        description:
            "Expert roof repair, replacement, installation, inspections, and leak repair services in Essex County, NJ.",

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
            "Best Roofing Contractor in Essex County, NJ: Roof Repair, Replacement & Installation",

        description:
            "Complete guide to roof repair, roof replacement, roof installation, inspections, storm damage, and choosing the best roofing contractor in Essex County, NJ.",

        image: imageUrl,

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