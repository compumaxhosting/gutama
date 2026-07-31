import { BlogDetails } from "@/components/blog/blog-details";
import { roofingWarningSigns } from "@/components/blog/pages-data/roofing-warning-signs";


export default function RoofingWarningSignsPage() {
  return <BlogDetails {...roofingWarningSigns} />;
}