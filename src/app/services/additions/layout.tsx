import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title:
    "Home Addition Services in Essex County, NJ | Room & House Extensions",

  description:
    "Expert home addition services in Essex County, NJ. Add rooms, kitchens, or second stories with professional house expansion contractors.",

  authors: [{ name: "Gutama Home Improvement" }],

  metadataBase: new URL("https://www.gutamaroofingnj.com"),

  alternates: {
    canonical: "/services/additions",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title:
      "Home Addition Services in Essex County, NJ | Room & House Extensions",
    description:
      "Professional home additions in Essex County, NJ. Expand your home with room, kitchen, and second-story additions built for long-term value.",
    url: "https://www.gutamaroofingnj.com/services/additions",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/service-additions.webp",
        width: 1200,
        height: 630,
        alt: "Home Addition Services in Essex County NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Home Addition Services in Essex County, NJ | Room & House Extensions",
    description:
      "Professional home additions in Essex County, NJ. Expand your home with room, kitchen, and second-story additions built for long-term value.",
    images: ["https://www.gutamaroofingnj.com/images/service-additions.webp"],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function AdditionsLayout({
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
            "@id": "https://www.gutamaroofingnj.com/services/additions",
            url: "https://www.gutamaroofingnj.com/services/additions",

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

            description:
              "Professional home addition services in Essex County, NJ including room additions, kitchen expansions, bathroom additions, garage additions, and second-story additions.",

            image:
              "https://www.gutamaroofingnj.com/images/service-additions.webp",

            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: "Essex County",
              },
              {
                "@type": "City",
                name: "Newark",
              },
              {
                "@type": "City",
                name: "East Orange",
              },
              {
                "@type": "City",
                name: "Bloomfield",
              },
              {
                "@type": "City",
                name: "West Orange",
              },
            ],

            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}