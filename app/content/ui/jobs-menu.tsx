"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const JobsMenu = ({
  liftActiveJob,
}: {
  liftActiveJob: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const jobs = ["Euvic", "Webo"];
  const [activeJob, setActiveJob] = useState("Euvic");
  const handleSetActiveJob = (jobItem: string) => {
    setActiveJob(jobItem);
    liftActiveJob(jobItem);
  };

  return (
    <div className="flex flex-row self-center md:flex-col md:self-start">
      {jobs.map((jobItem) => (
        <button
          type="button"
          key={jobItem}
          onClick={() => handleSetActiveJob(jobItem)}
          className={`hover:bg-dark relative px-6 py-2 text-[12px] duration-300 mobile-lg:text-[16px] sm:text-[18px] md:px-8 ${
            activeJob === jobItem
              ? "bg-dark text-lightGray"
              : "text-yellowishWhite"
          }`}
        >
          {jobItem}
          {jobItem === activeJob && (
            <motion.span
              className="absolute inset-0 z-10 border-b-2 border-l-0 border-lightGray md:border-b-0 md:border-l-2 "
              layoutId="activeJob"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
