import { Clock3, FileCheck } from "lucide-react";

export function RoofRemovalInfoSection() {
  return (
    <section className="bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Project Information
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            What to Expect During
            <br />
            <em className="text-secondary">Roof Replacement</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Timeline */}
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-secondary/35 bg-secondary/5">
              <Clock3 size={20} className="text-secondary" />
            </div>

            <h3 className="mb-5 font-serif text-3xl text-foreground">
              How Long Does Roof
              <br />
              <em className="text-secondary text-2xl not-italic">
                Removal Take?
              </em>
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              Most residential roof removal projects are completed within
              one to three days. Larger commercial projects may require
              additional time depending on the size, accessibility,
              roofing materials, and overall complexity of the project.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm leading-loose text-muted-foreground">
                Weather conditions, structural repairs, and specialized
                roofing systems can also affect the overall project timeline.
              </p>
            </div>
          </div>

          {/* Permits */}
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-secondary/35 bg-secondary/5">
              <FileCheck size={20} className="text-secondary" />
            </div>

            <h3 className="mb-5 font-serif text-3xl text-foreground">
              Do I Need a Permit for
              <br />
              <em className="text-secondary text-2xl not-italic">
                Roof Replacement?
              </em>
            </h3>

            <p className="text-sm leading-loose text-muted-foreground">
              Many roof replacement projects in Newark, NJ require permits
              and compliance with local building regulations. Permit
              requirements can vary depending on project scope, roofing
              materials, and structural modifications.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm leading-loose text-muted-foreground">
                Our team handles the permit process and helps ensure your
                roofing project complies with Newark and New Jersey building
                code requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}