import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { layoutTokens } from "@/config/theme";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(layoutTokens.container, className)}>{children}</div>;
}
