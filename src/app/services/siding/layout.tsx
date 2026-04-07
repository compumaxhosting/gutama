import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siding Installation Essex County NJ | Siding Repair Newark",
  description:
    "Top-rated siding installation in Essex County, NJ. Expert siding contractors in Newark, East Orange, and Livingston. Vinyl, fiber cement, and affordable siding repairs.",
  keywords: [
    "siding installation Essex County NJ",
    "siding contractors Newark NJ",
    "vinyl siding installation East Orange",
    "siding repair Irvington NJ",
    "fiber cement siding Livingston",
  ],
  authors: [{ name: "Gutama Roofing & Chimney" }],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  metadataBase: new URL("https://www.gutamaroofingnj.com"),
  alternates: {
    canonical: "/services/siding",
  },
  openGraph: {
    type: "website",
    title: "Professional Siding Installation & Repair in Essex County, NJ",
    description:
      "Looking for siding contractors near me? We provide affordable vinyl and fiber cement siding installation across Newark, West Orange, and all Essex County.",
    url: "https://www.gutamaroofingnj.com/services/siding",
    siteName: "Gutama Roofing & Chimney",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-siding.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Siding Company in Essex County, NJ",
    description:
      "Expert siding installation and repair. Serving Newark, East Orange, and Livingston. Get your free estimate today!",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-siding.webp"],
    site: "@gutamaroofing",
    creator: "@GutamaRoofingNJ",
  },
  appleWebApp: {
    capable: true,
    title: "Gutama Siding NJ",
    statusBarStyle: "black",
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
            name: "Gutama Roofing & Chimney",
            "@id": "https://www.gutamaroofingnj.com/services/siding",
            url: "https://www.gutamaroofingnj.com/services/siding",
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
                name: "Irvington",
              },
              {
                "@type": "City",
                name: "Bloomfield",
              },
              {
                "@type": "City",
                name: "Livingston",
              },
              {
                "@type": "City",
                name: "West Orange",
              },
              {
                "@type": "AdministrativeArea",
                name: "Essex County",
              },
            ],
            image: "https://www.gutamaroofingnj.com/Images%20New/service-siding.webp",
            description:
              "Professional siding installation and repair services in Essex County, NJ, specializing in vinyl and fiber cement siding for residential properties.",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
