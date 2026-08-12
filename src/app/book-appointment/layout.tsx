import type { Metadata } from "next";

import { siteConfig, siteUrl } from "@/config/site";

const pageUrl = `${siteUrl}/book-appointment`;
const title = "Book a Free Roofing Estimate | Gutama Home Improvement";
const description =
  "Schedule a free roofing or exterior project estimate with Gutama Home Improvement in Essex County, NJ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.business.name,
    images: [
      {
        url: `${siteUrl}/images/Hero.webp`,
        alt: "Gutama Home Improvement roofing team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/images/Hero.webp`],
  },
};

export default function BookAppointmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
