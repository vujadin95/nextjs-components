import Maintenance from "@/components/Maintenance/Maintenance"
import { useTranslations } from "next-intl"

const Production = () => {
 const t = useTranslations('servicesAndProducts.production')
 return (
  <div>
   <h1 className="w-full text-4xl my-5 text-center">{t('pagetitle')}</h1>
   <Maintenance />
  </div>
 )
}
export default Production