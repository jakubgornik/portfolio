import DownloadIcon from "../../components/svg/DownloadIcon";
import Link from "next/link";

const ButtonResume = () => {
  return (
    <Link
      className="flex cursor-pointer items-center gap-2 rounded-lg bg-lightPink px-10 py-2 text-[14px] font-semibold text-darkPurple shadow-lg duration-300 hover:bg-yellowishWhite sm:fixed sm:right-8 sm:px-4 sm:py-[14px] "
      href="/cv/CV - EN.pdf"
      target="_blank"
    >
      CV
      <DownloadIcon />
    </Link>
  );
};

export default ButtonResume;
