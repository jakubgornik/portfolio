import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]">
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </div>
  );
};

export default Container;
