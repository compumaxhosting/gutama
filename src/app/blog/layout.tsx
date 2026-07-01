import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roofing Blog | Expert Roofing Tips & Home Improvement Guides | Gutama Home Improvement",

  description:
    "Read expert roofing tips, maintenance guides, and home improvement advice from Gutama Home Improvement serving Essex County, NJ.",

  keywords: [
    "roofing blog Essex County NJ",
    "roofing tips NJ",
    "roof maintenance guide",
    "roof repair advice",
    "roof replacement blog",
    "home improvement blog NJ",
    "roofing contractor blog",
    "Gutama Home Improvement",
    "roofing articles",
    "Essex County roofing",
  ],

  authors: [{ name: "Gutama Home Improvement" }],

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#ffffff",

  alternates: {
    canonical: "https://www.gutamaroofingnj.com/blog",
  },

  openGraph: {
    type: "website",
    title: "Roofing Blog | Expert Roofing Tips & Home Improvement Guides",
    description:
      "Explore expert roofing tips, maintenance advice, roof repair guides, and home improvement resources from trusted roofing professionals in Essex County, NJ.",
    url: "https://www.gutamaroofingnj.com/blog",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/blog/roofing-blog-essex-county-nj.jpg",
        alt: "Roofing blog featuring expert roofing tips and home improvement guides by Gutama Home Improvement",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Blog | Gutama Home Improvement",
    description:
      "Stay informed with roofing tips, roof maintenance advice, and home improvement insights from Essex County, NJ roofing experts.",
    images: [
      "https://www.gutamaroofingnj.com/images/blog/roofing-blog-essex-county-nj.jpg",
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
