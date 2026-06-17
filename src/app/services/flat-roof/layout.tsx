import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Flat Roof Services Essex County NJ | Repair, Replacement & Installation",

  description:
    "Professional flat roof installation, repair, replacement, and maintenance in Essex County, NJ. Gutama Home Improvement offers EPDM, TPO, modified bitumen, and commercial flat roofing solutions with free estimates.",

  keywords: [
    "flat roof services Essex County NJ",
    "flat roof repair NJ",
    "flat roof replacement Essex County",
    "flat roof installation NJ",
    "EPDM roofing",
    "TPO roofing",
    "modified bitumen roofing",
    "commercial flat roofing",
    "flat roof contractor Newark NJ",
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
    canonical: "https://www.gutamaroofingnj.com/services/flat-roof",
  },

  openGraph: {
    type: "website",
    title:
      "Flat Roof Services Essex County NJ | Gutama Home Improvement",

    description:
      "Expert flat roof installation, repair, replacement, and maintenance for residential and commercial properties throughout Essex County, NJ.",

    url: "https://www.gutamaroofingnj.com/services/flat-roof",

    siteName: "Gutama Home Improvement",

    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/service-flat-roof.webp",
        width: 1200,
        height: 630,
        alt: "Flat Roof Services Essex County NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Flat Roof Services Essex County NJ | Gutama Home Improvement",

    description:
      "Professional flat roof installation, repair, replacement, and maintenance in Essex County, NJ.",

    images: [
      "https://www.gutamaroofingnj.com/images/service-flat-roof.webp",
    ],
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function FlatRoofLayout({
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
              "https://www.gutamaroofingnj.com/images/service-flat-roof.webp",

            "@id":
              "https://www.gutamaroofingnj.com/services/flat-roof",

            url: "https://www.gutamaroofingnj.com/services/flat-roof",

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
              "Flat Roof Installation",
              "Flat Roof Repair",
              "Flat Roof Replacement",
              "EPDM Roofing",
              "TPO Roofing",
              "Modified Bitumen Roofing",
              "Commercial Flat Roofing",
            ],

            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}