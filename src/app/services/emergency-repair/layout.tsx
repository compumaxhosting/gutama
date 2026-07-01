import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Roof Repair in Essex County, NJ | 24/7 Roofing Services",
  description:
    "24/7 emergency roof repair in Essex County, NJ. Fast response for leaks, storm damage, and urgent roof repairs to protect your home.",
  authors: [{ name: "Gutama Home Improvement" }],
  robots: {
    index: true,
    follow: true,
    googleBot:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  metadataBase: new URL("https://www.gutamaroofingnj.com"),
  alternates: {
    canonical: "/services/emergency-repair",
  },
  openGraph: {
    type: "website",
    title:
      "Emergency Roof Repair in Essex County, NJ | 24/7 Roofing Services",
    description:
      "Fast emergency roof repair in Essex County, NJ. We fix leaks, storm damage, and roof failures with 24/7 rapid response service.",
    url: "https://www.gutamaroofingnj.com/services/emergency-repair",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/gallery-roof-3.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Emergency Roof Repair in Essex County, NJ | 24/7 Roofing Services",
    description:
      "Fast emergency roof repair in Essex County, NJ. We fix leaks, storm damage, and roof failures with 24/7 rapid response service.",
    images: ["https://www.gutamaroofingnj.com/images/gallery-roof-3.webp"],
  },
  appleWebApp: {
    capable: true,
    title: "Emergency Roof Repair",
    statusBarStyle: "black",
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function EmergencyRepairLayout({
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
            "@id":
              "https://www.gutamaroofingnj.com/services/emergency-repair",
            url: "https://www.gutamaroofingnj.com/services/emergency-repair",
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
              "24/7 emergency roof repair services in Essex County, NJ. Fast response for roof leaks, storm damage, roof failures, and urgent roofing emergencies.",
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
            image:
              "https://www.gutamaroofingnj.com/images/gallery-roof-3.webp",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
