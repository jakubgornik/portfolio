import MailIcon from "@/app/components/svg/MailIcon";
import { useTranslation } from "react-i18next";

export const ButtonContact = () => {
  const { t } = useTranslation();
  return (
    <a
      className="mt-4 flex cursor-pointer items-center justify-center gap-3 self-start rounded-[3px] bg-lightGray px-6 py-2 text-sm font-medium shadow-lg duration-300 hover:bg-yellowishWhite mobile-lg:text-[16px]"
      href="mailto:jakub.gornikk@outlook.com"
    >
      {t("actions.sendEmail")}
      <MailIcon />
    </a>
  );
};
