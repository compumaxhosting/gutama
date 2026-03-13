"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function EmergencyRepairFaqSection() {
  const content = {
        intro: "Still have questions? Our emergency repair team can explain next steps, stabilization options, and what to do before we arrive.",
        items: [
          { q: "What should I do if water is actively entering my home?", a: "If safe, move valuables away from the affected area and contain interior water with buckets or towels. Avoid climbing onto the roof and call us so we can guide the next step." },
          { q: "Do emergency repairs include temporary protection?", a: "Yes. When weather or conditions prevent immediate permanent work, we can install protective measures to reduce further damage until full repairs can be completed." },
          { q: "Can you help determine the full extent of storm damage?", a: "Absolutely. We inspect surrounding assemblies and not just the visible opening so hidden failures are identified early." },
          { q: "Will you provide a permanent repair proposal after the emergency visit?", a: "Yes. Once the area is stabilized, we provide a clear plan for the full repair scope and recommended sequencing." },
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
