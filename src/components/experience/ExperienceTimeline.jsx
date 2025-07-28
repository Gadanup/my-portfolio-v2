// components/resume/ExperienceTimeline.jsx

"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experience } from "../../data/resumeData";

const ExperienceTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {experience.map((job, index) => (
        <motion.div
          key={job.id}
          variants={itemVariants}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ExperienceCard
            job={job}
            isMobile={isMobile}
            isLast={index === experience.length - 1}
          />
        </motion.div>
      ))}
    </>
  );
};

export default ExperienceTimeline;
