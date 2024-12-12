import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
const CompanyLocation = () => {
  const t = useTranslations("footer");

  return (
    <div className="place-self-start">
      <a
        target="_blank"
        href="https://maps.app.goo.gl/JdeLYm4q4Yn5GR6b7"
        className="group/kragujevac flex items-center gap-2 decoration-muted-foreground hover:underline hover:underline-offset-4"
      >
        <MapPin className="shrink-0 transition-colors group-hover/kragujevac:text-blue-500" />
        <div className="mb-2">
          <p>{t("headquarters")}: Kragujevac</p>
          <p>34000 Vojislava Ilića 14</p>
        </div>
      </a>

      <a
        target="_blank"
        href="https://maps.app.goo.gl/CNVqufLnF4SX5vx4A"
        className="group/srnje flex items-center gap-2 decoration-muted-foreground hover:underline hover:underline-offset-4"
      >
        <MapPin className="shrink-0 transition-colors group-hover/srnje:text-blue-500" />
        <div>
          <p>{t("manufacturing&warehouse")}: Kruševac</p>
          <p>37000 Srnje bb</p>
        </div>
      </a>
    </div>
  );
};

export default CompanyLocation;
