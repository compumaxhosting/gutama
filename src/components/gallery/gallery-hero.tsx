import { Container } from "@/components/ui/container";

export function GalleryHero() {
  return (
    <section className="relative pt-10 ">
      <div className="absolute inset-0 bg-linear-to-br from-secondary/10 via-background to-background" />
      <Container className="relative text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
          Our Work
        </h1>
        <div className="gold-divider mb-4" />
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Browse our portfolio of completed projects across Essex County.
        </p>
      </Container>
    </section>
  );
}
