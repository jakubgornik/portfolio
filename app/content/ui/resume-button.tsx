import DownloadIcon from "../../components/svg/DownloadIcon";
import Link from "next/link";

export const ButtonResume = () => {
  return (
    <Link
      className="text-darkerDark flex cursor-pointer items-center gap-2 rounded-lg bg-yellowishWhite px-10 py-2 text-[12px] font-semibold shadow-lg duration-300 hover:bg-lightGray sm:fixed sm:right-8 sm:px-3 sm:py-[12px]"
      href="/cv/CV - EN.pdf"
      target="_blank"
    >
      CV
      <DownloadIcon />
    </Link>
  );
};
