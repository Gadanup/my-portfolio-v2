"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import MobileExperienceCard from "./MobileExperienceCard";
import { experience } from "../../data/resumeData";

const MobileExperienceList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Box sx={{ position: "relative" }}>
        {/* Experience Counter */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
            p: 2,
            background:
              "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(216, 27, 96, 0.1) 100%)",
            borderRadius: 2,
            border: "1px solid rgba(74, 144, 226, 0.2)",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Professional Journey
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {experience.length} positions
          </Typography>
        </Box>

        {/* Experience Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {experience.map((job, index) => (
            <motion.div key={job.id} variants={itemVariants}>
              <MobileExperienceCard
                job={job}
                index={index}
                isLast={index === experience.length - 1}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default MobileExperienceList;
