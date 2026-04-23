import { Metadata } from "next";
import { BlogDetails } from "@/components/blog/blog-details";
import { roofingContractorsNj } from "@/components/blog/pages-data/roofing-contractors-nj";

// ✅ SEO Metadata
export const metadata: Metadata = {
    title: "Roofing Contractors in Essex County, NJ | Roof Repair & Replacement Guide",
    description:
        "Learn about roof repair, replacement costs, materials, and how to choose the best roofing contractor in Essex County, NJ.",
};

// ✅ Page Component
export default function RoofingEssexCountyPage() {
    return <BlogDetails {...roofingContractorsNj} />;
}