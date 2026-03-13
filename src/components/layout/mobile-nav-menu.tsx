import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Music2, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
  isActive: boolean;
};

type MobileNavMenuProps = {
  isOpen: boolean;
  close: () => void;
  navLinks: NavLink[];
  businessName: string;
  phone: string;
};

export function MobileNavMenu({
  isOpen,
  close,
  navLinks,
  businessName,
  phone,
}: MobileNavMenuProps) {
  return (
    <>
      <div
        onClick={close}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-55 bg-black/50 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed left-0 top-0 z-60 h-full w-75 sm:w-85 lg:hidden",
          "flex flex-col border-r border-border/40 bg-background",
          "transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="absolute right-0 top-0 h-full w-px bg-linear-to-b from-transparent via-primary/40 to-transparent" />

        <div className="flex items-center border-b border-border/40 px-8 pb-6 pt-8">
          <Link href="/" onClick={close} aria-label={businessName}>
            <Image
              src="/images/logo2.png"
              alt={businessName}
              width={180}
              height={72}
              quality={60}
              sizes="180px"
              className="h-18 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex flex-1 flex-col px-6 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={close}
              className={cn(
                "group relative flex items-center gap-4 border-b border-border/40 px-2 py-4 last:border-b-0",
                "text-[15px] font-medium uppercase tracking-[0.08em]",
                "transition-all duration-300",
                link.isActive
                  ? "text-foreground"
                  : "text-foreground/50 hover:text-foreground",
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              )}
            >
              <span
                className={cn(
                  "absolute left-0 top-1/2 w-0.5 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 group-hover:h-5",
                  link.isActive ? "h-5" : "h-0"
                )}
              />
              <span className="w-5 font-mono text-[11px] text-foreground/20 transition-colors duration-300 group-hover:text-primary/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {link.label}
              </span>
            </Link>
          ))}

          <div
            className={cn(
              "mt-6 transition-all duration-300",
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            )}
          >
            <a
              href={`tel:${phone}`}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-primary/40 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
          </div>

          <div
            className={cn(
              "mt-2 transition-all duration-300",
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            )}
          >
            <Button asChild className="w-full" onClick={close}>
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          <div
            className={cn(
              "mt-5 transition-all duration-300",
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            )}
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className={cn(
                  "group flex h-11 w-11 items-center justify-center rounded-md",
                  "border border-border/70 bg-card/40 text-foreground/70 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.9)]",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary hover:shadow-luxury"
                )}
              >
                <Instagram className="h-4.5 w-4.5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(201,159,58,0.45)]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className={cn(
                  "group flex h-11 w-11 items-center justify-center rounded-md",
                  "border border-border/70 bg-card/40 text-foreground/70 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.9)]",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary hover:shadow-luxury"
                )}
              >
                <Facebook className="h-4.5 w-4.5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(201,159,58,0.45)]" />
              </a>
              <a
                href="https://www.tiktok.com/@gutamaroofing.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                className={cn(
                  "group flex h-11 w-11 items-center justify-center rounded-md",
                  "border border-border/70 bg-card/40 text-foreground/70 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.9)]",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary hover:shadow-luxury"
                )}
              >
                <Music2 className="h-4.5 w-4.5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(201,159,58,0.45)]" />
              </a>
            </div>
          </div>
        </nav>


      </div>
    </>
  );
}
