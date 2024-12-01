import { Cpu, DollarSign, Timer } from "lucide-react";
import { useTranslations } from "next-intl";

const Cards = () => {
  const t = useTranslations("HomePage.herosection.cards");
  return (
    <div className="relative mt-8 grid md:grid-cols-3">
      <div className="flex flex-col gap-y-6 px-2 py-4 md:p-4 lg:p-6 lg:py-6">
        <Timer />
        <div>
          <h3 className="font-medium lg:text-lg">
            {t("completeservice.title")}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground lg:text-base">
            {t("completeservice.description")}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 px-2 py-4 md:p-4 lg:p-6 lg:py-6">
        <DollarSign />
        <div>
          <h3 className="font-medium lg:text-lg">
            {t("significantsavings.title")}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground lg:text-base">
            {t("significantsavings.description")}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 px-2 py-4 md:p-4 lg:p-6 lg:py-6">
        <Cpu />
        <div>
          <h3 className="font-medium lg:text-lg">
            {t("automationprocess.title")}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground lg:text-base">
            {t("automationprocess.description")}
          </p>
        </div>
      </div>

      <div className="absolute -inset-x-4 top-0 h-px bg-border md:hidden"></div>
      <div className="absolute -inset-x-4 top-[-0.5px] row-start-2 h-px bg-border md:hidden"></div>
      <div className="absolute -inset-x-4 top-[-0.5px] row-start-3 h-px bg-border md:hidden"></div>
      <div className="absolute -inset-x-4 bottom-0 row-start-4 h-px bg-border md:hidden"></div>
      <div className="absolute -top-2 bottom-0 left-0 w-px bg-border md:hidden"></div>
      <div className="absolute -top-2 bottom-0 right-0 col-start-2 w-px bg-border md:hidden"></div>
      <div className="absolute -inset-x-2 top-0 hidden h-px bg-border md:block"></div>
      <div className="absolute -top-2 bottom-0 left-0 hidden w-px bg-border md:block"></div>
      <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-2 hidden w-px bg-border md:block"></div>
      <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-3 hidden w-px bg-border md:block"></div>
      <div className="absolute -top-2 bottom-0 right-0 hidden w-px bg-border md:block"></div>
    </div>
  );
};
export default Cards;
