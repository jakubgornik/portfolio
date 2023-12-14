import SectionHeader from "../components/SectionHeader";
import SectionDescription from "../components/SectionDescription";
import Container from "../components/Container";
import TechnologyTitle from "./ui/TechnologyTitle";
import Slider from "./ui/Slider";

const TechStackSection = () => {
  const technologiesAndTools = [
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "MaterialUi",
    "Html",
    "Git",
    "Css ( Scss )",
    "Figma",
    "Jira",
    "Firebase",
    "MongoDB",
    "Redux toolkit",
    "Zustand",
    "React Testing Library",
    "Framer motion",
    "React Query",
  ];

  return (
    <>
      <Container>
        <div className="flex flex-col items-end pt-36">
          <div className="flex flex-col justify-start gap-3 ">
            <SectionHeader index="02" title="Tech stack" />
            <SectionDescription>
              Change is the only constant in technology. I don't just embrace
              it, I navigate through it with enthusiasm. Whether it's a paradigm
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
        <div className="pt-36">
          <div className="flex flex-col items-center gap-6">
            <h4 className="flex gap-2 text-[22px] text-yellowishWhite sm:text-[32px]">
              My skills
            </h4>
            <div className="flex max-w-[800px] flex-wrap justify-center gap-2">
              {technologiesAndTools.map((el, index) => (
                <TechnologyTitle key={index} title={el} />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Slider />
    </>
  );
};

export default TechStackSection;
