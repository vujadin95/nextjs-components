import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

const AboutUs = () => {
 const t = useTranslations('HomePage');
 return (
  <div>
   <h1>{t('title')}</h1>
   <Link href="/">Home</Link>
  </div>
 )
}
export default AboutUs