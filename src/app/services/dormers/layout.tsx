import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dormer Installation Essex County NJ | Dormer Contractors Newark",
  description:
    "Expert dormer installation in Essex County, NJ. Top-rated dormer contractors specializing in roof additions, shed dormers, and attic expansions in Newark and East Orange.",
  keywords: [
    "dormer installation Essex County NJ",
    "dormer contractors Newark NJ",
    "roof dormer installation East Orange",
    "dormer addition Irvington",
    "custom dormer construction Bloomfield",
  ],
  authors: [{ name: "Gutama Roofing & Chimney" }],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  metadataBase: new URL("https://www.gutamaroofingnj.com"),
  alternates: {
    canonical: "/services/dormers",
  },
  openGraph: {
    type: "website",
    title: "Expert Dormer Installation & Home Additions in Essex County, NJ",
    description:
      "Expand your home with custom dormer construction. We are the best dormer contractors in Newark, Livingston, and West Orange. Affordable attic transformations!",
    url: "https://www.gutamaroofingnj.com/services/dormers",
    siteName: "Gutama Roofing & Chimney",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-dormers.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Dormer Contractors in Essex County, NJ",
    description:
      "Expert dormer installation in Newark, East Orange, and Livingston. Call now for a free consultation.",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-dormers.webp"],
    creator: "@GutamaRoofingNJ",
  },
  appleWebApp: {
    capable: true,
    title: "Gutama Dormers",
    statusBarStyle: "black",
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function DormersLayout({
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
            "@id": "https://www.gutamaroofingnj.com/services/dormers",
            url: "https://www.gutamaroofingnj.com/services/dormers",
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
            image: "https://www.gutamaroofingnj.com/Images%20New/service-dormers.webp",
            description:
              "Expert dormer installation and house addition services in Essex County, NJ. Specializing in custom dormer construction and attic expansions.",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
