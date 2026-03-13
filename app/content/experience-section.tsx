"use client";

import { motion } from "framer-motion";
import TechnologyCard from "../components/technology-card";
import { useTranslation } from "react-i18next";
import { experienceCards, SectionName } from "../utils/data";
import { cardVariants, fadeUpVariants } from "../utils/animationVariants";
import { useSectionInView } from "../hooks/use-section-in-view";
import { SectionHeader } from "../components/section-header";

export interface CardData {
  id: number;
  company: string;
  tKey: string;
  roleKey: string;
  tech: string[];
  bg: string;
}

interface CardProp {
  card: CardData;
}

const CardContent = ({ card }: CardProp) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.experience",
  });

  return (
    <div className="custom-scrollbar flex h-full flex-col justify-center overflow-y-auto px-6 py-8 md:px-8 lg:px-14 lg:py-10">
      <motion.p
        variants={fadeUpVariants}
        className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellowishWhite lg:text-sm"
      >
        {t(`${card.tKey}.timeRange`)}
      </motion.p>
      <motion.h3
        variants={fadeUpVariants}
        className="mb-2 text-3xl font-bold text-yellowishWhite md:text-4xl lg:text-5xl"
      >
        {card.company}
      </motion.h3>
      <motion.p
        variants={fadeUpVariants}
        className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lightGray lg:text-base"
      >
        {t(card.roleKey)}
      </motion.p>
      <motion.p
        variants={fadeUpVariants}
        className="max-w-xl text-sm text-yellowishWhite sm:text-base"
      >
        {t(`${card.tKey}.description`)}
      </motion.p>
    </div>
  );
};

const TechStack = ({ card }: CardProp) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.experience",
  });

  return (
    <div className="custom-scrollbar flex h-full flex-col items-start justify-center overflow-y-auto px-5 py-6 md:px-8 md:py-8 lg:px-14 lg:py-12">
      <div className="w-full">
        <motion.p
          variants={fadeUpVariants}
          className="mb-3 font-semibold uppercase tracking-[0.2em] text-lightGray"
        >
          {t("techStack")}
        </motion.p>

        <div className="flex flex-wrap gap-2">
          {card.tech.map((tech, index) => (
            <TechnologyCard
              key={tech}
              index={index}
              title={tech}
              variant="project"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ExperienceCardItemProps extends CardProp {
  index: number;
}

const ExperienceCardItem = ({ card, index }: ExperienceCardItemProps) => {
  return (
    <div
      className="sticky top-[100px] z-[var(--index)] lg:top-[120px]"
      style={{ "--index": index } as React.CSSProperties}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={cardVariants}
        style={{ backgroundColor: card.bg }}
        className="flex h-[540px] flex-col overflow-hidden rounded-lg bg-dark md:h-[600px] md:flex-row"
      >
        <div className="h-full w-full md:w-[55%] lg:w-1/2">
          <CardContent card={card} />
        </div>
        <div className="hidden h-full w-full border-t border-white/5 md:flex md:w-[45%] md:border-l md:border-t-0 lg:w-1/2">
          <TechStack card={card} />
        </div>
      </motion.div>
    </div>
  );
};

export const ExperienceSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.experience",
  });
  const { ref } = useSectionInView(SectionName.Experience);

  return (
    <section ref={ref} className="relative py-8 md:py-16" id="experience">
      <div className="mx-auto mb-8 max-w-7xl px-5 pt-28 md:mb-12 md:px-10 md:pt-52">
        <SectionHeader index="03" title={t("title")} />
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="relative flex flex-col gap-6 md:gap-8">
          {experienceCards.map((card, index) => (
            <ExperienceCardItem key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
