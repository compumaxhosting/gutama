import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/Home/section-heading";
import { Reveal } from "@/components/motion/reveal";

type SectionType = {
    subtitle: string;
    content: React.ReactNode;
};

type BlogDetailsProps = {
    title: string;
    description: SectionType[];
    image: string;
    sections: SectionType[];
};

export function BlogDetails({
    title,
    description,
    image,
    sections,
}: BlogDetailsProps) {
    return (
        <Section className="-mt-8 md:-mt-8 pb-0 md:pb-12 lg:pb-20">
            <Container>

                {/* 🔥 HERO SECTION (MATCHED WITH YOUR DESIGN SYSTEM) */}
                <Reveal>
                    <SectionHeading
                        eyebrow="Blog Article"
                        title={title}
                    />
                </Reveal>

                <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">

                    {/* IMAGE */}
                    <Reveal>
                        <div className="glass-card overflow-hidden border shadow-luxury">
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={800}
                                className="h-64 w-full sm:h-72 lg:h-120"
                                priority
                            />
                        </div>
                    </Reveal>

                    {/* INTRO TEXT (OPTIONAL ENHANCED FEEL) */}
                    <Reveal delay={0.05}>
                        <div>
                            <p className="mb-4 inline-flex items-center gap-2 text-[11px] text-md md:text-lg tracking-[0.18em] uppercase text-secondary">
                                <span className="h-px w-6 bg-secondary" />
                                {description[0].subtitle}
                            </p>

                            <div className="text-muted-foreground leading-loose text-base">
                                {description[0].content}
                            </div>
                        </div>
                    </Reveal>

                </div>

                {/* 📌 CONTENT SECTIONS */}
                <div className="mt-16 space-y-12 max-w-3xl lg:max-w-5xl mx-auto">
                    {sections.map((section, index) => (
                        <Reveal key={index} delay={index * 0.05}>
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                                    {section.subtitle}
                                </h2>
                                <div className="text-muted-foreground leading-loose text-base">
                                    {section.content}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </Container>
        </Section>
    );
}