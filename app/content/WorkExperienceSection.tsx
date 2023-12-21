"use client";
import JobsMenu from "./ui/JobsMenu";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { useSectionInView } from "../hooks/useSectionInView";
import JobDescription from "../components/JobDescription";
import { useState } from "react";
import { jobs } from "../utils/data";

const WorkExperienceSection = () => {
  const { ref } = useSectionInView("Experience");
  const [activeJob, setActiveJob] = useState("Euvic");
  return (
    <>
      <Container>
        <div
          id="experience"
          ref={ref}
          className="flex scroll-mt-6 flex-col pt-52"
        >
          <div className="flex flex-col gap-3">
            <SectionHeader index="04" title="Experience" />
            <div className="flex flex-col gap-12 md:flex-row">
              <JobsMenu liftActiveJob={setActiveJob} />
              {activeJob === "Euvic" ? (
                <JobDescription
                  company={jobs[0].company}
                  jobDescription={jobs[0].jobDescription}
                  ocupation={jobs[0].ocupation}
                  timeRange={jobs[0].timeRange}
                />
              ) : activeJob === "Webo" ? (
                <JobDescription
                  company={jobs[1].company}
                  jobDescription={jobs[1].jobDescription}
                  ocupation={jobs[1].ocupation}
                  timeRange={jobs[1].timeRange}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WorkExperienceSection;
