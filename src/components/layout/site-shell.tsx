import type { ReactNode } from "react";
import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import ClientOnly from "@/components/layout/client-only";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">{children}</main>

      <Footer />

      {/* ✅ Mobile call FAB */}
      <a
        href={`tel:${siteConfig.phones.english}`}
        className="fixed bottom-8 left-8 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:bg-primary/90 lg:hidden"
        aria-label="Call for estimate"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* ✅ Client-side only stuff */}
      <ClientOnly />
    </div>
  );
}
