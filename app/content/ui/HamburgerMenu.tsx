"use client";

import { motion } from "framer-motion";

const path1 = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path2 = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

const HamburgerMenu = ({ animation }: { animation: string }) => {
  return (
    <button id="hamburger-menu" aria-label="hamburger-menu">
      <svg width="30" height="30" viewBox="0 0 24 24">
        <motion.path
          className="stroke-yellowishWhite"
          animate={animation}
          variants={path1}
        />
        <motion.path
          className="stroke-yellowishWhite"
          animate={animation}
          variants={path2}
        />
      </svg>
    </button>
  );
};
export default HamburgerMenu;
