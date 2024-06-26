"use client";
import SectionHeader from "../components/SectionHeader";
import SectionDescription from "../components/SectionDescription";
import Container from "../components/Container";
import TechnologyCard from "../components/TechnologyCard";
import Slider from "./ui/Slider";
import { useSectionInView } from "../hooks/useSectionInView";
import { technologiesAndTools } from "../utils/data";
import { motion } from "framer-motion";
import useIsWindowWidthLowerThan from "../hooks/useIsWindowWidthLowerThan";

const TechStackSection = () => {
  const { ref } = useSectionInView("Tech stack");
  const isWindowWidthLower = useIsWindowWidthLowerThan(520);
  return (
    <>
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            x: isWindowWidthLower ? 0 : 20,
            y: isWindowWidthLower ? 20 : 0,
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
        </motion.div>

        <div className="flex flex-col items-center gap-6 py-36">
          <h4 className="flex gap-2 text-[22px] text-yellowishWhite sm:text-[32px]">
            My technology stack
          </h4>
          <ul className="flex flex-wrap justify-center gap-2 md:max-w-[800px]">
            {technologiesAndTools.map((title, index) => (
              <TechnologyCard
                key={index}
                index={index}
                title={title}
                variant=""
              />
            ))}
          </ul>
        </div>
      </Container>
      <Slider />
    </>
  );
};

export default TechStackSection;
