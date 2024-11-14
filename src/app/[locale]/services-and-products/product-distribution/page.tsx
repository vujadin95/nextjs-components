import Maintenance from "@/components/Maintenance/Maintenance"
import { useTranslations } from "next-intl"

const ProductDistribution = () => {
 const t = useTranslations('servicesAndProducts.productDistribution')
 return (
  <div>
   <h1 className="w-full text-4xl my-5 text-center">{t('pagetitle')}</h1>
   <Maintenance />
  </div>
 )
}
export default ProductDistribution