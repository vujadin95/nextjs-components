import { Mail, Phone } from "lucide-react";

interface SocialsProps {
  description?: string;
  email?: string;
  phone?: string;
}

const Socials = ({ description, email, phone }: SocialsProps) => {
  const phoneFiltered = phone?.split(" ").join("").slice(1);
  return (
    <div>
      {description && <p className="font-semibold">{description}:</p>}
      {email && (
        <a
          href={`mailto:${email}`}
          className="group/email flex items-center gap-1 py-1 underline-offset-4 hover:underline"
        >
          <Mail size={20} className="group-hover/email:text-blue-500" />
          <span>{email}</span>
        </a>
      )}
      {phone && (
        <a
          href={`tel:+381${phoneFiltered}`}
          className="group/phone flex items-center gap-1 rounded-sm py-1 underline-offset-4 hover:underline"
        >
          <Phone size={20} className="group-hover/phone:text-blue-500" />
          <span>{phone}</span>
        </a>
      )}
    </div>
  );
};

export default Socials;
