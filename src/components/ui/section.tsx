import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { layoutTokens } from "@/config/theme";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn(layoutTokens.section, className)}>
      {children}
    </section>
  );
}
