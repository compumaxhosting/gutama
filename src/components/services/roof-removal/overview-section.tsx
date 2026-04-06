import Image from "next/image";

export function RoofRemovalOverviewSection() {
  return (
    <section className="relative bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            What We Do
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            The Best Roof Removal Services in
            <br />
            <em className="text-secondary">Essex County, NJ</em>
          </h2>

          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mb-4 text-base leading-loose text-muted-foreground">
            Gutama Home Improvement provides expert roof removal services in NJ,
            specializing in safe, efficient debris disposal for homes and
            businesses. Whether you need a residential roof removal in Newark,
            NJ or a commercial roof removal in East Orange, our team ensures a
            clean slate for your next installation.
          </p>

          <h3 className="mb-4 text-xl font-serif text-foreground">
            Why Choose Our Essex County Roof Tear-Off?
          </h3>

          <p className="mb-4 text-base leading-loose text-muted-foreground">
            We handle the heavy lifting so you don&apos;t have to. From
            storm-damaged roof removal to specialized flat roof removal in New
            Jersey, we serve the entire region, including West Orange and
            Bloomfield.
          </p>

          <ul className="flex flex-col gap-3.5">
            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-sm tracking-wide text-foreground/80">
                Local expertise — locally owned, serving Essex County since
                [Year]
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-sm tracking-wide text-foreground/80">
                Safety first — OSHA-compliant roof disposal services
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-sm tracking-wide text-foreground/80">
                Emergency response — rapid roof removal after North Jersey
                storms
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/Images New/before-roof.webp"
                alt="Trusted Roof Removal Services by Gutama Home Improvement"
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
                Roofs Removed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width bottom content */}
      <div className="mx-auto mt-20 max-w-4xl text-center">
        <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

        <h3 className="mb-4 font-serif text-[clamp(24px,2.5vw,32px)] text-foreground">
          Trusted Roof Removal Services by{" "}
          <em className="text-secondary">Gutama Home Improvement</em>
        </h3>

        <p className="text-base leading-loose text-muted-foreground">
          Gutama Home Improvement offers professional roof removal services in
          NJ, providing homeowners and businesses in Essex County with efficient
          debris disposal. Our expert team specializes in residential roof
          removal in Newark, NJ, ensuring a clean, safe, and cost-effective
          foundation for your new roofing system.
        </p>
      </div>
    </section>
  );
}
