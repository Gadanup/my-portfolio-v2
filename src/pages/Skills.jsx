"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import SkillsHero from "../components/skills/SkillsHero";
import TechnicalSkills from "../components/skills/TechnicalSkills";
import ProfessionalSkills from "../components/skills/ProfessionalSkills";
import ValueProposition from "../components/skills/ValueProposition";

const SkillsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box
        sx={{
          p: isMobile ? 2 : 4,
          maxWidth: "1400px",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <SkillsHero />
        </motion.div>

        {/* Technical Skills - Full Width */}
        <motion.div variants={itemVariants}>
          <TechnicalSkills />
        </motion.div>

        {/* Professional Skills - Full Width */}
        <motion.div variants={itemVariants}>
          <ProfessionalSkills />
        </motion.div>

        {/* Value Proposition Summary */}
        <motion.div variants={itemVariants}>
          <ValueProposition />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default SkillsSection;
