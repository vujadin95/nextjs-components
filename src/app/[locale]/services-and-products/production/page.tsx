import Maintenance from "@/components/Maintenance/Maintenance";
import { useTranslations } from "next-intl";

const Production = () => {
  const t = useTranslations("servicesAndProducts.production");
  return (
    <div>
      <h1 className="my-5 w-full text-center text-4xl">{t("pagetitle")}</h1>
      <Maintenance />
    </div>
  );
};
export default Production;
