export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: "layers" | "home" | "square" | "diamond" | "flame" | "panel-top" | "hammer" | "building" | "triangle" | "droplets" | "alert-triangle";
  image: string;
  description: string;
  longDescription: string;
  process: string[];
  faqs: ServiceFaq[];
}
