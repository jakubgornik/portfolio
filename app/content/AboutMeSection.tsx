"use client";

import SectionHeader from "../components/SectionHeader";
import SectionDescription from "../components/SectionDescription";
import Container from "../components/Container";
import { useSectionInView } from "../hooks/useSectionInView";
import { motion } from "framer-motion";
import useIsWindowWidthLowerThan from "../hooks/useIsWindowWidthLowerThan";

const AboutMeSection = () => {
  const { ref } = useSectionInView("About");
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
        id="about"
        ref={ref}
        className="mt-52 flex scroll-mt-6 flex-col gap-3 mobile-lg:pt-0"
      >
        <SectionHeader index="01" title="Who am I" />
        <SectionDescription>
          Based in Poland self-taught developer,{" "}
          <span className="text-lightPink">
            with nearly 2 years experience,{" "}
          </span>
          developing modern and useful applications. That`s how i would briefly
          describe myself.
        </SectionDescription>
        <SectionDescription>
          My journey with creating web applications started at the university
          where i have found passion for developing websites and since then I am
          constantly making progress in my frontend career. I have a deep
          understanding of{" "}
          <span className="text-lightPink">React, Next.js </span>and{" "}
          <span className="text-lightPink">Typescript. </span>I have actively
          worked on numerous projects, both personal and professional and
          participated in a hackathon.
        </SectionDescription>
      </motion.div>
    </Container>
  );
};

export default AboutMeSection;
