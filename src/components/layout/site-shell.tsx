import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BottomContactMenu } from "@/components/layout/bottom-contact-menu";
import ClientOnly from "@/components/layout/client-only";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20 lg:pb-0">{children}</main>

      <Footer />

      <BottomContactMenu />

      {/* ✅ Client-side only stuff */}
      <ClientOnly />
    </div>
  );
}
