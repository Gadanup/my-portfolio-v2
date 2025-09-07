// components/sidebar/DesktopSidebar.jsx

"use client";
import { Box, Divider, useTheme } from "@mui/material";
import ProfileSection from "./ProfileSection";
import NavigationMenu from "./NavigationMenu";
import ContactInfo from "./ContactInfo";
import FooterSection from "./FooterSection";

const DesktopSidebar = ({ activeSection, onSectionChange }) => {
  const theme = useTheme();

  return (
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

      {/* Profile Section */}
      <ProfileSection />

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mx: 2 }} />

      {/* Scrollable Content Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1, // This makes it take remaining space
          position: "relative",
          zIndex: 1,
          // Enable smooth scrolling with invisible scrollbar
          overflowY: "auto",
          overflowX: "hidden",
          // Hide scrollbar completely
          "&::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
          // Firefox - hide scrollbar
          scrollbarWidth: "none",
          // Internet Explorer/Edge - hide scrollbar
          msOverflowStyle: "none",
        }}
      >
        {/* Navigation */}
        <NavigationMenu
          activeSection={activeSection}
          onSectionChange={onSectionChange}
        />

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mx: 2 }} />

        {/* Contact Info */}
        <ContactInfo />

        {/* Spacer to push footer to bottom */}
        <Box sx={{ height: 20 }} />

        {/* Footer */}
        <FooterSection />
      </Box>
    </Box>
  );
};

export default DesktopSidebar;
