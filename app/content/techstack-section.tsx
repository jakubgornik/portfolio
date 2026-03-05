"use client";

import Container from "../components/Container";
import { SectionName, technologiesAndTools } from "../utils/data";
import { motion } from "framer-motion";
import { Slider } from "./ui/slider";
import { useTranslation } from "react-i18next";
import SectionDescription from "../components/section-description";
import SectionHeader from "../components/section-header";
import TechnologyCard from "../components/technology-card";
import useIsWindowWidthLowerThan from "../hooks/use-is-window-width-lower-than";
import { useSectionInView } from "../hooks/use-section-in-view";

export const TechStackSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.techStack",
  });
  const { ref } = useSectionInView(SectionName.TechStack);
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
          <div className="flex flex-col justify-start gap-3">
            <SectionHeader index={"02"} title={t("title")} />
            <SectionDescription>
              {t("description.part1")}{" "}
              <span className="text-lightGray">
                {t("description.highlight1")}
              </span>{" "}
              {t("description.part2")}{" "}
              <span className="text-lightGray">
                {t("description.highlight2")}
              </span>{" "}
              {t("description.part3")}
            </SectionDescription>
          </div>
        </motion.div>
        <div className="flex flex-col items-center gap-6 py-36">
          <h4 className="flex gap-2 text-[22px] text-yellowishWhite sm:text-[32px]">
            {t("stackTitle")}
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
