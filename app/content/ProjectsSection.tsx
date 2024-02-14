"use client";
import imageP1 from "../../public/img/machinesManager.png";
import imageP2 from "../../public/img/easyBank.png";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { useSectionInView } from "../hooks/useSectionInView";
import { MachinesManagerTech, EasyBankTech } from "../utils/data";
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
          <ul className="flex flex-col gap-24 pt-3">
            <ProjectPresentation
              img={imageP1}
              alt="MachinesManager site image"
              githubUrl="https://github.com/jakubgornik/portfolio"
              siteUrl="https://machines-manager.vercel.app/"
              technologies={MachinesManagerTech}
              description={
                <div className="flex flex-col rounded-[3px] bg-purple p-3 xl:p-6">
                  <span className="text-[22px] text-lightPink xl:text-[26px]">
                    Machines Manager
                  </span>
                  <span className="text-[18px] text-yellowishWhite xl:text-[22px]">
                    Web application for machines management
                  </span>
                  <div className="mt-1 text-[14px] text-yellowishWhite xl:text-[16px]">
                    This web application provides many functionalities that aims
                    to improve the processes of managing machines and
                    scheduling. Application allows to add, delete and modify
                    machines, set statuses and monitor them thanks to
                    implemented table. Moreover registered user can use based on
                    statuses calcualted statistics
                  </div>
                </div>
              }
            />
            <ProjectPresentation
              img={imageP2}
              alt="Easybank site image"
              githubUrl="https://github.com/jakubgornik/banking-site"
              siteUrl="https://banking-site-henna.vercel.app/"
              technologies={EasyBankTech}
              description={
                <div className="flex flex-col rounded-[3px] bg-purple p-3 xl:p-6">
                  <span className="text-[22px] text-lightPink xl:text-[26px]">
                    EasyBank
                  </span>
                  <span className="text-[18px] text-yellowishWhite xl:text-[22px]">
                    Modern single page application
                  </span>
                  <div className="mt-1 text-[14px] text-yellowishWhite xl:text-[16px]">
                    EasyBank is a website built and designed from scratch, that
                    is fully responsive, user friendly and has many eye-catching
                    animations that makes browsing through application as smooth
                    as possible
                  </div>
                </div>
              }
            />
          </ul>
        </div>
      </Container>
    </>
  );
};

export default ProjectsSection;
