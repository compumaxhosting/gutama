export type BlogCategory = "All" | "Roofing" | "Siding" | "Additions" | "Chimney";

export interface BlogProject {
  title: string;
  shortDesc: string;
  image: string;
  href: string;
  date: string;
}


export const BLOG_PROJECTS: BlogProject[] = [
  {
    title: "Top Roofing Services in Essex County, NJ",
    shortDesc:
      "If you're searching for roofing services in Essex County, NJ, you need a contractor who understands the region's climate, building codes, and neighborhood-specific challenges. ",
    image: "/blog/roofing-blog.webp",
    href: "/blog/roofing-contractors-essex-county-nj",
    date: "1st May 2026",
  },
  {
    title: "Seamless Gutter Installation in Essex County, NJ",
    shortDesc:
      "Learn about seamless gutter benefits, installation costs, maintenance tips, and how professional seamless gutters protect your Essex County home from water damage.",
    image: "/blog/gutterinstallation-blog.webp",
    href: "/blog/seamless-gutter-installation-essex-county-nj",
    date: "12th May 2026",
  },
  {
    title: "How to Know When You Need Chimney Repair in Essex County, NJ",
    shortDesc:
      "Learn the warning signs of chimney damage, common causes, repair options, and when homeowners in Essex County should schedule professional chimney repair.",
    image: "/blog/chimney-repair.webp",
    href: "/blog/chimney-repair-essex-county-nj",
    date: "25th June 2026",
  },
  {
    title:
      "Why Hiring a Local Roofing Contractor Is Better Than a National Company",
    shortDesc:
      "Local roofing contractors offer faster response times, personalized service, better local code knowledge, and stronger accountability compared to national companies",
    image: "/blog/localvsnational.webp",
    href: "/blog/local-roofing-contractor-vs-national-company",
    date: "2th July 2026",
  },
];

