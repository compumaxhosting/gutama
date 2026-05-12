import { Metadata } from "next";
import { BlogDetails } from "@/components/blog/blog-details";
import { seamlessGutterInstallation } from "@/components/blog/pages-data/seamless-gutter-installation";

// ✅ SEO Metadata
export const metadata: Metadata = {
    title: "Seamless Gutter Installation in Essex County, NJ | Benefits, Costs & Maintenance",
    description:
        "Learn about seamless gutter installation benefits, costs, maintenance tips, and how professional gutters protect your Essex County, NJ home from water damage.",
};

// ✅ Page Component
export default function SeamlessGutterInstallationPage() {
    return <BlogDetails {...seamlessGutterInstallation} />;
}
