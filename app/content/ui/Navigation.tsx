import NavigationItem from "../../components/NavigationItem";
import ButtonResume from "./ButtonResume";
import Container from "@/app/components/Container";

const Navigation = () => {
  return (
    <>
      <div className="fixed z-50 mt-8 hidden w-full items-center justify-center font-medium sm:flex">
        <ul className="flex justify-around rounded-xl bg-lighterPurple/60 px-2 text-[14px] shadow-lg backdrop-blur-lg ">
          <NavigationItem navigationName="Home" />
          <NavigationItem navigationName="About" />
          <NavigationItem navigationName="Tech stack" />
          <NavigationItem navigationName="Experience" />
          <NavigationItem navigationName="Projects" />
          <NavigationItem navigationName="Contact" />
        </ul>
        <ButtonResume />
      </div>
      <div className="fixed z-[50] flex w-full items-center justify-between border-b border-b-lighterPurple px-[1rem] shadow-lg backdrop-blur-lg sm:hidden sm:px-[2rem] md:px-[3rem] lg:px-[4rem]">
        <span className="cursor-pointer text-[28px] font-bold text-lightGray duration-300 hover:text-lightPink">
          JG.
        </span>
        <div>ham</div>
      </div>
    </>
  );
};

export default Navigation;
