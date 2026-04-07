"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function DormersFaqSection() {
  const content = {
        intro: "Still have questions? We can walk you through build timelines, permit steps, and the best dormer type for your home.",
        items: [
          { q: "How long does a roof dormer installation in East Orange take?", a: "Most projects are completed within 2-4 weeks, depending on the complexity of the custom dormer construction and local permit approvals in Essex County." },
          { q: "What is the benefit of a shed dormer installation in Livingston, NJ?", a: "Shed dormers provide maximum interior headspace and usable floor area, making them one of the most affordable dormer options for adding extra rooms." },
          { q: "Do I need a permit for a dormer addition in Irvington, NJ?", a: "Yes, all dormer additions require local building permits. Our team handles the entire process to ensure your project meets Newark and Essex County safety standards." },
        ],
      };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted/20 py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />FAQ</p>
            <h2 className="mb-7 font-serif text-[clamp(32px,3.5vw,48px)] leading-snug text-foreground">Common<br /><em className="text-secondary">Questions</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="mb-8 text-sm leading-loose text-muted-foreground">{content.intro}</p>
            <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={14} className="mr-2 inline-block" />Speak with a Specialist</a></Button>
          </div>
        </div>
        <div className="flex flex-col gap-0">
          {content.items.map((item, i) => (
            <div key={item.q} className="border-b border-border/40">
              <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-6 text-left">
                <span className={["font-serif text-lg transition-colors duration-200", activeIndex === i ? "text-secondary" : "text-foreground"].join(" ")}>{item.q}</span>
                <motion.div animate={{ rotate: activeIndex === i ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronRight size={18} className={activeIndex === i ? "text-secondary" : "text-muted-foreground"} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
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
