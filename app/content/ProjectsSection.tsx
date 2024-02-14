"use client";
import imageP1 from "../../public/img/machinesManager.png";
import imageP2 from "../../public/img/easyBank.png";
import imageMobileP1 from "../../public/img/machinesManagerMobile.png";
import imageMobileP2 from "../../public/img/easyBankMobile.png";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { useSectionInView } from "../hooks/useSectionInView";
import {
  machinesManagerTech,
  easyBankTech,
  easyBankDesc,
  machinesManagerDesc,
} from "../utils/data";
import ProjectPresentation from "../components/ProjectPresentation";

const ProjectsSection = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <>
      <Container>
        <div
          id="projects"
          ref={ref}
          className="flex scroll-mt-6 flex-col pt-52"
        >
          <SectionHeader index="04" title="Projects" />
          <ul className="hidden flex-col gap-12 pt-3 md:flex lg:gap-24 xl:gap-32">
            <ProjectPresentation
              img={imageP1}
              alt="MachinesManager site image"
              githubUrl="https://github.com/jakubgornik/portfolio"
              siteUrl="https://machines-manager.vercel.app/"
              technologies={machinesManagerTech}
              description={machinesManagerDesc}
            />
            <ProjectPresentation
              img={imageP2}
              alt="Easybank site image"
              githubUrl="https://github.com/jakubgornik/banking-site"
              siteUrl="https://banking-site-henna.vercel.app/"
              technologies={easyBankTech}
              description={easyBankDesc}
            />
          </ul>
          <ul className="flex flex-col gap-24 pt-3 md:hidden">
            <ProjectPresentation
              img={imageMobileP1}
              alt="MachinesManager site image"
              githubUrl="https://github.com/jakubgornik/portfolio"
              siteUrl="https://machines-manager.vercel.app/"
              technologies={machinesManagerTech}
              description={machinesManagerDesc}
            />
            <ProjectPresentation
              img={imageMobileP2}
              alt="Easybank site image"
              githubUrl="https://github.com/jakubgornik/banking-site"
              siteUrl="https://banking-site-henna.vercel.app/"
              technologies={easyBankTech}
              description={easyBankDesc}
            />
          </ul>
        </div>
      </Container>
    </>
  );
};

export default ProjectsSection;
