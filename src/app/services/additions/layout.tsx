import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Home Additions in Essex County, NJ | Custom House Extensions",
  description:
    "Professional home addition contractor in Essex County, NJ. We specialize in second story additions, room extensions, and home remodeling in Newark, West Orange, and Livingston.",
  keywords: [
    "Home additions Essex County NJ",
    "home addition contractor Essex County NJ",
    "room additions Essex County NJ",
    "house extensions Essex County NJ",
    "general contractor Essex County NJ",
  ],
  authors: [{ name: "Gutama Roofing & Chimney" }],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  metadataBase: new URL("https://www.gutamaroofingnj.com"),
  alternates: {
    canonical: "/services/additions",
  },
  openGraph: {
    type: "website",
    title: "Expert Home Additions & Extensions in Essex County, NJ",
    description:
      "Expand your living space with the leading home addition contractor in Essex County. Serving Newark, West Orange, and all NJ areas with custom remodeling.",
    url: "https://www.gutamaroofingnj.com/services/additions",
    siteName: "Gutama Roofing & Chimney",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-additions.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Home Additions & Remodeling | Essex County, NJ",
    description:
      "Quality house extensions and second-story additions in Essex County. Get a free estimate today!",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-additions.webp"],
    creator: "@GutamaRoofingNJ",
  },
  appleWebApp: {
    capable: true,
    title: "Essex County Home Additions",
    statusBarStyle: "black",
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
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
            name: "Gutama Roofing NJ",
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
              "Expert home addition contractor in Essex County, NJ, specializing in second story additions, room extensions, and home remodeling services.",
            knowsAbout: [
              "Home Additions",
              "Room Additions",
              "House Extensions",
              "Home Remodeling",
              "General Contracting",
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
                name: "Livingston",
              },
              {
                "@type": "City",
                name: "Bloomfield",
              },
            ],
            image: "https://www.gutamaroofingnj.com/Images%20New/service-additions.webp",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
