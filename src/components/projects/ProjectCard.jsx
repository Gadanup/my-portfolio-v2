// components/projects/ProjectCard.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project, onProjectClick, viewMode = "grid" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  if (viewMode === "list") {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        layoutId={`project-${project.id}`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <Card
          sx={{
            cursor: "pointer",
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            transition: "all 0.3s ease",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            height: "auto",
            "&:hover": {
              borderColor: project.color,
              boxShadow: `0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px ${project.color}40`,
              transform: "translateY(-4px)",
            },
          }}
          onClick={() => onProjectClick(project)}
        >
          {/* Image Section */}
          <Box
            sx={{
              width: { xs: "100%", sm: "400px" },
              height: { xs: "180px", sm: "auto" }, // Fixed height for mobile
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
              borderRadius: { xs: "16px 16px 0 0", sm: "16px 0 0 16px" },
            }}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: "inherit",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{
                p: { xs: 2, sm: 3 }, // Reduced padding on mobile
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Top Content */}
              <Box>
                {/* Status and Category Chips - Compact for mobile */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: { xs: 1.5, sm: 2 },
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                    <Chip
                      label={project.status}
                      size="small"
                      sx={{
                        background:
                          project.status === "Live" ? "#4caf50" : "#ff9800",
                        color: "white",
                        fontWeight: 500,
                        fontSize: { xs: "0.7rem", sm: "0.75rem" },
                        height: { xs: "20px", sm: "24px" },
                      }}
                    />
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        background: project.color,
                        color: "white",
                        fontWeight: 500,
                        fontSize: { xs: "0.7rem", sm: "0.75rem" },
                        height: { xs: "20px", sm: "24px" },
                      }}
                    />
                  </Box>
                  {project.featured && (
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        background:
                          "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
                        color: "white",
                        fontWeight: 600,
                        boxShadow: "0 2px 8px rgba(76, 175, 80, 0.3)",
                        fontSize: { xs: "0.7rem", sm: "0.75rem" },
                        height: { xs: "20px", sm: "24px" },
                      }}
                    />
                  )}
                </Box>

                <Typography
                  variant={{ xs: "h6", sm: "h5" }} // Smaller title on mobile
                  sx={{
                    mb: { xs: 1, sm: 1.5 },
                    fontWeight: 600,
                    lineHeight: 1.3,
                    fontSize: { xs: "1.1rem", sm: "1.5rem" },
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: { xs: 1.5, sm: 2.5 },
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: { xs: 2, sm: 3 }, // Less text on mobile
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                  }}
                >
                  {project.description}
                </Typography>

                {/* Technologies - Show fewer on mobile */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5,
                    mb: { xs: 1.5, sm: 3 },
                  }}
                >
                  {project.technologies
                    .slice(0, isMobile ? 3 : 5)
                    .map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                          background: `${project.color}20`,
                          color: project.color,
                          border: `1px solid ${project.color}40`,
                          fontSize: { xs: "0.65rem", sm: "0.75rem" },
                          height: { xs: "18px", sm: "24px" },
                        }}
                      />
                    ))}
                  {project.technologies.length > (isMobile ? 3 : 5) && (
                    <Chip
                      label={`+${
                        project.technologies.length - (isMobile ? 3 : 5)
                      }`}
                      size="small"
                      sx={{
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "text.secondary",
                        fontSize: { xs: "0.65rem", sm: "0.75rem" },
                        height: { xs: "18px", sm: "24px" },
                      }}
                    />
                  )}
                </Box>
              </Box>

              {/* Bottom Content - Date and Actions */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 1, sm: 2 },
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
                  >
                    {project.completedDate} • {project.duration}
                  </Typography>

                  {/* Action Buttons - Stack on mobile */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      width: { xs: "100%", sm: "auto" },
                      justifyContent: { xs: "flex-end", sm: "flex-start" },
                    }}
                  >
                    {project.liveUrl && (
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<LaunchIcon />}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, "_blank");
                        }}
                        sx={{
                          borderColor: project.color,
                          color: project.color,
                          minWidth: "auto",
                          px: { xs: 1, sm: 1.5 },
                          py: 0.5,
                          fontSize: { xs: "0.65rem", sm: "0.75rem" },
                          fontWeight: 500,
                          height: { xs: "28px", sm: "32px" },
                          "&:hover": {
                            borderColor: project.color,
                            background: `${project.color}20`,
                            transform: "translateY(-1px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {isMobile ? "" : "Live"}{" "}
                        {/* Hide text on mobile, show only icon */}
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHubIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                      sx={{
                        borderColor: "text.secondary",
                        color: "text.secondary",
                        minWidth: "auto",
                        px: { xs: 1, sm: 1.5 },
                        py: 0.5,
                        fontSize: { xs: "0.65rem", sm: "0.75rem" },
                        fontWeight: 500,
                        height: { xs: "28px", sm: "32px" },
                        "&:hover": {
                          borderColor: "primary.main",
                          color: "primary.main",
                          background: "rgba(74, 144, 226, 0.1)",
                          transform: "translateY(-1px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {isMobile ? "" : "Code"}{" "}
                      {/* Hide text on mobile, show only icon */}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </motion.div>
    );
  }

  // Grid view (default) - UNCHANGED
  return (
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
            transform: "translateY(-8px)",
            "& .project-overlay": {
              opacity: 1,
            },
            "& .project-image": {
              transform: "scale(1.05)",
            },
          },
        }}
        onClick={() => onProjectClick(project)}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
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
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
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
                zIndex: 10,
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
              zIndex: 10,
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
};

export default ProjectCard;
