import React from "react";
import Logo from "../Logo/Logo";
import { useTranslations } from "next-intl";

const FooterLogo = () => {
  const t = useTranslations("footer");
  return (
    <div className="w-full max-w-[250px] place-self-start">
      <Logo />
      {/* <div className="mt-4 max-w-md tracking-wide">{t("slogan")}</div> */}
    </div>
  );
};

export default FooterLogo;
