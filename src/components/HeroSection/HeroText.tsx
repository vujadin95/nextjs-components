import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const HeroText = () => {
  const t = useTranslations("HomePage.herosection");
  return (
    <div className="w-full max-w-[450px] shrink-0 justify-between space-y-3">
      <p className="text-xs text-muted-foreground lg:text-sm">
        {t("whoIsSuperheat")}
      </p>
      <h2 className="mt-2 text-3xl font-medium lg:text-5xl lg:leading-snug">
        {t("title")}
      </h2>
      <p className="text-base md:text-lg">{t("subtitle")}</p>

      <Button asChild className="text-base font-semibold lg:text-lg">
        <Link href={"/contact"}>{t("button")}</Link>
      </Button>
    </div>
  );
};
export default HeroText;
