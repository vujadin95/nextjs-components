"use server";

import { EmailTemplate } from "@/components/contact/email-template";
import { Resend } from "resend";
import {
  ContactFormValues,
  getContactFormSchema,
} from "../shemas/contactFormSchema";
import { getTranslations } from "next-intl/server";

interface ReturnState {
  message: string;
  success: boolean;
}
export const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const resend = new Resend(process.env.RESEND_API_KEY);
export async function onHandleSubmitAction(
  formData: ContactFormValues,
): Promise<ReturnState> {
  const messageT = await getTranslations("contact.errormessages");
  const data = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    message: formData.message,
    spamProtector: formData.spamProtector,
  };
  const parsedData = getContactFormSchema().safeParse(data);
  if (!parsedData.success) {
    return {
      message: messageT("invalidContactForm"),
      success: parsedData.success,
    };
  }

  // await sleep(2000);

  await sendContactFormOnEmail(data);
  return {
    message: messageT("validContactForm"),
    success: parsedData.success,
  };
}

const sendContactFormOnEmail = async (data: ContactFormValues) => {
  try {
    const { error } = await resend.emails.send({
      from: `Superheat Website <${process.env.RESEND_FROM_EMAIL}>`,
      to: [`${process.env.RESEND_TO_MAIL}`],
      subject: "Nova poruka sa Superheat vebsajta",
      react: EmailTemplate({ data }),
    });
    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
