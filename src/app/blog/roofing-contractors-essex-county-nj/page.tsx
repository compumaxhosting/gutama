import { BlogDetails } from "@/components/blog/blog-details";
import { roofingContractorsNj } from "@/components/blog/pages-data/roofing-contractors-nj";



// ✅ Page Component
export default function RoofingEssexCountyPage() {
    return <BlogDetails {...roofingContractorsNj} />;
}