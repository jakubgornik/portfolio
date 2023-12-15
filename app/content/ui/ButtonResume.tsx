import DownloadIcon from "../../components/svg/DownloadIcon";

const ButtonResume = () => {
  return (
    <button
      type="button"
      className="group fixed right-2 flex cursor-pointer items-center gap-2 rounded-lg bg-yellowishWhite px-4 py-4 text-[14px] font-semibold text-darkPurple shadow-lg duration-300 hover:bg-lightPink"
    >
      CV
      <DownloadIcon />
    </button>
  );
};

export default ButtonResume;
