import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Removal Services NJ | Expert Roof Tear-Off Essex County",
  description:
    "Professional roof removal services in NJ. Specializing in residential & commercial roof tear-offs in Newark, East Orange, & West Orange. Licensed Essex County contractors.",
  keywords: [
    "roof removal services NJ",
    "roof tear off contractor Essex County",
    "residential roof removal Newark NJ",
    "storm damaged roof removal NJ",
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
  metadataBase: new URL("https://gutamaroofingnj.com"),
  alternates: {
    canonical: "https://www.gutamaroofingnj.com/services/roof-removal",
  },

  openGraph: {
    type: "website",
    title: "Expert Roof Removal Services in Essex County, NJ",
    description:
      "Safe, efficient roof tear-offs for Newark, East Orange, and all Essex County. Get your flat or storm-damaged roof removed by local pros.",
    url: "https://gutamaroofingnj.com/roof-removal-nj",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-roof-removal.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roof Removal & Tear-Off Contractor NJ",
    description:
      "Fast, affordable roof removal in Newark, West Orange, and Essex County. Local experts for residential & commercial needs.",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-roof-removal.webp"],
    creator: "@GutamaRoofingNJ",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RoofRemovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: "Gutama Home Improvement",
            image:
              "https://www.gutamaroofingnj.com/Images%20New/service-roof-removal.webp",
            "@id": "https://www.gutamaroofingnj.com/services/roof-removal",
            url: "https://www.gutamaroofingnj.com/services/roof-removal",
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
              latitude: 40.7495,
              longitude: -74.1831,
            },
            areaServed: [
              { "@type": "City", name: "Newark" },
              { "@type": "City", name: "East Orange" },
              { "@type": "City", name: "West Orange" },
              { "@type": "AdministrativeArea", name: "Essex County" },
            ],
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
