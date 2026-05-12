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
      shortDesc: "If you're searching for roofing services in Essex County, NJ, you need a contractor who understands the region's climate, building codes, and neighborhood-specific challenges. ",
      image: "/blog/roofing-blog.webp",
      href: "/blog/roofing-contractors-essex-county-nj",
      date: "1st May 2026",
    },
    
  ];

