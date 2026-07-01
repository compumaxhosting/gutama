import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Slate Roofing Services in Essex County, NJ | Installation & Repair Experts",

  description:
    "Professional slate roofing services in Essex County, NJ. Gutama Home Improvement offers expert slate roof installation, replacement, repair, and maintenance for residential and commercial properties.",

  keywords: [
    "slate roofing Essex County NJ",
    "slate roof installation NJ",
    "slate roof repair NJ",
    "slate roof replacement Essex County",
    "residential slate roofing",
    "commercial slate roofing",
    "slate roofing contractor Newark NJ",
    "slate roof maintenance",
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
    canonical: "https://www.gutamaroofingnj.com/services/slate-roof",
  },

  openGraph: {
    type: "website",

    title:
      "Slate Roofing Services in Essex County, NJ | Installation & Repair Experts",

    description:
      "Professional slate roof installation, replacement, repair, and maintenance services for residential and commercial properties throughout Essex County, NJ.",

    url: "https://www.gutamaroofingnj.com/services/slate-roof",

    siteName: "Gutama Home Improvement",

    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/service-slate-roof.webp",
        width: 1200,
        height: 630,
        alt: "Slate Roofing Services in Essex County NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Slate Roofing Services in Essex County, NJ | Installation & Repair Experts",

    description:
      "Expert slate roof installation, replacement, repair, and maintenance services throughout Essex County, NJ.",

    images: [
      "https://www.gutamaroofingnj.com/images/service-slate-roof.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function SlateRoofLayout({
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
              "https://www.gutamaroofingnj.com/images/service-slate-roof.webp",

            "@id":
              "https://www.gutamaroofingnj.com/services/slate-roof",

            url: "https://www.gutamaroofingnj.com/services/slate-roof",

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
              { "@type": "City", name: "West Orange" },
              { "@type": "AdministrativeArea", name: "Essex County" },
            ],

            serviceType: [
              "Slate Roof Installation",
              "Slate Roof Repair",
              "Slate Roof Replacement",
              "Slate Roof Maintenance",
              "Residential Slate Roofing",
              "Commercial Slate Roofing",
            ],

            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}