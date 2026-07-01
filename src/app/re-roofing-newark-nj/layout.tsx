import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Re-Roofing Newark NJ | Affordable Roof Replacement & Roof Overlay",

  description:
    "Expert re-roofing Newark NJ services. Affordable roof replacement, roof overlay, asphalt shingles, flat roofing & free estimates in Essex County.",

  keywords: [
    "Re-Roofing Newark NJ",
    "Re-Roofing Contractor Newark NJ",
    "Affordable Re-Roofing Newark NJ",
    "Roof Replacement Newark NJ",
    "Roof Overlay Newark NJ",
    "Asphalt Shingles Newark NJ",
    "Flat Roofing Newark NJ",
    "Metal Roofing Newark NJ",
    "Essex County Roofing",
    "Emergency Re-Roofing Newark NJ",
  ],

  authors: [{ name: "Gutama Roofing NJ" }],

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://www.gutamaroofingnj.com"),

  alternates: {
    canonical: "/re-roofing-newark-nj",
  },

  openGraph: {
    type: "website",

    title:
      "Re-Roofing Newark NJ | Affordable Roof Replacement & Roof Overlay",

    description:
      "Professional re-roofing services in Newark NJ. Roof replacement, roof overlays, asphalt shingles, flat roofing & free estimates.",

    url: "https://www.gutamaroofingnj.com/re-roofing-newark-nj",

    siteName: "Gutama Roofing NJ",

    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/re-roofing.webp",
        width: 1200,
        height: 630,
        alt: "Re-Roofing Services in Newark NJ by Gutama Roofing NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Re-Roofing Newark NJ | Affordable Roof Replacement & Roof Overlay",

    description:
      "Trusted re-roofing contractor in Newark NJ. Roof replacement, overlays, inspections & free estimates throughout Essex County.",

    images: [
      "https://www.gutamaroofingnj.com/images/re-roofing.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function ReRoofingNewarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}