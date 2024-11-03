import { useLocale, useTranslations } from "next-intl";
import Select from "../Select/Select";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const languages = {
    english: t("english"),
    serbian: t("serbian"),
  };

  return (
    <>
      <Select defaultValue={locale} label={t("label")} languages={languages} />
    </>
  );
}
