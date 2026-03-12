import DownloadIcon from "../../components/svg/DownloadIcon";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const ButtonResume = () => {
  const { i18n } = useTranslation();

  // todo
  // Check the current language.
  const cvPath = i18n.language === "pl" ? "/cv/CV - PL.pdf" : "/cv/CV - PL.pdf";
  return (
    <Link
      className="flex cursor-pointer items-center gap-2 rounded-lg bg-yellowishWhite px-10 py-2 text-xs font-semibold text-darkerDark shadow-lg duration-300 hover:bg-lightGray sm:fixed sm:right-8 sm:px-3 sm:py-[12px]"
      href={cvPath}
      target="_blank"
      rel="noopener noreferrer"
    >
      CV
      <DownloadIcon />
    </Link>
  );
};
