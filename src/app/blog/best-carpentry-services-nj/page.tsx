import { BlogDetails } from "@/components/blog/blog-details";
import { bestCarpentryServicesNj } from "@/components/blog/pages-data/best-carpentry-services-nj";

// ✅ Page Component
export default function BestCarpentryServicesNjPage() {
    return <BlogDetails {...bestCarpentryServicesNj} />;
}
