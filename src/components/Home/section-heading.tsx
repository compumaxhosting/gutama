import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p> : null}
      <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">{title}</h2>
      <div className={cn("gold-divider mt-5", !centered && "mx-0!")} />
      {description ? <p className={cn("mt-4 max-w-2xl text-muted-foreground md:text-lg", centered && "mx-auto")}>{description}</p> : null}
    </div>
  );
}
