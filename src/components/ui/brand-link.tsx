import Link from "next/link";

import { siteUrl } from "@/config/site";

type BrandLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function BrandLink({ children, className }: BrandLinkProps) {
  return (
    <Link
      href={siteUrl}
      className={className ?? "underline decoration-current underline-offset-2"}
    >
      {children}
    </Link>
  );
}
