export function RoofRemovalResidentialCommercialSection() {
    const residentialSigns = [
        "Missing or curling shingles",
        "Water stains on ceilings",
        "Roof sagging",
        "Mold or moisture in the attic",
        "Repeated roof repairs",
        "Storm or wind damage",
    ];

    const commercialProperties = [
        "Office buildings",
        "Retail stores",
        "Warehouses",
        "Apartment complexes",
        "Industrial facilities",
    ];

    return (
        <section className="bg-background py-12 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
                        <span className="h-px w-6 bg-secondary" />
                        Residential & Commercial Services
                    </p>

                    <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">
                        Roof Removal Solutions for
                        <br />
                        <em className="text-secondary">
                            Homes & Businesses
                        </em>
                    </h2>

                    <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

                    <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
                        Whether you&apos;re replacing an aging residential roof or managing a large
                        commercial roofing project, our experienced team provides safe, efficient,
                        and code-compliant roof removal services throughout Newark and Essex County.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Residential */}
                    <div className="border border-border/40 bg-card p-8 md:p-10">
                        <p className="mb-4 text-xs uppercase tracking-[0.16em] text-secondary">
                            Residential Services
                        </p>

                        <h2 className="mb-6 font-serif text-3xl text-foreground">
                            Residential Roof Removal
                            <br />
                            <em className="text-secondary text-2xl not-italic">
                                Newark NJ
                            </em>
                        </h2>

                        <p className="mb-8 text-sm leading-loose text-muted-foreground">
                            If your roof is more than 20 years old, leaking frequently, or
                            showing signs of storm damage, a complete roof replacement may be
                            necessary. A professional roof tear-off allows hidden issues to be
                            identified before a new roofing system is installed.
                        </p>

                        <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-secondary">
                            Signs You Need Roof Removal
                        </h3>

                        <div className="space-y-3">
                            {residentialSigns.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="h-px w-5 shrink-0 bg-secondary" />
                                    <span className="text-sm text-foreground/85">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-border pt-6">
                            <p className="text-sm leading-loose text-muted-foreground">
                                Our team carefully removes old roofing materials while
                                protecting your landscaping, siding, driveway, and surrounding
                                property throughout the project.
                            </p>
                        </div>
                    </div>

                    {/* Commercial */}
                    <div className="border border-border/40 bg-card p-8 md:p-10">
                        <p className="mb-4 text-xs uppercase tracking-[0.16em] text-secondary">
                            Commercial Services
                        </p>

                        <h2 className="mb-6 font-serif text-3xl text-foreground">
                            Commercial Roof Removal
                            <br />
                            <em className="text-secondary text-2xl not-italic">
                                Newark NJ
                            </em>
                        </h2>

                        <p className="mb-8 text-sm leading-loose text-muted-foreground">
                            We provide professional Commercial Roof Removal Newark NJ services
                            for businesses, property managers, and commercial property owners
                            throughout Newark and Essex County.
                        </p>

                        <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-secondary">
                            Properties We Serve
                        </h3>

                        <div className="space-y-3">
                            {commercialProperties.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="h-px w-5 shrink-0 bg-secondary" />
                                    <span className="text-sm text-foreground/85">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-border pt-6">
                            <p className="text-sm leading-loose text-muted-foreground">
                                Our experienced crew works efficiently to minimize business
                                disruptions while ensuring every project meets local building
                                codes and industry standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}