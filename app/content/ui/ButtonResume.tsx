import DownloadIcon from "../../components/svg/DownloadIcon";
import Link from "next/link";

const ButtonResume = () => {
  return (
    <Link
      className="group fixed right-8 flex cursor-pointer items-center gap-2 rounded-lg bg-lightPink px-4 py-[14px] text-[14px] font-semibold text-darkPurple shadow-lg duration-300 hover:bg-yellowishWhite"
      download="Jakub-Górnik-CV-eng.pdf"
      href="/cv/cv-eng.pdf"
    >
      CV
      <DownloadIcon />
    </Link>
  );
};

export default ButtonResume;
