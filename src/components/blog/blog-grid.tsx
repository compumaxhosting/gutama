"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import type { BlogProject } from "@/components/blog/blog-data";

interface BlogGridProps {
  projects: BlogProject[];
}

function getCardHeight(index: number) {
  if (index % 3 === 0) return "h-64";
  if (index % 3 === 1) return "h-48";
  return "h-56";
}

export function BlogGrid({ projects }: BlogGridProps) {
  return (
    <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
      {projects.map((project, index) => (
        <Reveal key={project.title} delay={index * 0.04} y={16}>

          {/* ✅ Wrap entire card with Link */}
          <Link
            href={project.href} // 🔥 add this in your data
            className="block"
          >
            <article className="glass-card group mb-6 break-inside-avoid overflow-hidden transition-all duration-500 hover:border-secondary/30 hover:shadow-xl cursor-pointer">

              {/* IMAGE */}
              <div
                className={`relative w-full overflow-hidden ${getCardHeight(index)}`}
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
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="mb-1 font-serif text-base font-semibold text-foreground group-hover:text-secondary transition">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.shortDesc}
                </p>
              </div>

            </article>
          </Link>

        </Reveal>
      ))}
    </div>
  );
}