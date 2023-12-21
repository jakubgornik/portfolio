import { ReactNode } from "react";

const SectionDescription = ({ children }: { children: ReactNode }) => {
  return (
    <p className="max-w-[18rem] text-[12px] text-yellowishWhite mobile-lg:max-w-[22rem] mobile-lg:text-[16px] sm:max-w-[24rem] sm:text-[18px] md:max-w-[32rem] lg:max-w-[38rem]">
      {children}
    </p>
  );
};

export default SectionDescription;
