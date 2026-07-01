import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flat Roofing Newark NJ | Flat Roof Repair & Replacement Experts",

  description:
    "Flat Roofing Newark NJ services including flat roof repair, replacement, EPDM, TPO roofing, leak repair, and commercial roofing estimates.",

  keywords: [
    "Flat Roofing Newark NJ",
    "Flat Roof Repair Newark NJ",
    "Flat Roof Replacement Newark NJ",
    "Flat Roofing Contractor Newark NJ",
    "Commercial Flat Roofing Newark NJ",
    "Residential Flat Roofing Newark NJ",
    "EPDM Roofing Newark NJ",
    "TPO Roofing Newark NJ",
    "Flat Roof Leak Repair Newark NJ",
    "Flat Roof Installation Newark NJ",
    "Flat Roof Coating Newark NJ",
    "Emergency Flat Roof Repair Newark NJ",
    "Affordable Flat Roofing Newark NJ",
    "Flat Roofing Essex County NJ",
    "Flat Roofing East Orange NJ",
    "Flat Roofing Irvington NJ",
    "Flat Roofing Bloomfield NJ",
    "Flat Roofing Harrison NJ",
    "Flat Roofing Kearny NJ",
  ],

  authors: [{ name: "Gutama Roofing NJ" }],

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://www.gutamaroofingnj.com"),

  alternates: {
    canonical: "/flat-roofing-newark-nj",
  },

  openGraph: {
    type: "website",
    title: "Flat Roofing Newark NJ | Flat Roof Repair & Replacement Experts",

    description:
      "Trusted flat roofing contractor in Newark NJ offering EPDM, TPO, roof repair, roof replacement, leak repair, and commercial roofing services.",

    url: "https://www.gutamaroofingnj.com/flat-roofing-newark-nj",

    siteName: "Gutama Roofing NJ",

    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/flat-roofing-newark-nj.jpg",
        alt: "Flat Roofing Newark NJ - EPDM, TPO, Flat Roof Repair and Replacement",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Flat Roofing Newark NJ | Flat Roof Repair & Replacement Experts",

    description:
      "Professional flat roofing services in Newark NJ. Flat roof repair, replacement, EPDM roofing, TPO roofing, leak repair, and free estimates.",

    images: [
      "https://www.gutamaroofingnj.com/images/flat-roofing-newark-nj.jpg",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function FlatRoofingNewarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}