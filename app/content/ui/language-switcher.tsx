"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const isPolish = i18n.language.startsWith("pl");
  const currentLangLabel = isPolish ? "PL" : "ENG";
  const nextLangCode = isPolish ? "en" : "pl";
  const nextLangLabel = isPolish ? "ENG" : "PL";

  return (
    <div ref={dropdownRef} className="relative z-50 sm:fixed sm:left-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-darkerDark flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg bg-yellowishWhite px-10 py-2 text-[12px] font-semibold shadow-lg duration-300 hover:bg-lightGray sm:px-3 sm:py-[12px]"
      >
        {currentLangLabel}
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-1 flex w-full flex-col overflow-hidden rounded-lg bg-yellowishWhite shadow-xl">
          <button
            onClick={() => changeLanguage(nextLangCode)}
            className="text-darkerDark px-4 py-3 text-[12px] font-semibold transition-colors hover:bg-lightGray"
          >
            {nextLangLabel}
          </button>
        </div>
      )}
    </div>
  );
};
