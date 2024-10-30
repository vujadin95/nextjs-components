import { useLocale, useTranslations } from "next-intl";
// import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import Select from "../Select/Select";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <>
      {/* <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect> */}
      <Select
        defaultValue={locale}
        label={t("label")}
        languages={{ english: t("english"), serbian: t("serbian") }}
      />
    </>
  );
}
