// components/About.jsx

"use client";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import HeroSection from "../components/about/HeroSection";
import StatsSection from "../components/about/StatsSection";
import JourneySection from "../components/about/JourneySection";
import WorkStyleSection from "../components/about/WorkstyleSection";
import HobbiesSection from "../components/about/HobbiesSection";

const AboutSection = ({ onSectionChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

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
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
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
          <HeroSection onSectionChange={onSectionChange} />
        </motion.div>

        {/* Stats Section */}
        <StatsSection />

        {/* Journey Section */}
        <motion.div variants={itemVariants}>
          <JourneySection />
        </motion.div>

        {/* Personality & Interests Combined */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Work Style & Personality */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <WorkStyleSection />
            </Grid>

            {/* Hobbies & Interests */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <HobbiesSection />
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default AboutSection;
