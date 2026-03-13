import Image from "next/image";

const OVERVIEW_BULLETS = [
  "Architectural design included",
  "Full permit management",
  "Structural engineering on staff",
  "Material matching guaranteed",
] as const;

export function AdditionsOverviewSection() {
  return (
    <section className="relative bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            What We Do
          </p>
          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Additions that become
            <br />
            <em className="text-secondary">part of the story</em>
          </h2>
          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
          <p className="mb-8 text-base leading-loose text-muted-foreground">
            A poorly conceived addition is immediately visible: wrong roof pitch, mismatched
            siding, awkward proportion. We prevent that. Every project begins with architectural
            study of your home&apos;s existing geometry, materiality, and style before a single
            drawing is produced.
          </p>
          <p className="mb-10 text-base leading-loose text-muted-foreground">
            The result is an addition that reads as original construction, adding square footage,
            light, and lasting value without sacrificing your home&apos;s integrity.
          </p>
          <ul className="flex flex-col gap-3.5">
            {OVERVIEW_BULLETS.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-sm tracking-wide text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/gallery-addition-1.jpg"
                alt="Addition craftsmanship detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-transparent" />
            </div>
            <div className="absolute -right-6 -bottom-6 -z-10 h-28 w-28 border border-secondary/30" />
            <div className="absolute -top-6 -left-6 -z-10 h-20 w-20 border border-secondary/20" />
            <div className="absolute -left-7 bottom-7 border border-secondary/40 bg-card/85 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 font-serif text-3xl leading-none text-secondary">340+</p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
