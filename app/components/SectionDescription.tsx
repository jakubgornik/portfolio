import { ReactNode } from "react";

const SectionDescription = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mobile-lg:text-[16px] mobile-lg:max-w-[22rem] max-w-[18rem] text-[12px] text-yellowishWhite sm:max-w-[24rem] sm:text-[18px] md:max-w-[32rem] lg:max-w-[38rem] lg:text-[20px]">
      {children}
    </p>
  );
};

export default SectionDescription;
