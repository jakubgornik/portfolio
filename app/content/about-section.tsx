"use client";

import Container from "../components/Container";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionDescription from "../components/section-description";
import SectionHeader from "../components/section-header";
import { useSectionInView } from "../hooks/use-section-in-view";
import { SectionName } from "../utils/data";
import useIsWindowWidthLowerThan from "../hooks/use-is-window-width-lower-than";

export const AboutMeSection = () => {
  const { ref } = useSectionInView(SectionName.About);
  const isWindowWidthLower = useIsWindowWidthLowerThan(520);
  const { t } = useTranslation("translation", { keyPrefix: "sections.about" });

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
        <SectionHeader index={"01"} title={t("title")} />
        <SectionDescription>
          {t("description1")}{" "}
          <span className="text-lightGray">{t("highlight1")}</span>
        </SectionDescription>
        <SectionDescription>
          {t("description2_part1")}{" "}
          <span className="text-lightGray">{t("highlight2")}</span>{" "}
          {t("description2_part2")}{" "}
          <span className="text-lightGray">{t("highlight3")}</span>{" "}
          {t("description2_part3")}
        </SectionDescription>
      </motion.div>
    </Container>
  );
};
