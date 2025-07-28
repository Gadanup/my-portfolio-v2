"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import ExperienceTimeline from "./ExperienceTimeline";
import MobileExperienceList from "./MobileExperienceList";

const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 4,
          mt: 1.5,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <WorkIcon sx={{ color: "primary.main" }} />
        Professional Experience
      </Typography>

      {/* Desktop Timeline View */}
      {!isMobile && (
        <Box sx={{ position: "relative" }}>
          {/* Timeline Line */}
          <motion.div
            variants={timelineVariants}
            style={{
              position: "absolute",
              left: "30px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(180deg, #4a90e2 0%, #357abd 100%)",
              transformOrigin: "top",
            }}
          />
          <ExperienceTimeline />
        </Box>
      )}

      {/* Mobile Clean Card View */}
      {isMobile && <MobileExperienceList />}
    </Box>
  );
};

export default ExperienceSection;
