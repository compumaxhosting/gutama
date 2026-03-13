import { cn } from "@/lib/utils";

import type { GalleryCategory } from "@/components/gallery/gallery-data";

interface GalleryFiltersProps {
  categories: GalleryCategory[];
  active: GalleryCategory;
  onSelect: (category: GalleryCategory) => void;
}

export function GalleryFilters({ categories, active, onSelect }: GalleryFiltersProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
            active === cat
              ? "bg-primary text-primary-foreground"
              : "glass-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
