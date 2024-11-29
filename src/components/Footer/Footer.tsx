import { useTranslations } from "next-intl";
import Logo from "../Logo/Logo";
import useNavigationData from "../Header/Navigation/useNavigation";
import { Link } from "@/i18n/routing";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const t = useTranslations("footer");
  const navigation = useNavigationData();
  const copyrightYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="border-t border-border bg-background text-textColor">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 p-4 py-8 xl:flex-row">
        {/* logo */}
        <div className="xl:max-w-[320px]">
          <Logo />
          <div className="mt-4 max-w-md tracking-wide">{t("slogan")}</div>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
          {/* company details */}
          <div className="">
            <p className="mb-3 bg-gradient-to-l from-neutral-900 to-red-700 bg-clip-text text-xl font-bold text-transparent dark:bg-gradient-to-l dark:from-slate-50 dark:to-red-700 dark:bg-clip-text dark:text-transparent">
              SUPERHEAT DOO KRAGUJEVAC
            </p>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/JdeLYm4q4Yn5GR6b7"
              className="flex items-center gap-2 rounded-sm transition-colors hover:bg-hoverBackground"
            >
              <MapPin className="shrink-0 text-textHover" />
              <div className="mb-2">
                <p>{t("headquarters")}: Kragujevac</p>
                <p>34000 Vojislava Ilića 14</p>
              </div>
            </a>

            <a
              target="_blank"
              href="https://maps.app.goo.gl/CNVqufLnF4SX5vx4A"
              className="flex items-center gap-2 rounded-sm transition-colors hover:bg-hoverBackground"
            >
              <MapPin className="shrink-0 text-textHover" />
              <div>
                <p>{t("manufacturing&warehouse")}: Kruševac</p>
                <p>37000 Srnje bb</p>
              </div>
            </a>
          </div>

          {/* official details */}
          <div>
            <p className="font-semibold">{t("officialEmail")}:</p>
            <a
              href="mailto:info@superheat.rs"
              className="mb-2 flex items-center gap-1 rounded-sm py-1 transition-colors hover:bg-hoverBackground"
            >
              <Mail size={20} className="text-textHover" />
              info@superheat.rs
            </a>

            <p className="font-semibold">{t("commercialService")}:</p>
            <a
              href="mailto:m.popovic@superheat.rs"
              className="flex items-center gap-1 rounded-sm py-1 transition-colors hover:bg-hoverBackground"
            >
              <Mail size={20} className="text-textHover" />
              m.popovic@superheat.rs
            </a>
            <a
              href="tel:+381652007778"
              className="flex items-center gap-1 rounded-sm py-1 transition-colors hover:bg-hoverBackground"
            >
              <Phone size={20} className="text-textHover" />
              065/200 77 78
            </a>
          </div>

          {/* finance details */}
          <div>
            <p className="font-semibold">{t("finance")}:</p>
            <a
              href="mailto:finance@superheat.rs"
              className="mb-2 flex items-center gap-1 rounded-sm py-1 transition-colors hover:bg-hoverBackground"
            >
              <Mail size={20} className="text-textHover" />
              finance@superheat.rs
            </a>

            <p className="font-semibold">{t("technicalDepartment")}:</p>
            <a
              href="mailto:n.milojevic@superheat.rs"
              className="flex items-center gap-1 rounded-sm py-1 transition-colors hover:bg-hoverBackground"
            >
              <Mail size={20} className="text-textHover" />
              n.milojevic@superheat.rs
            </a>
            <a
              href="tel:+381649255454"
              className="flex items-center gap-1 rounded-sm py-1 transition-colors hover:bg-hoverBackground"
            >
              <Phone size={20} className="text-textHover" />
              064/925 54 54
            </a>
          </div>

          {/* services */}
          <div>
            <Link
              className="text-md font-semibold leading-6 transition-colors hover:text-textHover"
              href={navigation[0].href}
            >
              {navigation[0].title}
            </Link>
            <ul className="mt-3">
              {navigation[0]?.subMenu?.map((subMenuItem) => (
                <li
                  key={subMenuItem.title}
                  className="rounded-sm transition-colors hover:bg-hoverBackground"
                >
                  <Link
                    className="inline-block w-full p-1"
                    href={subMenuItem.href}
                  >
                    {subMenuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* solutins */}
          <div>
            <Link
              className="text-md font-semibold leading-6 transition-colors hover:text-textHover"
              href={navigation[1].href}
            >
              {navigation[1].title}
            </Link>
            <ul className="mt-3">
              {navigation[1]?.subMenu?.map((subMenuItem) => (
                <li
                  key={subMenuItem.title}
                  className="rounded-sm transition-colors hover:bg-hoverBackground"
                >
                  <Link
                    className="inline-block w-full p-1"
                    href={subMenuItem.href}
                  >
                    {subMenuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* about us */}
          <div className="flex flex-col space-y-3">
            <Link
              className="text-md p-1 font-semibold leading-6 transition-colors hover:text-textHover"
              href={navigation[2].href}
            >
              {navigation[2].title}
            </Link>
            <Link
              className="text-md mt-3 p-1 font-semibold leading-6 transition-colors hover:text-textHover"
              href={navigation[3].href}
            >
              {navigation[3].title}
            </Link>
            <Link
              className="text-md p-1 font-semibold leading-6 transition-colors hover:text-textHover"
              href={navigation[4].href}
            >
              {navigation[4].title}
            </Link>
          </div>
        </div>
      </div>
      <div className="text-md mt-5 border-t border-border py-8 text-center">
        Copyright © {copyrightYear()}
      </div>
    </footer>
  );
};
export default Footer;
