import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";



// ✅ Fonts
const bodyFont = Inter({
    variable: "--font-body",
    subsets: ["latin"],
    display: "swap",
});

const headingFont = Playfair_Display({
    variable: "--font-heading",
    subsets: ["latin"],
    display: "swap",
});

// ✅ METADATA (BLOG TARGETED)
export const metadata: Metadata = {
    metadataBase: new URL("https://www.gutamaroofingnj.com"),

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

    authors: [{ name: "Gutama Home Improvement" }],

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical:
            "https://www.gutamaroofingnj.com/blog/roofing-contractors-essex-county-nj",
    },

    openGraph: {
        type: "article",
        title:
            "Top Roofing Contractors in Essex County, NJ | Gutama Home Improvement",
        description:
            "Expert roofing services across Essex County including Newark, Livingston, and West Orange. Affordable, licensed, and reliable contractors.",
        url: "https://www.gutamaroofingnj.com/blog/roofing-contractors-essex-county-nj",
        siteName: "Gutama Home Improvement",
        images: [
            {
                url: "https://www.gutamaroofingnj.com/blog/roofing-blog.webp",
                width: 1200,
                height: 630,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Top Roofing Contractors in Essex County, NJ | Gutama Home Improvement",
        description:
            "Trusted roofing contractors serving Newark, Livingston, West Orange & surrounding areas.",
        images: [
            "https://www.gutamaroofingnj.com/blog/roofing-blog.webp",
        ],
    },
};

// ✅ VIEWPORT
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#1B5E8A",
};

// ✅ ROOT LAYOUT
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // ✅ BLOG ARTICLE SCHEMA (NEW)
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline:
            "Top Roofing Contractors in Essex County, NJ",
        description:
            "Guide to finding reliable roofing contractors in Essex County, NJ including services, pricing, and tips.",
        image:
            "https://www.gutamaroofingnj.com/blog/roofing-blog.webp",
        author: {
            "@type": "Organization",
            name: "Gutama Home Improvement",
        },
        publisher: {
            "@type": "Organization",
            name: "Gutama Home Improvement",
            logo: {
                "@type": "ImageObject",
                url: "https://www.gutamaroofingnj.com/images/logo.webp",
            },
        },
        mainEntityOfPage:
            "https://www.gutamaroofingnj.com/blog/roofing-contractors-essex-county-nj",
    };

    // ✅ LOCAL BUSINESS SCHEMA (YOUR ORIGINAL)
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        name: "Gutama Home Improvement",
        url: "https://www.gutamaroofingnj.com",
        telephone: "+1-973-820-5130",
        address: {
            "@type": "PostalAddress",
            streetAddress: "272-274 Orange St",
            addressLocality: "Newark",
            addressRegion: "NJ",
            postalCode: "07103",
            addressCountry: "US",
        },
        areaServed: {
            "@type": "AdministrativeArea",
            name: "Essex County",
        },
    };

    return (
        <html lang="en">
            <head>
                {/* Advanced Robots */}
                <meta
                    name="robots"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />

                {/* Performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>

            <body
                className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
            >
                    {children}

                {/* Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-8K697EFF53"
                    strategy="lazyOnload"
                />

                <Script id="ga">
                    {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8K697EFF53');`}
                </Script>

                {/* ✅ BLOG SCHEMA */}
                <Script
                    id="article-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(articleSchema),
                    }}
                />

                {/* ✅ BUSINESS SCHEMA */}
                <Script
                    id="business-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(businessSchema),
                    }}
                />
            </body>
        </html>
    );
}