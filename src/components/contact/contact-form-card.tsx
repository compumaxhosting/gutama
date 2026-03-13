"use client";

import { useState } from "react";
import { ArrowRight, Check, TriangleAlert } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "Roof Removal", "Re-Roofing", "Flat Roof", "Slate Roof",
  "Chimney", "Siding", "Carpentry", "Additions",
  "Dormers", "Gutters", "Emergency",
] as const;

type Service = (typeof SERVICE_OPTIONS)[number];

const INPUT_CLASS =
  "appearance-none border-0 border-b-[1.5px] border-white/28 bg-transparent pb-3 text-[0.93rem] text-white outline-none transition-colors placeholder:text-white/45 focus:border-secondary";

const LABEL_CLASS =
  "text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white/60";

export function ContactForm() {
  const [service, setService] = useState<Service | null>(null);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setService(null);
    setStep2(false);
    setStep3(false);
    setSubmitted(false);
  };

  return (
    <div className="contact-form-bg relative flex min-h-155 flex-col overflow-y-auto border-l border-white/12 bg-[#120d09]/85 backdrop-blur-xl lg:min-h-full">
      {/* Paper grain texture */}
      <div className="paper-grain pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10 flex min-h-full flex-col justify-center px-[clamp(1.75rem,5vw,3.5rem)] py-[clamp(2.3rem,5vw,3.6rem)] max-[900px]:px-7 max-[900px]:py-10">
        {!submitted ? (
          <>
            {/* Header */}
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary opacity-0 animate-[fade-up_0.3s_0.05s_ease_both]">
              Step 01 — Free estimate
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.4rem)] font-bold leading-[1.1] text-[#f6f0e9] opacity-0 animate-[fade-up_0.3s_0.1s_ease_both]">
              Tell us about<br />
              your <strong className="font-black text-primary">project</strong>
            </h2>

            {/* Step progress dots */}
            <div className="mt-4 mb-7 flex gap-1 opacity-0 animate-[fade-in_0.3s_0.15s_ease_both]">
              {[true, step2, step3].map((active, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-0.75 rounded-sm transition-colors duration-300",
                    i === 0 ? "w-11" : "w-5",
                    active ? "bg-primary" : "bg-white/20"
                  )}
                />
              ))}
            </div>

            {/* Service selector */}
            <span className="mb-2.5 block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white/60">
              What service do you need?
            </span>
            <div className="mb-7 flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => { setService(s); setStep2(true); }}
                  className={cn(
                    "whitespace-nowrap rounded-full border-[1.5px] px-3 py-1.5 text-[0.78rem] font-medium transition-all duration-150",
                    service === s
                      ? "border-primary bg-primary text-white"
                      : "border-white/25 bg-white/2 text-white/75 hover:border-secondary hover:text-secondary"
                  )}
                >
                  {s === "Emergency" ? "🚨 Emergency" : s}
                </button>
              ))}
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              onInput={() => setStep3(true)}
              className="flex flex-col gap-4"
            >
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3.5 max-[520px]:grid-cols-1">
                {([
                  { id: "fn", label: "First name", placeholder: "John" },
                  { id: "ln", label: "Last name", placeholder: "Doe" },
                ] as const).map(({ id, label, placeholder }) => (
                  <div key={id} className="flex flex-col gap-1">
                    <label htmlFor={id} className={LABEL_CLASS}>{label}</label>
                    <input
                      id={id}
                      name={id}
                      placeholder={placeholder}
                      required
                      className={INPUT_CLASS}
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="em" className={LABEL_CLASS}>Email address</label>
                <input
                  id="em"
                  name="em"
                  type="email"
                  placeholder="john@email.com"
                  required
                  className={INPUT_CLASS}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label htmlFor="ph" className={LABEL_CLASS}>Phone number</label>
                <input
                  id="ph"
                  name="ph"
                  type="tel"
                  placeholder="(973) 000-0000"
                  className={INPUT_CLASS}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label htmlFor="msg" className={LABEL_CLASS}>Project details</label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={3}
                  placeholder="Briefly describe the work…"
                  className="resize-none rounded-lg border-[1.5px] border-white/24 bg-white/2 p-3 text-[0.93rem] leading-relaxed text-white outline-none transition-colors placeholder:text-white/45 focus:border-secondary"
                />
              </div>

              {/* Submit */}
              <div className="mt-2 flex items-center gap-5">
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#0f0e0c] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(184,74,46,0.25)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="relative z-10">Get Free Estimate</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <p className="max-w-37.5 text-xs leading-snug text-white/55">
                  No obligation. Reply within 24 hrs.
                </p>
              </div>
            </form>

            {/* Emergency strip */}
            <div className="mt-8 flex items-center gap-3.5 rounded-r-lg border-l-[3px] border-secondary bg-black/25 p-4 shadow-[0_10px_26px_rgba(0,0,0,0.3)]">
              <TriangleAlert className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <span className="mb-0.5 block text-[0.68rem] font-semibold uppercase tracking-widest text-primary">
                  Storm damage or active leak?
                </span>
                <a
                  href={`tel:${siteConfig.phones.english}`}
                  className="font-serif text-lg font-bold text-[#f6f0e9] transition-colors hover:text-secondary"
                >
                  {siteConfig.phones.english} — Call us now
                </a>
              </div>
            </div>
          </>
        ) : (
          /* Success state */
          <div className="flex flex-col items-center justify-center gap-4 py-12 text-center animate-[fade-up_0.5s_ease_both]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <Check className="h-7 w-7 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#f6f0e9]">
              Request received!
            </h3>
            <p className="max-w-70 text-sm leading-relaxed text-white/65">
              We&apos;ll reach out within one business day with your free estimate.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 rounded-md border-[1.5px] border-white/25 bg-transparent px-5 py-2.5 text-sm text-white/75 transition-all hover:border-secondary hover:text-secondary"
            >
              Submit another request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}