import { Check, HelpCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function RoofingComparisonGuideSection() {
  const comparisonData = [
    {
      category: "Roof Removal & Tear-Off",
      scope: "Full removal down to bare decking",
      lifespan: "Fresh slate for 30–50+ yr systems",
      idealPitch: "Any pitch (steep or low-slope)",
      deckCondition: "Exposes & repairs all hidden rotted wood",
      njCodeLimit: "Mandatory when 2 layers exist",
      primaryGoal: "Permanently solve deep structural moisture & rot",
    },
    {
      category: "Re-Roofing & Replacement",
      scope: "Full new architectural system installation",
      lifespan: "25 – 35 Years (GAF / Owens Corning)",
      idealPitch: "Standard to steep pitch (4:12 and higher)",
      deckCondition: "Requires sound, dry, flat substrate",
      njCodeLimit: "Single layer overlay or complete replacement",
      primaryGoal: "Maximum weather resistance, storm defense & curb appeal",
    },
    {
      category: "Flat Roof Systems",
      scope: "Continuous membrane waterproofing",
      lifespan: "20 – 40 Years (EPDM / TPO)",
      idealPitch: "Dead flat to low pitch (0.25:12 to 2:12)",
      deckCondition: "Rigid insulation board + vapor retarder",
      njCodeLimit: "Complies with commercial & low-slope codes",
      primaryGoal: "Eliminate ponding water & seamless drainage",
    },
    {
      category: "Slate Roofing",
      scope: "Artisan stone restoration or full install",
      lifespan: "75 – 150+ Years (Natural Quarry Stone)",
      idealPitch: "Steep pitch recommended (6:12 and higher)",
      deckCondition: "Heavy-load framing & solid tongue-and-groove",
      njCodeLimit: "Historic preservation & structural load compliance",
      primaryGoal: "Generational longevity & authentic historic preservation",
    },
  ];

  return (
    <section className="relative py-20 bg-muted/20 border-y border-border/40">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Decision Guide
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Which Roofing Category Fits Your Property?
            </h2>
            <div className="gold-divider mt-5 mb-5" />
            <p className="text-base text-muted-foreground">
              Choosing the correct roofing category depends on your building's architecture, existing layers, pitch, and deck condition. 
              Review the comparison below or consult our master roofers for an on-site evaluation.
            </p>
          </div>
        </Reveal>

        {/* Comparison Table for Large Screens */}
        <div className="mt-14 hidden overflow-x-auto rounded-xl border border-border/50 bg-card/40 backdrop-blur-md lg:block">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/50">
                <th className="p-4 font-serif text-base font-semibold text-foreground">Roofing Category</th>
                <th className="p-4 font-semibold text-secondary">Scope of Work</th>
                <th className="p-4 font-semibold text-secondary">Expected Lifespan</th>
                <th className="p-4 font-semibold text-secondary">Roof Pitch</th>
                <th className="p-4 font-semibold text-secondary">Decking Impact</th>
                <th className="p-4 font-semibold text-secondary">NJ Code Relevance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-muted-foreground">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-secondary/5 transition-colors">
                  <td className="p-4 font-medium text-foreground">
                    <span className="font-serif text-base font-semibold text-secondary block">{row.category}</span>
                    <span className="text-xs text-muted-foreground">{row.primaryGoal}</span>
                  </td>
                  <td className="p-4">{row.scope}</td>
                  <td className="p-4 text-foreground font-medium">{row.lifespan}</td>
                  <td className="p-4">{row.idealPitch}</td>
                  <td className="p-4">{row.deckCondition}</td>
                  <td className="p-4 text-xs">{row.njCodeLimit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {comparisonData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card border border-border/50 p-6 transition-all hover:border-secondary/40"
            >
              <h3 className="font-serif text-xl font-bold text-foreground">
                {item.category}
              </h3>
              <p className="mt-1 text-xs text-secondary font-medium uppercase tracking-wider">
                {item.primaryGoal}
              </p>

              <div className="mt-5 space-y-3 text-xs text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">Scope: </span>
                  {item.scope}
                </div>
                <div>
                  <span className="font-semibold text-foreground">Expected Lifespan: </span>
                  <span className="text-secondary font-medium">{item.lifespan}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Ideal Pitch: </span>
                  {item.idealPitch}
                </div>
                <div>
                  <span className="font-semibold text-foreground">Deck Condition: </span>
                  {item.deckCondition}
                </div>
                <div>
                  <span className="font-semibold text-foreground">NJ Code: </span>
                  {item.njCodeLimit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
