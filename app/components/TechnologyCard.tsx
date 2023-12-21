"use client";
import { motion } from "framer-motion";
import { staggeredAnimationVariant } from "../utils/animationVariants";

const TechnologyCard = ({ title, index }: { title: string; index: number }) => {
  return (
    <motion.div
      variants={staggeredAnimationVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="rounded-[5px] bg-purple px-2 py-2 shadow-lg"
    >
      <span className="text-[12px] text-yellowishWhite mobile-lg:text-[16px] sm:text-[18px]">
        {title}
      </span>
    </motion.div>
  );
};

export default TechnologyCard;
