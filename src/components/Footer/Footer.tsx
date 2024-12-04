import { useTranslations } from "next-intl";
import Copyright from "./copyright";
import CompanyContact from "./company-contacts";
import FooterNavigation from "./footer-navigation";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t text-sm">
      <FooterNavigation />
      <div className="border-t">
        <CompanyContact />
      </div>
      <Copyright />
    </footer>
  );
};
export default Footer;
