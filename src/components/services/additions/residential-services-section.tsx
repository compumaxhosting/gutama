import { MapPin } from "lucide-react";

export function AdditionsPropertyTypesSection() {
  const properties = [
    "Single-family homes",
    "Multi-family homes",
    "Townhouses",
    "Older homes requiring modernization",
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
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Residential Additions
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Residential Home Addition
            <br />
            <em className="text-secondary">Services</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            We specialize in residential expansion projects for homeowners
            throughout Essex County, helping create additional living space,
            improve functionality, and increase long-term property value.
          </p>
        </div>

        <div className="border border-border bg-card p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-2xl text-foreground">
            Property Types We Serve
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            {properties.map((property) => (
              <div key={property} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-muted-foreground">{property}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border border-border bg-card p-8 md:p-10">
          <h3 className="mb-8 font-serif text-2xl text-foreground">
            Local Service Areas
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-secondary" />
                <span className="text-muted-foreground">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
            And surrounding communities throughout Essex County, New Jersey.
          </p>
        </div>
      </div>
    </section>
  );
}