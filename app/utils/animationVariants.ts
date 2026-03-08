export const staggeredAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.015 * index,
      },
    };
  },
};

export const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
