"use client";

import Container from "../components/Container";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSectionInView } from "../hooks/use-section-in-view";
import { SectionName } from "../utils/data";
import useIsWindowWidthLowerThan from "../hooks/use-is-window-width-lower-than";

export const HomeSection = () => {
  const { ref } = useSectionInView(SectionName.Home);
  const isWindowWidthLower = useIsWindowWidthLowerThan(520);
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.home",
  });

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
          <p className="first-letter text-sm text-lightGray mobile-lg:text-lg sm:text-xl lg:text-2xl">
            {t("greeting")}
          </p>
          <h3 className="text-[38px] font-bold leading-none text-yellowishWhite mobile-lg:text-[52px] sm:text-[64px] md:text-[90px] lg:text-[120px]">
            {t("fullName")}
          </h3>
          <h3 className="text-[24px] font-bold text-lightGray mobile-lg:text-[32px] sm:text-[34px] md:text-[52px] lg:text-[60px]">
            {t("occupation")}
          </h3>
        </div>
      </motion.div>
    </Container>
  );
};
