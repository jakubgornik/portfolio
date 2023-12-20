"use client";
import Container from "../components/Container";
import SectionDescription from "../components/SectionDescription";
import { useSectionInView } from "../hooks/useSectionInView";

const HomeSection = () => {
  const { ref } = useSectionInView("Home");

  return (
    <Container>
      <div
        id="home"
        ref={ref}
        className="flex items-center pt-52 mobile-lg:h-screen mobile-lg:pt-0"
      >
        <div className="flex flex-col">
          <p className="first-letter text-sm text-lightPink mobile-lg:text-lg sm:text-xl lg:text-2xl">
            Hello there, my name is
          </p>
          <h3 className="text-[38px] font-bold leading-none text-yellowishWhite mobile-lg:text-[52px] sm:text-[64px] md:text-[90px] lg:text-[120px]">
            Jakub Górnik
          </h3>
          <h3 className="text-[24px] font-bold text-lightGray mobile-lg:text-[32px] sm:text-[34px] md:text-[52px] lg:text-[60px]">
            Frontend developer
          </h3>
          <SectionDescription>
            I am a passionate{" "}
            <span className="text-lightPink">software developer</span> who is
            not afraid of new challenges, with a passion for creating ( and
            occasionally designing ) intuitive and eye-catching modern{" "}
            <span className="text-lightPink">web applications.</span>
          </SectionDescription>
        </div>
      </div>
    </Container>
  );
};

export default HomeSection;
