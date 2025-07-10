import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Grid,
  Chip,
  IconButton,
  useMediaQuery,
  useTheme,
  Avatar,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Completely separate AnimatedCounter component - no dependencies on parent
const AnimatedCounter = ({ value }) => {
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || animatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            if (value === "∞") {
              element.textContent = "∞";
              observer.disconnect();
              return;
            }

            const targetValue = parseInt(value.replace("+", ""));
            const hasPlus = value.includes("+");
            let currentValue = 0;
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              currentValue = Math.floor(targetValue * progress);
              element.textContent = hasPlus
                ? `${currentValue}+`
                : currentValue.toString();

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                element.textContent = hasPlus
                  ? `${targetValue}+`
                  : targetValue.toString();
              }
            };

            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]); // Only depend on value

  return <span ref={elementRef}>0</span>;
};

// Completely separate StatsComponent - isolated from parent re-renders
const StatsComponent = () => {
  const stats = [
    { label: "Years Experience", value: "2+", icon: <WorkIcon /> },
    { label: "Technologies", value: "15+", icon: <CodeIcon /> },
    { label: "Projects Built", value: "5+", icon: <TrendingUpIcon /> },
    { label: "Monster Energy Drinks", value: "∞", icon: <FavoriteIcon /> },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div variants={itemVariants}>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 6, lg: 3 }} key={index}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                background:
                  "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%)",
                border: "1px solid rgba(74, 144, 226, 0.2)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box sx={{ color: "primary.main", mb: 1 }}>{stat.icon}</Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 1,
                }}
              >
                <AnimatedCounter value={stat.value} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

// Separate typing animation component
const TypingAnimation = () => {
  const [typingText, setTypingText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const typingWords = [
    "React Enthusiast",
    "JavaScript Lover",
    "UI/UX Focused",
    "Clean Code Advocate",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentWord = typingWords[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(
      () => {
        if (!isDeleting && charIndex <= currentWord.length) {
          setTypingText(currentWord.slice(0, charIndex));
          charIndex++;
        } else if (isDeleting && charIndex >= 0) {
          setTypingText(currentWord.slice(0, charIndex));
          charIndex--;
        }

        if (charIndex === currentWord.length + 1) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }

        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          setCurrentIndex((prev) => (prev + 1) % typingWords.length);
          clearInterval(typeInterval);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <Box sx={{ mb: 4, minHeight: 40 }}>
      <Typography
        variant="h5"
        sx={{
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        {typingText}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: "3px",
            height: "1em",
            backgroundColor: "primary.main",
            ml: 1,
            animation: "blink 1s infinite",
            "@keyframes blink": {
              "0%, 50%": { opacity: 1 },
              "51%, 100%": { opacity: 0 },
            },
          }}
        />
      </Typography>
    </Box>
  );
};

const AboutSection = ({ onSectionChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // CV Download states
  const [cvMenuAnchor, setCvMenuAnchor] = useState(null);
  const [downloadAlert, setDownloadAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [isDownloading, setIsDownloading] = useState(false);

  // CV options - you can customize these based on what versions you have
  const cvOptions = [
    {
      label: "English Version",
      filename: "Claudio_Jesus_CV.pdf",
      language: "EN",
      size: "89 KB",
      icon: <PictureAsPdfIcon />,
    },
    {
      label: "Portuguese Version",
      filename: "Claudio_Jesus_CV_PT.pdf",
      language: "PT",
      size: "91 KB",
      icon: <PictureAsPdfIcon />,
    },
  ];

  // CV Download handlers
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

  // Quick download handler for the main button (downloads English version by default)
  const handleQuickDownload = () => {
    const defaultCV =
      cvOptions.find((cv) => cv.language === "EN") || cvOptions[0];
    handleCvDownload(defaultCV);
  };

  // Handler for the Let's Connect button
  const handleConnectClick = () => {
    // Smooth scroll to top first (optional)
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Navigate to contact section
    onSectionChange("contact");
  };

  // Close alert handler
  const handleAlertClose = () => {
    setDownloadAlert((prev) => ({ ...prev, open: false }));
  };

  // Memoize static data
  const values = useMemo(
    () => [
      {
        title: "Clean Code",
        description:
          "Writing maintainable, readable code that stands the test of time",
        icon: <CodeIcon />,
        color: "#4a90e2",
      },
      {
        title: "User First",
        description:
          "Every decision is made with the end user's experience in mind",
        icon: <FavoriteIcon />,
        color: "#d81b60",
      },
      {
        title: "Performance",
        description: "Building fast, optimized applications that users love",
        icon: <SpeedIcon />,
        color: "#4caf50",
      },
      {
        title: "Team Player",
        description:
          "Collaborating effectively and sharing knowledge with the team",
        icon: <GroupIcon />,
        color: "#ff9800",
      },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Box
        sx={{
          p: isMobile ? 2 : 4,
          maxWidth: "1200px",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box sx={{ py: isMobile ? 2 : 4 }}>
                <Typography
                  variant={isMobile ? "h3" : "h1"}
                  sx={{
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  Hi there! 👋
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
                  I'm a Frontend Developer passionate about creating beautiful,
                  functional web experiences
                </Typography>

                <TypingAnimation />

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<ConnectWithoutContactIcon />}
                    onClick={handleConnectClick}
                    sx={{
                      background:
                        "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                      px: 3,
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: 600,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(74, 144, 226, 0.4)",
                      },
                    }}
                  >
                    Let's Connect
                  </Button>
                  <Box sx={{ display: "flex", alignItems: "stretch" }}>
                    <Button
                      variant="outlined"
                      size="large"
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
                        px: 3,
                        py: 1.5,
                        fontSize: "1rem",
                        fontWeight: 600,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        borderRight: "none",
                        "&:hover": {
                          borderColor: "primary.light",
                          backgroundColor: "rgba(74, 144, 226, 0.1)",
                        },
                      }}
                    >
                      {isDownloading ? "Downloading..." : "Download CV"}
                    </Button>

                    <Button
                      variant="outlined"
                      size="large"
                      onClick={handleCvMenuOpen}
                      disabled={isDownloading}
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        minWidth: "auto",
                        px: 1,
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
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  height: isMobile ? 160 : 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  mt: isMobile ? 2 : 0,
                  px: isMobile ? 1 : 0,
                }}
              >
                {/* Developer Status Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: "100%" }}
                >
                  <Card
                    sx={{
                      background:
                        "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)",
                      border: "1px solid rgba(74, 144, 226, 0.3)",
                      borderRadius: 3,
                      p: isMobile ? 2 : 2.5,
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        borderColor: "#4a90e2",
                        boxShadow: "0 8px 25px rgba(74, 144, 226, 0.3)",
                      },
                    }}
                  >
                    {/* Background Code Animation */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0.05,
                        fontSize: isMobile ? "0.7rem" : "0.8rem",
                        fontFamily: "monospace",
                        color: "#4a90e2",
                        overflow: "hidden",
                        pointerEvents: "none",
                      }}
                    >
                      <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ padding: "10px" }}
                      >
                        const developer = {"{"}
                        <br />
                        {"  "}name: 'Cláudio',
                        <br />
                        {"  "}fuel: '🎵 music',
                        <br />
                        {"  "}mode: 'coding',
                        <br />
                        {"  "}status: 'available'
                        <br />
                        {"}"};
                        <br />
                        <br />
                        while(motivated) {"{"}
                        <br />
                        {"  "}buildAwesomeStuff();
                        <br />
                        {"}"}
                      </motion.div>
                    </Box>

                    {/* Main Content */}
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      {/* Header Row */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: isMobile ? 1.5 : 2,
                        }}
                      >
                        <Typography
                          variant={isMobile ? "h6" : "h5"}
                          sx={{
                            fontWeight: 700,
                            color: "#4a90e2",
                            fontSize: isMobile ? "1rem" : "1.2rem",
                          }}
                        >
                          🎮 Developer.exe
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            px: isMobile ? 1 : 1.5,
                            py: 0.3,
                            borderRadius: 15,
                            background: "rgba(76, 175, 80, 0.15)",
                            border: "1px solid rgba(76, 175, 80, 0.3)",
                          }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Box
                              sx={{
                                width: isMobile ? 6 : 8,
                                height: isMobile ? 6 : 8,
                                borderRadius: "50%",
                                backgroundColor: "#4caf50",
                              }}
                            />
                          </motion.div>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#4caf50",
                              fontWeight: 600,
                              fontSize: isMobile ? "0.65rem" : "0.75rem",
                            }}
                          >
                            ONLINE
                          </Typography>
                        </Box>
                      </Box>

                      {/* Stats Grid */}
                      <Grid container spacing={isMobile ? 1 : 1.5}>
                        <Grid size={4}>
                          <Box
                            sx={{
                              textAlign: "center",
                              p: isMobile ? 1 : 1.5,
                              borderRadius: 2,
                              background: "rgba(74, 144, 226, 0.1)",
                              border: "1px solid rgba(74, 144, 226, 0.2)",
                            }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <Typography
                                variant="h4"
                                sx={{
                                  fontSize: isMobile ? "1.5rem" : "2rem",
                                  mb: 0.5,
                                }}
                              >
                                ⚡
                              </Typography>
                            </motion.div>
                            <Typography
                              variant="caption"
                              sx={{
                                fontWeight: 600,
                                color: "#4a90e2",
                                fontSize: isMobile ? "0.65rem" : "0.75rem",
                                display: "block",
                              }}
                            >
                              Energy
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#4a90e2",
                                fontWeight: 700,
                                fontSize: isMobile ? "1rem" : "1.2rem",
                              }}
                            >
                              MAX
                            </Typography>
                          </Box>
                        </Grid>

                        <Grid size={4}>
                          <Box
                            sx={{
                              textAlign: "center",
                              p: isMobile ? 1 : 1.5,
                              borderRadius: 2,
                              background: "rgba(216, 27, 96, 0.1)",
                              border: "1px solid rgba(216, 27, 96, 0.2)",
                            }}
                          >
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <Typography
                                variant="h4"
                                sx={{
                                  fontSize: isMobile ? "1.5rem" : "2rem",
                                  mb: 0.5,
                                }}
                              >
                                🎵
                              </Typography>
                            </motion.div>
                            <Typography
                              variant="caption"
                              sx={{
                                fontWeight: 600,
                                color: "#d81b60",
                                fontSize: isMobile ? "0.65rem" : "0.75rem",
                                display: "block",
                              }}
                            >
                              Music
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#d81b60",
                                fontWeight: 700,
                                fontSize: isMobile ? "1rem" : "1.2rem",
                              }}
                            >
                              ON
                            </Typography>
                          </Box>
                        </Grid>

                        <Grid size={4}>
                          <Box
                            sx={{
                              textAlign: "center",
                              p: isMobile ? 1 : 1.5,
                              borderRadius: 2,
                              background: "rgba(76, 175, 80, 0.1)",
                              border: "1px solid rgba(76, 175, 80, 0.2)",
                            }}
                          >
                            <motion.div
                              animate={{ y: [0, -3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <Typography
                                variant="h4"
                                sx={{
                                  fontSize: isMobile ? "1.5rem" : "2rem",
                                  mb: 0.5,
                                }}
                              >
                                🚀
                              </Typography>
                            </motion.div>
                            <Typography
                              variant="caption"
                              sx={{
                                fontWeight: 600,
                                color: "#4caf50",
                                fontSize: isMobile ? "0.65rem" : "0.75rem",
                                display: "block",
                              }}
                            >
                              Focus
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#4caf50",
                                fontWeight: 700,
                                fontSize: isMobile ? "1rem" : "1.2rem",
                              }}
                            >
                              100%
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      {/* Bottom Status */}
                      <Box
                        sx={{
                          mt: isMobile ? 1.5 : 2,
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            fontStyle: "italic",
                            fontSize: isMobile ? "0.65rem" : "0.75rem",
                          }}
                        >
                          Coding to the rhythm • Ready to build 💻
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
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

        {/* Stats Section - Completely Isolated */}
        <StatsComponent />

        {/* My Journey - Full Width */}
        <motion.div variants={itemVariants}>
          <Card sx={{ mb: 6, p: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 4,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <SchoolIcon sx={{ color: "primary.main" }} />
              My Journey & Philosophy
            </Typography>

            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 600, color: "primary.main" }}
                  >
                    How It All Started
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                    Ever since I was young, I've been a total tech head –
                    gaming, gadgets, understanding how technology works. Just
                    before university, I discovered HTML and CSS while
                    customizing gaming forums, and what started as simple
                    curiosity quickly became an obsession with building things.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                    After starting my career with SAP UI5 and Fiori, I began
                    learning React.js in my spare time as a hobby. Those
                    late-night coding sessions and weekend projects proved
                    invaluable when my workplace modernized their tech stack –
                    suddenly, my "hobby" became my superpower at work, and I
                    knew I'd found my true calling.
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 600, color: "primary.main" }}
                  >
                    My Development Philosophy
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                            p: 2,
                            borderRadius: 2,
                            background: "rgba(74, 144, 226, 0.05)",
                            border: "1px solid rgba(74, 144, 226, 0.1)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background: "rgba(74, 144, 226, 0.1)",
                              borderColor: "rgba(74, 144, 226, 0.3)",
                            },
                          }}
                        >
                          <Box sx={{ color: value.color, mt: 0.5 }}>
                            {value.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 600, mb: 0.5 }}
                            >
                              {value.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {value.description}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

            <Typography
              variant="body1"
              sx={{ textAlign: "center", lineHeight: 1.7, fontStyle: "italic" }}
            >
              When I'm not coding, you'll find me gaming, discovering new music,
              or staying up-to-date with the latest tech trends. I believe the
              best developers are those who stay curious, keep learning, and
              never lose that excitement for building something awesome.
            </Typography>
          </Card>
        </motion.div>

        {/* Personality & Interests Combined */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Work Style & Personality */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Card sx={{ height: "100%", p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <GroupIcon sx={{ color: "primary.main" }} />
                  Work Style & Personality
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    {
                      title: "Collaborative Team Player",
                      description:
                        "I thrive in team environments and believe the best solutions come from diverse perspectives working together.",
                      icon: "🤝",
                      color: "#4a90e2",
                    },
                    {
                      title: "Detail-Oriented & Quality-Focused",
                      description:
                        "I pay attention to the small things that make a big difference in user experience and code quality.",
                      icon: "🔍",
                      color: "#4caf50",
                    },
                    {
                      title: "Continuous Learner",
                      description:
                        "Technology evolves fast, and I'm always excited to learn new tools and improve my craft.",
                      icon: "📚",
                      color: "#ff9800",
                    },
                    {
                      title: "Creative Problem Solver",
                      description:
                        "I enjoy breaking down complex challenges into manageable pieces and finding elegant solutions.",
                      icon: "🧩",
                      color: "#9c27b0",
                    },
                  ].map((trait, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                          p: 2,
                          borderRadius: 2,
                          background: `${trait.color}08`,
                          border: `1px solid ${trait.color}20`,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: `${trait.color}15`,
                            borderColor: `${trait.color}40`,
                          },
                        }}
                      >
                        <Typography variant="h5" sx={{ mt: 0.5 }}>
                          {trait.icon}
                        </Typography>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 0.5,
                              color: trait.color,
                            }}
                          >
                            {trait.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.5 }}
                          >
                            {trait.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Card>
            </Grid>

            {/* Hobbies & Interests */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Card sx={{ height: "100%", p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <FavoriteIcon sx={{ color: "primary.main" }} />
                  Hobbies & Interests
                </Typography>

                <Grid container spacing={2}>
                  {[
                    {
                      name: "Gaming",
                      icon: "🎮",
                      description: "Exploring new worlds and stories",
                      detail: "Action & adventure games",
                    },
                    {
                      name: "Music",
                      icon: "🎶",
                      description: "Listening to various genres",
                      detail: "Hip-hop, rock & pop",
                    },
                    {
                      name: "Movies & Shows",
                      icon: "🎬",
                      description: "Sci-fi, action, and documentaries",
                      detail: "Love exploring different stories",
                    },
                    {
                      name: "Sports",
                      icon: "⚽",
                      description: "Football and basketball enthusiast",
                      detail: "Playing and watching matches",
                    },
                    {
                      name: "Technology",
                      icon: "💻",
                      description: "Latest tech trends",
                      detail: "AI, crypto, and emerging tools",
                    },
                    {
                      name: "Side Projects",
                      icon: "🚀",
                      description: "Building cool stuff",
                      detail: "Personal projects and experiments",
                    },
                  ].map((hobby, index) => (
                    <Grid size={{ xs: 6, sm: 4, lg: 6 }} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card
                          sx={{
                            background:
                              "linear-gradient(135deg, rgba(216, 27, 96, 0.05) 0%, rgba(216, 27, 96, 0.02) 100%)",
                            border: "1px solid rgba(216, 27, 96, 0.1)",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                            perspective: "1000px",
                            "&:hover": {
                              borderColor: "#d81b60",
                              transform: "translateY(-4px)",
                              boxShadow: "0 12px 30px rgba(216, 27, 96, 0.2)",
                              "& .hobby-icon": {
                                transform: "scale(1.2) rotate(10deg)",
                              },
                            },
                          }}
                        >
                          <CardContent sx={{ p: 2.5, textAlign: "center" }}>
                            <Typography
                              variant="h4"
                              sx={{
                                mb: 1.5,
                                transition: "all 0.3s ease",
                              }}
                              className="hobby-icon"
                            >
                              {hobby.icon}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 600,
                                mb: 0.5,
                                color: "#d81b60",
                              }}
                            >
                              {hobby.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              sx={{
                                lineHeight: 1.4,
                                display: "block",
                                mb: 0.5,
                              }}
                            >
                              {hobby.description}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                fontSize: "0.65rem",
                                color: "text.disabled",
                                fontStyle: "italic",
                              }}
                            >
                              {hobby.detail}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default AboutSection;
