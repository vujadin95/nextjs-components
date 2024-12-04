import React from "react";
import Socials from "./socials";
import { useTranslations } from "next-intl";
import { Mail, Phone } from "lucide-react";
import CompanyLocation from "./company-location";

const CompanyContact = () => {
  const t = useTranslations("footer");

  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-3 px-4 py-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      <CompanyLocation />
      <div className="space-y-1">
        <Socials description={t("officialEmail")} email="info@superheat.rs" />
        <Socials description={t("finance")} email="finance@superheat.rs" />
      </div>
      <Socials
        description={t("commercialService")}
        email="m.popovic@superheat.rs"
        phone="065 200 77 78"
      />

      <Socials
        description={t("technicalDepartment")}
        email="n.milojevic@superheat.rs"
        phone="064 925 54 54"
      />
    </div>
  );
};

export default CompanyContact;
