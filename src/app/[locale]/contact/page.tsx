import ContactForm from "@/components/contact/contact-form";
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
    <div className="min-h-[calc(100vh_-_59px)] pt-20">
      {/* <h1 className="my-5 w-full text-center text-4xl">{t("pagetitle")}</h1> */}
      {/* <Maintenance /> */}
      <ContactForm />
    </div>
  );
};
export default Contact;
