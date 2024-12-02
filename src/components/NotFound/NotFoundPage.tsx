import { Link } from "@/i18n/routing";
import Image from "next/image";
import lightLogo from "../../../public/light-logo.png";
import darkLogo from "../../../public/dark-logo.png";
import { useTranslations } from "next-intl";

const NotFoundPage = () => {
  const t = useTranslations("notfound");
  return (
    <section className="mx-auto flex h-full min-h-[calc(100vh_-_60px)] w-full max-w-screen-2xl flex-col items-center justify-center px-3 py-10 text-center md:px-5">
      <h2 className="text-3xl font-medium lg:text-5xl">{t("heading")}</h2>
      <p className="mt-5 text-lg lg:text-3xl">
        {t("descriptionone")}
        <Link className="rounded-md text-blue-500" href={"/"}>
          {t("link")}
        </Link>
        {t("descriptiontwo")}
      </p>
      <div className="relative z-10 mt-5 flex h-[250px] w-full max-w-[300px] select-none">
        <Image
          src={lightLogo}
          alt="Superheat Logo for light theme"
          fill
          priority
          sizes="(max-width:300px) 100vw"
          className="hidden w-auto object-contain dark:block"
        />
        <Image
          src={darkLogo}
          alt="Superheat Logo for dark theme"
          fill
          priority
          sizes="(max-width:300px) 100vw"
          className="w-auto object-contain dark:hidden"
        />
      </div>
    </section>
  );
};
export default NotFoundPage;
