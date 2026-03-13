import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { siteConfig, siteUrl } from "@/config/site";
import { getLocalBusinessSchema } from "@/lib/seo";
import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.business.name} | ${siteConfig.business.regionLabel}`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.business.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
