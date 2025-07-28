// components/about/CVDownloadMenu.jsx

"use client";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Chip,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { cvOptions } from "../../data/aboutData";

const CVDownloadMenu = ({ isMobile = false }) => {
  const [cvMenuAnchor, setCvMenuAnchor] = useState(null);
  const [downloadAlert, setDownloadAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCvMenuOpen = (event) => {
    setCvMenuAnchor(event.currentTarget);
  };

  const handleCvMenuClose = () => {
    setCvMenuAnchor(null);
  };

  const handleCvDownload = async (cvOption) => {
    setIsDownloading(true);
    handleCvMenuClose();

    try {
      // First, check if file exists
      const response = await fetch(`/cv/${cvOption.filename}`, {
        method: "HEAD",
      });

      if (!response.ok) {
        throw new Error("CV file not found");
      }

      // Create download link
      const link = document.createElement("a");
      link.href = `/cv/${cvOption.filename}`;
      link.download = cvOption.filename;
      link.target = "_blank";

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message
      setDownloadAlert({
        open: true,
        message: `CV (${cvOption.language}) downloaded successfully!`,
        severity: "success",
      });

      // Track download (optional - for analytics)
      if (typeof gtag !== "undefined") {
        gtag("event", "download", {
          event_category: "CV",
          event_label: cvOption.language,
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

  const handleQuickDownload = () => {
    const defaultCV =
      cvOptions.find((cv) => cv.language === "EN") || cvOptions[0];
    handleCvDownload(defaultCV);
  };

  const handleAlertClose = () => {
    setDownloadAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      {/* Fixed: Mobile responsive button layout */}
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          height: isMobile ? "48px" : "auto",
        }}
      >
        <Button
          variant="outlined"
          size={isMobile ? "medium" : "large"}
          startIcon={
            isDownloading ? (
              <FileDownloadIcon className="animate-pulse" />
            ) : (
              <DownloadIcon />
            )
          }
          onClick={handleQuickDownload}
          disabled={isDownloading}
          sx={{
            borderColor: "primary.main",
            color: "primary.main",
            px: isMobile ? 1.5 : 3,
            py: isMobile ? 1.2 : 1.5,
            fontSize: isMobile ? "0.85rem" : "1rem",
            fontWeight: 600,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: "none",
            flex: 1,
            minWidth: 0,
            "&:hover": {
              borderColor: "primary.light",
              backgroundColor: "rgba(74, 144, 226, 0.1)",
            },
          }}
        >
          {isDownloading
            ? isMobile
              ? "..."
              : "Downloading..."
            : isMobile
            ? "CV"
            : "Download CV"}
        </Button>

        <Button
          variant="outlined"
          size={isMobile ? "medium" : "large"}
          onClick={handleCvMenuOpen}
          disabled={isDownloading}
          sx={{
            borderColor: "primary.main",
            color: "primary.main",
            minWidth: isMobile ? "48px" : "auto",
            px: isMobile ? 0.5 : 1,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderLeft: "1px solid rgba(74, 144, 226, 0.3)",
            "&:hover": {
              borderColor: "primary.light",
              backgroundColor: "rgba(74, 144, 226, 0.1)",
            },
          }}
        >
          <ArrowDropDownIcon />
        </Button>
      </Box>

      {/* CV Download Menu */}
      <Menu
        anchorEl={cvMenuAnchor}
        open={Boolean(cvMenuAnchor)}
        onClose={handleCvMenuClose}
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 3,
            mt: 1,
          },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            px: 2,
            py: 1,
            display: "block",
            color: "text.secondary",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          Choose CV Language
        </Typography>
        {cvOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => handleCvDownload(option)}
            disabled={isDownloading}
            sx={{
              py: 1.5,
              px: 2,
              "&:hover": {
                backgroundColor: "rgba(74, 144, 226, 0.1)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "primary.main" }}>
              {option.icon}
            </ListItemIcon>
            <ListItemText
              primary={option.label}
              secondary={
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    mt: 0.5,
                  }}
                >
                  <Chip
                    label={option.language}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: "0.7rem",
                      backgroundColor: "primary.main",
                      color: "white",
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {option.size}
                  </Typography>
                </Box>
              }
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: 500,
                },
              }}
            />
          </MenuItem>
        ))}
      </Menu>

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

export default CVDownloadMenu;
