"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SectionNames } from "../utils/data";
import { useActiveSectionContext } from "../context/ActiveContextSection";

const NavigationItem = ({
  navigationElement,
  variant,
  index,
  closeMobileMenu,
}: {
  navigationElement: { name: SectionNames; id: string };
  variant: string;
  index?: number;
  closeMobileMenu?: () => void;
}) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <>
      {variant === "desktop" ? (
        <motion.li
          onClick={() => {
            setActiveSection(navigationElement.name);
            setTimeOfLastClick(Date.now());
          }}
          className="relative cursor-pointer"
        >
          <Link
            href={navigationElement.id}
            className={`${
              activeSection === navigationElement.name
                ? "text-purple"
                : "text-yellowishWhite "
            } px-2 py-4 lg:px-4 `}
          >
            {navigationElement.name}

            {navigationElement.name === activeSection && (
              <motion.span
                className="absolute inset-0 -bottom-2 -top-2 -z-10 rounded-[5px] bg-lightPink lg:-bottom-3 lg:-top-3"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 40,
                }}
              />
            )}
          </Link>
        </motion.li>
      ) : (
        <li
          onClick={() => closeMobileMenu && closeMobileMenu()}
          className="w-[120px] px-3 text-yellowishWhite hover:text-lightPink"
        >
          <Link href={navigationElement.id}>
            <span className="pr-1 text-lightPink duration-300 ">{index}.</span>
            {navigationElement.name}
          </Link>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
