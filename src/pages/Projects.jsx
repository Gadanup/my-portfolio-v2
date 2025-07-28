// Projects.jsx

"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import ProjectsHero from "../components/projects/ProjectHero";
import ProjectsFilter from "../components/projects/ProjectsFilter";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectModal from "../components/projects/ProjectModal";
import { projectsData } from "../data/projectsData";

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

  const { projects } = projectsData;

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
  }, [projects, selectedCategory, searchTerm]);

  // Handle category filter with loading simulation
  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Handle search
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
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
        <ProjectsHero projectsCount={filteredProjects.length} />

        {/* Filters and Controls */}
        <motion.div variants={itemVariants}>
          <ProjectsFilter
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            viewMode={viewMode}
            onCategoryChange={handleCategoryChange}
            onSearchChange={handleSearchChange}
            onViewModeChange={handleViewModeChange}
            isLoading={isLoading}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants}>
          <ProjectsGrid
            projects={filteredProjects}
            viewMode={viewMode}
            isLoading={isLoading}
            onProjectClick={handleProjectClick}
          />
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          currentImageIndex={currentImageIndex}
          onNextImage={handleNextImage}
          onPrevImage={handlePrevImage}
        />
      </Box>
    </motion.div>
  );
};

export default ProjectsSection;
