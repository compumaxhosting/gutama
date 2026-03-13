"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const FAQS = [
  {
    q: "How long does a typical addition take?",
    a: "Most single-story additions run 12-18 weeks from permit approval. Multi-story projects typically range 20-28 weeks. We provide a milestone schedule before any work begins.",
  },
  {
    q: "What is included in your free estimate?",
    a: "A detailed line-item scope, preliminary material selections, permit cost estimate, and projected timeline - all at no charge and with no obligation.",
  },
  {
    q: "Do you handle the architectural drawings?",
    a: "Yes. We have licensed architects and structural engineers on staff. Full permit-ready drawings are included in your project contract.",
  },
  {
    q: "Can you match my existing exterior materials?",
    a: "Always. Matching siding, roofing, brick, or stone is a non-negotiable part of our process. We source exact matches or provide tested alternatives before any work begins.",
  },
] as const;

export function AdditionsFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted/20 py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              FAQ
            </p>
            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug text-foreground">
              Common
              <br />
              <em className="text-secondary">Questions</em>
            </h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="mb-8 text-sm leading-loose text-muted-foreground">
              Still have questions? Our project specialists are available to walk through any aspect of your addition.
            </p>
            <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary">
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone size={14} className="mr-2 inline-block" />
                Speak with a Specialist
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-0">
          {FAQS.map((item, i) => (
            <div key={item.q} className="border-b border-border/40">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-6 text-left"
              >
                <span className={["font-serif text-lg transition-colors duration-200", activeIndex === i ? "text-secondary" : "text-foreground"].join(" ")}>
                  {item.q}
                </span>
                <motion.div animate={{ rotate: activeIndex === i ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronRight size={18} className={activeIndex === i ? "text-secondary" : "text-muted-foreground"} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-loose text-muted-foreground">{item.a}</p>
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
