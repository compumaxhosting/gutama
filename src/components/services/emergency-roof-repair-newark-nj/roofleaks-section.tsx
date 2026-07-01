export function EmergencyLeakRepairSection() {
  const signs = [
    "Water stains on ceilings",
    "Wet insulation",
    "Mold growth",
    "Dripping water",
    "Peeling paint",
    "Musty odors",
  ];

  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Emergency Leak Services
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
              Emergency Roof Leak Repair
              <br />
              <em className="text-secondary">Newark, NJ</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-6 text-base leading-loose text-muted-foreground">
              Roof leaks are one of the most common reasons homeowners request
              emergency roofing services.
            </p>

            <div className="border border-border/40 bg-card p-8">
              <h3 className="mb-4 font-serif text-2xl text-foreground">
                Immediate Leak Response
              </h3>

              <p className="text-sm leading-loose text-muted-foreground">
                Our team quickly identifies leak sources and performs temporary
                or permanent repairs to prevent further water intrusion.
              </p>
            </div>
          </div>

          <div className="border border-border/40 bg-card p-8 md:p-10">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-secondary">
              Signs of a Roof Leak
            </p>

            <div className="space-y-4">
              {signs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-border/30 pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-foreground/85">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm leading-loose text-muted-foreground">
                Ignoring roof leaks can lead to structural damage and costly
                repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
