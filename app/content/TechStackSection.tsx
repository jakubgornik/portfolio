"use client";
import SectionHeader from "../components/SectionHeader";
import SectionDescription from "../components/SectionDescription";
import Container from "../components/Container";
import TechnologyCard from "../components/TechnologyCard";
import Slider from "./ui/Slider";
import { useSectionInView } from "../hooks/useSectionInView";
import { technologiesAndTools } from "../utils/data";

const TechStackSection = () => {
  const { ref } = useSectionInView("Techstack");

  return (
    <>
      <Container>
        <div
          id="techstack"
          ref={ref}
          className="flex scroll-mt-6 flex-col items-end pt-52"
        >
          <div className="flex flex-col justify-start gap-3 ">
            <SectionHeader index="02" title="Tech stack" />
            <SectionDescription>
              Change is the only constant in technology. I don`t just embrace
              it, I navigate through it with enthusiasm. Whether it`s a paradigm
              shift in
              <span className="text-lightPink"> frameworks </span>or the
              introduction of
              <span className="text-lightPink"> cutting-edge tools, </span>I see
              each change as an opportunity to grow and enhance my capabilities.
            </SectionDescription>
            <SectionDescription>
              Below, you can explore my
              <span className="text-lightPink"> technology stack </span> and the
              <span className="text-lightPink"> tools </span> I leverage in my
              projects:
            </SectionDescription>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-36">
          <h4 className="flex gap-2 text-[22px] text-yellowishWhite sm:text-[32px]">
            My skills
          </h4>
          <div className="flex max-w-[800px] flex-wrap justify-center gap-2">
            {technologiesAndTools.map((title, index) => (
              <TechnologyCard key={index} title={title} />
            ))}
          </div>
        </div>
      </Container>
      <Slider />
    </>
  );
};

export default TechStackSection;
