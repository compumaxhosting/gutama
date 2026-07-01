import { MapPin } from "lucide-react";

export function EmergencyRepairAreasWeServeSection() {
  const areas = [
    "Newark, NJ",
    "East Orange, NJ",
    "Bloomfield, NJ",
    "West Orange, NJ",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Service Area
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            Areas
            <br />
            <em className="text-secondary">We Serve</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-muted-foreground">
            We provide emergency roof repair services throughout Essex County,
            NJ, helping homeowners and businesses respond quickly to roof leaks,
            storm damage, and other urgent roofing issues.
          </p>
        </div>

        <div className="border border-border bg-card p-8 md:p-10 lg:p-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-secondary" />
                <span className="text-muted-foreground">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-8 text-base leading-loose text-muted-foreground">
            And surrounding Essex County communities.
          </p>
        </div>
      </div>
    </section>
  );
}