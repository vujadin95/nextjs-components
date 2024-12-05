import { z } from "zod";
import { formSchema } from "@/lib/schemas";
interface EmailTemplateProps {
  firstName: string;
  emailFormData: z.infer<typeof formSchema>;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  emailFormData,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>{emailFormData.lastName}</p>
    <p>{emailFormData.email}</p>
    <p>{emailFormData.message}</p>
  </div>
);
