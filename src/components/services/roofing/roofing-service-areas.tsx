import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export function RoofingServiceAreasSection() {
  const towns = [
    "Newark",
    "Montclair",
    "East Orange",
    "Livingston",
    "Bloomfield",
    "West Orange",
    "Maplewood",
    "South Orange",
    "Belleville",
    "Nutley",
    "Verona",
    "Cedar Grove",
    "Irvington",
    "Orange",
    "Millburn",
    "Short Hills",
    "Caldwell",
    "North Caldwell",
  ];

  return (
    <section className="relative py-20 bg-background border-t border-border/40">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Local NJ Presence
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Serving Essex County & Surrounding Communities
            </h2>
            <div className="gold-divider mt-5 mb-5" />
            <p className="text-base text-muted-foreground">
              Headquartered at {siteConfig.address.streetAddress} in {siteConfig.address.locality}, NJ, we deliver responsive roofing services tailored to North Jersey's unique architectural heritage and local municipal permitting requirements.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {towns.map((town) => (
            <div
              key={town}
              className="flex items-center gap-2 rounded-lg border border-border/40 bg-card/40 px-3.5 py-3 text-xs font-medium text-foreground transition-all duration-200 hover:border-secondary/40 hover:bg-secondary/5 hover:text-secondary"
            >
              <MapPin className="h-3.5 w-3.5 text-secondary shrink-0" />
              <span>{town}, NJ</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
