import Download from "../../components/svg/Download";

const ButtonResume = () => {
  return (
    <div className="group fixed right-2 flex cursor-pointer items-center gap-1 rounded-lg bg-lighterPurple/60 px-4 py-4 shadow-xl backdrop-blur-lg duration-300 hover:bg-lightPink">
      <span className="text-[14px] text-yellowishWhite duration-300 group-hover:text-darkPurple">
        CV
      </span>
      <Download />
    </div>
  );
};

export default ButtonResume;
