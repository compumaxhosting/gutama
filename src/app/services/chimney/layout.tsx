import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chimney Services Essex County NJ | Repair & Cleaning Newark",
  description:
    "Expert chimney repair, cleaning, and inspections in Essex County, NJ. Serving Newark, East Orange, and Livingston with affordable, same-day maintenance services.",
  keywords: [
    "chimney services Essex County NJ",
    "chimney repair Newark NJ",
    "chimney cleaning East Orange",
    "chimney sweep Bloomfield",
    "chimney inspection Irvington",
  ],
  authors: [{ name: "Gutama Home Improvement" }],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  metadataBase: new URL("https://www.gutamaroofingnj.com"),
  alternates: {
    canonical: "/services/chimney",
  },
  openGraph: {
    type: "website",
    title: "Expert Chimney Services in Essex County, NJ | Reliable Repairs",
    description:
      "Keep your home safe with professional chimney sweep and repair services across Newark, West Orange, and all of Essex County. Schedule your inspection today!",
    url: "https://www.gutamaroofingnj.com/services/chimney",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-chimney.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Repair & Cleaning Essex County, NJ",
    description:
      "Top-rated chimney maintenance in Newark, Livingston, and East Orange. Affordable same-day service.",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-chimney.webp"],
    creator: "@GutamaRoofingNJ",
  },
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    title: "Gutama Roofing NJ",
    statusBarStyle: "black",
  },
  referrer: "strict-origin-when-cross-origin",
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
            name: "Gutama Roofing & Chimney",
            "@id": "https://www.gutamaroofingnj.com/services/chimney",
            url: "https://www.gutamaroofingnj.com/services/chimney",
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
            image: "https://www.gutamaroofingnj.com/Images%20New/service-chimney.webp",
            description:
              "Expert chimney services in Essex County, NJ, specializing in chimney repair, cleaning, inspections, and maintenance.",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
