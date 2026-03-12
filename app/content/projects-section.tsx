"use client";

import { Container } from "@/app/components/container";
import { SectionName, projectsData } from "../utils/data";
import { useSectionInView } from "../hooks/use-section-in-view";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../components/section-header";
import { ProjectPresentation } from "../components/project-presentation";

export const ProjectsSection = () => {
  const { ref } = useSectionInView(SectionName.Projects);
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.projects",
  });

  return (
    <Container>
      <div id="projects" ref={ref} className="scroll-mt-28">
        <div className="flex w-full justify-end pb-8 pt-28 md:pb-12 md:pt-52">
          <SectionHeader index="04" title={t("title")} />
        </div>
        <ul className="flex flex-col gap-24 pt-3 md:gap-12 lg:gap-24 xl:gap-32">
          {projectsData.map((project) => (
            <ProjectPresentation
              key={project.id}
              img={project.img}
              alt={project.alt}
              githubUrl={project.githubUrl}
              siteUrl={project.siteUrl}
              technologies={project.technologies}
              description={[
                t(`${project.tKey}.title`),
                t(`${project.tKey}.subtitle`),
                t(`${project.tKey}.description`),
              ]}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};
