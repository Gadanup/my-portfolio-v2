// components/Sidebar.jsx

"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import DesktopSidebar from "../components/sidebar/DesktopSidebar";
import MobileTopBar from "../components/sidebar/MobileTopBar";
import MobileBottomNav from "../components/sidebar/MobileBottomNav";

export default function Sidebar({ activeSection, onSectionChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

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
            <DesktopSidebar
              activeSection={activeSection}
              onSectionChange={onSectionChange}
            />
          </Box>
        </motion.div>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <>
          <MobileTopBar />
          <MobileBottomNav
            activeSection={activeSection}
            onSectionChange={onSectionChange}
          />
        </>
      )}
    </>
  );
}
