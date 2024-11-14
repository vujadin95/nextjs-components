import Maintenance from "@/components/Maintenance/Maintenance"
import { useTranslations } from "next-intl"

const AirConditioning = () => {
 const t = useTranslations('solutions.airConditioning')
 return (
  <div>
   <h1 className="w-full text-4xl my-5 text-center">{t('pagetitle')}</h1>
   <Maintenance />
  </div>
 )
}
export default AirConditioning