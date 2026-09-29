"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Briefcase, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/config/site";

const addressLabel = `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;

const contactItems = [
  {
    label: "Phone",
    href: `tel:${siteConfig.phones.english}`,
    icon: Phone,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Location",
    href: `https://maps.app.goo.gl/Ft48fUmJwB71CMAk9`,
    icon: MapPin,
  },
] as const;

const services = [
{ label: "Roofing", href: "/services/roofing" },
{ label: "Roof Removal", href: "/services/roof-removal" },
{ label: "Re-Roofing", href: "/services/re-roofing" },
{ label: "Flat Roof", href: "/services/flat-roof" },
{ label: "Slate Roof", href: "/services/slate-roof" },
{ label: "Chimney", href: "/services/chimney" },
{ label: "Siding", href: "/services/siding" },
{ label: "Carpentry", href: "/services/carpentry" },
{ label: "Dormers", href: "/services/dormers" },
{ label: "Home Additions", href: "/services/additions" },
{ label: "Gutters", href: "/services/gutters" },
{ label: "Emergency Repair", href: "/services/emergency-repair" },
] as const;

export function BottomContactMenu() {
const [isServicesOpen, setIsServicesOpen] = useState(false);

return (
  <>
    {/* Bottom Contact Menu */}{" "}
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-card/95 backdrop-blur-xl lg:hidden">
      {" "}
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-3xl grid-cols-4">
        {/* Phone */}
        {(() => {
          const item = contactItems[0];
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="group flex min-h-16 flex-col items-center justify-center gap-1 border-r border-border/45 px-2 text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
              aria-label={item.label}
              title={item.label}
            >
              <Icon className="h-5 w-5 text-secondary transition-transform duration-200 group-hover:-translate-y-0.5" />

              <span className="text-[10px] font-semibold tracking-[0.08em] uppercase">
                {item.label}
              </span>
            </a>
          );
        })()}

        {/* Services */}
        <button
          type="button"
          onClick={() => setIsServicesOpen(true)}
          className="group flex min-h-16 flex-col items-center justify-center gap-1 border-r border-border/45 px-2 py-2 text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
          aria-label="View our services"
          title="Services"
        >
          <Briefcase className="h-5 w-5 text-secondary transition-transform duration-200 group-hover:-translate-y-0.5" />

          <span className="text-[10px] font-semibold tracking-[0.08em] uppercase">
            Services
          </span>
        </button>

        {/* Email */}
        {(() => {
          const item = contactItems[1];
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="group flex min-h-16 flex-col items-center justify-center gap-1 border-r border-border/45 px-2 text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
              aria-label={item.label}
              title={item.label}
            >
              <Icon className="h-5 w-5 text-secondary transition-transform duration-200 group-hover:-translate-y-0.5" />

              <span className="text-[10px] font-semibold tracking-[0.08em] uppercase">
                {item.label}
              </span>
            </a>
          );
        })()}

        {/* Location */}
        {(() => {
          const item = contactItems[2];
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-16 flex-col items-center justify-center gap-1 px-2 text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
              aria-label={`Open ${addressLabel} in maps`}
              title={item.label}
            >
              <Icon className="h-5 w-5 text-secondary transition-transform duration-200 group-hover:-translate-y-0.5" />

              <span className="text-[10px] font-semibold tracking-[0.08em] uppercase">
                {item.label}
              </span>
            </a>
          );
        })()}
      </div>
    </div>
    {/* Services Modal */}
    <AnimatePresence>
      {isServicesOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/70"
            onClick={() => setIsServicesOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-60 flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-sm rounded-lg bg-card p-6 shadow-2xl">
              {/* Close Button */}
              <button
                type="button"
                aria-label="Close services"
                onClick={() => setIsServicesOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-muted/80"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="mb-4 pr-10 text-xl font-bold text-foreground">
                Our Services
              </h2>

              <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto">
                {services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    onClick={() => setIsServicesOpen(false)}
                    className="rounded-md p-2 text-foreground transition-colors duration-200 hover:bg-muted"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
);
}
