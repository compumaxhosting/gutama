    import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gutamaroofingnj.com"),
  title: "Siding Installation Essex County NJ | 2026 Home Value Guide",
  description:
    "Expert Siding Installation Essex County NJ. Boost home value with durable, energy-efficient siding, vinyl, fiber cement & exterior remodeling.",
  keywords: [
    "Siding Installation Essex County NJ",
    "Vinyl Siding Contractors",
    "Fiber Cement Cladding",
    "Exterior Wall Panels",
    "House Facade Renovation",
    "Residential Exterior Remodeling",
    "Commercial Cladding Services",
    "Weatherproof Home Exterior",
    "Insulated Wall Systems",
    "James Hardie Installer",
    "Siding Replacement Experts",
    "Exterior Home Improvement",
    "Soffit and Fascia Repair",
    "Trim Installation Services",
    "Durable Exterior Materials",
    "Energy Efficient Cladding",
    "Storm Damage Restoration",
    "Custom Exterior Finishes",
    "Low Maintenance Panels",
    "Home Curb Appeal Upgrade",
    "Waterproof Exterior Solutions",
    "Board and Batten Styles",
    "Cedar Shake Alternatives",
    "Exterior Renovation Company",
    "Essex County Exterior Specialists",
  ],
  authors: [{ name: "Gutama Roofing NJ" }],
  alternates: {
    canonical: "/blog/siding-installation-essex-county-nj-2026-guide",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Siding Installation Essex County NJ | 2026 Home Value Guide",
    description:
      "Upgrade your home with expert siding installation in Essex County, NJ. Durable, energy-efficient siding that boosts curb appeal and value.",
    url: "/blog/siding-installation-essex-county-nj-2026-guide",
    siteName: "Gutama Roofing NJ",
    images: [
      {
        url: "/blog/siding-installation-essex-county-nj-2026-guide.webp",
        alt: "Professional siding installation in Essex County NJ by Gutama Roofing NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siding Installation Essex County NJ | 2026 Home Value Guide",
    description:
      "Increase your home's value with professional siding installation, fiber cement, vinyl siding, and exterior remodeling in Essex County, NJ.",
    images: ["/blog/siding-installation-essex-county-nj-2026-guide.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}