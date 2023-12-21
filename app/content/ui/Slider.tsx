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
import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    addAnimation(scrollers);
  }, []);

  const addAnimation = (scrollers: NodeListOf<Element>) => {
    scrollers.forEach((scroller: Element) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller-inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children) as Element[];

        scrollerContent.forEach((item: Element) => {
          const duplicatedItem = item.cloneNode(true) as Element;
          duplicatedItem.setAttribute("aria-hidden", "true");
          if (scrollerInner) {
            scrollerInner.appendChild(duplicatedItem);
          }
        });
      }
    });
  };

  return (
    <div className="mt-16 bg-purple shadow-lg">
      <Container>
        <div className="scroller mx-auto max-w-full">
          <div className="scroller-inner flex h-[70px] flex-wrap items-center justify-center gap-16 md:h-[100px]">
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
        </div>
      </Container>
    </div>
  );
};

export default Slider;
