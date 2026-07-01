import {
  Award,
  MessageSquare,
  Shield,
  MapPin,
  Users,
} from "lucide-react";

export function FlatRoofWhyChooseUsSection() {
  const benefits = [
    {
      icon: Users,
      title: "Experienced Flat Roofing Contractors",
      description:
        "Our team has extensive experience working with a wide range of flat roofing systems.",
    },
    {
      icon: Award,
      title: "Quality Roofing Materials",
      description:
        "We install trusted products designed for long-term durability and performance.",
    },
    {
      icon: Shield,
      title: "Licensed and Insured Professionals",
      description:
        "Every project is completed according to industry standards and safety requirements.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description:
        "We provide honest recommendations and keep clients informed throughout every stage of the project.",
    },
    {
      icon: MapPin,
      title: "Local New Jersey Roofing Expertise",
      description:
        "We understand the challenges flat roofs face due to New Jersey's changing weather conditions.",
    },
  ];

  return (
    <section className="bg-muted/20 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Why Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
            Why Property Owners Choose
            <em className="text-secondary">
              {" "}
              Gutama Home Improvement
            </em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
            Property owners throughout Essex County trust our team for reliable
            flat roofing solutions, quality workmanship, and professional
            service from consultation through project completion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="glass-card border border-border/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                  <Icon size={18} className="text-secondary" />
                </div>

                <h3 className="mb-3 font-serif text-lg leading-snug text-foreground">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-loose text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}