// components/projects/ProjectModal.jsx - Mobile Optimized

"use client";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Chip,
  IconButton,
  useMediaQuery,
  useTheme,
  Slide,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, forwardRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TimerIcon from "@mui/icons-material/Timer";
import CodeIcon from "@mui/icons-material/Code";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Mobile slide transition
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectModal = ({
  project,
  isOpen,
  onClose,
  currentImageIndex,
  onNextImage,
  onPrevImage,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [localImageIndex, setLocalImageIndex] = useState(currentImageIndex);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  // Auto-carousel functionality
  useEffect(() => {
    if (!isOpen || !project || project.images.length <= 1 || !isAutoPlaying) {
      return;
    }

    const interval = setInterval(() => {
      setLocalImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % project.images.length;
        onNextImage();
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, project, isAutoPlaying, onNextImage]);

  // Sync local state with parent state
  useEffect(() => {
    setLocalImageIndex(currentImageIndex);
  }, [currentImageIndex]);

  // Handle manual navigation
  const handlePrevious = () => {
    setIsAutoPlaying(false);
    onPrevImage();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    onNextImage();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!project) return null;

  // Mobile-specific modal content
  if (isMobile) {
    return (
      <Dialog
        open={isOpen}
        onClose={onClose}
        fullScreen
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          },
        }}
      >
        {/* Mobile Header */}
        <AppBar
          position="sticky"
          sx={{
            background: "rgba(26, 26, 26, 0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                flex: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                mr: 2,
              }}
            >
              {project.title}
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={onClose}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <DialogContent sx={{ p: 0 }}>
          {/* Mobile Image Gallery */}
          <Box
            sx={{ position: "relative", height: "250px", overflow: "hidden" }}
          >
            <motion.div
              key={localImageIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={project.images[localImageIndex]}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  background: "#000",
                }}
              />
            </motion.div>

            {/* Mobile Image Controls */}
            {project.images.length > 1 && (
              <>
                <IconButton
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    size: "small",
                    "&:disabled": {
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      color: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                  onClick={handlePrevious}
                  disabled={localImageIndex === 0}
                  size="small"
                >
                  <ArrowBackIcon fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    "&:disabled": {
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      color: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                  onClick={handleNext}
                  disabled={localImageIndex === project.images.length - 1}
                  size="small"
                >
                  <ArrowForwardIcon fontSize="small" />
                </IconButton>

                {/* Image indicators */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  {project.images.map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor:
                          index === localImageIndex
                            ? "white"
                            : "rgba(255, 255, 255, 0.4)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </Box>
              </>
            )}

            {/* Status chips overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                right: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <Chip
                  label={project.status}
                  size="small"
                  sx={{
                    background:
                      project.status === "Live" ? "#4caf50" : "#ff9800",
                    color: "white",
                    fontWeight: 500,
                    fontSize: "0.7rem",
                  }}
                />
                <Chip
                  label={project.category}
                  size="small"
                  sx={{
                    background: project.color,
                    color: "white",
                    fontWeight: 500,
                    fontSize: "0.7rem",
                  }}
                />
              </Box>
              {project.featured && (
                <Chip
                  label="Featured"
                  size="small"
                  sx={{
                    background: "#4caf50",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.7rem",
                  }}
                />
              )}
            </Box>
          </Box>

          {/* Mobile Content */}
          <Box sx={{ p: 2 }}>
            {/* Project Description */}
            <Card sx={{ mb: 2, background: "rgba(255, 255, 255, 0.05)" }}>
              <CardContent sx={{ p: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: showFullDescription ? "none" : 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.longDescription}
                </Typography>
                <Button
                  size="small"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  sx={{ mt: 1, p: 0, fontSize: "0.75rem" }}
                >
                  {showFullDescription ? "Show Less" : "Read More"}
                </Button>
              </CardContent>
            </Card>

            {/* Expandable Sections */}

            {/* Key Features */}
            <Card sx={{ mb: 2, background: "rgba(255, 255, 255, 0.05)" }}>
              <CardContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                  onClick={() => toggleSection("features")}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    ✨ Key Features
                  </Typography>
                  <IconButton size="small">
                    {expandedSection === "features" ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </IconButton>
                </Box>

                {expandedSection === "features" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {project.highlights.map((highlight, index) => (
                        <Chip
                          key={index}
                          label={highlight}
                          size="small"
                          sx={{
                            background: `${project.color}20`,
                            color: project.color,
                            border: `1px solid ${project.color}40`,
                            fontSize: "0.7rem",
                          }}
                        />
                      ))}
                    </Box>
                  </motion.div>
                )}
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card sx={{ mb: 2, background: "rgba(255, 255, 255, 0.05)" }}>
              <CardContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                  onClick={() => toggleSection("tech")}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    🛠️ Technologies
                  </Typography>
                  <IconButton size="small">
                    {expandedSection === "tech" ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </IconButton>
                </Box>

                {expandedSection === "tech" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {project.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          sx={{
                            background: `${project.color}20`,
                            color: project.color,
                            border: `1px solid ${project.color}40`,
                            fontSize: "0.7rem",
                          }}
                        />
                      ))}
                    </Box>
                  </motion.div>
                )}
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card sx={{ mb: 2, background: "rgba(255, 255, 255, 0.05)" }}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  📋 Project Info
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarTodayIcon
                      sx={{ fontSize: 16, color: "text.secondary" }}
                    />
                    <Typography variant="body2">
                      Completed: {project.completedDate}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <TimerIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                    <Typography variant="body2">
                      Duration: {project.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CodeIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                    <Typography variant="body2">
                      Status: {project.status}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Technical Challenge */}
            <Card sx={{ mb: 3, background: "rgba(255, 255, 255, 0.05)" }}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  🎯 Challenge
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontStyle: "italic" }}
                >
                  "{project.challenges}"
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </DialogContent>

        {/* Mobile Action Buttons - Fixed Bottom */}
        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            p: 2,
            background: "rgba(26, 26, 26, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            gap: 1,
          }}
        >
          {project.liveUrl && (
            <Button
              variant="contained"
              startIcon={<LaunchIcon />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              sx={{
                background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              View Live
            </Button>
          )}
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
              borderColor: "text.secondary",
              color: "text.secondary",
              py: 1.5,
              fontWeight: 600,
              "&:hover": {
                borderColor: project.color,
                color: project.color,
              },
            }}
          >
            View Code
          </Button>
        </Box>
      </Dialog>
    );
  }

  // Desktop modal (unchanged)
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contentVariants = {
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
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 4,
              m: 2,
            },
          }}
          sx={{
            "& .MuiBackdrop-root": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(8px)",
            },
          }}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <DialogTitle sx={{ p: 3, pb: 0 }}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 600,
                        background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}80 100%)`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          background: project.color,
                          color: "white",
                          fontWeight: 500,
                        }}
                      />
                      <Chip
                        label={project.status}
                        size="small"
                        sx={{
                          background:
                            project.status === "Live" ? "#4caf50" : "#ff9800",
                          color: "white",
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  </Box>
                  <IconButton
                    onClick={onClose}
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </motion.div>
            </DialogTitle>

            <DialogContent sx={{ p: 3, mt: 1 }}>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, md: 8 }}>
                    {/* Image Gallery */}
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          position: "relative",
                          mb: 3,
                          overflow: "hidden",
                          borderRadius: 3,
                        }}
                      >
                        <motion.div
                          key={localImageIndex}
                          initial={{ x: "100%", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: "-100%", opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            opacity: { duration: 0.2 },
                          }}
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "400px",
                          }}
                        >
                          <img
                            src={project.images[localImageIndex]}
                            alt={project.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "12px",
                            }}
                          />
                        </motion.div>

                        {project.images.length > 1 && (
                          <>
                            {/* Navigation arrows */}
                            <IconButton
                              sx={{
                                position: "absolute",
                                left: 8,
                                top: "50%",
                                transform: "translateY(-50%)",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "white",
                                "&:hover": {
                                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                                },
                                "&:disabled": {
                                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                                  color: "rgba(255, 255, 255, 0.3)",
                                },
                              }}
                              onClick={handlePrevious}
                              disabled={localImageIndex === 0}
                            >
                              <ArrowBackIcon />
                            </IconButton>
                            <IconButton
                              sx={{
                                position: "absolute",
                                right: 8,
                                top: "50%",
                                transform: "translateY(-50%)",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "white",
                                "&:hover": {
                                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                                },
                                "&:disabled": {
                                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                                  color: "rgba(255, 255, 255, 0.3)",
                                },
                              }}
                              onClick={handleNext}
                              disabled={
                                localImageIndex === project.images.length - 1
                              }
                            >
                              <ArrowForwardIcon />
                            </IconButton>

                            {/* Auto-play control */}
                            <IconButton
                              sx={{
                                position: "absolute",
                                bottom: 16,
                                right: 16,
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "white",
                                "&:hover": {
                                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                                },
                              }}
                              onClick={toggleAutoPlay}
                            >
                              {isAutoPlaying ? (
                                <PauseIcon />
                              ) : (
                                <PlayArrowIcon />
                              )}
                            </IconButton>

                            {/* Image indicators */}
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 16,
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: "flex",
                                gap: 1,
                              }}
                            >
                              {project.images.map((_, index) => (
                                <Box
                                  key={index}
                                  sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    backgroundColor:
                                      index === localImageIndex
                                        ? "white"
                                        : "rgba(255, 255, 255, 0.4)",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    setLocalImageIndex(index);
                                    setIsAutoPlaying(false);
                                    setTimeout(
                                      () => setIsAutoPlaying(true),
                                      10000
                                    );
                                  }}
                                />
                              ))}
                            </Box>

                            {/* Progress bar for auto-play */}
                            {isAutoPlaying && (
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  height: 3,
                                  background: "rgba(255, 255, 255, 0.2)",
                                  borderRadius: "12px 12px 0 0",
                                }}
                              >
                                <motion.div
                                  style={{
                                    height: "100%",
                                    background: project.color,
                                    borderRadius: "12px 12px 0 0",
                                  }}
                                  initial={{ width: "0%" }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: 4, ease: "linear" }}
                                  key={localImageIndex}
                                />
                              </Box>
                            )}
                          </>
                        )}
                      </Box>
                    </motion.div>

                    {/* Project Description */}
                    <motion.div variants={itemVariants}>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.7,
                          mb: 3,
                          fontSize: "1.1rem",
                        }}
                      >
                        {project.longDescription}
                      </Typography>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div variants={itemVariants}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        ✨ Key Features
                      </Typography>
                      <Grid container spacing={1} sx={{ mb: 3 }}>
                        {project.highlights.map((highlight, index) => (
                          <Grid size="auto" key={index}>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              <Chip
                                label={highlight}
                                sx={{
                                  background: `${project.color}20`,
                                  color: project.color,
                                  border: `1px solid ${project.color}40`,
                                  fontWeight: 500,
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                    background: `${project.color}30`,
                                    transform: "translateY(-2px)",
                                  },
                                }}
                              />
                            </motion.div>
                          </Grid>
                        ))}
                      </Grid>
                    </motion.div>

                    {/* Challenges */}
                    <motion.div variants={itemVariants}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        🎯 Technical Challenges
                      </Typography>
                      <Box
                        sx={{
                          p: 3,
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: 3,
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderLeft: `4px solid ${project.color}`,
                        }}
                      >
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.6,
                            fontStyle: "italic",
                          }}
                        >
                          "{project.challenges}"
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    {/* Project Info */}
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          mb: 3,
                          p: 3,
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: 3,
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ mb: 2, fontWeight: 600 }}
                        >
                          📋 Project Details
                        </Typography>

                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 2 }}
                        >
                          <CalendarTodayIcon
                            sx={{ mr: 1, color: "text.secondary" }}
                          />
                          <Typography variant="body2">
                            Completed: {project.completedDate}
                          </Typography>
                        </Box>

                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 2 }}
                        >
                          <TimerIcon sx={{ mr: 1, color: "text.secondary" }} />
                          <Typography variant="body2">
                            Duration: {project.duration}
                          </Typography>
                        </Box>

                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 3 }}
                        >
                          <CodeIcon sx={{ mr: 1, color: "text.secondary" }} />
                          <Typography variant="body2">
                            Status: {project.status}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          mb: 3,
                          p: 3,
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: 3,
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ mb: 2, fontWeight: 600 }}
                        >
                          🛠️ Technologies Used
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {project.technologies.map((tech, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                            >
                              <Chip
                                label={tech}
                                sx={{
                                  background: `${project.color}20`,
                                  color: project.color,
                                  border: `1px solid ${project.color}40`,
                                  fontWeight: 500,
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                    background: `${project.color}30`,
                                    transform: "translateY(-2px)",
                                  },
                                }}
                              />
                            </motion.div>
                          ))}
                        </Box>
                      </Box>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        {project.liveUrl && (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant="contained"
                              startIcon={<LaunchIcon />}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              fullWidth
                              sx={{
                                background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
                                py: 1.5,
                                fontSize: "1rem",
                                fontWeight: 600,
                                "&:hover": {
                                  background: `linear-gradient(135deg, ${project.color}dd 0%, ${project.color} 100%)`,
                                  transform: "translateY(-2px)",
                                  boxShadow: `0 8px 25px ${project.color}40`,
                                },
                                transition: "all 0.3s ease",
                              }}
                            >
                              View Live Demo
                            </Button>
                          </motion.div>
                        )}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            fullWidth
                            sx={{
                              borderColor: "text.secondary",
                              color: "text.secondary",
                              py: 1.5,
                              fontSize: "1rem",
                              fontWeight: 600,
                              "&:hover": {
                                borderColor: project.color,
                                color: project.color,
                                background: `${project.color}10`,
                                transform: "translateY(-2px)",
                              },
                              transition: "all 0.3s ease",
                            }}
                          >
                            View Source Code
                          </Button>
                        </motion.div>
                      </Box>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          mt: 3,
                          p: 2,
                          background: `${project.color}10`,
                          borderRadius: 2,
                          border: `1px solid ${project.color}40`,
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: project.color, fontWeight: 500 }}
                        >
                          💡 Interested in similar projects? Let's connect!
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
