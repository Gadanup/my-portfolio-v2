// components/skills/ValueProposition.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonIcon from "@mui/icons-material/Person";
import { skillsData } from "../../data/skillsData";

const ValueProposition = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const propositionSections = [
    {
      icon: <CodeIcon />,
      title: "Technical Skills",
      color: "#4a90e2",
      emoji: "⚡",
      points: skillsData.valueProposition.technical,
    },
    {
      icon: <SpeedIcon />,
      title: "Delivery & Quality",
      color: "#4caf50",
      emoji: "🎯",
      points: skillsData.valueProposition.delivery,
    },
    {
      icon: <PersonIcon />,
      title: "Professional Growth",
      color: "#d81b60",
      emoji: "🚀",
      points: skillsData.valueProposition.professional,
    },
  ];

  // Mobile: Simple accordion-style layout
  if (isMobile) {
    return (
      <Box sx={{ mb: 4 }}>
        <Card sx={{ p: 2.5, borderRadius: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              textAlign: "center",
              color: "primary.main",
            }}
          >
            What I Bring to Your Team
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 3,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Ready to contribute with modern skills, reliable delivery, and a
            passion for growth
          </Typography>

          {/* Mobile: Simple vertical list */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {propositionSections.map((section, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  background: `${section.color}08`,
                  borderRadius: 2,
                  border: `1px solid ${section.color}15`,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1.5,
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1.5rem" }}>
                    {section.emoji}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: section.color,
                    }}
                  >
                    {section.title}
                  </Typography>
                </Box>

                {/* Show only first 2 points on mobile */}
                <Box>
                  {section.points.slice(0, 2).map((point, pointIndex) => (
                    <Typography
                      key={pointIndex}
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        display: "block",
                        mb: 0.5,
                        lineHeight: 1.4,
                        fontSize: "0.75rem",
                      }}
                    >
                      • {point}
                    </Typography>
                  ))}
                  {section.points.length > 2 && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: section.color,
                        fontStyle: "italic",
                        fontSize: "0.7rem",
                      }}
                    >
                      +{section.points.length - 2} more strengths
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    );
  }

  // Desktop layout
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          background:
            "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(216, 27, 96, 0.05) 100%)",
          border: "1px solid rgba(74, 144, 226, 0.2)",
          mt: 6,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 4,
              textAlign: "center",
              color: "text.primary",
            }}
          >
            What I Bring to Your Team
          </Typography>

          <Grid container spacing={4}>
            {propositionSections.map((section, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Box sx={{ color: section.color, fontSize: "3rem", mb: 2 }}>
                      {section.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: section.color,
                        mb: 2,
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "left" }}>
                    {section.points.map((point, pointIndex) => (
                      <Typography
                        key={pointIndex}
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1.5, lineHeight: 1.5 }}
                      >
                        • {point}
                      </Typography>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Ready to contribute to your team with modern technical skills,
              reliable delivery, and enthusiasm for continuous learning. Let's
              build something great together.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ValueProposition;
