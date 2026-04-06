import { Award, Clock, Home, Ruler, Shield, Users } from "lucide-react";

export function RoofRemovalBenefitsSection() {
  return (
    <section className="bg-muted/20 py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Why Clients Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            The <em className="text-secondary">Difference</em> You&apos;ll
            Notice
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Shield size={18} className="text-secondary" />
            </div>
            <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">
              Property Protection
            </h3>
            <p className="text-sm text-muted-foreground leading-loose">
              We protect landscaping, siding, windows, and surrounding surfaces
              throughout the tear-off process.
            </p>
          </div>

          {/* 2 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Clock size={18} className="text-secondary" />
            </div>
            <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">
              Efficient Scheduling
            </h3>
            <p className="text-sm text-muted-foreground leading-loose">
              Removal work is sequenced to keep the project moving toward deck
              prep and new installation without delay.
            </p>
          </div>

          {/* 3 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Ruler size={18} className="text-secondary" />
            </div>
            <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">
              Clean Deck Exposure
            </h3>
            <p className="text-sm text-muted-foreground leading-loose">
              The roof deck is left open, visible, and ready for inspection
              rather than buried under old problem materials.
            </p>
          </div>

          {/* 4 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Award size={18} className="text-secondary" />
            </div>
            <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">
              Disciplined Workmanship
            </h3>
            <p className="text-sm text-muted-foreground leading-loose">
              Even removal work requires strong crew control, site awareness,
              and consistent cleanup standards.
            </p>
          </div>

          {/* 5 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Users size={18} className="text-secondary" />
            </div>
            <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">
              Transparent Scope
            </h3>
            <p className="text-sm text-muted-foreground leading-loose">
              We explain the tear-off process, expected debris control, and what
              happens next once the deck is exposed.
            </p>
          </div>

          {/* 6 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Home size={18} className="text-secondary" />
            </div>
            <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">
              Better Replacement Results
            </h3>
            <p className="text-sm text-muted-foreground leading-loose">
              A clean tear-off creates the right starting point for a
              longer-lasting, better-performing new roofing system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
