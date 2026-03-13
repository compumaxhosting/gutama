import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

const SERVICE_AREA_LABEL = `Proudly Serving ${siteConfig.business.regionLabel}`;

const MUNICIPALITIES = [
  { name: "Newark", zip: "07102" },
  { name: "East Orange", zip: "07017" },
  { name: "Orange", zip: "07050" },
  { name: "Irvington", zip: "07111" },
  { name: "Belleville", zip: "07109" },
  { name: "Bloomfield", zip: "07003" },
  { name: "Caldwell", zip: "07006" },
  { name: "Cedar Grove", zip: "07009" },
  { name: "Essex Fells", zip: "07021" },
  { name: "Glen Ridge", zip: "07028" },
  { name: "Livingston", zip: "07039" },
  { name: "Maplewood", zip: "07040" },
  { name: "Millburn", zip: "07041" },
  { name: "North Caldwell", zip: "07006" },
  { name: "Nutley", zip: "07110" },
  { name: "Roseland", zip: "07068" },
  { name: "South Orange", zip: "07079" },
  { name: "Verona", zip: "07044" },
  { name: "West Orange", zip: "07052" },
];

export function ServiceAreasSection() {
  return (
    <Section id="service-areas" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/about-aerial.jpg')] bg-cover bg-center opacity-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-background/90" aria-hidden="true" />

      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow="Coverage" title={SERVICE_AREA_LABEL} />
        </Reveal>

        <StaggerGroup className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" delay={0.08}>
          {MUNICIPALITIES.map((town) => (
            <StaggerItem key={town.name}>
              <div className="glass-card border px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-secondary/40">
                <p>{town.name}</p>
                <p className="text-xs font-semibold tracking-wide text-secondary">{town.zip}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
