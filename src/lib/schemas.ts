import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "First name is required." })
    .max(30, { message: "Your name is too long." }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "Last name is required." })
    .max(30, { message: "Your last name is too long." }),
  email: z.string().trim().email({ message: "Invalid email address." }),
  message: z
    .string()
    .trim()
    .min(2, { message: "Describe us your request." })
    .max(200, {
      message:
        "Give us short version, and we will contact you for more details.",
    }),
  youcantseethis: z.string().trim().max(0, "This field should be empty"),
});
