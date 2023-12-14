import NavigationItem from "../../components/NavigationItem";
import ButtonResume from "./ButtonResume";
import Container from "@/app/components/Container";

const Navigation = () => {
  return (
    <div className="fixed z-50 mt-8 hidden w-full items-center justify-center font-medium sm:flex">
      <ul className="flex justify-around rounded-xl bg-lighterPurple px-2 text-[14px] shadow-lg">
        <NavigationItem navigationName="Home" />
        <NavigationItem navigationName="About" />
        <NavigationItem navigationName="Tech stack" />
        <NavigationItem navigationName="Experience" />
        <NavigationItem navigationName="Projects" />
        <NavigationItem navigationName="Contact" />
      </ul>
      <ButtonResume />
    </div>
  );
};

export default Navigation;
