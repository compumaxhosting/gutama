import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Replacement Services NJ",
  description:
    "Expert residential & commercial roof replacement in Newark and Essex County, NJ. Quality asphalt & flat roof replacement. Affordable, licensed, and local.",

  keywords: [
    "roof replacement services NJ",
    "residential roof replacement Newark NJ",
    "commercial roof replacement Essex County",
    "asphalt roof replacement New Jersey",
  ],

  authors: [{ name: "Gutama Home Improvement" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/services/roof-replacement",
  },

  openGraph: {
    type: "website",
    title: "Expert Roof Replacement Services in Newark & Essex County, NJ",
    description:
      "Upgrade your property with affordable, professional roof replacement. Serving Newark, West Orange, and all Essex County with top-tier materials.",
    url: "https://www.gutamaroofingnj.com/services/re-roofing",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-re-roofing.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NJ Roof Replacement | Gutama Home Improvement",
    description:
      "Top-rated asphalt and flat roof replacement in Newark and Essex County. Get a free estimate from the local experts.",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-re-roofing.webp"],
    creator: "@GutamaRoofingNJ",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function ReRoofingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: "Gutama Home Improvement",
            "@id": "https://www.gutamaroofingnj.com/services/re-roofing",
            url: "https://www.gutamaroofingnj.com/services/re-roofing",
            telephone: ["+1-973-820-5130", "+1-973-342-4134"],
            email: "antoniogutama@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "272-274 Orange St",
              addressLocality: "Newark",
              addressRegion: "NJ",
              postalCode: "07103",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.74955,
              longitude: -74.18312,
            },
            priceRange: "$$",
          }),
        }}
      />

      {children}
    </>
  );
}
