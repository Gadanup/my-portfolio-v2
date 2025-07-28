// components/projects/ProjectsGrid.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Skeleton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ projects, viewMode, isLoading, onProjectClick }) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Grid container spacing={3}>
            {[...Array(6)].map((_, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                <ProjectSkeleton />
              </Grid>
            ))}
          </Grid>
        ) : projects.length > 0 ? (
          <motion.div
            key="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid
                  size={{
                    xs: 12,
                    sm: viewMode === "list" ? 12 : 6,
                    lg: viewMode === "list" ? 12 : 4,
                  }}
                  key={project.id}
                >
                  <motion.div variants={itemVariants}>
                    <ProjectCard
                      project={project}
                      onProjectClick={onProjectClick}
                      viewMode={viewMode}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        ) : (
          <motion.div
            key="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                textAlign: "center",
                py: 8,
                px: 4,
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "4rem",
                    mb: 2,
                    opacity: 0.3,
                  }}
                >
                  🔍
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 2, color: "text.secondary", fontWeight: 600 }}
                >
                  No projects found
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 400, mx: "auto", lineHeight: 1.6 }}
                >
                  Try adjusting your search terms or browse different categories
                  to discover more projects.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsGrid;
