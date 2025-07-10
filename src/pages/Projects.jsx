"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  Fade,
  Skeleton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TimerIcon from "@mui/icons-material/Timer";

const ProjectsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // State management
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Liga dos Veteranos do Sado",
      description: "Setúbal's 7-a-side Football League Platform",
      longDescription:
        "A comprehensive website to manage and display all data related to the Liga dos Veteranos do Sado, a 7-a-side football league based in Setúbal, Portugal. Features include standings, statistics, game pages, team information, and more.",
      images: [
        "/veteranos/veteranos-cup.png",
        "/veteranos/veteranos-hero.png",
        "/veteranos/veteranos-match.png",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Material-UI"],
      category: "Full Stack",
      status: "Live",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/claudio/ecommerce-dashboard",
      completedDate: "2024-01-15",
      duration: "3 months",
      highlights: [
        "Real-time analytics",
        "Responsive design",
        "Advanced filtering",
        "Role-based access",
      ],
      challenges:
        "Optimizing real-time updates for large datasets while maintaining smooth user experience",
      featured: true,
      color: "#4a90e2",
    },
    {
      id: 2,
      title: "Benny's CheatSheet",
      description:
        "A comprehensive React component library designed for rapid development and consistent UI across projects.",
      longDescription:
        "Benny's CheatSheet is a collection of reusable React components that can be easily integrated into any project. It includes a wide range of components from buttons to complex forms, all designed with accessibility and performance in mind.",
      images: ["/bennys/bennys.png", "/api/placeholder/800/600"],
      technologies: ["React", "TypeScript", "Storybook", "Jest", "Rollup"],
      category: "React",
      status: "Live",
      liveUrl: "https://components.demo.com",
      githubUrl: "https://github.com/claudio/react-components",
      completedDate: "2023-11-20",
      duration: "4 months",
      highlights: [
        "50+ components",
        "TypeScript support",
        "Accessibility focused",
        "Comprehensive docs",
      ],
      challenges:
        "Ensuring consistency across components while maintaining flexibility for different use cases",
      featured: true,
      color: "#61dafb",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js featuring smooth animations and optimized performance.",
      longDescription:
        "This portfolio showcases modern web development techniques with a focus on performance and user experience. Built with Next.js for optimal loading speeds and SEO.",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
      category: "Next.js",
      status: "Live",
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/claudio/portfolio",
      completedDate: "2023-12-10",
      duration: "2 months",
      highlights: [
        "Server-side rendering",
        "Smooth animations",
        "SEO optimized",
        "Fast loading",
      ],
      challenges:
        "Balancing rich animations with performance optimization and accessibility",
      featured: false,
      color: "#000000",
    },
    {
      id: 4,
      title: "Restaurant Landing Page",
      description:
        "An elegant landing page for a fine dining restaurant with online reservation system and menu showcase.",
      longDescription:
        "This project focused on creating an immersive visual experience that captures the restaurant's atmosphere while providing essential functionality for customers.",
      images: ["/api/placeholder/800/600"],
      technologies: ["React", "Gatsby", "GraphQL", "Stripe API"],
      category: "Landing Pages",
      status: "Live",
      liveUrl: "https://restaurant-demo.com",
      githubUrl: "https://github.com/claudio/restaurant-site",
      completedDate: "2023-10-05",
      duration: "1.5 months",
      highlights: [
        "Online reservations",
        "Menu management",
        "Payment integration",
        "Mobile optimized",
      ],
      challenges:
        "Creating an elegant design that works well on all devices while integrating complex booking functionality",
      featured: false,
      color: "#4caf50",
    },
    {
      id: 5,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration, and project tracking.",
      longDescription:
        "Built for small to medium teams, this app provides comprehensive project management features with an intuitive interface and real-time collaboration capabilities.",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      category: "Full Stack",
      status: "In Development",
      liveUrl: "",
      githubUrl: "https://github.com/claudio/task-manager",
      completedDate: "2024-02-28",
      duration: "Ongoing",
      highlights: [
        "Real-time collaboration",
        "Drag & drop interface",
        "Team management",
        "Progress tracking",
      ],
      challenges:
        "Implementing efficient real-time synchronization across multiple users and devices",
      featured: false,
      color: "#9c27b0",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description:
        "A beautiful weather application with detailed forecasts, interactive maps, and location-based features.",
      longDescription:
        "This weather app combines beautiful design with comprehensive weather data, featuring interactive maps, detailed forecasts, and weather alerts.",
      images: ["/api/placeholder/800/600"],
      technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
      category: "React",
      status: "Live",
      liveUrl: "https://weather-demo.com",
      githubUrl: "https://github.com/claudio/weather-app",
      completedDate: "2023-09-15",
      duration: "2 months",
      highlights: [
        "Interactive maps",
        "7-day forecasts",
        "Weather alerts",
        "Location search",
      ],
      challenges:
        "Handling large amounts of weather data efficiently while maintaining smooth map interactions",
      featured: false,
      color: "#ff9800",
    },
  ];

  const categories = ["All", "React", "Next.js", "Full Stack", "Landing Pages"];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Handle category filter
  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Handle search
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle project modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // Image navigation in modal
  const handleNextImage = () => {
    if (
      selectedProject &&
      currentImageIndex < selectedProject.images.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  // Project card component
  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      layoutId={`project-${project.id}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          height: "100%",
          cursor: "pointer",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: project.color,
            boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px ${project.color}40`,
            "& .project-overlay": {
              opacity: 1,
            },
            "& .project-image": {
              transform: "scale(1.05)",
            },
          },
        }}
        onClick={() => handleProjectClick(project)}
      >
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="200"
            image={project.images[0]}
            alt={project.title}
            className="project-image"
            sx={{
              transition: "transform 0.3s ease",
              objectFit: "cover",
            }}
          />
          <Box
            className="project-overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <Box sx={{ textAlign: "center", color: "white" }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                View Details
              </Typography>
              <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                {project.liveUrl && (
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, "_blank");
                    }}
                  >
                    <LaunchIcon fontSize="small" />
                  </IconButton>
                )}
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, "_blank");
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          {project.featured && (
            <Chip
              label="Featured"
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                background: project.color,
                color: "white",
                fontWeight: 600,
              }}
            />
          )}
          <Chip
            label={project.status}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              background: project.status === "Live" ? "#4caf50" : "#ff9800",
              color: "white",
              fontWeight: 500,
            }}
          />
        </Box>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, lineHeight: 1.5 }}
          >
            {project.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  background: `${project.color}20`,
                  color: project.color,
                  border: `1px solid ${project.color}40`,
                  fontSize: "0.75rem",
                }}
              />
            ))}
            {project.technologies.length > 3 && (
              <Chip
                label={`+${project.technologies.length - 3}`}
                size="small"
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "text.secondary",
                }}
              />
            )}
          </Box>
          <Typography variant="caption" color="text.secondary">
            {project.completedDate} • {project.duration}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );

  // Loading skeleton component
  const ProjectSkeleton = () => (
    <Card sx={{ height: 400 }}>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Skeleton variant="text" width="80%" height={32} />
        <Skeleton variant="text" width="100%" height={20} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="100%" height={20} />
        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Skeleton variant="rounded" width={60} height={24} />
          <Skeleton variant="rounded" width={80} height={24} />
          <Skeleton variant="rounded" width={70} height={24} />
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
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
                  My Projects
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
                  A collection of web applications and websites I've built using
                  modern technologies
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                  }}
                >
                  Showing {filteredProjects.length} of {projects.length}{" "}
                  projects
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
              <Box
                sx={{
                  height: isMobile ? 200 : 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Floating Tech Icons */}
                {["⚛️", "🚀", "💻", "🎨"].map((emoji, index) => (
                  <motion.div
                    key={index}
                    style={{
                      position: "absolute",
                      fontSize: "3rem",
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    sx={{
                      top: `${20 + index * 15}%`,
                      left: `${15 + index * 20}%`,
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}

                {/* Central Message */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
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
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Ready to build something?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Let's create your next project together!
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div variants={itemVariants}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "contained" : "outlined"
                      }
                      size="small"
                      onClick={() => handleCategoryChange(category)}
                      sx={{
                        borderRadius: 3,
                        textTransform: "none",
                        fontWeight: 500,
                        ...(selectedCategory === category && {
                          background:
                            "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                        }),
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                    },
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 2 }}>
                <ToggleButtonGroup
                  value={viewMode}
                  exclusive
                  onChange={(e, newMode) => newMode && setViewMode(newMode)}
                  sx={{ height: "100%" }}
                >
                  <ToggleButton value="grid" aria-label="grid view">
                    <ViewModuleIcon />
                  </ToggleButton>
                  <ToggleButton value="list" aria-label="list view">
                    <ViewListIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Grid container spacing={3}>
              {[...Array(6)].map((_, index) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                  <ProjectSkeleton />
                </Grid>
              ))}
            </Grid>
          ) : filteredProjects.length > 0 ? (
            <Grid container spacing={3}>
              {filteredProjects.map((project, index) => (
                <Grid
                  size={{
                    xs: 12,
                    sm: viewMode === "list" ? 12 : 6,
                    lg: viewMode === "list" ? 12 : 4,
                  }}
                  key={project.id}
                >
                  <ProjectCard project={project} index={index} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  py: 8,
                  px: 4,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  No projects found
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Try adjusting your search or filter criteria
                </Typography>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Detail Modal */}
        <Dialog
          open={!!selectedProject}
          onClose={handleCloseModal}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 4,
            },
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ p: 3, pb: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {selectedProject.title}
                  </Typography>
                  <IconButton onClick={handleCloseModal}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </DialogTitle>

              <DialogContent sx={{ p: 3 }}>
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, md: 8 }}>
                    {/* Image Gallery */}
                    <Box sx={{ position: "relative", mb: 3 }}>
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                        style={{
                          width: "100%",
                          height: "400px",
                          objectFit: "cover",
                          borderRadius: "12px",
                        }}
                      />
                      {selectedProject.images.length > 1 && (
                        <>
                          <IconButton
                            sx={{
                              position: "absolute",
                              left: 8,
                              top: "50%",
                              transform: "translateY(-50%)",
                              backgroundColor: "rgba(0, 0, 0, 0.5)",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                              },
                            }}
                            onClick={handlePrevImage}
                            disabled={currentImageIndex === 0}
                          >
                            <ArrowBackIcon />
                          </IconButton>
                          <IconButton
                            sx={{
                              position: "absolute",
                              right: 8,
                              top: "50%",
                              transform: "translateY(-50%)",
                              backgroundColor: "rgba(0, 0, 0, 0.5)",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                              },
                            }}
                            onClick={handleNextImage}
                            disabled={
                              currentImageIndex ===
                              selectedProject.images.length - 1
                            }
                          >
                            <ArrowForwardIcon />
                          </IconButton>
                        </>
                      )}
                    </Box>

                    {/* Project Description */}
                    <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
                      {selectedProject.longDescription}
                    </Typography>

                    {/* Highlights */}
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Key Features
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {selectedProject.highlights.map((highlight, index) => (
                        <Chip
                          key={index}
                          label={highlight}
                          sx={{
                            mr: 1,
                            mb: 1,
                            background: `${selectedProject.color}20`,
                            color: selectedProject.color,
                            border: `1px solid ${selectedProject.color}40`,
                          }}
                        />
                      ))}
                    </Box>

                    {/* Challenges */}
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Technical Challenges
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {selectedProject.challenges}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    {/* Project Info */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Project Details
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <CalendarTodayIcon
                          sx={{ mr: 1, color: "text.secondary" }}
                        />
                        <Typography variant="body2">
                          Completed: {selectedProject.completedDate}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <TimerIcon sx={{ mr: 1, color: "text.secondary" }} />
                        <Typography variant="body2">
                          Duration: {selectedProject.duration}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 3 }}
                      >
                        <CodeIcon sx={{ mr: 1, color: "text.secondary" }} />
                        <Typography variant="body2">
                          Status: {selectedProject.status}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Technologies Used
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {selectedProject.technologies.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            sx={{
                              background: `${selectedProject.color}20`,
                              color: selectedProject.color,
                              border: `1px solid ${selectedProject.color}40`,
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      {selectedProject.liveUrl && (
                        <Button
                          variant="contained"
                          startIcon={<LaunchIcon />}
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            background:
                              "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
                            },
                          }}
                        >
                          View Live Demo
                        </Button>
                      )}
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: "text.secondary",
                          color: "text.secondary",
                          "&:hover": {
                            borderColor: "primary.main",
                            color: "primary.main",
                          },
                        }}
                      >
                        View Source Code
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Box>
    </motion.div>
  );
};

export default ProjectsSection;
