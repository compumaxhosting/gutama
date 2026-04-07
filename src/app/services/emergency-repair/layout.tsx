import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Emergency Roof Repair Essex County NJ | Same Day Service",
  description:
    "Need urgent roof repair in Essex County, NJ? We offer 24/7 emergency roofing services, storm damage repair, and fast leak fixes in Newark, West Orange, and all NJ areas.",
  keywords: [
    "Emergency roof repair Essex County NJ",
    "24 hour roof repair NJ",
    "emergency roofing contractor NJ",
    "roof leak repair emergency NJ",
    "storm damage roof repair NJ",
  ],
  authors: [{ name: "Gutama Roofing NJ" }],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  metadataBase: new URL("https://www.gutamaroofingnj.com"),
  alternates: {
    canonical: "/services/emergency-repair",
  },
  openGraph: {
    type: "website",
    title: "24/7 Emergency Roof Repair & Storm Damage Fixes | Essex County, NJ",
    description:
      "Fast, reliable emergency roofing contractor serving Essex County. Same-day repairs for leaks and storm damage. Available 24 hours a day, 7 days a week.",
    url: "https://www.gutamaroofingnj.com/services/emergency-repair",
    siteName: "Gutama Roofing NJ",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-emergency.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgent Roof Repair | Essex County, NJ | 24/7 Service",
    description:
      "Stop that leak now! Expert emergency roofing services in Newark, West Orange, and across Essex County. Call for same-day storm damage repair.",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-emergency.webp"],
    site: "@gutamaroofing",
    creator: "@GutamaRoofingNJ",
  },
  appleWebApp: {
    capable: true,
    title: "NJ Emergency Roofing",
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
            name: "Gutama Roofing NJ",
            "@id": "https://www.gutamaroofingnj.com/services/emergency-repair",
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
              "Emergency roof repair services in Essex County, NJ. Providing 24-hour urgent roofing assistance, leak repairs, and storm damage restoration.",
            knowsAbout: [
              "Emergency roof repair",
              "24 hour roof repair",
              "Storm damage repair",
              "Roof leak repair",
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
                name: "Livingston",
              },
              {
                "@type": "City",
                name: "Bloomfield",
              },
            ],
            image: "https://www.gutamaroofingnj.com/Images%20New/service-emergency.webp",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
