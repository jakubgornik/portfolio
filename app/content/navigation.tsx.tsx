"use client";

import { navigationLinks } from "@/app/utils/data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GithubIcon from "../components/svg/GithubIcon";
import LinkedinIcon from "../components/svg/LinkedinIcon";
import { LanguageSwitcher } from "./ui/language-switcher";
import { ButtonResume } from "./ui/resume-button";
import { HamburgerMenu } from "./ui/hamburger-menu";
import { useTranslation } from "react-i18next";
import { NavigationItem } from "../components/navigation-item";

export const Navigation = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [animation, setAnimation] = useState("closed");
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.navigation",
  });

  const mobileViewHandler = () => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 300);

    setIsMobileMenuActive((prev) => !prev);
  };

  const handleScrollLock = () => {
    isMobileMenuActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  const handleResize = () => {
    if (window.innerWidth > 640) {
      document.body.style.overflow = "auto";
    } else {
      handleScrollLock();
    }
  };

  useEffect(() => {
    handleScrollLock();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuActive]);

  return (
    <>
      <nav className="fixed z-[999] mt-8 hidden w-full items-center justify-center font-semibold sm:flex">
        <LanguageSwitcher />
        <ul className="bg-dark/60 flex h-12 items-center justify-around rounded-xl px-2 text-[14px] shadow-lg backdrop-blur-lg lg:h-16">
          {navigationLinks.map((el) => (
            <NavigationItem
              variant="desktop"
              key={el.id}
              navigationElement={el}
            />
          ))}
        </ul>
        <ButtonResume />
      </nav>
      <nav className="border-b-dark bg-lighterdark fixed z-[999] flex w-full items-center justify-between border-b px-[2rem] py-5 shadow-lg backdrop-blur-lg sm:hidden sm:px-[2rem] md:px-[3rem] lg:px-[4rem]">
        <span className="cursor-pointer text-[28px] font-bold text-yellowishWhite duration-300 hover:text-yellowishWhite/50">
          {t("logo")}
        </span>
        <div onClick={mobileViewHandler} className="cursor-pointer">
          <HamburgerMenu animation={animation} />
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuActive && (
          <motion.div
            key="aide-menu"
            id="aside-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className="border-l-dark bg-lighterdark fixed right-0 top-0 z-[100] h-screen w-[55%] border-l shadow-lg backdrop-blur-lg sm:hidden"
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-12">
              <ul className="flex max-h-[250px] flex-col gap-4 overflow-y-auto">
                {navigationLinks.map((el, index) => (
                  <NavigationItem
                    variant="mobile"
                    key={el.id}
                    navigationElement={el}
                    index={index + 1}
                    closeMobileMenu={() => {
                      setIsMobileMenuActive((prev) => !prev);
                    }}
                  />
                ))}
              </ul>
              <div className="flex flex-col items-center gap-8">
                <ButtonResume />
                <LanguageSwitcher />
                <div className="flex items-center gap-4">
                  <GithubIcon />
                  <LinkedinIcon />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isMobileMenuActive && (
        <motion.div
          key="overlay"
          id="overlay"
          onClick={mobileViewHandler}
          className="bg-dark/80 fixed left-0 top-0 z-[99] h-screen w-screen cursor-pointer backdrop-blur-sm sm:hidden"
        />
      )}
    </>
  );
};
