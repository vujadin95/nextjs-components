import Maintenance from "@/components/Maintenance/Maintenance"
import { useTranslations } from "next-intl"

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('contact'),
  };
}

const Contact = () => {
  const t = useTranslations('contact')
  return (
    <div>
      <h1 className="w-full text-4xl my-5 text-center">{t('pagetitle')}</h1>
      <Maintenance />
    </div>
  )
}
export default Contact