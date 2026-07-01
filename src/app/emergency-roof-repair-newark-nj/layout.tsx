import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Roof Repair Newark NJ | 24 Hour Roof Leak Repair",

  description:
    "Emergency Roof Repair Newark NJ. Fast roof leak repair, storm damage repair, roof tarping, and 24-hour emergency roofing services.",

  keywords: [
    "Emergency Roof Repair Newark NJ",
    "24 Hour Roof Repair Newark NJ",
    "Emergency Roofing Contractor Newark NJ",
    "Roof Leak Repair Newark NJ",
    "Same Day Roof Repair Newark NJ",
    "Emergency Roof Tarp Service Newark NJ",
    "Storm Damage Roof Repair Newark NJ",
    "Residential Emergency Roof Repair Newark NJ",
    "Commercial Emergency Roof Repair Newark NJ",
    "Affordable Emergency Roof Repair Newark NJ",
    "Emergency Roof Repair Essex County NJ",
    "Emergency Roof Repair East Orange NJ",
    "Emergency Roof Repair Irvington NJ",
    "Emergency Roof Repair Bloomfield NJ",
    "Emergency Roof Repair Harrison NJ",
    "Emergency Roof Repair Kearny NJ",
  ],

  authors: [{ name: "Gutama Roofing NJ" }],

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://www.gutamaroofingnj.com"),

  alternates: {
    canonical: "/emergency-roof-repair-newark-nj",
  },

  openGraph: {
    type: "website",
    title: "Emergency Roof Repair Newark NJ | 24 Hour Roof Leak Repair",
    description:
      "Fast emergency roof repair in Newark NJ. Roof leak repair, storm damage restoration, roof tarping, and same-day roofing services.",
    url: "https://www.gutamaroofingnj.com/emergency-roof-repair-newark-nj",
    siteName: "Gutama Roofing NJ",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/roof.webp",
        width: 1200,
        height: 630,
        alt: "Emergency Roof Repair Newark NJ - Roof Leak Repair and Storm Damage Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Emergency Roof Repair Newark NJ | 24 Hour Roof Leak Repair",
    description:
      "Need emergency roof repair in Newark NJ? Fast response for roof leaks, storm damage, roof tarping, and emergency roofing services.",
    images: [
      "https://www.gutamaroofingnj.com/images/roof.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function EmergencyRoofRepairNewarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}