import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: `Contact Us | ${siteConfig.business.regionLabel}`,
    description: `Get a free, no-obligation estimate for roofing and exterior projects in ${siteConfig.business.regionLabel}. Call or fill out our form today.`,
    path: "/contact",
});

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
