import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full px-[2rem] sm:px-[3.5rem] md:px-[5rem] lg:px-[6rem]">
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </div>
  );
};

export default Container;
