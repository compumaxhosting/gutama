import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";

const pagePath = "/blog/dormer-addition-existing-roof-essex-county-nj";
const pageUrl = `${siteUrl}${pagePath}`;
const imageUrl = `${siteUrl}/blog/dormer-addition-existing-roof-essex-county-nj.webp`;
const title = "Can You Add a Dormer to an Existing Roof? Essex County NJ Guide";
const headline = "Can You Add a Dormer to an Existing Roof? A Guide for Essex County, NJ Homeowners";
const description =
    "Can you add a dormer to an existing roof? Explore dormer types, costs, permits, and expert roofing tips for Essex County, NJ homeowners.";

export const viewport: Viewport = { themeColor: "#ffffff" };

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [
        "dormer addition existing roof Essex County NJ",
        "dormer addition Essex County NJ",
        "dormer roofing contractor NJ",
        "attic dormer addition",
        "roof dormers New Jersey",
    ],
    authors: [{ name: siteConfig.business.name }],
    creator: siteConfig.business.name,
    publisher: siteConfig.business.name,
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
        type: "article",
        title,
        description:
            "Discover how dormer additions work, including roof suitability, costs, permits, and planning tips for Essex County, NJ homeowners.",
        url: pageUrl,
        siteName: siteConfig.business.name,
        images: [{
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: "Dormer addition on a residential roof in Essex County, New Jersey",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description:
            "Learn about dormer additions, roof requirements, costs, and permits for homeowners in Essex County, NJ.",
        images: [imageUrl],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const faqQuestions = [
        ["Can a dormer be added to any existing roof?", "Not every roof is suitable for every dormer design. Feasibility depends on the roof's structure, pitch, condition, available attic space, and applicable local building requirements."],
        ["Is a dormer addition considered a home extension?", "A dormer is a roof addition that can expand usable upper-floor space. Its classification under local regulations depends on the project's design and the municipality where the property is located."],
        ["Can I add a dormer without converting my attic into a bedroom?", "Yes. A dormer can improve natural light, ventilation, storage access, or headroom without necessarily creating a finished bedroom."],
        ["Will a dormer increase my home's value?", "A well-designed dormer may improve a home's functionality and appeal. Its effect on property value depends on construction quality, usable space added, local housing conditions, and buyer preferences."],
        ["Can a dormer be added during a roof replacement?", "Yes. In some cases, coordinating a dormer addition with a roof replacement can be an efficient approach, especially when the existing roof is nearing the end of its service life."],
        ["Do dormer windows need special flashing?", "Yes. Dormer windows and roof intersections require properly designed flashing and weatherproofing to help protect the home from water intrusion."],
    ];
    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${pageUrl}#blogposting`,
                mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
                headline,
                description:
                    "Learn whether you can add a dormer to an existing roof, including dormer types, costs, permits, structural considerations, and planning tips for Essex County, NJ homeowners.",
                url: pageUrl,
                image: imageUrl,
                author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: siteConfig.business.name, url: `${siteUrl}/` },
                publisher: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: siteConfig.business.name, url: `${siteUrl}/` },
                about: [
                    { "@type": "Thing", name: "Dormer Addition" },
                    { "@type": "Thing", name: "Roofing" },
                    { "@type": "Place", name: "Essex County, New Jersey" },
                ],
                keywords: [
                    "dormer addition existing roof Essex County NJ",
                    "dormer addition Essex County NJ",
                    "dormer roofing contractor NJ",
                    "attic dormer addition",
                    "roof dormers New Jersey",
                ],
                articleSection: "Roofing",
                inLanguage: "en-US",
            },
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                mainEntity: faqQuestions.map(([name, text]) => ({
                    "@type": "Question",
                    name,
                    acceptedAnswer: { "@type": "Answer", text },
                })),
            },
        ],
    };

    return (
        <>
            {children}
            <Script
                id="blogposting-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
        </>
    );
}