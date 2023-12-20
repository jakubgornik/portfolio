import DownloadIcon from "../../components/svg/DownloadIcon";

const ButtonResume = () => {
  return (
    <button
      type="button"
      className="group fixed right-8 flex cursor-pointer items-center gap-2 rounded-lg bg-lightPink px-4 py-[14px] text-[14px] font-semibold text-darkPurple shadow-lg duration-300 hover:bg-yellowishWhite"
    >
      CV
      <DownloadIcon />
    </button>
  );
};

export default ButtonResume;
