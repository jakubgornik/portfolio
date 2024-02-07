import { ReactNode } from "react";

const SectionDescription = ({ children }: { children: ReactNode }) => {
  return (
    <p className="max-w-[20rem] text-[12px] text-yellowishWhite mobile-lg:max-w-[28rem] mobile-lg:text-[16px] sm:max-w-[24rem] sm:text-[18px] md:max-w-[26rem] lg:max-w-[36rem]">
      {children}
    </p>
  );
};

export default SectionDescription;
