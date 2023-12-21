import React from "react";

const SectionHeader = ({ index, title }: { index: string; title: string }) => {
  return (
    <div className="flex gap-2 text-[22px] sm:text-[32px]">
      <span className="text-lightPink ">{index}.</span>
      <h3 className="text-yellowishWhite">{title}</h3>
      <div className="relative self-end">
        <div className="absolute bottom-3 h-[1px] w-[30px] bg-lightGray mobile-lg:w-[60px] sm:w-[80px] md:w-[100px]"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
