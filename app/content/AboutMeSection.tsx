"use client";

import SectionHeader from "../components/SectionHeader";
import SectionDescription from "../components/SectionDescription";
import Container from "../components/Container";
import { useSectionInView } from "../hooks/useSectionInView";

const AboutMeSection = () => {
  const { ref } = useSectionInView("About");

  return (
    <Container>
      <div
        id="about"
        ref={ref}
        className="flex scroll-mt-6 flex-col gap-3 pt-52 mobile-lg:pt-0"
      >
        <SectionHeader index="01" title="Who am I" />
        <SectionDescription>
          Based in Poland self-taught developer,{" "}
          <span className="text-lightPink">
            with nearly 2 years experience,{" "}
          </span>
          developing modern and useful applications. That`s how i would briefly
          describe myself.
        </SectionDescription>
        <SectionDescription>
          My journey with creating web applications started at the university
          where i have found passion for developing websites and since then I am
          constantly making progress in my frontend career. I have a deep
          understanding of{" "}
          <span className="text-lightPink">React, Next.js </span>and{" "}
          <span className="text-lightPink">Typescript. </span>I have actively
          worked on numerous projects, both personal and professional and
          participated in a hackathon.
        </SectionDescription>
      </div>
    </Container>
  );
};

export default AboutMeSection;
