import Container from "../components/Container";

const HomeSection = () => {
  return (
    <Container>
      <div className="flex h-screen items-center">
        <div className="flex flex-col">
          <p className="first-letter mobile-lg:text-lg text-sm text-lightPink sm:text-xl lg:text-2xl">
            Hello there, my name is
          </p>
          <h3 className="mobile-lg:text-[52px] text-[40px] font-bold leading-none text-yellowishWhite sm:text-[90px] lg:text-[120px]">
            Jakub Górnik
          </h3>
          <h3 className="mobile-lg:text-[32px] text-[24px] font-bold text-lightGray sm:text-[52px] lg:text-[60px]">
            Frontend developer
          </h3>
          <p className="mobile-lg:text-[16px] mobile-lg:max-w-[22rem] max-w-[18rem] text-[12px] text-yellowishWhite sm:max-w-[38rem] sm:text-[18px] lg:text-[20px]">
            I am a passionate{" "}
            <span className="text-lightPink">software developer</span> who is
            not afraid of new challenges, with a passion for creating ( and
            occasionally designing ) intuitive and eye-catching modern{" "}
            <span className="text-lightPink">web applications.</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default HomeSection;
