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
  switch (index % 3) {
    case 0:
      return "h-64";
    case 1:
      return "h-48";
    default:
      return "h-56";
  }
}

export function GalleryGrid({ projects }: GalleryGridProps) {
  const [expandedProject, setExpandedProject] = useState<GalleryProject | null>(
    null,
  );

  useEffect(() => {
    if (!expandedProject) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={`${project.category}-${project.title}`}
            delay={index * 0.05}
            y={16}
          >
            <button
              type="button"
              onClick={() => setExpandedProject(project)}
              className={`group relative w-full overflow-hidden rounded-2xl cursor-zoom-in ${getCardHeight(
                index,
              )}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw,33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs">
                  {project.category}
                </span>

                <h3 className="text-lg font-semibold">{project.title}</h3>

                <p className="mt-1 text-sm text-white/80">{project.desc}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {expandedProject && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 p-5"
          onClick={() => setExpandedProject(null)}
        >
          <button
            onClick={() => setExpandedProject(null)}
            className="absolute right-5 top-5 rounded bg-white/20 px-4 py-2 text-white hover:bg-white/30"
          >
            Close
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={expandedProject.image}
              alt={expandedProject.title}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
