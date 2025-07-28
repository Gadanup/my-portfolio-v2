"use client";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ExperienceHero from "../components/experience/ExperienceHero";
import ExperienceSection from "../components/experience/ExperienceSection";
import EducationSection from "../components/experience/EducationSection";
import CertificationsSection from "../components/experience/CertificationsSection";
import ContactSection from "../components/experience/LanguageSection";

const ExperienceMainSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
          <ExperienceHero />
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Left Column - Experience & Education */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Professional Experience */}
            <motion.div variants={itemVariants}>
              <ExperienceSection />
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <EducationSection />
            </motion.div>
          </Grid>

          {/* Right Column - Certifications & Contact */}
          <Grid size={{ xs: 12, lg: 4 }}>
            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <CertificationsSection />
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <ContactSection />
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .experience-print-area,
          .experience-print-area * {
            visibility: visible;
          }
          .experience-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ExperienceMainSection;
