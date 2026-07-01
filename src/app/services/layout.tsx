import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roofing Services in Essex County, NJ | Roof Repair & Replacement | Gutama Home Improvement",

  description:
    "Expert roofing services in Essex County, NJ including roof repair, roof replacement, siding, gutters, chimney repair, and emergency roofing.",

  keywords: [
    "roofing services Essex County NJ",
    "roofing contractor Essex County",
    "roof repair Newark NJ",
    "roof replacement Essex County",
    "emergency roof repair NJ",
    "flat roofing NJ",
    "slate roofing NJ",
    "siding installation Essex County",
    "gutter installation NJ",
    "chimney repair Essex County",
    "exterior home improvement NJ",
    "Gutama Home Improvement",
  ],

  authors: [{ name: "Gutama Home Improvement" }],

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#ffffff",

  alternates: {
    canonical: "https://www.gutamaroofingnj.com/services",
  },

  openGraph: {
    type: "website",
    title:
      "Roofing Services in Essex County, NJ | Roof Repair & Replacement Experts",
    description:
      "Professional roof repair, roof replacement, siding, gutters, chimney repair, and emergency roofing services throughout Essex County, NJ.",
    url: "https://www.gutamaroofingnj.com/services",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/services/roofing-services-essex-county-nj.jpg",
        alt: "Professional roofing services by Gutama Home Improvement in Essex County, New Jersey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Services in Essex County, NJ | Gutama Home Improvement",
    description:
      "Trusted roofing contractor providing roof repair, replacement, siding, gutter, chimney, and emergency roofing services in Essex County, NJ.",
    images: [
      "https://www.gutamaroofingnj.com/images/services/roofing-services-essex-county-nj.jpg",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
