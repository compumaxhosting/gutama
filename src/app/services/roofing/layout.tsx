import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roofing Services Essex County NJ | Roof Removal, Replacement, Flat & Slate Systems",
  description:
    "Specialized roofing services in Essex County, NJ by Gutama Home Improvement. Discover our comprehensive roofing categories: roof removal, re-roofing replacement, flat roof systems, and historic slate roofing.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.gutamaroofingnj.com/services/roofing",
  },
  openGraph: {
    type: "website",
    title:
      "Roofing Services Essex County NJ | Gutama Home Improvement",
    description:
      "Expert roofing services across Essex County, NJ including complete tear-off removal, architectural re-roofing, flat roofing membranes, and historic slate roofing.",
    url: "https://www.gutamaroofingnj.com/services/roofing",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/Hero.webp",
        width: 1200,
        height: 630,
        alt: "Roofing Services in Essex County NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Roofing Services Essex County NJ | Gutama Home Improvement",
    description:
      "Specialized roofing solutions: roof removal, re-roofing, flat roofs, and slate roofing in Essex County, NJ.",
    images: ["https://www.gutamaroofingnj.com/images/Hero.webp"],
  },
};

export const viewport = {
  themeColor: "#1a1a1a",
};

export default function RoofingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
      {children}
    </>
  );
}
