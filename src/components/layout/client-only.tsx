"use client";

import dynamic from "next/dynamic";

// lazy load inside client component (safe)
const BackToTop = dynamic(() => import("./BackToTop"), { ssr: false });
const ScrollToTopOnRouteChange = dynamic(
  () => import("./scroll-to-top-on-route-change"),
  { ssr: false },
);

export default function ClientOnly() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <BackToTop />
    </>
  );
}
