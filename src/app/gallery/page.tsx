import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { GalleryHero } from "@/components/gallery/gallery-hero";
import { GalleryShowcase } from "@/components/gallery/gallery-showcase";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Project Gallery | ${siteConfig.business.regionLabel}`,
  description: `Browse completed roofing, siding, chimney, and addition projects by ${siteConfig.business.name} across ${siteConfig.business.regionLabel}.`,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryShowcase />
    </>
  );
}
