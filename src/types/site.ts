import type { Service } from "@/types/service";

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface BeforeAfterItem {
  title: string;
  beforeImage: string;
  afterImage: string;
}

export interface WhyChooseItem {
  icon: "shield" | "star" | "clock" | "dollar-sign" | "globe";
  title: string;
  description: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  category: "roofing" | "siding" | "chimney" | "additions";
}

export interface SiteConfig {
  businessName: string;
  legalName: string;
  description: string;
  tagline: string;
  locale: string;
  region: string;
  serviceAreaLabel: string;
  phones: {
    english: string;
    spanish: string;
  };
  email: string;
  address: {
    locality: string;
    region: string;
    country: string;
  };
  navLinks: Array<{ label: string; href: string }>;
  quickLinks: Array<{ label: string; href: string }>;
  socials: Array<{ label: string; href: string }>;
  services: Service[];
  whyChooseUs: WhyChooseItem[];
  beforeAfter: BeforeAfterItem[];
  testimonials: Testimonial[];
  municipalities: string[];
  gallery: GalleryItem[];
}
