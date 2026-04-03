"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Keep anchor navigation intact (e.g. /#about).
    if (window.location.hash) {
      return;
    }

    // Force an instant jump to top even when global smooth scroll is enabled.
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    root.style.scrollBehavior = previousScrollBehavior;
  }, [pathname]);

  return null;
}