import { useTranslations } from "next-intl"
import Logo from "../Logo/Logo"
import useNavigationData from "../Header/Navigation/useNavigation";
import { Link, Pathnames } from "@/i18n/routing";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const t = useTranslations('footer');
  const navigation = useNavigationData();
  const copyrightYear = () => {
    return new Date().getFullYear();
  };


  return (
    <footer className="bg-background border-t border-border text-textColor">
      <div className="p-4 py-8 max-w-screen-2xl mx-auto w-full flex flex-col xl:flex-row gap-4">
        {/* logo */}
        <div className="xl:max-w-[320px]">
          <Logo />
          <div className="max-w-md mt-4 tracking-wide">
            {t('slogan')}
          </div>
        </div>

        <div className="w-full gap-4 grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
          {/* company details */}
          <div className="">
            <p className="text-xl font-bold bg-gradient-to-l from-neutral-900 to-red-700 bg-clip-text text-transparent dark:bg-gradient-to-l dark:from-slate-50 dark:to-red-700 dark:bg-clip-text dark:text-transparent mb-3">
              SUPERHEAT DOO KRAGUJEVAC
            </p>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/JdeLYm4q4Yn5GR6b7"
              className="flex items-center gap-2 hover:bg-hoverBackground transition-colors rounded-sm"
            >
              <MapPin className="text-textHover shrink-0" />
              <div className="mb-2">
                <p>{t('headquarters')}: Kragujevac</p>
                <p>34000 Vojislava Ilića 14</p>
              </div>
            </a>

            <a
              target="_blank"
              href="https://maps.app.goo.gl/CNVqufLnF4SX5vx4A"
              className="flex items-center gap-2 hover:bg-hoverBackground transition-colors rounded-sm"
            >
              <MapPin className="text-textHover shrink-0" />
              <div>
                <p>{t('manufacturing&warehouse')}: Kruševac</p>
                <p>37000  Srnje bb</p>
              </div>
            </a>

          </div>

          {/* official details */}
          <div>
            <p className="font-semibold">{t('officialEmail')}:</p>
            <a href="mailto:info@superheat.rs" className="flex gap-1 items-center mb-2 hover:bg-hoverBackground transition-colors rounded-sm py-1">
              <Mail size={20} className="text-textHover" />
              info@superheat.rs
            </a>

            <p className="font-semibold">{t('commercialService')}:</p>
            <a href="mailto:m.popovic@superheat.rs" className="flex gap-1 items-center hover:bg-hoverBackground transition-colors rounded-sm py-1">
              <Mail size={20} className="text-textHover" />
              m.popovic@superheat.rs
            </a>
            <a href="tel:+381652007778" className="flex gap-1 items-center hover:bg-hoverBackground transition-colors rounded-sm py-1">
              <Phone size={20} className="text-textHover" />
              065/200 77 78
            </a>
          </div>

          {/* finance details */}
          <div>
            <p className="font-semibold">{t('finance')}:</p>
            <a href="mailto:finance@superheat.rs" className="flex gap-1 items-center mb-2 hover:bg-hoverBackground transition-colors rounded-sm py-1">
              <Mail size={20} className="text-textHover" />
              finance@superheat.rs
            </a>

            <p className="font-semibold">{t('technicalDepartment')}:</p>
            <a href="mailto:n.milojevic@superheat.rs" className="flex gap-1 items-center hover:bg-hoverBackground transition-colors rounded-sm py-1">
              <Mail size={20} className="text-textHover" />
              n.milojevic@superheat.rs
            </a>
            <a href="tel:+381649255454" className="flex gap-1 items-center hover:bg-hoverBackground transition-colors rounded-sm py-1">
              <Phone size={20} className="text-textHover" />
              064/925 54 54
            </a>
          </div>

          {/* services */}
          <div>
            <Link
              className="text-md font-semibold leading-6 hover:text-textHover transition-colors"
              href={navigation[0].href as Pathnames}>
              {navigation[0].title}
            </Link>
            <ul className="mt-3">
              {navigation[0]?.subMenu?.map(subMenuItem => (
                <li key={subMenuItem.title} className="hover:bg-hoverBackground transition-colors rounded-sm">
                  <Link className="w-full inline-block p-1" href={subMenuItem.href as Pathnames}>
                    {subMenuItem.title}
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* solutins */}
          <div>
            <Link
              className="text-md font-semibold leading-6 hover:text-textHover transition-colors"
              href={navigation[1].href as Pathnames}>
              {navigation[1].title}
            </Link>
            <ul className="mt-3">
              {navigation[1]?.subMenu?.map(subMenuItem => (
                <li key={subMenuItem.title} className="hover:bg-hoverBackground transition-colors rounded-sm">
                  <Link className="w-full inline-block p-1" href={subMenuItem.href as Pathnames}>
                    {subMenuItem.title}
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* about us */}
          <div className="flex flex-col space-y-3">
            <Link
              className="text-md font-semibold leading-6 hover:text-textHover transition-colors p-1"
              href={navigation[2].href as Pathnames}>
              {navigation[2].title}
            </Link>
            <Link
              className="text-md mt-3 font-semibold leading-6 hover:text-textHover transition-colors p-1"
              href={navigation[3].href as Pathnames}>
              {navigation[3].title}
            </Link>
            <Link
              className="text-md  font-semibold leading-6 hover:text-textHover transition-colors p-1"
              href={navigation[4].href as Pathnames}>
              {navigation[4].title}
            </Link>
          </div>

        </div>
      </div>
      <div className="mt-5 border-t border-border py-8 text-md text-center ">
        Copyright © {copyrightYear()}
      </div>

    </footer>
  )
}
export default Footer