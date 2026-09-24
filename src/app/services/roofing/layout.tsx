import type { Metadata, Viewport } from "next";

const siteUrl = "https://www.gutamaroofingnj.com";
const pageUrl = `${siteUrl}/services/roofing`;
const imageUrl = `${siteUrl}/images/Hero.webp`;

export const metadata: Metadata = {
  title: "Roofing Services Essex County NJ | Roof Repair & Replacement",

  description:
    "Protect your property with expert roofing services in Essex County, NJ. Gutama Home Improvement offers roof repair, replacement, flat roofing, slate roofing, and roof tear-off services.",

  keywords: [
    "roofing services Essex County NJ",
    "roofing contractor Essex County NJ",
    "roof repair NJ",
    "roof replacement Essex County",
    "flat roofing NJ",
    "slate roofing NJ",
    "residential roofing NJ",
    "commercial roofing NJ",
  ],

  authors: [
    {
      name: "Gutama Home Improvement",
    },
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    title: "Roofing Services Essex County NJ | Roof Repair & Replacement",
    description:
      "Protect your property with expert roofing services in Essex County, NJ. Repairs, replacements, flat roofing and slate roofing from Gutama Home Improvement.",
    url: pageUrl,
    siteName: "Gutama Home Improvement",
    locale: "en_US",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Expert roofing services in Essex County, New Jersey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Services Essex County NJ | Roof Repair & Replacement",
    description:
      "Professional roof repair, replacement, flat and slate roofing services for homes and businesses across Essex County, NJ.",
    images: [imageUrl],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const roofingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Expert Roofing Services in Essex County, NJ",
      description:
        "Professional roofing services in Essex County, NJ, including roof repair, roof replacement, flat roofing, slate roofing, and roof tear-off.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      inLanguage: "en-US",
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Gutama Home Improvement",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
      inLanguage: "en-US",
    },

    {
      "@type": "RoofingContractor",
      "@id": `${siteUrl}/#business`,
      name: "Gutama Home Improvement",
      url: `${siteUrl}/`,
      telephone: "+1-973-820-5130",
      description:
        "Gutama Home Improvement provides residential and commercial roofing services throughout Essex County, New Jersey.",

      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Essex County, New Jersey",
        },
        {
          "@type": "City",
          name: "Newark",
        },
        {
          "@type": "City",
          name: "East Orange",
        },
        {
          "@type": "City",
          name: "Orange",
        },
        {
          "@type": "City",
          name: "Irvington",
        },
        {
          "@type": "City",
          name: "Belleville",
        },
        {
          "@type": "City",
          name: "Bloomfield",
        },
        {
          "@type": "City",
          name: "Caldwell",
        },
        {
          "@type": "City",
          name: "Cedar Grove",
        },
        {
          "@type": "City",
          name: "Essex Fells",
        },
        {
          "@type": "City",
          name: "Glen Ridge",
        },
        {
          "@type": "City",
          name: "Livingston",
        },
        {
          "@type": "City",
          name: "Maplewood",
        },
        {
          "@type": "City",
          name: "Millburn",
        },
        {
          "@type": "City",
          name: "Montclair",
        },
        {
          "@type": "City",
          name: "North Caldwell",
        },
        {
          "@type": "City",
          name: "Nutley",
        },
        {
          "@type": "City",
          name: "Roseland",
        },
        {
          "@type": "City",
          name: "South Orange",
        },
        {
          "@type": "City",
          name: "Verona",
        },
        {
          "@type": "City",
          name: "West Orange",
        },
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Roofing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Repair",
              serviceType: "Roof Repair",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Essex County, New Jersey",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Replacement",
              serviceType: "Roof Replacement",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Essex County, New Jersey",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flat Roofing",
              serviceType: "Flat Roofing",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Essex County, New Jersey",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Slate Roofing",
              serviceType: "Slate Roofing",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Essex County, New Jersey",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Tear-Off",
              serviceType: "Roof Tear-Off",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Essex County, New Jersey",
              },
            },
          },
        ],
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Roofing Services in Essex County, NJ",
      serviceType: "Roofing Services",
      provider: {
        "@id": `${siteUrl}/#business`,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Essex County, New Jersey",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Roofing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Repair",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Replacement and Re-Roofing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flat Roofing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Slate Roofing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Tear-Off",
            },
          },
        ],
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Roofing Services",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my roof needs repair or replacement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Signs such as recurring leaks, missing or damaged shingles, sagging areas, water stains, or an aging roof may indicate that professional attention is needed. A roof inspection can help determine whether a repair is sufficient or a replacement makes more sense.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can a roofing problem be repaired?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeframe depends on the type and extent of the damage. Minor leaks or damaged shingles may be repaired relatively quickly, while larger or storm-related issues may require a more detailed inspection and repair plan.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide roofing services for commercial properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gutama Home Improvement provides roofing services for both residential and commercial properties, including flat roofing systems such as EPDM and TPO.",
          },
        },
        {
          "@type": "Question",
          name: "What types of roofing systems do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our roofing services include asphalt shingle roofing, flat roofing, EPDM, TPO, and slate roofing. We can recommend a suitable option based on your property's structure, existing roof, and project requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can you repair a slate roof instead of replacing it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, damaged slate roofing can be repaired without replacing the entire roof. The appropriate approach depends on the condition of the slate, flashing, underlayment, and surrounding roofing materials.",
          },
        },
        {
          "@type": "Question",
          name: "What happens during a roof tear-off?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "During a roof tear-off, the existing roofing materials are carefully removed so the underlying roof deck can be inspected. Any damaged areas can then be addressed before the new roofing system is installed.",
          },
        },
        {
          "@type": "Question",
          name: "How can I tell if a roof leak is getting worse?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Water stains on ceilings or walls, damp insulation, peeling paint, mold growth, or repeated leaks are signs that moisture may be entering the structure. Even a small visible leak can indicate a larger roofing issue.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer emergency roof repairs in Essex County?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If your property has sudden roof damage from severe weather, fallen branches, or an unexpected leak, contact Gutama Home Improvement to discuss the damage and available repair options.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a roof replacement usually take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Project duration varies based on the roof's size, materials, complexity, weather conditions, and the condition of the existing roof deck. Your roofing contractor can provide a more accurate timeline after an inspection.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide free roofing estimates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gutama Home Improvement offers free roof inspections and estimates to help property owners understand the condition of their roof and the work that may be required.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide roofing services throughout Essex County, NJ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gutama Home Improvement serves homeowners and businesses throughout Essex County, including Newark, Montclair, West Orange, Bloomfield, Livingston, Maplewood, Orange, East Orange, and surrounding communities.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if my roof is damaged after a storm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you notice missing shingles, exposed areas, leaks, or other storm damage, contact a roofing professional for an inspection. If possible, document the visible damage with photos, but avoid walking on or attempting to repair the roof yourself.",
          },
        },
      ],
    },
  ],
};

export default function RoofingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roofingSchema),
        }}
      />

      {children}
    </>
  );
}
