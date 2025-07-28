// components/about/StatsSection.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "../../data/aboutData";

const StatsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Mobile: Simple horizontal layout
  if (isMobile) {
    return (
      <motion.div variants={itemVariants}>
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
              p: 2,
              background: "rgba(74, 144, 226, 0.05)",
              borderRadius: 2,
              border: "1px solid rgba(74, 144, 226, 0.1)",
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  py: 1.5,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    fontSize: "1.8rem",
                    mb: 0.5,
                  }}
                >
                  <AnimatedCounter value={stat.value} />
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.8rem" }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </motion.div>
    );
  }

  // Desktop layout (unchanged)
  return (
    <motion.div variants={itemVariants}>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 6, lg: 3 }} key={index}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                background:
                  "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%)",
                border: "1px solid rgba(74, 144, 226, 0.2)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box sx={{ color: "primary.main", mb: 1 }}>{stat.icon}</Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 1,
                }}
              >
                <AnimatedCounter value={stat.value} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default StatsSection;
