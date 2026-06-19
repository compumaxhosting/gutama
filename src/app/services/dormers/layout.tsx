import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dormer Installation Services in Essex County, NJ | Roof Dormer Additions",

  description:
    "Professional dormer installation in Essex County, NJ. Add space, light, and value with expert dormer construction, repair, and roof modifications.",

  authors: [{ name: "Gutama Home Improvement" }],

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://www.gutamaroofingnj.com"),

  alternates: {
    canonical: "/services/dormers",
  },

  openGraph: {
    type: "website",
    title:
      "Dormer Installation Services in Essex County, NJ | Roof Dormer Additions",

    description:
      "Expert dormer installation, repair, and roof modifications in Essex County, NJ. Increase space, light, and home value with professional service.",

    url: "https://www.gutamaroofingnj.com/services/dormers",

    siteName: "Gutama Home Improvement",

    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/service-dormers.webp",
        width: 1200,
        height: 630,
        alt: "Dormer Installation Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dormer Installation Services in Essex County, NJ | Roof Dormer Additions",

    description:
      "Professional dormer construction, repair, and roof modifications throughout Essex County, NJ.",

    images: [
      "https://www.gutamaroofingnj.com/images/service-dormers.webp",
    ],
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

            name: "Gutama Home Improvement",

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

            image:
              "https://www.gutamaroofingnj.com/images/service-dormers.webp",

            description:
              "Professional dormer installation, repair, and roof modification services in Essex County, NJ.",

            areaServed: {
              "@type": "AdministrativeArea",
              name: "Essex County, NJ",
            },

            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}