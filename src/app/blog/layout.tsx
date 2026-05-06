import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: `Blog | ${siteConfig.business.regionLabel}`,
    description: `Learn about roofing, siding, and home improvement tips and insights from ${siteConfig.business.name} in ${siteConfig.business.regionLabel}.`,
    path: "/blog",
});

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
