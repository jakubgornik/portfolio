import Download from "../../components/svg/DownloadIcon";

const ButtonResume = () => {
  return (
    <div className="group fixed right-2 flex cursor-pointer items-center gap-1 rounded-lg bg-lightPink px-4 py-4 font-medium shadow-lg duration-300 hover:bg-yellowishWhite">
      <span className="text-[14px] text-darkPurple duration-300">CV</span>
      <Download />
    </div>
  );
};

export default ButtonResume;
