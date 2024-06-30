"use client";
import JobsMenu from "./ui/JobsMenu";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { useSectionInView } from "../hooks/useSectionInView";
import JobDescription from "../components/JobDescription";
import { useState } from "react";
import { jobs } from "../utils/data";
import { motion } from "framer-motion";
import useIsWindowWidthLowerThan from "../hooks/useIsWindowWidthLowerThan";

const WorkExperienceSection = () => {
  const { ref } = useSectionInView("Experience");
  const [activeJob, setActiveJob] = useState("Euvic");
  const isWindowWidthLower = useIsWindowWidthLowerThan(520);
  return (
    <>
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            x: isWindowWidthLower ? 0 : 20,
            y: isWindowWidthLower ? 20 : 0,
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="experience"
          ref={ref}
          className="flex scroll-mt-6 flex-col items-end pt-52"
        >
          <div className="flex flex-col gap-6 md:gap-3">
            <SectionHeader index="05" title="Experience" />
            <div className="flex flex-col gap-12 md:flex-row">
              <JobsMenu liftActiveJob={setActiveJob} />
              {activeJob === "Euvic" ? (
                <JobDescription
                  hasSecondJobPeriod={true}
                  secondJobPeriod={jobs[0].secondJobPeriod}
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
        </motion.div>
      </Container>
    </>
  );
};

export default WorkExperienceSection;
