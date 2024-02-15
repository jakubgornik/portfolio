"use client";

import NavigationItem from "../components/NavigationItem";
import ButtonResume from "./ui/ButtonResume";
import { navigationLinks } from "@/app/utils/data";
import HamburgerMenu from "./ui/HamburgerMenu";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [animation, setAnimation] = useState("closed");

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

  useEffect(() => {
    handleScrollLock();
    //  to do:
    // add aside menu | animate
  }, [isMobileMenuActive]);

  return (
    <>
      {/* desktop */}
      <nav className="fixed z-[999] mt-8 hidden w-full items-center justify-center font-semibold sm:flex">
        <ul className="flex h-12 items-center justify-around rounded-xl bg-purple/60 px-2 text-[14px] shadow-lg backdrop-blur-lg lg:h-16">
          {navigationLinks.map((el) => (
            <NavigationItem key={el.id} navigationElement={el} />
          ))}
        </ul>
        <ButtonResume />
      </nav>

      {/* mobile */}
      <nav className="fixed z-[50] flex w-full items-center justify-between border-b border-b-purple px-[2rem] shadow-lg backdrop-blur-lg sm:hidden sm:px-[2rem] md:px-[3rem] lg:px-[4rem]">
        <span className="cursor-pointer py-5 text-[28px] font-bold text-yellowishWhite duration-300 hover:text-lightPink">
          Portfolio.
        </span>
        <div onClick={mobileViewHandler} className="cursor-pointer">
          <HamburgerMenu animation={animation} />
        </div>
      </nav>
      {isMobileMenuActive && (
        <div
          id="overlay"
          onClick={mobileViewHandler}
          className="fixed top-20 z-[100] h-full w-full bg-purple/80 backdrop-blur-sm"
        />
      )}
    </>
  );
};

export default Navigation;
