import { BookAppointmentForm } from "../../components/book-appointment/book-appointment-form";
import { Container } from "@/components/ui/container";

export default function BookAppointmentPage() {
  return (
    <main className="border-b border-border/40 bg-[radial-gradient(circle_at_top,hsl(0_72%_45%/0.1),transparent_50%),linear-gradient(180deg,hsl(0_0%_10%)_0%,hsl(0_0%_8%)_100%)] py-10 md:py-14">
      <Container>
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
            Book Appointment
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
            Schedule your free estimate
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
            Tell us about your roofing or exterior project and we&apos;ll follow up to confirm your appointment.
          </p>
        </div>

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border/40 bg-black/20 shadow-luxury">
          <BookAppointmentForm />
        </div>
      </Container>
    </main>
  );
}