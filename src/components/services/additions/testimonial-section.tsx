import { Star } from "lucide-react";

export function AdditionsTestimonialSection() {
  return (
    <section className="bg-background py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-10 flex justify-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" className="text-secondary" />
          ))}
        </div>
        <p className="mb-12 font-serif text-[clamp(22px,3vw,36px)] italic leading-relaxed text-foreground">
          &ldquo;From the first site visit to the final walkthrough, the team was meticulous.
          The addition looks like it was always part of the house - the craftsmanship is simply outstanding.&rdquo;
        </p>
        <div className="mx-auto mb-7 h-px w-10 bg-secondary" />
        <p className="mb-1 font-serif text-xl text-secondary">Margaret & Thomas H.</p>
        <p className="text-[12px] tracking-[0.12em] uppercase text-muted-foreground">
          Montclair, NJ - Two-Story Family Room Addition
        </p>
      </div>
    </section>
  );
}
