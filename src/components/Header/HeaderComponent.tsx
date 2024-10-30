import { useTranslations } from "next-intl";
import Header from "./Header";

const navigationLinks = ["linkOne", "linkTwo", "linkThree", "linkFour", "linkFive"];
const subMenuItems = ["subMenuOne", "subMenuTwo", "subMenuThree", "subMenuFour"]


const HeaderComponent = () => {
 const t = useTranslations('navigation');
 const navigationLinksFirstLevel = navigationLinks.map((link) => ({ title: t(`${link}.title`), href: t(`${link}.href`), hasSubMenu: t(`${link}.subMenuItems.subMenuOne.title`) }));


 console.log(navigationLinksFirstLevel)

 return (
  <>
   <div>{t("linkOne.title")}</div>
   <Header />
  </>
 )
}
export default HeaderComponent