"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function RoofingFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "When is a complete roof removal mandatory instead of re-roofing?",
      answer:
        "Under New Jersey Uniform Construction Code, a residential building cannot support more than two layers of roofing materials due to structural weight limits. If your home already has two layers, or if the underlying wooden decking has rot, water saturation, or sagging, a full tear-off down to bare wood is legally mandatory and structurally essential.",
    },
    {
      question: "How do I choose between asphalt shingles, flat membranes, and slate?",
      answer:
        "The choice is dictated by roof pitch, architectural style, and budget. Steep or standard pitched roofs (4:12+) typically use architectural shingles for balanced durability and cost. Low-slope or flat areas (under 2:12 pitch) require seamless rubber (EPDM) or heat-welded TPO membranes to prevent ponding water leaks. Historic estates and prestige homes benefit from natural quarry slate, which offers a 75–150 year lifespan.",
    },
    {
      question: "What happens if rotted decking is discovered during tear-off?",
      answer:
        "Our crew inspects every square foot of plywood or tongue-and-groove decking as soon as the old shingles are stripped. Any rotted, mold-damaged, or delaminated wood is immediately cut out and replaced with high-grade CDX plywood before any underlayment or new roofing materials are applied.",
    },
    {
      question: "How long does a typical roofing replacement take?",
      answer:
        "Most residential roofing projects (up to 3,000 sq ft) are completed within 1 to 2 days, including complete tear-off, decking repairs, new shingle installation, and magnetic nail sweep cleanup. Complex slate restorations or multi-unit commercial flat roofs may take 3 to 5 days depending on square footage and weather.",
    },
    {
      question: "Do you pull permits and manage inspections in Essex County, NJ?",
      answer:
        "Yes. As a fully licensed and insured New Jersey Home Improvement Contractor, Gutama handles all required municipal permit applications, documentation, and coordination with local building inspectors across Newark, Montclair, East Orange, Livingston, and all Essex County municipalities.",
    },
    {
      question: "What warranties protect my new roof system?",
      answer:
        "We offer comprehensive dual-tier protection: robust manufacturer warranties on materials (e.g., 30-year to 50-year Limited Lifetime Warranties on GAF/Owens Corning architectural shingles and 20–30 year commercial membrane warranties) coupled with our dedicated Gutama workmanship guarantee.",
    },
    {
      question: "How do you protect my landscaping, driveway, and property during work?",
      answer:
        "We use comprehensive site shielding protocols: heavy-duty vinyl tarps over gutters, siding, and shrubs, plywood barriers over delicate flowerbeds and HVAC compressors, and continuous rolling magnetic nail sweeps to ensure zero loose fasteners remain on your driveway or lawn.",
    },
  ];

  return (
    <section className="bg-muted/20 py-20 px-6 border-t border-border/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.6fr]">
        {/* LEFT */}
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Frequently Asked Questions
            </p>

            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug text-foreground">
              Roofing Services
              <br />
              <em className="text-secondary">& Systems FAQ</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-8 text-sm leading-loose text-muted-foreground">
              Have questions regarding which roofing category is best for your property? 
              Our master roofers are available to explain codes, material selections, timelines, and warranty terms.
            </p>

            <Button
              asChild
              variant="outline"
              className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone size={14} className="mr-2 inline-block" />
                Speak with a Roofing Specialist
              </a>
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-0">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-border/40">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer transition-colors hover:text-secondary"
              >
                <span
                  className={`font-serif text-lg ${
                    activeIndex === index ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight
                    size={18}
                    className={
                      activeIndex === index
                        ? "text-secondary"
                        : "text-muted-foreground"
                    }
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-loose text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
