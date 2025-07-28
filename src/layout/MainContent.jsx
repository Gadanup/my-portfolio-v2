"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "../pages/About"; // Import your About component
import ContactSection from "../pages/Contact"; // Import your Contact component
import ProjectsSection from "../pages/Projects"; // Import your Projects component
import ExperienceMainSection from "@/pages/Experience";
import SkillsSection from "../pages/Skills"; // Import your Blog component

export default function MainContent({ activeSection, onSectionChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Function to render the appropriate section
  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection onSectionChange={onSectionChange} />;
      case "experience":
        return <ExperienceMainSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection onSectionChange={onSectionChange} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          ml: isMobile ? 0 : "404px", // 380px sidebar + 24px gap
          mr: isMobile ? 0 : 2,
          mt: isMobile ? "102px" : 2, // Account for mobile top bar
          mb: isMobile ? "72px" : 2, // Account for mobile bottom nav
          height: isMobile ? "calc(100vh - 174px)" : "calc(100vh - 32px)",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          borderRadius: isMobile ? 0 : 4,
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          overflow: "hidden", // Prevent any overflow
          position: "relative",
          width: isMobile ? "100%" : "calc(100vw - 428px)", // Ensure proper width calculation
          maxWidth: isMobile ? "100%" : "calc(100vw - 428px)",
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none", // Prevent interference with content
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "150px",
            height: "150px",
            background:
              "radial-gradient(circle, rgba(216, 27, 96, 0.05) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Content Area with AnimatePresence for smooth transitions */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            overflowY: "auto", // Allow vertical scrolling for content
            overflowX: "hidden", // Prevent horizontal scrolling
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                overflowX: "hidden",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </motion.div>
  );
}
