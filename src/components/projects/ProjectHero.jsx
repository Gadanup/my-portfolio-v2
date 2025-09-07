// components/projects/ProjectsHero.jsx - Updated with Consistent Styling

"use client";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projectsData";
import StarIcon from "@mui/icons-material/Star";
import { hero } from "../../data/projectsData";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const ProjectsHero = ({ projectsCount }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { hero, animations } = projectsData;

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5 },
    },
  };

  if (isMobile) {
    return (
      <motion.div variants={itemVariants}>
        <Box sx={{ mb: 4, textAlign: "left", py: 2 }}>
          {/* Mobile Hero Content - Consistent with ExperienceHero */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            {hero.title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              mb: 3,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            {hero.subtitle}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 3,
              lineHeight: 1.6,
            }}
          >
            {hero.description}
          </Typography>

          {/* Mobile Tech Stack Chips - Keep these but make them smaller */}
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            <Chip
              icon={<StarIcon />}
              label={`${projectsCount} Projects`}
              sx={{
                background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                color: "white",
                fontWeight: 500,
              }}
            />
            <Chip
              icon={<TrendingUpIcon />}
              label="Always Learning"
              variant="outlined"
              sx={{
                borderColor: "primary.main",
                color: "primary.main",
              }}
            />
          </Box>
        </Box>
      </motion.div>
    );
  }

  // Desktop version - Updated to match ExperienceHero styling
  return (
    <motion.div variants={itemVariants}>
      <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              {hero.title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "text.primary",
                mb: 3,
                lineHeight: 1.5,
                fontWeight: 400,
              }}
            >
              {hero.subtitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 3,
                lineHeight: 1.6,
              }}
            >
              {hero.description}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
              <Chip
                icon={<StarIcon />}
                label={`${projectsCount} Projects`}
                sx={{
                  background:
                    "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                  color: "white",
                  fontWeight: 500,
                }}
              />
              <Chip
                icon={<TrendingUpIcon />}
                label="Always Learning"
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
          {/* Desktop Fun Code Snippet Animation - Keep existing */}
          <Box
            sx={{
              position: "relative",
              height: 280,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Floating Emojis */}
            {["💻", "☕", "🚀", "🎯"].map((emoji, index) => (
              <motion.div
                key={index}
                style={{
                  position: "absolute",
                  fontSize: "1.5rem",
                  zIndex: 1,
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
                sx={{
                  top: `${15 + index * 18}%`,
                  left: `${10 + index * 22}%`,
                }}
              >
                {emoji}
              </motion.div>
            ))}

            {/* Main Code Card */}
            <motion.div
              initial={{ opacity: 0, rotateY: -20, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 200,
              }}
              style={{ position: "relative", zIndex: 2 }}
            >
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)",
                  border: "1px solid rgba(74, 144, 226, 0.3)",
                  borderRadius: 4,
                  overflow: "hidden",
                  width: 300,
                  height: 300,
                  position: "relative",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Terminal Header */}
                <Box
                  sx={{
                    background:
                      "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#ff5f56",
                      }}
                    />
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#ffbd2e",
                      }}
                    />
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#27ca3f",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      ml: 1,
                      fontSize: "0.75rem",
                    }}
                  >
                    developer.js
                  </Typography>
                </Box>

                <CardContent
                  sx={{
                    p: 2.5,
                    fontFamily: "monospace",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ flex: 1 }}
                  >
                    <Typography
                      component="div"
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.8rem",
                        lineHeight: 1.4,
                        color: "#e6e6e6",
                      }}
                    >
                      <Box component="span" sx={{ color: "#ff79c6" }}>
                        const
                      </Box>{" "}
                      <Box component="span" sx={{ color: "#f8f8f2" }}>
                        developer
                      </Box>{" "}
                      <Box component="span" sx={{ color: "#ff79c6" }}>
                        =
                      </Box>{" "}
                      {"{"}
                      <br />
                      {"  "}name:{" "}
                      <Box component="span" sx={{ color: "#50fa7b" }}>
                        'Cláudio'
                      </Box>
                      ,<br />
                      {"  "}role:{" "}
                      <Box component="span" sx={{ color: "#50fa7b" }}>
                        'Frontend'
                      </Box>
                      ,<br />
                      {"  "}location:{" "}
                      <Box component="span" sx={{ color: "#50fa7b" }}>
                        'PT 🇵🇹'
                      </Box>
                      ,<br />
                      {"  "}Energy Drinks:{" "}
                      <Box component="span" sx={{ color: "#ff79c6" }}>
                        ∞
                      </Box>
                      ,<br />
                      {"  "}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Box component="span" sx={{ color: "#6272a4" }}>
                          // coding...
                        </Box>
                      </motion.span>
                      <br />
                      {"  "}bugs:{" "}
                      <Box component="span" sx={{ color: "#ff79c6" }}>
                        0
                      </Box>
                      ,{" "}
                      <Box component="span" sx={{ color: "#6272a4" }}>
                        // 😅
                      </Box>
                      <br />
                      {"}"};
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{ color: "#f8f8f2", fontSize: "0.9rem" }}
                      >
                        |
                      </motion.span>
                    </Typography>
                  </motion.div>

                  <Box
                    sx={{
                      mt: 2,
                      pt: 1.5,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Grid container spacing={1}>
                      <Grid size={6}>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#50fa7b",
                              fontWeight: 700,
                              fontSize: "1.2rem",
                            }}
                          >
                            {projectsCount}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "#6272a4", fontSize: "0.7rem" }}
                          >
                            Projects
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={6}>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#ff79c6",
                              fontWeight: 700,
                              fontSize: "1.2rem",
                            }}
                          >
                            ∞
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "#6272a4", fontSize: "0.7rem" }}
                          >
                            Energy Drinks
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default ProjectsHero;
