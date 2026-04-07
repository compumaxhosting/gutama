import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carpentry Services Essex County NJ | Expert Carpenter Newark",
  description:
    "Expert carpentry services in Essex County, NJ. Specialized in custom woodwork, finish carpentry, and residential repairs in Newark, East Orange, and Livingston.",
  keywords: [
    "expert carpentry services Essex County NJ",
    "carpenter Newark NJ",
    "custom carpentry East Orange",
    "finish carpentry Irvington",
    "woodwork contractor Bloomfield",
  ],
  authors: [{ name: "Gutama Roofing & Chimney" }],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  metadataBase: new URL("https://www.gutamaroofingnj.com"),
  alternates: {
    canonical: "/services/carpentry",
  },
  openGraph: {
    type: "website",
    title: "Expert Custom Carpentry & Woodwork in Essex County, NJ",
    description:
      "From finish carpentry to custom shelving, we are the best carpentry company in Essex County. Serving Newark, West Orange, and surrounding areas. Free estimates!",
    url: "https://www.gutamaroofingnj.com/services/carpentry",
    siteName: "Gutama Roofing & Chimney",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/Images%20New/service-carpentry.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top-Rated Carpentry Services | Newark & Essex County",
    description:
      "Transform your home with custom woodwork and expert residential carpentry. Serving all of Essex County, NJ. Call for a quote!",
    images: ["https://www.gutamaroofingnj.com/Images%20New/service-carpentry.webp"],
    creator: "@GutamaRoofingNJ",
  },
  appleWebApp: {
    capable: true,
    title: "Gutama Carpentry",
    statusBarStyle: "black",
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function CarpentryLayout({
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
            "@id": "https://www.gutamaroofingnj.com/services/carpentry",
            url: "https://www.gutamaroofingnj.com/services/carpentry",
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
            image: "https://www.gutamaroofingnj.com/Images%20New/service-carpentry.webp",
            description:
              "Expert carpentry and custom woodwork services in Essex County, NJ, including finish carpentry, residential repairs, and cabinetry.",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
