import { MapPin } from "lucide-react";

export function DormersPropertyTypesSection() {
  const properties = [
    "Attics",
    "Upper floors",
    "Master bedrooms",
    "Home offices",
    "Storage spaces",
  ];

  const areas = [
    "Newark, NJ",
    "East Orange, NJ",
    "Bloomfield, NJ",
    "West Orange, NJ",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Residential Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Residential Dormer Services
            <br />
            <em className="text-secondary">In Essex County, NJ</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="border border-border/40 bg-card p-8 md:p-10 lg:p-12">
          <div className="mb-8">
            <h3 className="mb-4 font-serif text-2xl text-foreground">
              We Help Homeowners Expand & Improve
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              Dormers are especially common in older New Jersey homes with
              underutilized attic space.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border border-border bg-card p-8 md:p-10">
          <h3 className="mb-6 font-serif text-2xl text-foreground">
            Areas We Serve
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-secondary" />
                <span className="text-muted-foreground">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-border pt-6 text-base leading-loose text-muted-foreground">
            And surrounding Essex County communities.
          </p>
        </div>
      </div>
    </section>
  );
}