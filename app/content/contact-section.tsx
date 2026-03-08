"use client";

import { Container } from "@/app/components/container";
import { motion } from "framer-motion";
import { ButtonContact } from "./ui/contact-button";
import { useTranslation } from "react-i18next";
import SectionDescription from "../components/section-description";
import useIsWindowWidthLowerThan from "../hooks/use-is-window-width-lower-than";
import { useSectionInView } from "../hooks/use-section-in-view";
import { SectionName } from "../utils/data";
import { SectionHeader } from "../components/section-header";

export const ContactSection = () => {
  const { ref } = useSectionInView(SectionName.Contact);
  const isWindowWidthLower = useIsWindowWidthLowerThan(520);
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.contact",
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
        id="contact"
        ref={ref}
        className="flex scroll-mt-6 flex-col gap-24 pb-64 pt-52 sm:flex-row sm:gap-6"
      >
        <div className="flex flex-col gap-3">
          <SectionHeader index="06" title={t("title")} />
          <SectionDescription>{t("description1")}</SectionDescription>
          <SectionDescription>{t("description2")}</SectionDescription>
          <ButtonContact />
        </div>
      </motion.div>
    </Container>
  );
};
