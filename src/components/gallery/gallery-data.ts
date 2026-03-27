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
    image: "/Images New/gallery-roof-1.webp",
  },
  {
    title: "Storm Damage Repair",
    category: "Roofing",
    desc: "Emergency roof repair after severe weather in Newark",
    image: "/Images New/service-re-roofing.webp",
  },
  {
    title: "Flat Roof Installation",
    category: "Roofing",
    desc: "TPO membrane system for commercial building in Bloomfield",
    image: "/Images New/service-flat-roof.webp",
  },
  {
    title: "Slate Roof Restoration",
    category: "Roofing",
    desc: "Historic slate roof repair in South Orange",
    image: "/Images New/gallery-roof-2.webp",
  },
  {
    title: "James Hardie Siding",
    category: "Siding",
    desc: "Full siding replacement in Maplewood",
    image: "/Images New/gallery-siding-1.webp",
  },
  {
    title: "Vinyl Siding Upgrade",
    category: "Siding",
    desc: "Modern vinyl siding installation in Belleville",
    image: "/Images New/service-siding.webp",
  },
  {
    title: "Two-Story Addition",
    category: "Additions",
    desc: "Master suite addition in Livingston",
    image: "/Images New/gallery-addition-1.webp",
  },
  {
    title: "Sunroom Addition",
    category: "Additions",
    desc: "Four-season sunroom in Verona",
    image: "/Images New/service-additions.webp",
  },
  {
    title: "Chimney Rebuild",
    category: "Chimney",
    desc: "Complete chimney rebuild from roofline in Nutley",
    image: "/Images New/gallery-chimney-1.webp",
  },
  {
    title: "Chimney Waterproofing",
    category: "Chimney",
    desc: "Crown repair and waterproof coating in Caldwell",
    image: "/Images New/service-chimney.webp",
  },
  {
    title: "Dormer Installation",
    category: "Roofing",
    desc: "Shed dormer for expanded attic space in Glen Ridge",
    image: "/Images New/gallery-roof-3.webp",
  },
  {
    title: "Gable Dormer Addition",
    category: "Roofing",
    desc: "Beautiful gable dormer with custom trim in Millburn",
    image: "/Images New/service-dormers.webp",
  },
];
