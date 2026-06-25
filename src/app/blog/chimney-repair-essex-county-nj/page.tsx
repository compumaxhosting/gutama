import { Metadata } from "next";
import { BlogDetails } from "@/components/blog/blog-details";
import { chimneyRepairEssexCounty } from "@/components/blog/pages-data/chimney-repair";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title:
    "How to Know When You Need Chimney Repair in Essex County, NJ",
  description:
    "Learn the warning signs of chimney damage in Essex County, NJ. Discover when chimney repair is needed to prevent leaks, structural damage, and costly repairs.",
};

// ✅ Page Component
export default function ChimneyRepairEssexCountyPage() {
  return <BlogDetails {...chimneyRepairEssexCounty} />;
}