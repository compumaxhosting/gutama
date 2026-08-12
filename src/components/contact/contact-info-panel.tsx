import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const CONTACT_LINKS = [
  {
    label: "English",
    value: siteConfig.phones.english,
    href: `tel:${siteConfig.phones.english}`,
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
    <section className="relative overflow-hidden bg-[#1c1208]">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(170deg,hsl(0_72%_45%/0.15)_0%,transparent_45%),linear-gradient(to_top,rgba(15,14,12,0.97)_0%,rgba(15,14,12,0.45)_55%,rgba(15,14,12,0.2)_100%)] bg-cover bg-center bg-no-repeat" />

      {/* Accent Triangle */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-0 w-0 border-[0_0_180px_70px] border-solid border-[transparent_transparent_hsl(0_72%_45%/0.15)_transparent]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 md:px-10 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT CONTENT */}
          <div className="flex-1">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />

              <span className="text-[11px] uppercase tracking-[0.25em] text-white/50">
                {siteConfig.business.regionLabel} · Since{" "}
                {siteConfig.business.foundedYear}
              </span>
            </div>

            {/* Heading + QR */}
            <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
              <div className="flex-1">
                <h2 className="font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                  Your home
                  <br />
                  deserves
                  <span className="block text-primary">the best.</span>
                </h2>
              </div>

              {/* QR Card */}
              <div className="w-full max-w-xs rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="mb-4 text-center text-xs uppercase tracking-[0.25em] text-white/50">
                  Review Us
                </p>

                <a
                  href="https://g.page/r/CZcJLgWQY05CEAE/review?utm_source=gbp&utm_medium=reviews&utm_campaign=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition duration-300 hover:scale-105"
                >
                  <Image
                    src="/review-barcode.png"
                    alt="Google Review QR Code"
                    width={200}
                    height={200}
                    className="mx-auto h-auto w-full max-w-[180px] object-contain"
                  />
                </a>

                <p className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-3 py-3 text-center text-xs font-semibold text-yellow-300">
                  ⭐ Click or Scan to Leave a 5-Star Review
                </p>
              </div>
            </div>

            <div className="mt-8 h-1 w-16 rounded-full bg-primary" />
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/10 lg:h-72 lg:w-px" />

          {/* RIGHT CONTENT */}
          <div className="flex flex-1 flex-col items-center gap-8">
            <div className="flex w-full flex-col gap-5">
              {CONTACT_LINKS.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/45">
                      {label}
                    </p>

                    <p className="break-all text-sm font-medium text-white sm:text-base">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

              <span className="text-sm text-white/70">
                Open • Mon – Sat • 7:00 AM – 7:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
