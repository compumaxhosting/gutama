import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Gutama Home Improvement | Roofing Contractor in Essex County, NJ",

  description:
    "Contact Gutama Home Improvement for a free roofing estimate in Essex County, NJ. Call our licensed, bilingual team for roof repair and replacement.",

  keywords: [
    "contact roofing contractor Essex County NJ",
    "roofing estimate Newark NJ",
    "free roof inspection Essex County",
    "roof repair contact NJ",
    "roof replacement quote",
    "emergency roofing Essex County",
    "Gutama Home Improvement",
  ],

  authors: [{ name: "Gutama Home Improvement" }],

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#ffffff",

  alternates: {
    canonical: "https://www.gutamaroofingnj.com/contact",
  },

  openGraph: {
    type: "website",
    title:
      "Contact Gutama Home Improvement | Free Roofing Estimates in Essex County, NJ",
    description:
      "Request a free roofing estimate from Gutama Home Improvement. Serving Essex County, NJ with expert roof repair, replacement, siding, and emergency roofing services.",
    url: "https://www.gutamaroofingnj.com/contact",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/contact/contact-gutama-home-improvement.jpg",
        alt: "Contact Gutama Home Improvement for roofing services and free estimates in Essex County, NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Gutama Home Improvement | Essex County Roofing Experts",
    description:
      "Get your free roofing estimate today. Contact Gutama Home Improvement for trusted roof repair, replacement, and exterior services in Essex County, NJ.",
    images: [
      "https://www.gutamaroofingnj.com/images/contact/contact-gutama-home-improvement.jpg",
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
