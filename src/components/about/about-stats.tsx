import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const STATS = [
  { value: "2008", label: "Year Founded", note: "Over 17 years in business" },
  { value: "1,000+", label: "Projects Completed", note: "Residential & commercial" },
  { value: "19", label: "Municipalities", note: "Across Essex County, NJ" },
  { value: "5★", label: "Client Rating", note: "Consistent 5-star reviews" },
  { value: "100%", label: "Insured & Licensed", note: "Fully certified in NJ" },
];

export function AboutStats() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/5"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 border-y border-secondary/15"
        aria-hidden="true"
      />

      <Container className="relative py-20">
        <Reveal>
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Our Impact in Numbers
          </p>
        </Reveal>

        <StaggerGroup
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5"
          delay={0.05}
        >
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass-card border border-secondary/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-luxury">
                <p className="mb-1 font-serif text-4xl font-bold text-secondary">{stat.value}</p>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-foreground">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground">{stat.note}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </div>
  );
}
