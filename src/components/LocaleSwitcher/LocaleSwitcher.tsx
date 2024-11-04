import { useLocale, useTranslations } from "next-intl";
import SelectLanguage from "./SelectLanguage";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  // if adding new locale, add here label for local...
  const availableLanguages = ['english', 'serbian'];

  const getDataFromMessages = availableLanguages.map(lang =>
    ({ label: t(`${lang}.label`), locale: t(`${lang}.locale`), flagPath: t(`${lang}.flagPath`) }));

  const defaultLanguage = getDataFromMessages.find(lang => lang.locale === locale);

  return (
    <SelectLanguage languageDetails={getDataFromMessages} defaultLanguage={defaultLanguage} />
  );
}
