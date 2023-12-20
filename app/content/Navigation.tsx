import NavigationItem from "../components/NavigationItem";
import ButtonResume from "./ui/ButtonResume";
import { navigationLinks } from "@/app/utils/data";

const Navigation = () => {
  return (
    <>
      <nav className="fixed z-[999] mt-8 hidden w-full items-center justify-center font-semibold sm:flex">
        <ul className="flex h-12 items-center justify-around rounded-xl bg-lighterPurple/60 px-2 text-[14px] shadow-lg backdrop-blur-lg lg:h-16">
          {navigationLinks.map((el) => (
            <NavigationItem key={el.id} navigationElement={el} />
          ))}
        </ul>
        <ButtonResume />
      </nav>
      {/* <nav className="fixed z-[50] flex w-full items-center justify-between border-b border-b-lighterPurple px-[1rem] shadow-lg backdrop-blur-lg sm:hidden sm:px-[2rem] md:px-[3rem] lg:px-[4rem]">
        <span className="cursor-pointer text-[28px] font-bold text-lightGray duration-300 hover:text-lightPink">
          JG.
        </span>
        <div>ham</div>
      </nav> */}
    </>
  );
};

export default Navigation;
