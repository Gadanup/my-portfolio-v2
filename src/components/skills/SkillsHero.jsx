// components/skills/SkillsHero.jsx

"use client";
import {
  Box,
  Typography,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const SkillsHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const keyStats = [
    { label: "Years Experience", value: "3+", color: "#4a90e2" },
    { label: "Technologies Mastered", value: "15+", color: "#4caf50" },
  ];

  // Mobile: Compact layout
  if (isMobile) {
    return (
      <Box sx={{ mb: 4 }}>
        <Box sx={{ textAlign: "left", mb: 3, py: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1.5,
            }}
          >
            Skills & Expertise
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
            Senior Frontend Developer with proven track record of delivering
            high-performance web applications.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 3,
              lineHeight: 1.6,
            }}
          >
            3+ years of React expertise, team leadership experience, and a
            passion for creating exceptional user experiences. Focused on
            business value through technical excellence.
          </Typography>

          {/* Compact stats */}
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}
          >
            {keyStats.map((stat, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: stat.color,
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.7rem" }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Compact achievement chips */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <Chip
              label="25+ Projects"
              size="small"
              sx={{
                background: "#4caf50",
                color: "white",
                fontSize: "0.7rem",
                height: 24,
              }}
            />
            <Chip
              label="98% Satisfaction"
              size="small"
              sx={{
                background: "#4a90e2",
                color: "white",
                fontSize: "0.7rem",
                height: 24,
              }}
            />
            <Chip
              label="On-Time Delivery"
              size="small"
              sx={{
                background: "#d81b60",
                color: "white",
                fontSize: "0.7rem",
                height: 24,
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  }

  // Desktop layout (unchanged)
  return (
    <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
      <Grid size={{ xs: 12, lg: 8 }}>
        <Box sx={{ py: isMobile ? 2 : 4 }}>
          <Typography
            variant={isMobile ? "h3" : "h1"}
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Skills & Expertise
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
            Senior Frontend Developer with proven track record of delivering
            high-performance web applications
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 3,
              lineHeight: 1.6,
            }}
          >
            3+ years of React expertise, team leadership experience, and a
            passion for creating exceptional user experiences. Focused on
            business value through technical excellence.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            <Chip
              icon={<CheckCircleIcon />}
              label="25+ Projects Delivered"
              sx={{
                background: "#4caf50",
                color: "white",
                fontWeight: 600,
              }}
            />
            <Chip
              icon={<StarIcon />}
              label="98% Client Satisfaction"
              sx={{
                background: "#4a90e2",
                color: "white",
                fontWeight: 600,
              }}
            />
            <Chip
              icon={<TrendingUpIcon />}
              label="100% On-Time Delivery"
              sx={{
                background: "#d81b60",
                color: "white",
                fontWeight: 600,
              }}
            />
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, lg: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
            background:
              "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(216, 27, 96, 0.05) 100%)",
            borderRadius: 4,
            border: "1px solid rgba(74, 144, 226, 0.2)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, textAlign: "center", mb: 2 }}
          >
            Key Metrics
          </Typography>

          {keyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                  borderRadius: 2,
                  background: `${stat.color}10`,
                  border: `1px solid ${stat.color}20`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: `${stat.color}15`,
                    borderColor: `${stat.color}40`,
                    transform: "translateX(5px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {stat.label}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: stat.color,
                  }}
                >
                  {stat.value}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default SkillsHero;
