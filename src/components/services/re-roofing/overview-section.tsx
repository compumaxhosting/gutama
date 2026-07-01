import Image from "next/image";
import Link from "next/link";

export function ReRoofingOverviewSection() {
  return (
    <section className="relative bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Re-Roofing Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Re-Roofing Services in
            <br />
            <em className="text-secondary">Essex County, NJ</em>
          </h2>

          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <h3 className="mb-4 font-serif text-xl text-foreground">
            Professional Re-Roofing Solutions for Homes and Businesses
          </h3>

          <p className="mb-4 text-base leading-loose text-muted-foreground">
            Re-roofing is the process of replacing an aging or damaged roof with
            a new roofing system to restore protection, improve energy
            efficiency, and extend the life of your property. A professional
            re-roofing project helps prevent leaks, weather damage, and costly
            structural repairs while increasing the value and appearance of your
            home or commercial building.
          </p>

          <p className="text-base leading-loose text-muted-foreground">
            At <Link href="/" className="text-secondary hover:underline">
              Gutama Home Improvement
            </Link>, we provide expert re-roofing services
            throughout Essex County, NJ. Whether your roof has reached the end
            of its lifespan, suffered storm damage, or is showing signs of wear
            and tear, our experienced roofing contractors deliver reliable
            solutions designed for long-term performance.
          </p>
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/before-roof.webp"
                alt="Professional Re-Roofing Services in Essex County NJ"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-transparent" />
            </div>

            <div className="absolute -right-6 -bottom-6 -z-10 h-28 w-28 border border-secondary/30" />
            <div className="absolute -top-6 -left-6 -z-10 h-20 w-20 border border-secondary/20" />

            <div className="absolute -left-7 bottom-7 border border-secondary/40 bg-card/85 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 font-serif text-3xl leading-none text-secondary">
                740+
              </p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
                Roofs Replaced
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}