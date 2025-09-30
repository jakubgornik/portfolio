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
          Based in Poland software developer, with{" "}
          <span className="text-lightPink">
            2 years of commercial experience.
          </span>
        </SectionDescription>
        <SectionDescription>
          Experienced in building scalable web applications using modern
          technologies and best practices. Proficient in{" "}
          <span className="text-lightPink">
            React, Next.js, Node.js, Vue.js,
          </span>{" "}
          and <span className="text-lightPink">TypeScript</span>, with a proven
          track record of delivering high-quality solutions across diverse
          projects. Demonstrated expertise in full-stack development,
          collaborative team environments, and competitive programming
          challenges.
        </SectionDescription>
      </motion.div>
    </Container>
  );
};

export default AboutMeSection;
