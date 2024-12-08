import { z } from "zod";

export function getContactFormSchema(t?: (key: string) => string) {
  return z.object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: t ? t("name") : "First name is required." })
      .max(30, { message: t ? t("namelength") : "Your name is too long." }),
    lastName: z
      .string()
      .trim()
      .min(2, { message: t ? t("lastname") : "Last name is required." })
      .max(30, {
        message: t ? t("lastnamelength") : "Your last name is too long.",
      }),
    email: z
      .string()
      .trim()
      .email({ message: t ? t("email") : "Invalid email address." }),
    message: z
      .string()
      .trim()
      .min(2, { message: t ? t("message") : "Describe us your request." })
      .max(200, {
        message: t
          ? t("messagelength")
          : "Give us short version, and we will contact you for more details.",
      }),
    spamProtector: z.string().trim().max(0, "This field should be empty"),
  });
}

export type ContactFormValues = z.infer<
  Awaited<ReturnType<typeof getContactFormSchema>>
>;
