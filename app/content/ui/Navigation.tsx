import NavigationItem from "../../components/NavigationItem";
import ButtonResume from "./ButtonResume";

const Navigation = () => {
  return (
    <div className="fixed z-50 mt-8 flex w-full items-center justify-center font-medium">
      <ul className="bg-lighterPurple flex w-[65vw] justify-around rounded-xl px-2 text-[14px] shadow-lg">
        <NavigationItem navigationName="Home" />
        <NavigationItem navigationName="About me" />
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
