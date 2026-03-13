export type GalleryCategory = "All" | "Roofing" | "Siding" | "Additions" | "Chimney";

export interface GalleryProject {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  desc: string;
  image: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Roofing",
  "Siding",
  "Additions",
  "Chimney",
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    title: "Complete Roof Replacement",
    category: "Roofing",
    desc: "Architectural shingle installation in West Orange",
    image: "/images/gallery-roof-1.jpg",
  },
  {
    title: "Storm Damage Repair",
    category: "Roofing",
    desc: "Emergency roof repair after severe weather in Newark",
    image: "/images/service-re-roofing.jpg",
  },
  {
    title: "Flat Roof Installation",
    category: "Roofing",
    desc: "TPO membrane system for commercial building in Bloomfield",
    image: "/images/service-flat-roof.jpg",
  },
  {
    title: "Slate Roof Restoration",
    category: "Roofing",
    desc: "Historic slate roof repair in South Orange",
    image: "/images/gallery-roof-2.jpg",
  },
  {
    title: "James Hardie Siding",
    category: "Siding",
    desc: "Full siding replacement in Maplewood",
    image: "/images/gallery-siding-1.jpg",
  },
  {
    title: "Vinyl Siding Upgrade",
    category: "Siding",
    desc: "Modern vinyl siding installation in Belleville",
    image: "/images/service-siding.jpg",
  },
  {
    title: "Two-Story Addition",
    category: "Additions",
    desc: "Master suite addition in Livingston",
    image: "/images/gallery-addition-1.jpg",
  },
  {
    title: "Sunroom Addition",
    category: "Additions",
    desc: "Four-season sunroom in Verona",
    image: "/images/service-additions.jpg",
  },
  {
    title: "Chimney Rebuild",
    category: "Chimney",
    desc: "Complete chimney rebuild from roofline in Nutley",
    image: "/images/gallery-chimney-1.jpg",
  },
  {
    title: "Chimney Waterproofing",
    category: "Chimney",
    desc: "Crown repair and waterproof coating in Caldwell",
    image: "/images/service-chimney.jpg",
  },
  {
    title: "Dormer Installation",
    category: "Roofing",
    desc: "Shed dormer for expanded attic space in Glen Ridge",
    image: "/images/gallery-roof-3.jpg",
  },
  {
    title: "Gable Dormer Addition",
    category: "Roofing",
    desc: "Beautiful gable dormer with custom trim in Millburn",
    image: "/images/service-dormers.jpg",
  },
];
