"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SectionNames } from "../utils/data";
import { useTranslation } from "react-i18next";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLenis } from "lenis/react";

export const NavigationItem = ({
  navigationElement,
  variant,
  index,
  closeMobileMenu,
}: {
  navigationElement: { name: SectionNames; id: string; tKey: string };
  variant: string;
  index?: number;
  closeMobileMenu?: () => void;
}) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.navigation",
  });
  const lenis = useLenis();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(navigationElement.id);
    }
    setActiveSection(navigationElement.name);
    setTimeOfLastClick(Date.now());

    if (closeMobileMenu) closeMobileMenu();
  };

  return (
    <>
      {variant === "desktop" ? (
        <motion.li className="relative cursor-pointer">
          <Link
            href={navigationElement.id}
            onClick={handleScrollToSection}
            className={`${
              activeSection === navigationElement.name
                ? "text-dark"
                : "text-yellowishWhite "
            } px-2 py-4 lg:px-4 `}
          >
            {t(`links.${navigationElement.tKey}`)}
            {navigationElement.name === activeSection && (
              <motion.span
                className="absolute inset-0 -bottom-2 -top-2 -z-10 rounded-[5px] bg-lightGray lg:-bottom-3 lg:-top-3"
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
        <li className="w-[120px] px-3 text-yellowishWhite hover:text-lightGray">
          <Link href={navigationElement.id} onClick={handleScrollToSection}>
            <span className="pr-1 text-lightGray duration-300 ">{index}.</span>
            {t(`links.${navigationElement.tKey}`)}
          </Link>
        </li>
      )}
    </>
  );
};
