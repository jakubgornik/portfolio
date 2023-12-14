import Download from "../../components/svg/Download";

const ButtonResume = () => {
  return (
    <div className="bg-lighterPurple hover:bg-lightPink group fixed right-2 flex cursor-pointer items-center gap-1 rounded-lg px-5 py-4 shadow-xl duration-300">
      <span className="text-yellowishWhite group-hover:text-darkPurple text-[14px] duration-300">
        Resume
      </span>
      <Download />
    </div>
  );
};

export default ButtonResume;
