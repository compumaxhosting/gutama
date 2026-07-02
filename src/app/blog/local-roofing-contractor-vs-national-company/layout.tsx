import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Roofing Contractor vs National Company | Expert Guide",

  description:
    "Discover why a local roofing contractor is better than national companies for faster service, better pricing, and reliable roof repairs.",

  keywords: [
    "local roofing contractor",
    "roofing contractor near me",
    "roof repair services",
    "residential roofing",
    "roof replacement",
    "roofing company",
    "emergency roof repair",
    "local roofer",
    "national roofing company comparison",
    "best roofing contractor",
  ],

  authors: [{ name: "gutamaroofingnj.com" }],

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#ffffff",

  alternates: {
    canonical:
      "https://www.gutamaroofingnj.com/local-roofing-contractor-vs-national-company",
  },

  openGraph: {
    type: "website",
    title: "Local Roofing Contractor vs National Company | Expert Guide",
    description:
      "Discover why a local roofing contractor is better than national companies for faster service, better pricing, and reliable roof repairs.",
    url: "https://www.gutamaroofingnj.com/local-roofing-contractor-vs-national-company",
    siteName: "gutamaroofingnj.com",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/localvsnational.webp",
        alt: "Local roofing contractor inspecting a residential roof",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Local Roofing Contractor vs National Company | Expert Guide",
    description:
      "Discover why a local roofing contractor is better than national companies for faster service, better pricing, and reliable roof repairs.",
    images: ["https://www.gutamaroofingnj.com/images/localvsnational.webp"],
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
