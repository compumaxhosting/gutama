import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

const addressLabel = `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
const encodedAddress = encodeURIComponent(addressLabel);

const contactItems = [
  {
    label: "Phone",
    href: `tel:${siteConfig.phones.english}`,
    value: siteConfig.phones.english,
    icon: Phone,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
    icon: Mail,
  },
  {
    label: "Location",
    href: `https://maps.google.com/?q=${encodedAddress}`,
    value: siteConfig.address.locality,
    icon: MapPin,
  },
] as const;

export function BottomContactMenu() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-card/95 backdrop-blur-xl lg:hidden">
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-3xl grid-cols-3">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Location" ? "_blank" : undefined}
              rel={item.label === "Location" ? "noreferrer" : undefined}
              className="group flex min-h-16 flex-col items-center justify-center gap-1 border-r border-border/45 px-2 py-2 text-muted-foreground transition-colors last:border-r-0 hover:bg-muted/70 hover:text-foreground"
              aria-label={item.label === "Location" ? `Open ${addressLabel} in maps` : item.label}
              title={item.label}
            >
              <Icon className="h-5 w-5 text-secondary transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span className="text-[10px] font-semibold tracking-[0.08em] uppercase">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}