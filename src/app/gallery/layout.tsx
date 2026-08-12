import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roofing Project Gallery in Essex County, NJ | Gutama Home Improvement",

  description:
    "Browse our roofing project gallery featuring roof replacements, repairs, siding, and exterior renovations completed across Essex County, NJ.",

  keywords: [
    "roofing gallery Essex County NJ",
    "roof replacement photos",
    "roof repair gallery Newark NJ",
    "siding project gallery",
    "exterior home improvement gallery",
    "roofing contractor portfolio NJ",
    "completed roofing projects",
    "Gutama Home Improvement",
  ],

  authors: [{ name: "Gutama Home Improvement" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.gutamaroofingnj.com/gallery",
  },

  openGraph: {
    type: "website",
    title:
      "Roofing Project Gallery in Essex County, NJ | Gutama Home Improvement",
    description:
      "Explore our completed roofing, siding, and exterior renovation projects throughout Essex County, NJ and see the quality of our craftsmanship.",
    url: "https://www.gutamaroofingnj.com/gallery",
    siteName: "Gutama Home Improvement",
    images: [
      {
        url: "https://www.gutamaroofingnj.com/images/gallery-top.jpeg",
        alt: "Completed roofing and exterior renovation projects by Gutama Home Improvement in Essex County, NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Project Gallery | Gutama Home Improvement",
    description:
      "View real roofing, siding, and exterior renovation projects completed by Gutama Home Improvement across Essex County, NJ.",
    images: [
      "https://www.gutamaroofingnj.com/images/gallery-top.jpeg",
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
