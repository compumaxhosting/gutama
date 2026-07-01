import type { Metadata } from "next";

export const metadata: Metadata = {
title:
"Carpentry Services Essex County NJ | Wood Repair, Framing & Custom Carpentry",

description:
"Professional carpentry services in Essex County, NJ. Gutama Home Improvement offers framing, wood repair, trim installation, and custom carpentry for homes and businesses.",

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
canonical: "https://www.gutamaroofingnj.com/services/carpentry",
},

openGraph: {
type: "website",
title: "Carpentry Services Essex County NJ | Gutama Home Improvement",
description:
"Expert carpentry services in Essex County, NJ including framing, wood repair, trim installation, and custom woodwork for residential and commercial properties.",
url: "https://www.gutamaroofingnj.com/services/carpentry",
siteName: "Gutama Home Improvement",
images: [
{
url: "https://www.gutamaroofingnj.com/images/service-carpentry.webp",
width: 1200,
height: 630,
},
],
},

twitter: {
card: "summary_large_image",
title:
"Carpentry Services Essex County NJ | Wood Repair, Framing & Custom Carpentry",
description:
"Professional carpentry services including framing, wood repair, trim installation, and custom carpentry solutions.",
images: [
"https://www.gutamaroofingnj.com/images/service-carpentry.webp",
],
creator: "@GutamaRoofingNJ",
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

```
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        name: "Gutama Home Improvement",
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
        image:
          "https://www.gutamaroofingnj.com/images/service-carpentry.webp",
        description:
          "Professional carpentry services in Essex County, NJ including framing, wood repair, trim installation, and custom carpentry for residential and commercial properties.",
        priceRange: "$$",
      }),
    }}
  />
</>


);
}
