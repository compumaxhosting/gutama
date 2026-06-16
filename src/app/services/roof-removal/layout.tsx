import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roof Removal Services in Essex County, NJ | Gutama Home Improvement",

  description:
    "Professional roof removal services in Essex County, NJ. We provide complete roof tear-offs, roof deck inspections, damaged decking repairs, and cleanup for residential and commercial properties.",

  keywords: [
    "roof removal services Essex County NJ",
    "roof tear off Essex County",
    "roof removal contractor Newark NJ",
    "roof deck inspection",
    "residential roof removal",
    "commercial roof removal",
    "roof replacement preparation",
    "roof tear off contractor",
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

  metadataBase: new URL("https://www.gutamaroofingnj.com"),

  alternates: {
    canonical: "https://www.gutamaroofingnj.com/services/roof-removal",
  },

  openGraph: {
    type: "website",
    title:
      "Roof Removal Services in Essex County, NJ | Gutama Home Improvement",

    description:
      "Professional roof tear-off and roof removal services in Essex County, NJ. Safe removal, roof deck inspections, repairs, and complete cleanup for residential and commercial properties.",

    url: "https://www.gutamaroofingnj.com/services/roof-removal",

    siteName: "Gutama Home Improvement",

    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/service-roof-removal.webp",
        width: 1200,
        height: 630,
        alt: "Roof removal services in Essex County NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Roof Removal Services in Essex County, NJ | Gutama Home Improvement",

    description:
      "Expert roof removal and roof tear-off services for homes and businesses in Essex County, NJ.",

    images: [
      "https://www.gutamaroofingnj.com/images/service-roof-removal.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",

            name: "Gutama Home Improvement",

            image:
              "https://www.gutamaroofingnj.com/images/service-roof-removal.webp",

            "@id":
              "https://www.gutamaroofingnj.com/services/roof-removal",

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
              { "@type": "City", name: "Irvington" },
              { "@type": "City", name: "Bloomfield" },
              { "@type": "City", name: "Livingston" },
              { "@type": "City", name: "West Orange" },
              { "@type": "City", name: "Maplewood" },
              { "@type": "City", name: "South Orange" },
              { "@type": "City", name: "Belleville" },
              { "@type": "City", name: "Nutley" },
              { "@type": "City", name: "Verona" },
              { "@type": "City", name: "Cedar Grove" },
              { "@type": "AdministrativeArea", name: "Essex County" },
            ],

            serviceType: [
              "Roof Removal",
              "Roof Tear-Off",
              "Residential Roof Removal",
              "Commercial Roof Removal",
              "Roof Deck Inspection",
            ],

            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
