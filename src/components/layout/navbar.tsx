"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { MobileNavMenu } from "@/components/layout/mobile-nav-menu";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

type NavLink = {
  label: string;
  href: string;
  isActive: boolean;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && hash === "";
    }

    if (href.startsWith("/#")) {
      const sectionHash = href.slice(1);
      return pathname === "/" && hash === sectionHash;
    }

    return pathname === href;
  };

  const navLinks: NavLink[] = NAV_LINKS.map((link) => ({
    ...link,
    isActive: isLinkActive(link.href),
  }));

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2" aria-label={siteConfig.business.name}>
            <Image
              src="/images/logo2.png"
              alt={siteConfig.business.name}
              width={180}
              height={96}
              priority
              quality={60}
              sizes="180px"
              className="h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all",
                  link.isActive
                    ? "text-foreground after:w-full"
                    : "text-muted-foreground hover:text-foreground hover:after:w-full",
                  "hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.phones.english}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              {siteConfig.phones.english}
            </a>
            <Button asChild>
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Hamburger toggle */}
          <button
            type="button"
            className="relative z-70 inline-flex h-10 w-10 items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={cn(
              "absolute transition-all duration-300",
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
            )}>
              <X className="h-6 w-6" />
            </span>
            <span className={cn(
              "absolute transition-all duration-300",
              isOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            )}>
              <Menu className="h-6 w-6" />
            </span>
          </button>
        </div>
      </nav>

      <MobileNavMenu
        isOpen={isOpen}
        close={close}
        navLinks={navLinks}
        businessName={siteConfig.business.name}
        phone={siteConfig.phones.english}
      />
    </>
  );
}