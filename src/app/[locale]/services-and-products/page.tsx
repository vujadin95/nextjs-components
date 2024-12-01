import Maintenance from "@/components/Maintenance/Maintenance";
import { useTranslations } from "next-intl";

const ServicesAndProducts = () => {
  const t = useTranslations("servicesAndProducts");
  return (
    <div>
      <h1 className="my-5 w-full text-center text-4xl">{t("pagetitle")}</h1>
      <Maintenance />
    </div>
  );
};

export default ServicesAndProducts;
