import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Roof Removal",
  "Re-Roofing",
  "Flat Roof",
  "Slate Roof",
  "Chimney",
  "Siding",
  "Carpentry",
  "Additions",
  "Dormers",
  "Gutters",
  "Emergency",
] as const;

const appointmentDateSchema = z
  .string()
  .min(1, "Select an appointment date")
  .refine((value) => {
    const parsedDate = new Date(`${value}T00:00:00`);

    return !Number.isNaN(parsedDate.getTime());
  }, "Enter a valid appointment date")
  .refine((value) => {
    const parsedDate = new Date(`${value}T00:00:00`);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return parsedDate >= today;
  }, "Appointment date must be today or later");

const contactFormBaseSchema = z.object({
  formType: z.enum(["contact", "appointment"]).optional(),
  service: z.enum(SERVICE_OPTIONS),
  appointmentDate: z.string().optional(),
  fn: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(100, "First name must be less than 100 characters"),
  ln: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(100, "Last name must be less than 100 characters"),
  em: z.string().email("Please enter a valid email address"),
  ph: z.string().optional().default(""),
  msg: z
    .string()
    .max(5000, "Message must be less than 5000 characters")
    .optional()
    .default(""),
});

export const contactSchema = contactFormBaseSchema.superRefine((data, ctx) => {
  if (data.formType === "appointment") {
    const appointmentDateResult = appointmentDateSchema.safeParse(data.appointmentDate);

    if (!appointmentDateResult.success) {
      const issue = appointmentDateResult.error.issues[0];

      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["appointmentDate"],
        message: issue?.message || "Select an appointment date",
      });
    }
  }
});

export const appointmentSchema = contactFormBaseSchema.extend({
  formType: z.literal("appointment"),
  appointmentDate: appointmentDateSchema,
});

export type ContactFormInput = z.infer<typeof contactSchema>;
export type AppointmentFormInput = z.infer<typeof appointmentSchema>;

export function mapZodErrorsToFieldErrors(
  errors: z.ZodError<ContactFormInput>
): Record<string, string> {
  const fieldErrors: Record<string, string> = {};

  errors.issues.forEach((issue) => {
    const field = issue.path[0] as string;
    if (field) {
      fieldErrors[field] = issue.message;
    }
  });

  return fieldErrors;
}
