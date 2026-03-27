import { SectionHeading } from "@/components/Home/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { BrandLink } from "@/components/ui/brand-link";

const SERVICE_AREA_LABEL = `Roofing Services in ${siteConfig.business.regionLabel}`;

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
    <Section
      id="service-areas"
      className="relative overflow-hidden"
      aria-label="Roofing service areas"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-[url('/Images New/about-aerial.webp')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/90" aria-hidden="true" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Service Areas"
            title={SERVICE_AREA_LABEL}
            description={
              <>
                <BrandLink>Gutama Home Improvement</BrandLink> provides roof repair, roof
                replacement, siding, and exterior services across {siteConfig.business.regionLabel},
                including the following cities and ZIP codes.
              </>
            }
          />
        </Reveal>

        {/* ✅ Hidden SEO boost */}
        <h2 className="sr-only">
          Roofing Contractor in Newark, East Orange, Irvington, Bloomfield,
          Livingston, West Orange and all Essex County NJ areas
        </h2>

        <StaggerGroup
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          delay={0.08}
        >
          {MUNICIPALITIES.map((town) => (
            <StaggerItem key={town.name}>
              <div className="glass-card border px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-secondary/40">
                {/* ✅ SEO-ENHANCED CITY NAME */}
                <p>
                  {town.name}, <span className="text-muted-foreground">NJ</span>
                </p>

                {/* ZIP */}
                <p className="text-xs font-semibold tracking-wide text-secondary">
                  {town.zip}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
