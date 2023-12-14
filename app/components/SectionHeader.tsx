import React from "react";

const SectionHeader = ({ index, title }: { index: string; title: string }) => {
  return (
    <div className="relative flex items-center gap-2 text-[22px] sm:text-[32px]">
      <span className="text-lightPink ">{index}.</span>
      <h3 className="text-yellowishWhite">{title}</h3>
      <div className="mobile-lg:w-[80px] absolute bottom-3 left-[8.5rem] h-[1px] w-[30px] bg-lightGray sm:bottom-4 sm:left-48 sm:w-[140px] md:w-[200px]"></div>
    </div>
  );
};

export default SectionHeader;
