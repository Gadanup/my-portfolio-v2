// components/projects/ProjectsFilter.jsx - Mobile Always List View

"use client";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
  Paper,
  IconButton,
  Collapse,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import { projectsData } from "../../data/projectsData";

const ProjectsFilter = ({
  selectedCategory,
  searchTerm,
  viewMode,
  onCategoryChange,
  onSearchChange,
  onViewModeChange,
  isLoading,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { categories } = projectsData;

  // Force list view on mobile
  useEffect(() => {
    if (isMobile && viewMode !== "list") {
      onViewModeChange("list");
    }
  }, [isMobile, viewMode, onViewModeChange]);

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5 },
    },
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    if (isMobile) {
      setMobileFiltersOpen(false);
    }
  };

  if (isMobile) {
    return (
      <motion.div variants={itemVariants}>
        <Box sx={{ mb: 1 }}>
          {/* Mobile Search and Filter Toggle - No View Mode Toggle */}
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              disabled={isLoading}
              size="small"
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
                  fontSize: "0.875rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                  },
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                      borderWidth: "2px",
                    },
                  },
                },
              }}
            />

            <IconButton
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              sx={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 3,
                backgroundColor: mobileFiltersOpen
                  ? "primary.main"
                  : "transparent",
                color: mobileFiltersOpen ? "white" : "text.secondary",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: mobileFiltersOpen
                    ? "primary.dark"
                    : "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {mobileFiltersOpen ? <CloseIcon /> : <FilterListIcon />}
            </IconButton>
          </Box>

          {/* Mobile Categories - Collapsible */}
          <Collapse in={mobileFiltersOpen}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                sx={{
                  p: 2,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  mb: 2,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {categories.map((category, index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Chip
                        label={category}
                        variant={
                          selectedCategory === category ? "filled" : "outlined"
                        }
                        onClick={() => handleCategoryClick(category)}
                        disabled={isLoading}
                        sx={{
                          borderRadius: 3,
                          fontSize: "0.75rem",
                          height: "32px",
                          fontWeight: 500,
                          transition: "all 0.3s ease",
                          ...(selectedCategory === category && {
                            background:
                              "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                            color: "white",
                            border: "none",
                            boxShadow: "0 4px 15px rgba(74, 144, 226, 0.3)",
                            transform: "translateY(-1px)",
                          }),
                          ...(selectedCategory !== category && {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                            color: "text.secondary",
                            "&:hover": {
                              borderColor: "primary.main",
                              backgroundColor: "rgba(74, 144, 226, 0.1)",
                              color: "primary.main",
                              transform: "translateY(-1px)",
                            },
                          }),
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Collapse>

          {/* Active Filters Indicator */}
          {(selectedCategory !== "All" || searchTerm) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  p: 1.5,
                  background: "rgba(74, 144, 226, 0.1)",
                  borderRadius: 2,
                  border: "1px solid rgba(74, 144, 226, 0.2)",
                  mb: 2,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {selectedCategory !== "All" && (
                    <Chip
                      label={`Category: ${selectedCategory}`}
                      size="small"
                      onDelete={() => handleCategoryClick("All")}
                      sx={{
                        background: "primary.main",
                        color: "white",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        "& .MuiChip-deleteIcon": {
                          color: "white",
                          "&:hover": {
                            color: "rgba(255, 255, 255, 0.8)",
                          },
                        },
                      }}
                    />
                  )}
                  {searchTerm && (
                    <Chip
                      label={`Search: "${searchTerm}"`}
                      size="small"
                      onDelete={() => onSearchChange("")}
                      sx={{
                        background: "secondary.main",
                        color: "white",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        "& .MuiChip-deleteIcon": {
                          color: "white",
                          "&:hover": {
                            color: "rgba(255, 255, 255, 0.8)",
                          },
                        },
                      }}
                    />
                  )}
                </Box>
              </Box>
            </motion.div>
          )}
        </Box>
      </motion.div>
    );
  }

  // Desktop version with view mode toggle
  return (
    <motion.div variants={itemVariants}>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          {/* Categories */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={
                      selectedCategory === category ? "contained" : "outlined"
                    }
                    size="small"
                    onClick={() => handleCategoryClick(category)}
                    disabled={isLoading}
                    sx={{
                      borderRadius: 3,
                      textTransform: "none",
                      fontWeight: 500,
                      px: 2,
                      py: 0.8,
                      transition: "all 0.3s ease",
                      ...(selectedCategory === category && {
                        background:
                          "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                        boxShadow: "0 4px 15px rgba(74, 144, 226, 0.3)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(74, 144, 226, 0.4)",
                        },
                      }),
                      ...(selectedCategory !== category && {
                        borderColor: "primary.main",
                        color: "primary.main",
                        "&:hover": {
                          background: "rgba(74, 144, 226, 0.1)",
                          borderColor: "primary.light",
                          transform: "translateY(-2px)",
                        },
                      }),
                    }}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Search and View Mode */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "flex-end",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ flex: 1, maxWidth: 300 }}
              >
                <TextField
                  fullWidth
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  disabled={isLoading}
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
                      transition: "all 0.3s ease",
                      "&:hover": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "primary.main",
                        },
                      },
                      "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "primary.main",
                          borderWidth: "2px",
                        },
                      },
                    },
                  }}
                />
              </motion.div>

              {/* View Mode Toggle - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ToggleButtonGroup
                  value={viewMode}
                  exclusive
                  onChange={(e, newMode) =>
                    newMode && onViewModeChange(newMode)
                  }
                  disabled={isLoading}
                  sx={{
                    "& .MuiToggleButton-root": {
                      borderRadius: 2,
                      border: "1px solid rgba(74, 144, 226, 0.3)",
                      color: "text.secondary",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(74, 144, 226, 0.1)",
                        borderColor: "primary.main",
                        color: "primary.main",
                        transform: "translateY(-1px)",
                      },
                      "&.Mui-selected": {
                        background:
                          "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                        color: "white",
                        borderColor: "primary.main",
                        boxShadow: "0 4px 15px rgba(74, 144, 226, 0.3)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
                          transform: "translateY(-1px)",
                        },
                      },
                    },
                  }}
                >
                  <ToggleButton
                    value="grid"
                    aria-label="grid view"
                    sx={{ mr: 1 }}
                  >
                    <ViewModuleIcon />
                  </ToggleButton>
                  <ToggleButton value="list" aria-label="list view">
                    <ViewListIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        {/* Filter Results Info - Desktop */}
        {(selectedCategory !== "All" || searchTerm) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Box
              sx={{
                mt: 2,
                p: 1.5,
                background: "rgba(74, 144, 226, 0.1)",
                borderRadius: 2,
                border: "1px solid rgba(74, 144, 226, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                {selectedCategory !== "All" && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <span style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                      Category:
                    </span>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        background: "primary.main",
                        color: "white",
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {selectedCategory}
                    </Box>
                  </Box>
                )}
                {searchTerm && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <span style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                      Search:
                    </span>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        background: "secondary.main",
                        color: "white",
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      "{searchTerm}"
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </motion.div>
        )}
      </Box>
    </motion.div>
  );
};

export default ProjectsFilter;
