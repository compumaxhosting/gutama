import { BlogDetails } from "@/components/blog/blog-details";
import { chimneyRepairEssexCounty } from "@/components/blog/pages-data/chimney-repair";


// ✅ Page Component
export default function ChimneyRepairEssexCountyPage() {
  return <BlogDetails {...chimneyRepairEssexCounty} />;
}