// components/about/HeroSection.jsx

"use client";
import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import TypingAnimation from "./TypingAnimation";
import CVDownloadMenu from "./CVDownloadMenu";
import DeveloperStatusCard from "./DeveloperStatusCard";
import { heroContent } from "../../data/aboutData";

const HeroSection = ({ onSectionChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleConnectClick = () => {
    // Smooth scroll to top first (optional)
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navigate to contact section
    onSectionChange("contact");
  };

  return (
    <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
      <Grid size={{ xs: 12, lg: 7 }}>
        <Box sx={{ py: isMobile ? 2 : 4 }}>
          <Typography
            variant={isMobile ? "h3" : "h1"}
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            {heroContent.greeting}
          </Typography>

          <Typography
            variant={isMobile ? "h6" : "h4"}
            sx={{
              color: "text.primary",
              mb: 3,
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            {heroContent.subtitle}
          </Typography>

          <TypingAnimation />

          {/* Fixed: Mobile buttons on same line */}
          <Box
            sx={{
              display: "flex",
              gap: isMobile ? 1.5 : 2,
              flexWrap: isMobile ? "nowrap" : "wrap",
              flexDirection: isMobile ? "row" : "row",
              alignItems: "stretch",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              size={isMobile ? "medium" : "large"}
              startIcon={<ConnectWithoutContactIcon />}
              onClick={handleConnectClick}
              sx={{
                background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                px: isMobile ? 2 : 3,
                py: isMobile ? 1.2 : 1.5,
                fontSize: isMobile ? "0.9rem" : "1rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
                minWidth: isMobile ? "auto" : "160px",
                flex: isMobile ? 1 : "none",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(74, 144, 226, 0.4)",
                },
              }}
            >
              {isMobile ? "Connect" : "Let's Connect"}
            </Button>

            <Box sx={{ flex: isMobile ? 1 : "none" }}>
              <CVDownloadMenu isMobile={isMobile} />
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <DeveloperStatusCard />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
