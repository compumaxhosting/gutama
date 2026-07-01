import Image from "next/image";
import Link from "next/link";

export function CarpentryOverviewSection() {
  return (
    <section className="relative bg-background py-12 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            What We Do
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Carpentry Services in
            <br />
            <em className="text-secondary">Essex County, NJ</em>
          </h2>

          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mb-8 text-base leading-loose text-muted-foreground">
            Carpentry services include the construction, repair, and
            installation of wood structures in residential and commercial
            properties. These services cover structural framing, finishing work,
            repairs, and custom woodwork that improve both function and
            appearance.
          </p>

          <h3 className="mb-4 text-xl font-serif text-foreground">
            Professional Carpentry Solutions
          </h3>

          <p className="mb-10 text-base leading-loose text-muted-foreground">
            At <Link href="/" className="text-secondary hover:underline">
              Gutama Home Improvement
            </Link>, we provide professional carpentry
            services in Essex County, NJ, including structural repairs, custom
            woodwork, framing, trim installation, and exterior carpentry
            solutions.
          </p>

          {/* <ul className="flex flex-col gap-3.5">
            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-sm tracking-wide text-foreground/80">
                Structural framing and wood repairs
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-sm tracking-wide text-foreground/80">
                Custom woodwork and built-in solutions
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-sm tracking-wide text-foreground/80">
                Interior and exterior finish carpentry
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-secondary" />
              <span className="text-sm tracking-wide text-foreground/80">
                Residential and commercial carpentry services
              </span>
            </li>
          </ul> */}
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/service-carpentry.webp"
                alt="Professional carpentry services"
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
                Custom
              </p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
                Carpentry Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}