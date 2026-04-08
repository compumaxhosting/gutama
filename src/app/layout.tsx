import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";
import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

// ✅ OPTIMIZED FONTS (big performance win)
const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  description:
    "Gutama Home Improvement provides expert roofing, siding, and exterior services in Essex County, NJ. Licensed, insured, and trusted for roof repair, replacement, and emergency services. Get a free estimate today.",

  keywords: [
    "roofing contractor essex county nj",
    "roof repair nj",
    "roof replacement essex county",
    "siding contractor nj",
    "chimney repair nj",
    "emergency roofing nj",
  ],

  authors: [{ name: "Gutama Home Improvement" }],

  openGraph: {
    title: "Roofing Contractor Essex County NJ | Gutama Home Improvement",
    description:
      "Licensed & insured roofing experts in Essex County, NJ. Roof repair, replacement, siding, chimney & emergency services.",
    url: siteUrl,
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Roofing Services in Essex County NJ",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Contractor Essex County NJ | Gutama Home Improvement",
    description:
      "Expert roofing, siding & exterior services in Essex County, NJ. Free estimates available.",
    images: [`${siteUrl}/og-image.jpg`],
  },

  verification: {
    google: "J6O-s5I-EDNOpmUgaLfDLYzww-7_LvQl4x3ZFCvAtxk",
    other: {
      "p:domain_verify": "3b615b98ad92040f9a19c646b3461c46",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Gutama Home Improvement",
    url: siteUrl,
    description:
      "Professional roofing contractor in Essex County, NJ offering roof repair, replacement, siding, chimney, and emergency services.",
    image: `${siteUrl}/logo.png`,
    telephone: "+1-973-820-5130",
    email: "antoniogutama@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      "@type": "Place",
      name: "Essex County, NJ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7357",
      longitude: "-74.1724",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Roof Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Roof Replacement" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Flat Roofing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Slate Roofing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Siding Installation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Chimney Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Gutter Installation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Emergency Roof Repair" },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ PERFORMANCE BOOST - Preconnect to critical CDNs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>

      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
      >
        {/* ✅ MAIN LAYOUT */}
        <SiteShell>{children}</SiteShell>

        {/* ✅ GOOGLE ANALYTICS (fully deferred - no render blocking) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8K697EFF53"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8K697EFF53');
          `}
        </Script>

        {/* ✅ SEO SCHEMA (non-blocking) */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
