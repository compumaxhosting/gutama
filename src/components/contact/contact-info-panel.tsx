import { Phone, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";

const CONTACT_LINKS = [
  {
    label: "English",
    value: siteConfig.phones.english,
    href: `tel:${siteConfig.phones.english}`,
    Icon: Phone,
  },
  {
    label: "Español",
    value: siteConfig.phones.spanish,
    href: `tel:${siteConfig.phones.spanish}`,
    Icon: Phone,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
];

export function ContactInfoPanel() {
  return (
    <div className="relative flex min-h-115 flex-col justify-end overflow-hidden bg-[#1c1208] lg:min-h-full lg:justify-center">
      {/* Background photo + gradient overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(170deg,hsl(0_72%_45%/0.15)_0%,transparent_45%),linear-gradient(to_top,rgba(15,14,12,0.97)_0%,rgba(15,14,12,0.45)_55%,rgba(15,14,12,0.2)_100%)] bg-cover bg-center bg-no-repeat" />

      {/* Diagonal slash accent */}
      <div className="pointer-events-none absolute right-0 bottom-0 h-0 w-0 border-solid border-[0_0_200px_80px] border-[transparent_transparent_hsl(0_72%_45%/0.15)_transparent]" />

      {/* Watermark G */}
      {/* <div className="pointer-events-none absolute top-1/2 right-[-0.08em] -translate-y-1/2 select-none font-serif text-[clamp(18rem,26vw,30rem)] leading-none tracking-[-0.04em] text-transparent italic [-webkit-text-stroke:1px_hsl(0_72%_45%_/_0.15)]">
        G
      </div> */}

      {/* Content */}
      <div className="relative z-10 px-10 pt-16 pb-16 lg:py-24">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:gap-14">

          {/* LEFT: Eyebrow + Headline + Accent rule */}
          <div className="flex-1">
            <div className="mb-5 inline-flex items-center gap-2 opacity-0 animate-[fade-up_0.35s_0.05s_ease_both]">
              <div className="h-1.25 w-1.25 rounded-full bg-primary" />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/45">
                {siteConfig.business.regionLabel} · Since {siteConfig.business.foundedYear}
              </span>
            </div>

            <h1 className="mb-7 font-serif text-[clamp(2.4rem,4vw,3.6rem)] font-black leading-none text-white opacity-0 animate-[fade-up_0.35s_0.1s_ease_both]">
              Your home<br />deserves
              <em className="block not-italic text-primary">the best.</em>
            </h1>

            <div className="h-0.75 w-11 origin-left scale-x-0 bg-primary animate-[scale-x-in_0.3s_0.15s_ease_both]" />
          </div>

          {/* Vertical divider (sm+) */}
          <div className="hidden sm:block w-px self-stretch bg-white/10" />

          {/* RIGHT: Contact links + Hours */}
          <div className="flex flex-col gap-5 opacity-0 animate-[fade-up_0.35s_0.15s_ease_both]">
            <div className="flex flex-col gap-4">
              {CONTACT_LINKS.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 transition-all duration-200 group-hover:border-primary/50 group-hover:bg-primary/25">
                    <Icon className="h-3.5 w-3.5 text-white/70" />
                  </div>
                  <div>
                    <span className="block text-[0.65rem] uppercase tracking-widest text-white/30">
                      {label}
                    </span>
                    <span className="text-sm text-white/80">{value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              <span className="text-xs text-white/45">Open · Mon–Sat, 7am – 7pm</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}