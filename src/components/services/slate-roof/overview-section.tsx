import Image from "next/image";

export function SlateRoofOverviewSection() {
  return (
    <section className="relative bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Slate Roofing Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Slate Roofing Services in
            <br />
            <em className="text-secondary">Essex County, NJ</em>
          </h2>

          <div className="mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <h3 className="mb-4 font-serif text-xl text-foreground">
            What is Slate Roofing?
          </h3>

          <p className="mb-6 text-base leading-loose text-muted-foreground">
            Slate roofing is a premium natural stone roofing system known for
            its extreme durability, long lifespan, and high-end appearance. It
            is commonly used on residential and historic properties because it
            can last 75–150 years or more when properly installed.
          </p>

          <p className="mb-6 text-base leading-loose text-muted-foreground">
            Slate roofs are resistant to fire, harsh weather, and rot, making
            them one of the most durable roofing options available in Essex
            County, NJ.
          </p>

          <p className="text-base leading-loose text-muted-foreground">
            At Gutama Home Improvement, we provide professional slate roof
            installation, replacement, repair, and maintenance services for
            homes and businesses across Essex County and surrounding areas.
          </p>
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/service-slate-roof.webp"
                alt="Slate Roofing Services in Essex County NJ"
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
                150+
              </p>

              <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
                Years Lifespan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}