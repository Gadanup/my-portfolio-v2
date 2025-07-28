"use client";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Button,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { experienceHero } from "../../data/resumeData";
import WorkIcon from "@mui/icons-material/Work";

const ExperienceHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadAlert, setDownloadAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Check if file exists
      const response = await fetch("/cv/Claudio_Jesus_CV.pdf", {
        method: "HEAD",
      });

      if (!response.ok) {
        throw new Error("CV file not found");
      }

      // Create download link
      const link = document.createElement("a");
      link.href = "/cv/Claudio_Jesus_CV.pdf";
      link.download = "Claudio_Jesus_CV.pdf";
      link.target = "_blank";

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message
      setDownloadAlert({
        open: true,
        message: "CV downloaded successfully!",
        severity: "success",
      });

      // Track download (optional - for analytics)
      if (typeof gtag !== "undefined") {
        gtag("event", "download", {
          event_category: "CV",
          event_label: "Experience_Page",
          value: 1,
        });
      }
    } catch (error) {
      console.error("Download error:", error);
      setDownloadAlert({
        open: true,
        message: "Download failed. Please try again or contact me directly.",
        severity: "error",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleAlertClose = () => {
    setDownloadAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
        <Grid size={{ xs: 12, lg: 8 }}>
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
              {experienceHero.title}
            </Typography>

            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                color: "text.primary",
                mb: 3,
                lineHeight: 1.5,
                fontWeight: 400,
              }}
            >
              {experienceHero.subtitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 3,
                lineHeight: 1.6,
              }}
            >
              {experienceHero.description}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
              <Chip
                icon={<StarIcon />}
                label="2+ Years Experience"
                sx={{
                  background:
                    "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
                  color: "white",
                  fontWeight: 500,
                }}
              />
              <Chip
                icon={<TrendingUpIcon />}
                label="Junior Developer"
                variant="outlined"
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                }}
              />
              <Chip
                icon={<EmojiEventsIcon />}
                label="5+ Projects Completed"
                variant="outlined"
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          {/* CV Download Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              sx={{
                p: 3,
                background:
                  "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(216, 27, 96, 0.1) 100%)",
                borderRadius: 4,
                border: "1px solid rgba(74, 144, 226, 0.3)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                  animation: "shimmer 3s infinite",
                },
                "@keyframes shimmer": {
                  "0%": { left: "-100%" },
                  "100%": { left: "100%" },
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Download Resume
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Get the complete PDF version of my professional experience
              </Typography>

              <Button
                variant="contained"
                startIcon={
                  isDownloading ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : (
                    <DownloadIcon />
                  )
                }
                onClick={handleDownload}
                disabled={isDownloading}
                size="large"
                sx={{
                  background:
                    "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(74, 144, 226, 0.4)",
                  },
                  "&:disabled": {
                    background: "rgba(74, 144, 226, 0.5)",
                    transform: "none",
                    boxShadow: "none",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {isDownloading ? "Downloading..." : "Download CV"}
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 2, display: "block" }}
              >
                {experienceHero.lastUpdated}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {/* Download Success/Error Alert */}
      <Snackbar
        open={downloadAlert.open}
        autoHideDuration={4000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity={downloadAlert.severity}
          sx={{
            backgroundColor:
              downloadAlert.severity === "success"
                ? "rgba(76, 175, 80, 0.9)"
                : "rgba(244, 67, 54, 0.9)",
            color: "white",
            "& .MuiAlert-icon": {
              color: "white",
            },
          }}
        >
          {downloadAlert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ExperienceHero;
