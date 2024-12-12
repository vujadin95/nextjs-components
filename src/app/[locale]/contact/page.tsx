import ContactForm from "@/components/contact/contact-form";
import DynamicMap from "@/components/leafletmap";
import Maintenance from "@/components/Maintenance/Maintenance";
import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("contact"),
  };
}

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-10 py-20 lg:flex-row">
      {/* <h1 className="my-5 w-full text-center text-4xl">{t("pagetitle")}</h1> */}
      {/* <Maintenance /> */}
      <div className="h-[400px] w-full border shadow-xl sm:h-[650px] lg:w-1/2">
        <DynamicMap />
      </div>
      <ContactForm />
    </div>
  );
};
export default Contact;
