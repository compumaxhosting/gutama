import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

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

  // ✅ Google Search Console Verification
  verification: {
    google: "J6O-s5I-EDNOpmUgaLfDLYzww-7_LvQl4x3ZFCvAtxk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
      >
        {/* ✅ Main Layout */}
        <SiteShell>{children}</SiteShell>

        {/* ✅ Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8K697EFF53"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8K697EFF53');
          `}
        </Script>

        {/* ✅ Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
