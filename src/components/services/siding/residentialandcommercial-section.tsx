import { MapPin } from "lucide-react";

export function SidingPropertyTypesSection() {
  const residential = [
    "Single-family homes",
    "Townhouses",
    "Multi-family properties",
    "Historic homes",
  ];

  const commercial = [
    "Office buildings",
    "Retail centers",
    "Apartment complexes",
    "Industrial facilities",
  ];

  const areas = [
    "Newark",
    "East Orange",
    "Bloomfield",
    "West Orange",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Residential & Commercial
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Siding Services for
            <br />
            <em className="text-secondary">Every Property Type</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Residential */}
          <div className="border border-border/40 bg-card p-8">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-foreground">
              Residential Siding Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-muted-foreground">
              We provide complete siding solutions for homeowners throughout
              Essex County, including installation, repair, replacement, and
              exterior upgrades.
            </p>

            <ul className="space-y-3">
              {residential.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div className="border border-border/40 bg-card p-8">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-foreground">
              Commercial Siding Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-muted-foreground">
              Our team also serves commercial properties, delivering durable
              siding systems that meet building standards and provide long-term
              performance.
            </p>

            <ul className="space-y-3">
              {commercial.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Areas We Serve */}
        <div className="mt-12 border border-border bg-card p-8 md:p-10">
          <h3 className="mb-4 font-serif text-2xl text-foreground">
            Areas We Serve
          </h3>

          <p className="mb-8 text-sm leading-loose text-muted-foreground">
            We proudly provide siding installation, repair, and replacement
            services throughout Essex County, NJ.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-secondary" />
                <span className="text-muted-foreground">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-border pt-6 text-sm leading-loose text-muted-foreground">
            And surrounding communities throughout Northern New Jersey.
          </p>
        </div>
      </div>
    </section>
  );
}