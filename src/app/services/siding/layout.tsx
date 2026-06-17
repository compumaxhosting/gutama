import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Siding Services in Essex County, NJ | Installation, Repair & Replacement",

  description:
    "Professional siding services in Essex County, NJ. Gutama Home Improvement offers expert siding installation, repair, and replacement for homes and businesses.",

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
    canonical: "https://www.gutamaroofingnj.com/services/siding",
  },

  openGraph: {
    type: "website",
    title:
      "Siding Services in Essex County, NJ | Installation, Repair & Replacement",
    description:
      "Expert siding installation, repair, and replacement services in Essex County, NJ. Improve durability, energy efficiency, and curb appeal.",
    url: "https://www.gutamaroofingnj.com/services/siding",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/service-siding.webp",
        width: 1200,
        height: 630,
        alt: "Siding Services in Essex County NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Siding Services in Essex County, NJ | Installation, Repair & Replacement",
    description:
      "Professional siding installation, repair, and replacement services for residential and commercial properties throughout Essex County, NJ.",
    images: [
      "https://www.gutamaroofingnj.com/images/service-siding.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function SidingLayout({
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
            "@type": "HomeAndConstructionBusiness",
            name: "Gutama Home Improvement",
            "@id": "https://www.gutamaroofingnj.com/services/siding",
            url: "https://www.gutamaroofingnj.com/services/siding",

            telephone: ["+1-973-820-5130", "+1-973-342-4134"],
            email: "antoniogutama@gmail.com",

            image:
              "https://www.gutamaroofingnj.com/images/service-siding.webp",

            description:
              "Professional siding installation, repair, replacement, and maintenance services for residential and commercial properties throughout Essex County, New Jersey.",

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
              { "@type": "AdministrativeArea", name: "Essex County" },
            ],

            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}