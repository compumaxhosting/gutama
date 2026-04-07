import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Gutter Installation Essex County NJ | Seamless Gutters",
  description:
    "Top-rated gutter installation in Essex County, NJ. Specializing in seamless gutters, aluminum systems, and gutter replacement in Newark, West Orange, and beyond.",
  keywords: [
    "Gutter installation Essex County NJ",
    "seamless gutter installation NJ",
    "gutter installers Essex County NJ",
    "rain gutter installation NJ",
    "aluminum gutter installation NJ",
  ],
  authors: [{ name: "Gutama Roofing NJ" }],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  metadataBase: new URL("https://www.gutamaroofingnj.com"),
  alternates: {
    canonical: "/services/gutters",
  },
  openGraph: {
    type: "website",
    title: "Expert Gutter Installation & Seamless Gutters in Essex County, NJ",
    description:
      "Protect your home's foundation with professional gutter installation. Serving Newark, West Orange, and all of Essex County with durable, leak-free solutions.",
    url: "https://www.gutamaroofingnj.com/services/gutters",
    siteName: "Gutama Roofing NJ",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-gutters.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seamless Gutter Installation | Essex County, NJ",
    description:
      "Affordable and weather-resistant gutter installation in Essex County. Get your free estimate from our local Newark experts today!",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-gutters.webp"],
    site: "@gutamaroofing",
    creator: "@GutamaRoofingNJ",
  },
  appleWebApp: {
    capable: true,
    title: "Essex County Gutters",
    statusBarStyle: "black",
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function GuttersLayout({
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
            name: "Gutama Roofing NJ",
            "@id": "https://www.gutamaroofingnj.com/services/gutters",
            url: "https://www.gutamaroofingnj.com/services/gutters",
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
              "Professional gutter installation and replacement services in Essex County, NJ. We specialize in seamless gutters and residential drainage solutions.",
            knowsAbout: [
              "Gutter installation",
              "Seamless gutters",
              "Gutter replacement",
              "Rain gutters",
              "Aluminum gutters",
            ],
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
                name: "West Orange",
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
                name: "Livingston",
              },
            ],
            image: "https://www.gutamaroofingnj.com/Images%20New/service-gutters.webp",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
