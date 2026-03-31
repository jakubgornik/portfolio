"use client";

import { Container } from "@/app/components/container";
import {
  SectionName,
  technologiesAndTools,
  technologiesAndToolsGrouped,
  technologyCategories,
  TechnologyCategory,
  TechnologyFilterName,
} from "../utils/data";
import { motion } from "framer-motion";
import { Slider } from "@/app/content/ui/slider";
import { useTranslation } from "react-i18next";
import SectionDescription from "../components/section-description";
import TechnologyCard from "../components/technology-card";
import useIsWindowWidthLowerThan from "../hooks/use-is-window-width-lower-than";
import { useSectionInView } from "../hooks/use-section-in-view";
import { SectionHeader } from "../components/section-header";
import { TechnologyCategoryFilter } from "../components/technology-filter";
import { useMemo, useState } from "react";

export type TechnologyFilterOption = TechnologyCategory | "all";

export const TechStackSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.techStack",
  });
  const { ref } = useSectionInView(SectionName.TechStack);
  const [activeCategory, setActiveCategory] = useState<TechnologyFilterOption>(
    TechnologyFilterName.All,
  );

  const visibleTechnologies = useMemo(() => {
    if (activeCategory === TechnologyFilterName.All)
      return technologiesAndTools;
    return technologiesAndToolsGrouped[activeCategory];
  }, [activeCategory]);

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
          className="flex flex-col items-end pt-28 md:pt-52"
        >
          <div className="flex flex-col justify-start gap-3">
            <div className="self-end">
              <SectionHeader index={"02"} title={t("title")} />
            </div>
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

        <div className="flex flex-col items-center gap-6 py-20 md:py-36">
          <h4 className="flex gap-2 text-[22px] text-yellowishWhite sm:text-[32px]">
            {t("stackTitle")}
          </h4>
          <TechnologyCategoryFilter
            categories={technologyCategories}
            active={activeCategory}
            onChange={setActiveCategory}
            labels={{
              all: t("filters.all"),
              ...Object.fromEntries(
                technologyCategories.map((c) => [c, t(`filters.${c}`)]),
              ),
            }}
          />
          ;
          <ul className="flex flex-wrap justify-center gap-2 md:max-w-[800px]">
            {visibleTechnologies.map((title, index) => (
              <TechnologyCard
                key={`${title}-${index}`}
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
