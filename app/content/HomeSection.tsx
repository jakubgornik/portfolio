import Container from "../components/Container";
import SectionDescription from "../components/SectionDescription";

const HomeSection = () => {
  return (
    <Container>
      <div className="mobile-lg:h-screen mobile-lg:pt-0 flex items-center pt-36">
        <div className="flex flex-col">
          <p className="first-letter mobile-lg:text-lg text-sm text-lightPink sm:text-xl lg:text-2xl">
            Hello there, my name is
          </p>
          <h3 className="mobile-lg:text-[52px] text-[38px] font-bold leading-none text-yellowishWhite sm:text-[64px] md:text-[90px] lg:text-[120px]">
            Jakub Górnik
          </h3>
          <h3 className="mobile-lg:text-[32px] text-[24px] font-bold text-lightGray sm:text-[34px] md:text-[52px] lg:text-[60px]">
            Frontend developer
          </h3>
          <SectionDescription>
            I am a passionate{" "}
            <span className="text-lightPink">software developer</span> who is
            not afraid of new challenges, with a passion for creating ( and
            occasionally designing ) intuitive and eye-catching modern{" "}
            <span className="text-lightPink">web applications.</span>
          </SectionDescription>
        </div>
      </div>
    </Container>
  );
};

export default HomeSection;
