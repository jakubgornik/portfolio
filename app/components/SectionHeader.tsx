import React from "react";

const SectionHeader = ({ index, title }: { index: string; title: string }) => {
  return (
    <div className="flex gap-2 text-[22px] sm:text-[32px]">
      <span className="text-lightPink ">{index}.</span>
      <h3 className="text-yellowishWhite">{title}</h3>
      <div className="relative self-end">
        <div className="mobile-lg:w-[80px] absolute bottom-3 h-[1px] w-[30px] bg-lightGray sm:w-[140px] md:w-[200px]"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
