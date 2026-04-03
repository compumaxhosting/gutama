import { z } from "zod";

export const contactSchema = z.object({
  service: z.enum([
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
  ]),
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

export type ContactFormInput = z.infer<typeof contactSchema>;

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
