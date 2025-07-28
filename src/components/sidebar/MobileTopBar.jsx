// components/sidebar/MobileTopBar.jsx

"use client";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import CJLogo from "./CJLogo";
import { personalInfo, socialLinks } from "../../data/navigationData";

const MobileTopBar = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          background: theme.palette.background.sidebar,
          borderRadius: 0,
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              border: "3px solid #4a90e2",
              background: `
                radial-gradient(circle at 25% 25%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(216, 27, 96, 0.15) 0%, transparent 50%),
                linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)
              `,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                transform: "scale(1.05)",
                animation: "glowPulseMobile 1.5s ease-in-out infinite",
              },
              "@keyframes glowPulseMobile": {
                "0%, 100%": {
                  boxShadow: "0 4px 16px rgba(74, 144, 226, 0.3)",
                },
                "50%": {
                  boxShadow: `
                    0 4px 20px rgba(74, 144, 226, 0.6), 
                    0 0 15px rgba(216, 27, 96, 0.4)
                  `,
                },
              },
            }}
          >
            <CJLogo size={30} mobile />
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {personalInfo.name}
            </Typography>
            <Chip
              label={personalInfo.title}
              size="small"
              sx={{
                background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                color: "white",
                fontSize: "0.75rem",
              }}
            />
          </Box>

          {/* Social Links */}
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "rgba(74, 144, 226, 0.1)",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default MobileTopBar;
