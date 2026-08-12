import type { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "Re-Roofing Services in Essex County, NJ | Gutama Home Improvement",

  description:
    "Professional re-roofing services in Essex County, NJ. Gutama Home Improvement provides residential and commercial roof replacement, roof upgrades, inspections, and long-lasting roofing solutions.",

  keywords: [
    "re-roofing services Essex County NJ",
    "roof replacement Essex County",
    "residential re-roofing Newark NJ",
    "commercial re-roofing NJ",
    "roof upgrades",
    "roof replacement contractor",
    "roof inspection NJ",
    "new roofing system",
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
    canonical: "https://www.gutamaroofingnj.com/services/re-roofing",
  },

  openGraph: {
    type: "website",

    title:
      "Re-Roofing Services in Essex County, NJ | Gutama Home Improvement",

    description:
      "Professional residential and commercial re-roofing services in Essex County, NJ. Roof replacement, inspections, upgrades, and long-lasting roofing solutions.",

    url: "https://www.gutamaroofingnj.com/services/re-roofing",

    siteName: "Gutama Home Improvement",

    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/service-re-roofing.webp",
        width: 1200,
        height: 630,
        alt: "Re-Roofing Services in Essex County NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Re-Roofing Services in Essex County, NJ | Gutama Home Improvement",

    description:
      "Professional residential and commercial re-roofing services throughout Essex County, NJ.",

    images: [
      "https://www.gutamaroofingnj.com/images/service-re-roofing.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
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
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",

            name: "Gutama Home Improvement",

            image:
              "https://www.gutamaroofingnj.com/images/service-re-roofing.webp",

            "@id":
              "https://www.gutamaroofingnj.com/services/re-roofing",

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
              "Re-Roofing",
              "Roof Replacement",
              "Residential Re-Roofing",
              "Commercial Re-Roofing",
              "Roof Inspection",
            ],

            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
