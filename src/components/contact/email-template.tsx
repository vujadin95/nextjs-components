import { ContactFormValues } from "@/shemas/contactFormSchema";
interface EmailTemplateProps {
  data: ContactFormValues;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  data,
}: EmailTemplateProps) => (
  <div className="text-black">
    <h1>
      Imate novu poruku sa vebsajta od:{" "}
      <span className="font-semibold">{data.firstName}</span>
    </h1>
    <p>
      Ime: <span className="font-semibold">{data.firstName}</span>
    </p>
    <p>
      Prezime: <span className="font-semibold">{data.lastName}</span>
    </p>
    <p>
      Email: <span className="font-semibold underline">{data.email}</span>
    </p>
    <p>
      <span className="font-semibold">Poruka: </span>
      {data.message}
    </p>
  </div>
);
