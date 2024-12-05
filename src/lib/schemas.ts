import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2).max(40),
  lastName: z.string().min(2).max(40),
  email: z.string().email(),
  message: z.string().min(2),
  youcantseethis: z.string().max(0, "This field should be empty"),
});
