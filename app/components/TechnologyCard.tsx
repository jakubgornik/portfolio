"use client";
import { motion } from "framer-motion";
import { staggeredAnimationVariant } from "../utils/animationVariants";

const TechnologyCard = ({
  title,
  index,
  variant,
}: {
  title: string;
  index: number;
  variant: string;
}) => {
  return (
    <motion.li
      variants={staggeredAnimationVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="list-none rounded-[3px] bg-purple px-2 py-2 shadow-lg"
    >
      <span
        className={`${
          variant === "project"
            ? "text-[14px] xl:text-[16px]"
            : "text-[12px] mobile-lg:text-[16px] xl:text-[18px]"
        } text-yellowishWhite`}
      >
        {title}
      </span>
    </motion.li>
  );
};

export default TechnologyCard;
