import Container from "@/app/components/Container";
import NextJs from "@/app/components/svg/technologies/NextjsIcon";
import ReactJs from "@/app/components/svg/technologies/ReactjsIcon";
import VueJs from "@/app/components/svg/technologies/VuejsIcon";
import Javascript from "@/app/components/svg/technologies/JavascriptIcon";
import TypescriptLogo from "@/app/components/svg/technologies/TypescriptIcon";
import TailwindLogo from "@/app/components/svg/technologies/TailwindIcon";
import CssLogo from "@/app/components/svg/technologies/CssIcon";
import MaterialUiLogo from "@/app/components/svg/technologies/MaterialuiIcon";
import GitIcon from "@/app/components/svg/technologies/GitIcon";
import FirebaseIcon from "@/app/components/svg/technologies/FirebaseIcon";
import FigmaIcon from "@/app/components/svg/technologies/FigmaIcon";
import HtmlIcon from "@/app/components/svg/technologies/HtmlIcon";

const Slider = () => {
  return (
    <div className="bg-darkerPurple shadow-lg">
      <Container>
        <div className="bg-darkerPurple flex h-[100px] items-center justify-between">
          <NextJs />
          <ReactJs />
          <VueJs />
          <Javascript />
          <TypescriptLogo />
          <TailwindLogo />
          <MaterialUiLogo />
          <CssLogo />
          <HtmlIcon />
          <GitIcon />
          <FirebaseIcon />
          <FigmaIcon />
        </div>
      </Container>
    </div>
  );
};

export default Slider;
