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
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 p-4 py-8 xl:flex-row">
        {/* logo */}
        <div className="xl:max-w-[320px]">
          <Logo />
          <div className="mt-4 max-w-md tracking-wide">{t("slogan")}</div>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
          {/* company details */}
          <div className="self-end pb-4">
            {/* <p className="mb-3 text-xl font-medium">SUPERHEAT DOO KRAGUJEVAC</p> */}
            <a
              target="_blank"
              href="https://maps.app.goo.gl/JdeLYm4q4Yn5GR6b7"
              className="flex items-center gap-2 rounded-sm transition-colors hover:text-destructive"
            >
              <MapPin className="shrink-0" />
              <div className="mb-2">
                <p>{t("headquarters")}: Kragujevac</p>
                <p>34000 Vojislava Ilića 14</p>
              </div>
            </a>

            <a
              target="_blank"
              href="https://maps.app.goo.gl/CNVqufLnF4SX5vx4A"
              className="flex items-center gap-2 rounded-sm transition-colors"
            >
              <MapPin className="shrink-0" />
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
              className="hover:bg-hoverBackground mb-2 flex items-center gap-1 rounded-sm py-1 transition-colors"
            >
              <Mail size={20} className="text-textHover" />
              info@superheat.rs
            </a>

            <p className="font-semibold">{t("commercialService")}:</p>
            <a
              href="mailto:m.popovic@superheat.rs"
              className="hover:bg-hoverBackground flex items-center gap-1 rounded-sm py-1 transition-colors"
            >
              <Mail size={20} className="text-textHover" />
              m.popovic@superheat.rs
            </a>
            <a
              href="tel:+381652007778"
              className="hover:bg-hoverBackground flex items-center gap-1 rounded-sm py-1 transition-colors"
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
              className="hover:bg-hoverBackground mb-2 flex items-center gap-1 rounded-sm py-1 transition-colors"
            >
              <Mail size={20} className="text-textHover" />
              finance@superheat.rs
            </a>

            <p className="font-semibold">{t("technicalDepartment")}:</p>
            <a
              href="mailto:n.milojevic@superheat.rs"
              className="hover:bg-hoverBackground flex items-center gap-1 rounded-sm py-1 transition-colors"
            >
              <Mail size={20} className="text-textHover" />
              n.milojevic@superheat.rs
            </a>
            <a
              href="tel:+381649255454"
              className="hover:bg-hoverBackground flex items-center gap-1 rounded-sm py-1 transition-colors"
            >
              <Phone size={20} className="text-textHover" />
              064/925 54 54
            </a>
          </div>

          {/* services */}
          <div>
            <Link
              className="text-md hover:text-textHover font-semibold leading-6 transition-colors"
              href={navigation[0].href}
            >
              {navigation[0].title}
            </Link>
            <ul className="mt-3">
              {navigation[0]?.subMenu?.map((subMenuItem) => (
                <li
                  key={subMenuItem.title}
                  className="hover:bg-hoverBackground rounded-sm transition-colors"
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
              className="text-md hover:text-textHover font-semibold leading-6 transition-colors"
              href={navigation[1].href}
            >
              {navigation[1].title}
            </Link>
            <ul className="mt-3">
              {navigation[1]?.subMenu?.map((subMenuItem) => (
                <li
                  key={subMenuItem.title}
                  className="hover:bg-hoverBackground rounded-sm transition-colors"
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
              className="text-md hover:text-textHover p-1 font-semibold leading-6 transition-colors"
              href={navigation[2].href}
            >
              {navigation[2].title}
            </Link>
            <Link
              className="text-md hover:text-textHover mt-3 p-1 font-semibold leading-6 transition-colors"
              href={navigation[3].href}
            >
              {navigation[3].title}
            </Link>
            <Link
              className="text-md hover:text-textHover p-1 font-semibold leading-6 transition-colors"
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
