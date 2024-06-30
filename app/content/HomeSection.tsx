"use client";
import Container from "../components/Container";
import SectionDescription from "../components/SectionDescription";
import { useSectionInView } from "../hooks/useSectionInView";
import { motion } from "framer-motion";
import useIsWindowWidthLowerThan from "../hooks/useIsWindowWidthLowerThan";

const HomeSection = () => {
  const { ref } = useSectionInView("Home");
  const isWindowWidthLower = useIsWindowWidthLowerThan(520);

  return (
    <Container>
      <motion.div
        initial={{
          opacity: 0,
          x: isWindowWidthLower ? 0 : -20,
          y: isWindowWidthLower ? 20 : 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="home"
        ref={ref}
        className="flex items-center pt-72 "
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
            not afraid of new challenges, with a passion for creating intuitive
            and eye-catching modern{" "}
            <span className="text-lightPink">web applications.</span>
          </SectionDescription>
        </div>
      </motion.div>
    </Container>
  );
};

export default HomeSection;
