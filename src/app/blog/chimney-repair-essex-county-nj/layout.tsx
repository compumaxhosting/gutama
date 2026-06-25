import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

// ✅ Fonts
const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

// ✅ METADATA
export const metadata: Metadata = {
  metadataBase: new URL("https://www.gutamaroofingnj.com"),

  title:
    "How to Know When You Need Chimney Repair in Essex County, NJ | Gutama Home Improvement",

  description:
    "Learn the warning signs of chimney damage in Essex County, NJ. Discover when chimney repair is needed to prevent leaks, structural damage, and costly repairs.",

  keywords: [
    "chimney repair Essex County NJ",
    "chimney repair Newark NJ",
    "chimney flashing repair",
    "chimney masonry repair",
    "chimney leak repair",
    "chimney contractor Essex County",
    "chimney inspection NJ",
    "chimney repair near me",
  ],

  authors: [{ name: "Gutama Home Improvement" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gutamaroofingnj.com/blog/chimney-repair-essex-county-nj",
  },

  openGraph: {
    type: "article",
    title:
      "How to Know When You Need Chimney Repair in Essex County, NJ",
    description:
      "Learn the warning signs of chimney damage and when to schedule professional chimney repair in Essex County, NJ.",

    url:
      "https://www.gutamaroofingnj.com/blog/chimney-repair-essex-county-nj",

    siteName: "Gutama Home Improvement",

    images: [
      {
        url: "https://www.gutamaroofingnj.com/blog/chimney-repair.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "How to Know When You Need Chimney Repair in Essex County, NJ",

    description:
      "Learn how to identify chimney damage before it becomes an expensive repair.",

    images: [
      "https://www.gutamaroofingnj.com/blog/chimney-repair.webp",
    ],
  },
};

// ✅ VIEWPORT

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B5E8A",
};

// ✅ ROOT LAYOUT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline:
      "How to Know When You Need Chimney Repair in Essex County, NJ",

    description:
      "Learn the warning signs of chimney damage, common causes, repair options, and when to call a professional in Essex County, NJ.",

    image:
      "https://www.gutamaroofingnj.com/blog/chimney-repair.webp",

    author: {
      "@type": "Organization",
      name: "Gutama Home Improvement",
    },

    publisher: {
      "@type": "Organization",
      name: "Gutama Home Improvement",

      logo: {
        "@type": "ImageObject",
        url: "https://www.gutamaroofingnj.com/images/logo.webp",
      },
    },

    mainEntityOfPage:
      "https://www.gutamaroofingnj.com/blog/chimney-repair-essex-county-nj",
  };

  const businessSchema = {
    "@context": "https://schema.org",

    "@type": "RoofingContractor",

    name: "Gutama Home Improvement",

    url: "https://www.gutamaroofingnj.com",

    telephone: "+1-973-820-5130",

    address: {
      "@type": "PostalAddress",

      streetAddress: "272-274 Orange St",

      addressLocality: "Newark",

      addressRegion: "NJ",

      postalCode: "07103",

      addressCountry: "US",
    },

    areaServed: {
      "@type": "AdministrativeArea",

      name: "Essex County",
    },
  };

  return (
    <>
      <div
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
      >
        {children}
      </div>

      {/* Google Analytics */}

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8K697EFF53"
        strategy="lazyOnload"
      />

      <Script id="ga" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8K697EFF53');`}
      </Script>

      {/* Blog Schema */}

      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Business Schema */}

      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
    </>
  );
}