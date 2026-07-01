import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chimney Services in Essex County, NJ | Inspection, Repair & Rebuilding",

  description:
    "Professional chimney services in Essex County, NJ. Gutama Home Improvement offers chimney inspection, repair, waterproofing, and rebuilding for homes and businesses.",

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
    canonical: "https://www.gutamaroofingnj.com/services/chimney",
  },

  openGraph: {
    type: "website",
    title:
      "Chimney Services in Essex County, NJ | Inspection, Repair & Rebuilding",
    description:
      "Expert chimney inspection, repair, waterproofing, and rebuilding services in Essex County, NJ for residential and commercial properties.",
    url: "https://www.gutamaroofingnj.com/services/chimney",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/gallery-chimney-1.webp",
        width: 1200,
        height: 630,
        alt: "Chimney Services in Essex County NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Chimney Services in Essex County, NJ | Inspection, Repair & Rebuilding",
    description:
      "Professional chimney inspection, repair, waterproofing, and rebuilding services throughout Essex County, New Jersey.",
    images: [
      "https://www.gutamaroofingnj.com/images/gallery-chimney-1.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function ChimneyLayout({
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
            "@id": "https://www.gutamaroofingnj.com/services/chimney",
            url: "https://www.gutamaroofingnj.com/services/chimney",

            image:
              "https://www.gutamaroofingnj.com/images/gallery-chimney-1.webp",

            description:
              "Professional chimney inspection, repair, waterproofing, maintenance, and rebuilding services throughout Essex County, NJ.",

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

            areaServed: [
              { "@type": "City", name: "Newark" },
              { "@type": "City", name: "East Orange" },
              { "@type": "City", name: "Bloomfield" },
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