// Updated Sidebar.jsx with Glow Pulse CJ Logo

"use client";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Tooltip,
  Chip,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const navigationItems = [
  { text: "About", icon: <PersonIcon />, id: "about" },
  { text: "Resume", icon: <ArticleIcon />, id: "resume" },
  { text: "Projects", icon: <FolderIcon />, id: "projects" },
  { text: "Blog", icon: <WorkIcon />, id: "blog" },
  { text: "Contact", icon: <ContactMailIcon />, id: "contact" },
];

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/claudiojesus00/",
  },
  { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com/Gadanup" },
  {
    icon: <EmailIcon />,
    label: "Email",
    href: "mailto:claudio_jesus2000@hotmail.com",
  },
];

// CJ Logo Component with Glow Pulse Animation
const CJLogo = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 64 64"
    style={{ pointerEvents: "none" }}
  >
    <defs>
      <linearGradient id="cjGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#4a90e2" }} />
        <stop offset="50%" style={{ stopColor: "#73b6f1" }} />
        <stop offset="100%" style={{ stopColor: "#d81b60" }} />
      </linearGradient>
    </defs>
    <text
      x="32"
      y="40"
      textAnchor="middle"
      fontFamily="Inter, Arial, sans-serif"
      fontSize="24"
      fontWeight="800"
      fill="url(#cjGradient)"
    >
      CJ
    </text>
  </svg>
);

export default function Sidebar({ activeSection, onSectionChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleNavigation = (sectionId) => {
    onSectionChange(sectionId);
  };

  // Desktop Sidebar Content
  const DesktopSidebarContent = () => (
    <Box
      sx={{
        height: "100%",
        background: theme.palette.background.sidebar,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(50%, -50%)",
        }}
      />

      {/* Profile Section with Glow Pulse Logo */}
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
                // Glow Pulse Animation Styles
                "&:hover": {
                  transform: "scale(1.05)",
                  animation: "glowPulse 1.5s ease-in-out infinite",
                },
                // Define the glow pulse keyframes
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
              // Fallback to PersonIcon if no logo image
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
              // Subtle text shadow for depth
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
            }}
          >
            Cláudio Jesus
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Chip
              label="Frontend Developer"
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
                  background:
                    "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
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
              Setúbal, Portugal
            </Typography>
          </Box>
        </Box>
      </motion.div>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mx: 2 }} />

      {/* Navigation */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: "text.secondary",
            mb: 2,
            px: 2,
            textTransform: "uppercase",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
          }}
        >
          Navigation
        </Typography>

        <List sx={{ p: 0 }}>
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  selected={activeSection === item.id}
                  onClick={() => handleNavigation(item.id)}
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    px: 2,
                    "&.Mui-selected": {
                      background:
                        "linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(74, 144, 226, 0.1) 100%)",
                      borderLeft: "4px solid",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color:
                        activeSection === item.id
                          ? "primary.main"
                          : "text.secondary",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: activeSection === item.id ? 600 : 400,
                      color:
                        activeSection === item.id
                          ? "primary.main"
                          : "text.primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mx: 2 }} />
      {/* Contact Info */}
      <Box sx={{ p: 2 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: "text.secondary",
            mb: 2,
            px: 2,
            textTransform: "uppercase",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
          }}
        >
          Contact Info
        </Typography>

        <Box sx={{ px: 2, mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 1.5,
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "translateX(4px)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 20,
                height: 20,
                borderRadius: 1,
                background:
                  "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%)",
                border: "1px solid rgba(74, 144, 226, 0.2)",
              }}
            >
              <EmailIcon sx={{ fontSize: 12, color: "primary.main" }} />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "0.8rem",
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              claudio_jesus2000@hotmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "translateX(4px)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 20,
                height: 20,
                borderRadius: 1,
                background:
                  "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%)",
                border: "1px solid rgba(74, 144, 226, 0.2)",
              }}
            >
              <PhoneIcon sx={{ fontSize: 12, color: "primary.main" }} />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "0.8rem",
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              +351 931327999
            </Typography>
          </Box>
        </Box>

        {/* Social Links */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, px: 2 }}>
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Tooltip title={social.label} arrow>
                <IconButton
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%)",
                    border: "1px solid rgba(74, 144, 226, 0.3)",
                    color: "primary.main",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(74, 144, 226, 0.1) 100%)",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          © 2024 Cláudio Jesus
        </Typography>
      </Box>
    </Box>
  );

  // Mobile Top Bar (Profile/Contact Info) - Also with CJ Logo
  const MobileTopBar = () => (
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
            <svg
              width="30"
              height="30"
              viewBox="0 0 64 64"
              style={{ pointerEvents: "none" }}
            >
              <defs>
                <linearGradient
                  id="cjGradientMobile"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#4a90e2" }} />
                  <stop offset="50%" style={{ stopColor: "#73b6f1" }} />
                  <stop offset="100%" style={{ stopColor: "#d81b60" }} />
                </linearGradient>
              </defs>
              <text
                x="32"
                y="40"
                textAnchor="middle"
                fontFamily="Inter, Arial, sans-serif"
                fontSize="24"
                fontWeight="800"
                fill="url(#cjGradientMobile)"
              >
                CJ
              </text>
            </svg>
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              Cláudio Jesus
            </Typography>
            <Chip
              label="Frontend Developer"
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

  // Mobile Bottom Navigation
  const MobileBottomNav = () => (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        background: theme.palette.background.sidebar,
        borderRadius: 0,
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(20px)",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={activeSection}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
        sx={{
          background: "transparent",
          "& .MuiBottomNavigationAction-root": {
            color: "text.secondary",
            "&.Mui-selected": {
              color: "primary.main",
            },
            "& .MuiBottomNavigationAction-label": {
              fontSize: "0.75rem",
              fontWeight: 500,
            },
          },
        }}
      >
        {navigationItems.map((item) => (
          <BottomNavigationAction
            key={item.id}
            label={item.text}
            value={item.id}
            icon={item.icon}
            sx={{
              minWidth: 0,
              px: 1,
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              width: 380,
              position: "fixed",
              top: 16,
              left: 16,
              bottom: 16,
              zIndex: 1100,
            }}
          >
            <DesktopSidebarContent />
          </Box>
        </motion.div>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <>
          <MobileTopBar />
          <MobileBottomNav />
        </>
      )}
    </>
  );
}
