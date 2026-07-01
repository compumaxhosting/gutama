import {
  Search,
  Wrench,
  Building2,
  Shield,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Chimney Inspection Services",
    description:
      "We perform detailed chimney inspections to identify structural damage, blockages, water intrusion, and potential safety hazards before they become costly problems.",
  },
  {
    icon: Wrench,
    title: "Chimney Repair Services",
    description:
      "Our team repairs cracked masonry, damaged mortar joints, chimney leaks, flashing failures, crown deterioration, and other common chimney issues.",
  },
  {
    icon: Building2,
    title: "Chimney Rebuilding Services",
    description:
      "For severely damaged or deteriorated chimneys, we provide partial and full chimney rebuilding services to restore structural integrity and safety.",
  },
  {
    icon: Shield,
    title: "Chimney Waterproofing",
    description:
      "Protective sealing systems help prevent water penetration, reduce masonry deterioration, and extend the lifespan of your chimney system.",
  },
  {
    icon: ClipboardCheck,
    title: "Chimney Maintenance",
    description:
      "Routine chimney maintenance helps prevent expensive repairs, improves performance, and supports long-term safety and reliability.",
  },
];

export function ChimneyServicesSection() {
  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Our Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Types of
            <em className="text-secondary"> Chimney Services</em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
            We provide complete chimney inspection, repair, rebuilding,
            waterproofing, and maintenance services for residential and
            commercial properties throughout Essex County, NJ.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                  <Icon size={18} className="text-secondary" />
                </div>

                <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
                  {service.title}
                </h3>

                <p className="text-sm leading-loose text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}