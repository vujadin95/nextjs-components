"use client";

import {
  getContactFormSchema,
  ContactFormValues,
} from "@/shemas/contactFormSchema";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { onHandleSubmitAction } from "@/actions/contactFormAction";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import SubmitButton from "./submit-button";
import { Link } from "@/i18n/routing";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  spamProtector: "",
};

export default function ContactForm() {
  const validationMessages = useTranslations("contact.errormessages");
  const contactTranslation = useTranslations("contact.contactform");

  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(getContactFormSchema(validationMessages)),
    defaultValues: defaultValues,
  });

  const onSubmit = async (formData: ContactFormValues) => {
    setIsSubmited(true);
    const { message, success } = await onHandleSubmitAction(formData);
    toast({
      variant: success ? "default" : "destructive",
      title: success
        ? validationMessages("ifsuccesstrue")
        : validationMessages("ifsuccessfalse"),
      description: message,
      action: (
        <ToastAction altText="Try again" asChild>
          <Link href={"/"}>{contactTranslation("home")}</Link>
        </ToastAction>
      ),
    });
    form.reset(defaultValues);
    setIsSubmited(false);
  };

  return (
    <Card className="w-full shadow-xl lg:w-1/2">
      <CardHeader>
        <CardTitle>{contactTranslation("contactus")}</CardTitle>
        <CardDescription className="pt-2">
          {contactTranslation("subheading")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-4 min-[550px]:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contactTranslation("name")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={contactTranslation("nameplaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contactTranslation("lastname")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={contactTranslation("lastnameplaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={contactTranslation("emailplaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{contactTranslation("message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      id="message"
                      placeholder={contactTranslation("messageplaceholder")}
                      className="min-h-[120px] sm:min-h-[180px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="spamProtector"
              render={({ field }) => (
                <FormItem className="hidden">
                  <FormLabel>Leave this field empty</FormLabel>
                  <FormControl>
                    <Input {...field} tabIndex={-1} autoComplete="off" />
                  </FormControl>
                </FormItem>
              )}
            />

            <SubmitButton
              pending={isSubmited}
              label={contactTranslation("submit")}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
