"use client";

import { useEffect, useState } from "react";
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
  const [expandedProject, setExpandedProject] = useState<GalleryProject | null>(null);

  useEffect(() => {
    if (!expandedProject) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [expandedProject]);

  return (
    <>
      <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {projects.map((project, index) => (
          <Reveal key={`${project.title}-${activeCategory}`} delay={index * 0.04} y={16}>
            <article className="glass-card group mb-6 break-inside-avoid overflow-hidden transition-all duration-500 hover:border-secondary/30">
              <button
                type="button"
                className={`relative block w-full cursor-zoom-in overflow-hidden text-left ${getCardHeight(index)}`}
                onClick={() => setExpandedProject(project)}
                aria-label={`Expand image for ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={60}
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute left-3 top-3 rounded bg-secondary/90 px-2 py-1 text-xs font-bold text-secondary-foreground">
                  {project.category}
                </span>
              </button>
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

      {expandedProject ? (
        <div
          className="fixed inset-0 z-90 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={expandedProject.title}
          onClick={() => setExpandedProject(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white transition hover:bg-white/20"
            aria-label="Close expanded image"
            onClick={() => setExpandedProject(null)}
          >
            Close
          </button>

          <div
            className="relative h-[75vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={expandedProject.image}
              alt={expandedProject.title}
              fill
              className="object-contain"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
