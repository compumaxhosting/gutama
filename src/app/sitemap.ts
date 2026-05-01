import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.gutamaroofingnj.com";
  const now = new Date();

  return [
    // 🔝 Core Pages (Highest Priority)
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // 🛠 Services Hub
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 🔧 Individual Services (High Intent SEO Pages)
    ...[
      "roof-removal",
      "re-roofing",
      "flat-roof",
      "slate-roof",
      "chimney",
      "siding",
      "carpentry",
      "dormers",
      "additions",
      "gutters",
      "emergency-repair",
    ].map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // 📸 Supporting Pages
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // 📝 Blog (SEO Engine)
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/roofing-contractors-essex-county-nj`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95, // 🔥 high because it's location SEO
    },
  ];
}