import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roof Removal Newark NJ | Roof Tear Off & Roof Replacement | Gutama Roofing",

  description:
    "Need Roof Removal Newark NJ? Gutama Roofing provides roof tear-off, roof replacement, emergency roof repair, and free estimates in Newark and Essex County.",

  keywords: [
    "Roof Removal Newark NJ",
    "Roof Tear Off Newark NJ",
    "Roof Replacement Newark NJ",
    "Roofing Contractor Newark NJ",
    "Roof Replacement Cost Newark NJ",
    "Residential roof removal Newark NJ",
    "Commercial roof removal Newark NJ",
    "Asphalt shingle removal Newark NJ",
    "Flat roof replacement Newark NJ",
    "Emergency roof repair Newark NJ",
    "Roof removal in Newark NJ",
    "Roof removal East Orange NJ",
    "Roof removal Irvington NJ",
    "Roof removal Bloomfield NJ",
    "Roof removal Essex County NJ",
    "Best roofing company in Newark NJ",
    "Affordable roof replacement Newark NJ",
    "Free roof replacement estimate Newark NJ",
    "Licensed roof removal contractor Newark NJ",
    "Same-day roof repair Newark NJ",
  ],

  authors: [{ name: "Gutama Roofing" }],

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://www.gutamaroofingnj.com"),

  alternates: {
    canonical: "/roof-removal-newark-nj",
  },

  openGraph: {
    type: "website",

    title:
      "Roof Removal Newark NJ | Roof Tear Off & Roof Replacement | Gutama Roofing",

    description:
      "Professional Roof Removal Newark NJ services including roof tear-off, roof replacement, and emergency roofing solutions with free estimates.",

    url: "https://www.gutamaroofingnj.com/roof-removal-newark-nj",

    siteName: "Gutama Roofing",

    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/roof-removal.webp",
        width: 1200,
        height: 630,
        alt: "Professional Roof Removal Newark NJ by Gutama Roofing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Roof Removal Newark NJ | Roof Tear Off & Roof Replacement | Gutama Roofing",

    description:
      "Get professional Roof Removal Newark NJ services, roof tear-offs, roof replacement, and free estimates from Gutama Roofing.",

    images: [
      "https://www.gutamaroofingnj.com/images/roof-removal.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RoofRemovalNewarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}