
import {
  Award,
  MessageSquare,
  Shield,
  Sparkles,
  MapPin,
  Users,
} from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Why Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Why Choose
            <em className="text-secondary"> Gutama Home Improvement?</em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
            Choosing the right roofing contractor is essential for the success
            of your project. Homeowners and businesses throughout Essex County
            trust our team for dependable service, quality workmanship, and
            professional roof removal solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Users size={18} className="text-secondary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
              Experienced Roofing Professionals
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              Our team has extensive experience with roof tear-offs and roof
              replacement projects.
            </p>
          </div>

          {/* 2 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Shield size={18} className="text-secondary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
              Licensed and Insured Services
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              We follow industry standards and safety practices on every job.
            </p>
          </div>

          {/* 3 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Award size={18} className="text-secondary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
              Quality Workmanship
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              Attention to detail ensures every project is completed correctly.
            </p>
          </div>

          {/* 4 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <MessageSquare size={18} className="text-secondary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
              Transparent Communication
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              We explain the process, answer your questions, and provide honest
              recommendations.
            </p>
          </div>

          {/* 5 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Sparkles size={18} className="text-secondary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
              Complete Cleanup
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              Your property is left clean, safe, and ready for the next phase
              of roofing installation.
            </p>
          </div>

          {/* 6 */}
          <div className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
              <MapPin size={18} className="text-secondary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
              Local Roofing Expertise
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              We understand the unique roofing challenges faced by properties
              throughout Essex County and Northern New Jersey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
