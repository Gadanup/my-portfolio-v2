// components/sidebar/ProfileSection.jsx

"use client";
import { Box, Typography, Avatar, Chip } from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CJLogo from "./CJLogo";
import { personalInfo, contactInfo } from "../../data/navigationData";

const ProfileSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ p: 3, textAlign: "center" }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Avatar
            sx={{
              width: 120,
              height: 120,
              mx: "auto",
              mb: 2,
              border: "4px solid #4a90e2",
              background: `
                radial-gradient(circle at 25% 25%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(216, 27, 96, 0.15) 0%, transparent 50%),
                linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)
              `,
              boxShadow: "0 8px 32px rgba(74, 144, 226, 0.3)",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              zIndex: 2,
              "&:hover": {
                transform: "scale(1.05)",
                animation: "glowPulse 1.5s ease-in-out infinite",
              },
              "@keyframes glowPulse": {
                "0%, 100%": {
                  boxShadow: "0 8px 32px rgba(74, 144, 226, 0.3)",
                },
                "50%": {
                  boxShadow: `
                    0 8px 40px rgba(74, 144, 226, 0.6), 
                    0 0 30px rgba(216, 27, 96, 0.4),
                    0 0 50px rgba(74, 144, 226, 0.2)
                  `,
                },
              },
            }}
          >
            <CJLogo />
          </Avatar>
        </motion.div>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 1,
            background:
              "linear-gradient(135deg, #ffffff 0%, #e3f2fd 50%, #b0b0b0 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.125rem" },
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
            textAlign: "center",
            position: "relative",
            filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
          }}
        >
          {personalInfo.name}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Chip
            label={personalInfo.title}
            sx={{
              background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
              color: "white",
              fontWeight: 600,
              fontSize: "0.875rem",
              py: 1,
              px: 3,
              borderRadius: 3,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 15px rgba(74, 144, 226, 0.2)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(74, 144, 226, 0.4)",
                background: "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
              },
              "& .MuiChip-label": {
                px: 0,
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.025em",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            p: 2,
            borderRadius: 3,
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(74, 144, 226, 0.1)",
              borderColor: "rgba(74, 144, 226, 0.2)",
              transform: "translateY(-1px)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
              boxShadow: "0 2px 8px rgba(74, 144, 226, 0.3)",
            }}
          >
            <LocationOnIcon sx={{ fontSize: 14, color: "white" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              fontWeight: 500,
              fontSize: "0.875rem",
              letterSpacing: "0.015em",
            }}
          >
            {contactInfo.location}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProfileSection;
