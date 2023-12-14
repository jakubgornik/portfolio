import Container from "@/app/components/Container";
import NextJsIcon from "@/app/components/svg/technologies/NextjsIcon";
import ReactJsIcon from "@/app/components/svg/technologies/ReactjsIcon";
import VueJsIcon from "@/app/components/svg/technologies/VuejsIcon";
import JavascriptIcon from "@/app/components/svg/technologies/JavascriptIcon";
import TypescriptIcon from "@/app/components/svg/technologies/TypescriptIcon";
import TailwindIcon from "@/app/components/svg/technologies/TailwindIcon";
import CssIcon from "@/app/components/svg/technologies/CssIcon";
import MaterialUiIcon from "@/app/components/svg/technologies/MaterialuiIcon";
import GitIcon from "@/app/components/svg/technologies/GitIcon";
import FirebaseIcon from "@/app/components/svg/technologies/FirebaseIcon";
import FigmaIcon from "@/app/components/svg/technologies/FigmaIcon";
import HtmlIcon from "@/app/components/svg/technologies/HtmlIcon";

const Slider = () => {
  return (
    <div className="bg-darkerPurple shadow-lg">
      <Container>
        <div className="bg-darkerPurple flex h-[100px] items-center justify-between">
          <NextJsIcon />
          <ReactJsIcon />
          <VueJsIcon />
          <JavascriptIcon />
          <TypescriptIcon />
          <TailwindIcon />
          <MaterialUiIcon />
          <CssIcon />
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
