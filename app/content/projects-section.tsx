"use client";

import { Container } from "@/app/components/container";
import { SectionName, projectsData } from "../utils/data";
import { useSectionInView } from "../hooks/use-section-in-view";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../components/section-header";
import { ProjectPresentation } from "../components/project-presentation";
import { motion } from "framer-motion";
import { useProjectScroll } from "../hooks/use-project-scroll";

export const ProjectsSection = () => {
  const { ref } = useSectionInView(SectionName.Projects);
  const scroll = useProjectScroll(projectsData.length);
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.projects",
  });

  return (
    <Container>
      <motion.div
        id="projects"
        ref={scroll.sectionRef}
        className="projects-section relative scroll-mt-28"
        style={{ height: scroll.height }}
      >
        <div ref={ref} className="projects-sticky">
          <div className="projects-heading flex w-full justify-end pb-8 pt-28 md:pb-12 md:pt-52">
            <SectionHeader index="04" title={t("title")} />
          </div>
          <div className="projects-viewport">
            <motion.ul
              ref={scroll.trackRef}
              style={{ x: scroll.x }}
              className="projects-track flex flex-col gap-24 pt-3 md:gap-12 lg:gap-24 xl:gap-32"
              onFocusCapture={scroll.handleProjectFocus}
            >
              {projectsData.map((project, index) => (
                <ProjectPresentation
                  key={project.id}
                  index={index}
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
            </motion.ul>
          </div>
          <div className="projects-controls hidden items-center gap-6 pb-8 pt-6 text-lightGray">
            <div
              aria-hidden="true"
              className="h-px flex-1 overflow-hidden bg-lightGray/20"
            >
              <motion.div
                className="h-full origin-left bg-lightGray"
                style={{ scaleX: scroll.progress }}
              />
            </div>
            <div className="flex gap-2">
              {projectsData.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  aria-label={t("viewProject", {
                    project: t(`${project.tKey}.title`),
                  })}
                  aria-current={
                    scroll.activeProject === index ? "step" : undefined
                  }
                  onClick={() => scroll.scrollToProject(index)}
                  className={`rounded-full border px-4 py-2 text-sm tabular-nums transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lightGray ${
                    scroll.activeProject === index
                      ? "border-lightGray bg-lightGray text-dark"
                      : "border-lightGray/20 hover:border-lightGray hover:text-yellowishWhite"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};
