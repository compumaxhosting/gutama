"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ReRoofingFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted/20 py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        {/* LEFT */}
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
              Still have questions? We can review whether your roof is ready for
              replacement, what material options fit best, and what to expect
              during installation.
            </p>

            <Button
              asChild
              variant="outline"
              className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"
            >
              <a href={`tel:${siteConfig.phones.english}`}>
                <Phone size={14} className="mr-2 inline-block" />
                Speak with a Specialist
              </a>
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-0">
          {/* 1 */}
          <div className="border-b border-border/40">
            <button
              onClick={() => setActiveIndex(activeIndex === 0 ? null : 0)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span
                className={`font-serif text-lg ${activeIndex === 0 ? "text-secondary" : "text-foreground"}`}
              >
                Where can I find affordable roof replacement in NJ?
              </span>
              <motion.div animate={{ rotate: activeIndex === 0 ? 90 : 0 }}>
                <ChevronRight
                  size={18}
                  className={
                    activeIndex === 0
                      ? "text-secondary"
                      : "text-muted-foreground"
                  }
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm leading-loose text-muted-foreground">
                    Gutama Home Improvement offers budget-friendly, high-quality
                    roof replacement services in NJ, specifically serving
                    Newark, East Orange, and the broader Essex County area with
                    transparent pricing.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2 */}
          <div className="border-b border-border/40">
            <button
              onClick={() => setActiveIndex(activeIndex === 1 ? null : 1)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span
                className={`font-serif text-lg ${activeIndex === 1 ? "text-secondary" : "text-foreground"}`}
              >
                Who is the best professional roofing replacement contractor in
                Essex County?
              </span>
              <motion.div animate={{ rotate: activeIndex === 1 ? 90 : 0 }}>
                <ChevronRight
                  size={18}
                  className={
                    activeIndex === 1
                      ? "text-secondary"
                      : "text-muted-foreground"
                  }
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm leading-loose text-muted-foreground">
                    Locals recommend Gutama Home Improvement for our expertise
                    in asphalt roof replacement in New Jersey and our commitment
                    to safe, efficient, and locally-focused service near Branch
                    Brook Park and surrounding landmarks.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3 */}
          <div className="border-b border-border/40">
            <button
              onClick={() => setActiveIndex(activeIndex === 2 ? null : 2)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span
                className={`font-serif text-lg ${activeIndex === 2 ? "text-secondary" : "text-foreground"}`}
              >
                Do you offer emergency roof replacement services in NJ?
              </span>
              <motion.div animate={{ rotate: activeIndex === 2 ? 90 : 0 }}>
                <ChevronRight
                  size={18}
                  className={
                    activeIndex === 2
                      ? "text-secondary"
                      : "text-muted-foreground"
                  }
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm leading-loose text-muted-foreground">
                    Yes. We provide rapid emergency roof replacement services in
                    NJ for properties suffering from severe storm damage,
                    ensuring your home is protected quickly and professionally.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          
          
        </div>
      </div>
    </section>
  );
}
