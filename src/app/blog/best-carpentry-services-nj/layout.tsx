import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";

const pagePath = "/blog/best-carpentry-services-nj";
const pageUrl = `${siteUrl}${pagePath}`;
const imageUrl = `${siteUrl}/blog/carpentry-services.webp`;

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: "Best Carpentry Services in NJ | Gutama Roofing",

    description:
        "Discover the best carpentry services in NJ from Gutama Roofing. Explore reliable residential and commercial carpentry solutions across New Jersey.",

    keywords: [
        "best carpentry services NJ",
        "carpentry services NJ",
        "carpenter NJ",
        "residential carpentry NJ",
        "commercial carpentry NJ",
        "Gutama Roofing",
        "carpentry services Essex County NJ",
        "carpenter Essex County NJ",
        "local carpenter NJ"
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

        title: "Best Carpentry Services in NJ | Gutama Roofing",

        description:
            "Discover the best carpentry services in NJ from Gutama Roofing. Explore reliable residential and commercial carpentry solutions across New Jersey.",

        url: pageUrl,

        siteName: siteConfig.business.name,

        images: [
            {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: "Best Carpentry Services in NJ",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Best Carpentry Services in NJ | Gutama Roofing",

        description:
            "Discover the best carpentry services in NJ from Gutama Roofing. Explore reliable residential and commercial carpentry solutions across New Jersey.",

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
            "Residential and Commercial Carpentry Services in Essex County, NJ: What to Know Before Hiring a Carpenter",

        description:
            "Discover the best carpentry services in NJ from Gutama Roofing. Explore reliable residential and commercial carpentry solutions across New Jersey.",

        image: imageUrl,

        datePublished: "2026-08-31T00:00:00+00:00",
        dateModified: "2026-08-31T00:00:00+00:00",

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
