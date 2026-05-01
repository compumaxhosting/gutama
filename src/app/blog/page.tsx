import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogShowcase } from "@/components/blog/blog-showcase";

export const metadata: Metadata = buildMetadata({
    title: `Project Gallery | ${siteConfig.business.regionLabel}`,
    description: `Browse completed roofing, siding, chimney, and addition projects by ${siteConfig.business.name} across ${siteConfig.business.regionLabel}.`,
    path: "/gallery",
});

export default function GalleryPage() {
    return (
        <>
            <BlogHero />
            <BlogShowcase />
        </>
    );
}
