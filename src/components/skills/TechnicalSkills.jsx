// components/skills/TechnicalSkills.jsx - Simple & Cool Desktop Design

"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import { technicalSkillsData } from "../../data/skillsData";

const TechnicalSkills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Icon mapping for categories
  const categoryIcons = {
    frontend: <LanguageIcon />,
    styling: <BrushIcon />,
    backend: <StorageIcon />,
    tools: <BuildIcon />,
    cloud: <CloudIcon />,
  };

  const categories = Object.keys(technicalSkillsData);
  const currentSkills = technicalSkillsData[selectedCategory];

  // Mobile: Keep existing design (unchanged)
  if (isMobile) {
    return (
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 2,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          Technical Skills
        </Typography>

        {/* Mobile category tabs */}
        <Box sx={{ mb: 3, overflowX: "auto", pb: 1 }}>
          <Box sx={{ display: "flex", gap: 1, minWidth: "max-content", px: 1 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={technicalSkillsData[category].title}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "filled" : "outlined"}
                size="small"
                sx={{
                  fontSize: "0.75rem",
                  height: 32,
                  ...(selectedCategory === category
                    ? {
                        background: technicalSkillsData[category].color,
                        color: "white",
                      }
                    : {
                        borderColor: technicalSkillsData[category].color,
                        color: technicalSkillsData[category].color,
                      }),
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Mobile skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card sx={{ p: 2.5, borderRadius: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  mb: 2,
                  color: currentSkills.color,
                  fontWeight: 600,
                }}
              >
                {currentSkills.title}
              </Typography>

              {/* Simple 2-column grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 1.5,
                }}
              >
                {currentSkills.skills.map((skill, index) => (
                  <Box
                    key={skill.name}
                    sx={{
                      textAlign: "center",
                      p: 1.5,
                      background: `${currentSkills.color}08`,
                      borderRadius: 2,
                      border: `1px solid ${currentSkills.color}15`,
                      minHeight: "80px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1.5rem", mb: 0.5 }}
                    >
                      {skill.icon}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        color: currentSkills.color,
                        fontSize: "0.75rem",
                        textAlign: "center",
                        lineHeight: 1.1,
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Mobile stats */}
              <Box
                sx={{
                  mt: 2,
                  p: 1.5,
                  background: "rgba(74, 144, 226, 0.05)",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.7rem" }}
                >
                  {currentSkills.skills.length} technologies in{" "}
                  {currentSkills.title}
                </Typography>
              </Box>
            </Card>
          </motion.div>
        </AnimatePresence>
      </Box>
    );
  }

  // Desktop: Simple & Cool Design
  return (
    <Box sx={{ mb: 6 }}>
      {/* Simple Header */}
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
        <CodeIcon sx={{ color: "primary.main" }} />
        Technical Skills
      </Typography>

      {/* Compact Category Pills */}
      <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
        {categories.map((category) => {
          const categoryData = technicalSkillsData[category];
          const isSelected = selectedCategory === category;

          return (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                icon={categoryIcons[category]}
                label={categoryData.title}
                onClick={() => setSelectedCategory(category)}
                variant={isSelected ? "filled" : "outlined"}
                sx={{
                  px: 2,
                  py: 0.5,
                  height: 36,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  ...(isSelected
                    ? {
                        background: `linear-gradient(135deg, ${categoryData.color} 0%, ${categoryData.color}dd 100%)`,
                        color: "white",
                        border: "none",
                        boxShadow: `0 4px 15px ${categoryData.color}40`,
                      }
                    : {
                        borderColor: categoryData.color,
                        color: categoryData.color,
                        "&:hover": {
                          background: `${categoryData.color}15`,
                          borderColor: categoryData.color,
                        },
                      }),
                }}
              />
            </motion.div>
          );
        })}
      </Box>

      {/* Skills Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Compact Skills Grid */}
          <Grid container spacing={2}>
            {currentSkills.skills.map((skill, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ y: -4 }}
                >
                  <Card
                    sx={{
                      background:
                        "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderTop: `2px solid ${currentSkills.color}`,
                      borderRadius: 3,
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: `${currentSkills.color}60`,
                        borderTop: `2px solid ${currentSkills.color}`,
                        background: `linear-gradient(135deg, ${currentSkills.color}10 0%, ${currentSkills.color}05 100%)`,
                        boxShadow: `0 8px 25px ${currentSkills.color}20`,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2.5, textAlign: "center" }}>
                      {/* Skill Icon */}
                      <Box
                        sx={{
                          fontSize: "2rem",
                          mb: 1,
                          transition: "transform 0.3s ease",
                          ...(hoveredSkill === skill.name && {
                            transform: "scale(1.1)",
                          }),
                        }}
                      >
                        {skill.icon}
                      </Box>

                      {/* Skill Name */}
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "text.primary",
                          fontSize: "0.9rem",
                        }}
                      >
                        {skill.name}
                      </Typography>

                      {/* Tags - Show only 2 on hover */}
                      <AnimatePresence>
                        {hoveredSkill === skill.name && skill.tags && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                gap: 0.5,
                                justifyContent: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              {skill.tags.slice(0, 2).map((tag, tagIndex) => (
                                <Chip
                                  key={tag}
                                  label={tag}
                                  size="small"
                                  sx={{
                                    background: `${currentSkills.color}20`,
                                    color: currentSkills.color,
                                    fontSize: "0.65rem",
                                    height: 18,
                                    fontWeight: 500,
                                  }}
                                />
                              ))}
                            </Box>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default TechnicalSkills;
