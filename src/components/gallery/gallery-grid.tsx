import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import type { GalleryProject } from "@/components/gallery/gallery-data";

interface GalleryGridProps {
  projects: GalleryProject[];
  activeCategory: string;
}

function getCardHeight(index: number) {
  if (index % 3 === 0) {
    return "h-64";
  }

  if (index % 3 === 1) {
    return "h-48";
  }

  return "h-56";
}

export function GalleryGrid({ projects, activeCategory }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
      {projects.map((project, index) => (
        <Reveal key={`${project.title}-${activeCategory}`} delay={index * 0.04} y={16}>
          <article className="glass-card group mb-6 cursor-pointer break-inside-avoid overflow-hidden transition-all duration-500 hover:border-secondary/30">
            <div className={`relative overflow-hidden ${getCardHeight(index)}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute left-3 top-3 rounded bg-secondary/90 px-2 py-1 text-xs font-bold text-secondary-foreground">
                {project.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="mb-1 font-serif text-base font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.desc}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
