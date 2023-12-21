"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const JobsMenu = ({
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
          className={`relative px-6 py-2 text-[12px] duration-300 hover:bg-purple mobile-lg:text-[16px] sm:text-[18px] md:px-8 ${
            activeJob === jobItem
              ? "bg-purple text-lightPink"
              : "text-yellowishWhite"
          }`}
        >
          {jobItem}

          {jobItem === activeJob && (
            <motion.span
              className="absolute inset-0 z-10 border-b-2 border-l-0 border-lightPink md:border-b-0 md:border-l-2 "
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

export default JobsMenu;
