"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BusinessIcon from "@mui/icons-material/Business";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";

const ResumeSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [showPrintDialog, setShowPrintDialog] = useState(false);

  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadAlert, setDownloadAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Handle PDF download
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
          event_label: "Resume_Page",
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

  // Handle print with better functionality
  const handlePrint = () => {
    setShowPrintDialog(true);
  };

  // Close alert handler
  const handleAlertClose = () => {
    setDownloadAlert((prev) => ({ ...prev, open: false }));
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Professional Experience Data
  const experience = [
    {
      id: 1,
      title: "Frontend Developer (SAPUI5/React)",
      company: "ATOM",
      location: "Dubai, Remote",
      period: "July 2023 - Present",
      type: "Full-time",
      current: true,
      responsibilities: [
        "Built and maintained enterprise-grade frontend apps using SAPUI5 and React.js, serving over +1000 internal users across several departments",
        "Developed modular, reusable components using React.js and SAPUI5 XML views, improving code maintainability.",
        "Collaborated with designers and backend teams to integrate REST APIs and ensure pixel-perfect UI delivery",
        "Led frontend testing and debugging processes, reducing production bugs",
        "Contributed to sprint planning, reviews, and retrospectives in a cross-functional agile team using JIRA",
      ],
      technologies: [
        "React.js",
        "SAPUI5",
        "Javascript (ES6+)",
        "TypeScript",
        "SAP BTP",
        "OData Services",
        "Material UI",
        "Redux",
        "Figma",
        "Monday.com",
        "JIRA",
      ],
      achievements: [
        "Improved code maintainability",
        "Served 1000+ internal users",
        "Led testing processes",
      ],
      companyColor: "#4a90e2",
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "ATOM",
      location: "Dubai, Remote",
      period: "April 2023 - June 2023",
      type: "Internship",
      current: false,
      responsibilities: [
        "Learned and implemented SAPUI5 framework for enterprise application development",
        "Assisted in building React.js components for internal dashboard applications",
        "Gained hands-on experience with SAP BTP and OData service integration",
        "Participated in daily standups and sprint planning meetings",
        "Collaborated with senior developers to understand enterprise development workflows",
      ],
      technologies: [
        "SAPUI5",
        "React.js",
        "JavaScript",
        "SAP BTP",
        "OData Services",
        "HTML5/CSS3",
        "Figma",
        "JIRA",
      ],
      achievements: [
        "Successfully completed 3-month internship",
        "Transitioned to full-time role",
        "Mastered SAPUI5 framework basics",
      ],
      companyColor: "#d81b60",
    },
  ];

  // Education Data
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Information Systems Management",
      institution: "Polytechnic Institute of Setúbal",
      location: "Setúbal, Portugal",
      period: "September 2020 - October 2023",
      grade: "Bachelor's Degree",
      coursework: [
        "Information Systems",
        "Web Development",
        "Database Management",
        "Software Engineering",
      ],
      achievements: ["Completed degree in 3 years"],
    },
  ];

  // Certifications Data
  const certifications = [
    {
      id: 1,
      name: "React - The Complete Guide 2023",
      issuer: "Udemy",
      date: "2023",
      credentialId: "ABC123XYZ",
      verifyUrl: "https://verify.meta.com",
      logo: "⚛️",
    },
    {
      id: 2,
      name: "Complete Modern Web Development with JavaScript",
      issuer: "Udemy",
      date: "2024",
      credentialId: "DEF456UVW",
      verifyUrl: "https://udemy.com/verify",
      logo: "🔥",
    },
  ];

  // Skills Summary Data
  const skillsCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: "Expert", years: "3+" },
        { name: "JavaScript/TypeScript", level: "Advanced", years: "3+" },
        { name: "CSS3/SASS", level: "Advanced", years: "4+" },
        { name: "Next.js", level: "Intermediate", years: "2+" },
      ],
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "Node.js", level: "Intermediate", years: "2+" },
        { name: "Git/GitHub", level: "Advanced", years: "3+" },
        { name: "Docker", level: "Beginner", years: "1+" },
        { name: "AWS", level: "Beginner", years: "1+" },
      ],
    },
    {
      category: "Professional Skills",
      skills: [
        { name: "Team Leadership", level: "Advanced", years: "2+" },
        { name: "Project Management", level: "Intermediate", years: "2+" },
        { name: "Mentoring", level: "Advanced", years: "1+" },
        { name: "Client Communication", level: "Advanced", years: "3+" },
      ],
    },
  ];

  // Languages Data
  const languages = [
    { name: "Portuguese", level: "Native", proficiency: 100 },
    { name: "English", level: "Fluent", proficiency: 90 },
    { name: "Spanish", level: "Intermediate", proficiency: 60 },
    { name: "French", level: "Basic", proficiency: 30 },
  ];

  // Animation variants
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Skill level color mapping
  const getSkillLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "#4caf50";
      case "Advanced":
        return "#4a90e2";
      case "Intermediate":
        return "#ff9800";
      case "Beginner":
        return "#9e9e9e";
      default:
        return "#9e9e9e";
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box
        sx={{
          p: isMobile ? 2 : 4,
          maxWidth: "1400px",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 8 }}>
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
                  My Resume
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
                  Frontend Developer with expertise in both enterprise
                  technologies (SAP UI5/Fiori) and modern JavaScript frameworks
                  (React.js). 2+ years of experience creating efficient,
                  user-centric web applications with emphasis on performance
                  optimization and maintainable code.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
                  <Chip
                    icon={<StarIcon />}
                    label="Available for new opportunities"
                    sx={{
                      background:
                        "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    label="2+ Years Experience"
                    variant="outlined"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  />
                  <Chip
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
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  background:
                    "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(216, 27, 96, 0.1) 100%)",
                  borderRadius: 4,
                  border: "1px solid rgba(74, 144, 226, 0.3)",
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Download Resume
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={
                      isDownloading ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <DownloadIcon />
                      )
                    }
                    onClick={handleDownload}
                    disabled={isDownloading}
                    sx={{
                      background:
                        "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
                      },
                      "&:disabled": {
                        background: "rgba(74, 144, 226, 0.5)",
                      },
                    }}
                  >
                    {isDownloading ? "Downloading..." : "Download PDF"}
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<PrintIcon />}
                    onClick={handlePrint}
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  >
                    Print Resume
                  </Button>
                </Box>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 2, display: "block" }}
                >
                  Last updated: July 2025
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Left Column - Experience & Education */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Professional Experience */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <WorkIcon sx={{ color: "primary.main" }} />
                Professional Experience
              </Typography>

              <Box sx={{ position: "relative" }}>
                {/* Timeline Line */}
                <motion.div
                  variants={timelineVariants}
                  style={{
                    position: "absolute",
                    left: isMobile ? "20px" : "30px",
                    top: 0,
                    bottom: 0,
                    width: "2px",
                    background:
                      "linear-gradient(180deg, #4a90e2 0%, #357abd 100%)",
                    transformOrigin: "top",
                  }}
                />

                {experience.map((job, index) => (
                  <motion.div
                    key={job.id}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        mb: 4,
                        position: "relative",
                      }}
                    >
                      {/* Timeline Dot */}
                      <Box
                        sx={{
                          width: isMobile ? 40 : 60,
                          height: isMobile ? 40 : 60,
                          borderRadius: "50%",
                          background: job.current
                            ? "linear-gradient(135deg, #4caf50 0%, #45a049 100%)"
                            : job.companyColor,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          mr: 3,
                          zIndex: 1,
                          border: "3px solid #1a1a1a",
                        }}
                      >
                        <BusinessIcon
                          sx={{ color: "white", fontSize: isMobile ? 20 : 24 }}
                        />
                      </Box>

                      {/* Job Content */}
                      <Card
                        sx={{
                          flex: 1,
                          background:
                            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: job.companyColor,
                            boxShadow: `0 8px 25px rgba(0, 0, 0, 0.3)`,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                              mb: 2,
                            }}
                          >
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 600, mb: 0.5 }}
                              >
                                {job.title}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  color: job.companyColor,
                                  fontWeight: 500,
                                }}
                              >
                                {job.company}
                              </Typography>
                            </Box>
                            {job.current && (
                              <Chip
                                label="Current"
                                size="small"
                                sx={{
                                  background: "#4caf50",
                                  color: "white",
                                  fontWeight: 500,
                                }}
                              />
                            )}
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              gap: 2,
                              mb: 2,
                              flexWrap: "wrap",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <CalendarTodayIcon
                                sx={{ fontSize: 16, color: "text.secondary" }}
                              />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {job.period}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <LocationOnIcon
                                sx={{ fontSize: 16, color: "text.secondary" }}
                              />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {job.location}
                              </Typography>
                            </Box>
                          </Box>

                          <Typography
                            variant="subtitle2"
                            sx={{ mb: 2, fontWeight: 600 }}
                          >
                            Key Responsibilities:
                          </Typography>
                          <List sx={{ py: 0 }}>
                            {job.responsibilities.map((responsibility, idx) => (
                              <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 20 }}>
                                  <Box
                                    sx={{
                                      width: 6,
                                      height: 6,
                                      borderRadius: "50%",
                                      backgroundColor: job.companyColor,
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={responsibility}
                                  primaryTypographyProps={{
                                    variant: "body2",
                                    sx: { lineHeight: 1.5 },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>

                          <Box sx={{ mt: 2 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ mb: 1, fontWeight: 600 }}
                            >
                              Technologies:
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {job.technologies.map((tech, idx) => (
                                <Chip
                                  key={idx}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    background: `${job.companyColor}20`,
                                    color: job.companyColor,
                                    border: `1px solid ${job.companyColor}40`,
                                    fontSize: "0.75rem",
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>

                          {job.achievements.length > 0 && (
                            <Box sx={{ mt: 2 }}>
                              <Typography
                                variant="subtitle2"
                                sx={{ mb: 1, fontWeight: 600 }}
                              >
                                Key Achievements:
                              </Typography>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 0.5,
                                }}
                              >
                                {job.achievements.map((achievement, idx) => (
                                  <Chip
                                    key={idx}
                                    label={achievement}
                                    size="small"
                                    icon={<EmojiEventsIcon />}
                                    sx={{
                                      background:
                                        "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)",
                                      color: "#4caf50",
                                      border:
                                        "1px solid rgba(76, 175, 80, 0.3)",
                                      fontSize: "0.75rem",
                                    }}
                                  />
                                ))}
                              </Box>
                            </Box>
                          )}
                        </CardContent>
                      </Card>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} sx={{ mt: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <SchoolIcon sx={{ color: "primary.main" }} />
                Education
              </Typography>

              {education.map((edu) => (
                <Card
                  key={edu.id}
                  sx={{
                    mb: 3,
                    background:
                      "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      boxShadow: "0 8px 25px rgba(74, 144, 226, 0.3)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "primary.main", fontWeight: 500, mb: 1 }}
                    >
                      {edu.institution}
                    </Typography>
                    <Box
                      sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {edu.period}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.location}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#4caf50", fontWeight: 500 }}
                      >
                        {edu.grade}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      <strong>Relevant Coursework:</strong>{" "}
                      {edu.coursework.join(", ")}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {edu.achievements.map((achievement, idx) => (
                        <Chip
                          key={idx}
                          label={achievement}
                          size="small"
                          icon={<EmojiEventsIcon />}
                          sx={{
                            background:
                              "linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0.05) 100%)",
                            color: "#ffc107",
                            border: "1px solid rgba(255, 193, 7, 0.3)",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </Grid>

          {/* Right Column - Skills, Languages, Hobbies */}
          <Grid size={{ xs: 12, lg: 4 }}>
            {/* Skills Summary */}
            <motion.div variants={itemVariants}>
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
                <StarIcon sx={{ color: "primary.main" }} />
                Skills Overview
              </Typography>

              {skillsCategories.map((category, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 3,
                    background:
                      "linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(74, 144, 226, 0.02) 100%)",
                    border: "1px solid rgba(74, 144, 226, 0.1)",
                  }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {category.category}
                    </Typography>
                    {category.skills.map((skill, idx) => (
                      <Box key={idx} sx={{ mb: 1.5 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {skill.name}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Chip
                              label={skill.level}
                              size="small"
                              sx={{
                                backgroundColor: getSkillLevelColor(
                                  skill.level
                                ),
                                color: "white",
                                fontSize: "0.7rem",
                                height: 20,
                              }}
                            />
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {skill.years}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
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
                <EmojiEventsIcon sx={{ color: "primary.main" }} />
                Certifications
              </Typography>

              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  sx={{
                    mb: 2,
                    background:
                      "linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.02) 100%)",
                    border: "1px solid rgba(76, 175, 80, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#4caf50",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 1,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontSize: "1.5rem" }}>
                        {cert.logo}
                      </Typography>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, lineHeight: 1.2 }}
                        >
                          {cert.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {cert.issuer} • {cert.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href={cert.verifyUrl}
                      target="_blank"
                      sx={{ mt: 1, fontSize: "0.75rem" }}
                    >
                      Verify
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants}>
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
                <LanguageIcon sx={{ color: "primary.main" }} />
                Languages
              </Typography>

              <Card
                sx={{
                  mb: 3,
                  background:
                    "linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(74, 144, 226, 0.02) 100%)",
                  border: "1px solid rgba(74, 144, 226, 0.1)",
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  {languages.map((lang, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 0.5,
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {lang.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {lang.level}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={lang.proficiency}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: "rgba(74, 144, 226, 0.1)",
                          "& .MuiLinearProgress-bar": {
                            background:
                              "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
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

        {/* Print Dialog */}
        <Dialog
          open={showPrintDialog}
          onClose={() => setShowPrintDialog(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            },
          }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Print Resume</Typography>
            <IconButton onClick={() => setShowPrintDialog(false)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Your resume will be optimized for printing with:
            </Typography>
            <List>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText primary="• Professional black and white formatting" />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText primary="• Condensed layout for single-page printing" />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText primary="• Contact information prominently displayed" />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText primary="• QR code linking to your online portfolio" />
              </ListItem>
            </List>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setShowPrintDialog(false)}>Cancel</Button>
            <Button
              variant="contained"
              onClick={() => {
                setShowPrintDialog(false);
                window.print();
              }}
              sx={{
                background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
              }}
            >
              Print Resume
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .resume-print-area,
          .resume-print-area * {
            visibility: visible;
          }
          .resume-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ResumeSection;
