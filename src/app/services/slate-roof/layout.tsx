import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slate Roofing Installation & Repair NJ | Essex County Specialist",
  description:
    "Expert slate roofing installation and repair services in NJ. Specializing in natural slate roof replacement for residential and commercial properties in Newark & Essex County.",
  keywords: [
    "slate roofing installation NJ",
    "slate roof repair services NJ",
    "slate roofing contractor Essex County",
    "natural slate roof installation New Jersey",
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
    canonical: "/services/slate-roof",
  },
  openGraph: {
    type: "website",
    title: "Premium Slate Roofing Services in Newark & Essex County, NJ",
    description:
      "Trust the experts for natural slate installation, repair, and maintenance. Serving Newark, Montclair, and all of Essex County with expert craftsmanship.",
    url: "https://www.gutamaroofingnj.com/services/slate-roof",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-slate-roof.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slate Roof Repair & Installation Contractor NJ",
    description:
      "Professional slate roofing services in Essex County. Affordable maintenance, expert repairs, and new natural slate installations.",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-slate-roof.webp"],
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
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
