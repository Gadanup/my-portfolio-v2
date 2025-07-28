// components/skills/ProfessionalSkills.jsx

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
import { useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import CommunicationIcon from "@mui/icons-material/Forum";
import LeadershipIcon from "@mui/icons-material/TrendingUp";
import ProblemSolvingIcon from "@mui/icons-material/Psychology";
import AdaptabilityIcon from "@mui/icons-material/AutoAwesome";
import TimeManagementIcon from "@mui/icons-material/Schedule";

const ProfessionalSkills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const professionalSkills = [
    {
      name: "Team Collaboration",
      icon: <GroupIcon />,
      color: "#4caf50",
      emoji: "🤝",
      strength: "Core Strength",
      description:
        "Working effectively with cross-functional teams, sharing knowledge, and contributing to team success.",
      highlights: [
        "Cross-team coordination",
        "Knowledge sharing sessions",
        "Pair programming advocate",
        "Code review leadership",
      ],
    },
    {
      name: "Communication",
      icon: <CommunicationIcon />,
      color: "#4a90e2",
      emoji: "💬",
      strength: "Core Strength",
      description:
        "Clear technical communication with both technical and non-technical stakeholders.",
      highlights: [
        "Client presentations",
        "Technical documentation",
        "Mentoring developers",
        "Project stakeholder updates",
      ],
    },
    {
      name: "Problem Solving",
      icon: <ProblemSolvingIcon />,
      color: "#9c27b0",
      emoji: "🧩",
      strength: "Core Strength",
      description:
        "Analytical thinking and creative solutions to complex technical challenges.",
      highlights: [
        "Complex bug resolution",
        "Architecture decisions",
        "Performance optimization",
        "User experience solutions",
      ],
    },
    {
      name: "Leadership & Mentoring",
      icon: <LeadershipIcon />,
      color: "#d81b60",
      emoji: "🎯",
      strength: "Growing Strength",
      description:
        "Guiding junior developers and leading technical initiatives within the team.",
      highlights: [
        "Junior developer mentoring",
        "Technical guidance",
        "Project coordination",
        "Best practices advocacy",
      ],
    },
    {
      name: "Adaptability",
      icon: <AdaptabilityIcon />,
      color: "#ff9800",
      emoji: "🔄",
      strength: "Core Strength",
      description:
        "Quick adaptation to new technologies, changing requirements, and evolving project needs.",
      highlights: [
        "Rapid framework adoption",
        "Agile methodology expert",
        "Remote collaboration",
        "Technology migration lead",
      ],
    },
    {
      name: "Time Management",
      icon: <TimeManagementIcon />,
      color: "#607d8b",
      emoji: "⏰",
      strength: "Developed Skill",
      description:
        "Efficient project planning, deadline management, and prioritization of tasks.",
      highlights: [
        "Sprint planning expertise",
        "Multi-project coordination",
        "Consistent deadline delivery",
        "Priority-based task management",
      ],
    },
  ];

  const getStrengthStyle = (strength) => {
    switch (strength) {
      case "Core Strength":
        return {
          background: "linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)",
          icon: "💎",
        };
      case "Growing Strength":
        return {
          background: "linear-gradient(135deg, #4a90e2 0%, #64b5f6 100%)",
          icon: "🌟",
        };
      case "Developed Skill":
        return {
          background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)",
          icon: "⚡",
        };
      default:
        return {
          background: "linear-gradient(135deg, #9e9e9e 0%, #bdbdbd 100%)",
          icon: "📈",
        };
    }
  };

  // Mobile: Simple grid layout
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
          Professional Skills
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
          Beyond technical expertise, these capabilities enable effective
          collaboration
        </Typography>

        {/* Simple 2-column grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1.5,
          }}
        >
          {professionalSkills.map((skill, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                p: 1.5,
                background: `${skill.color}08`,
                borderRadius: 2,
                border: `1px solid ${skill.color}15`,
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1.5rem", mb: 0.5 }}>
                {skill.emoji}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: skill.color,
                  fontSize: "0.75rem",
                  textAlign: "center",
                  lineHeight: 1.1,
                  mb: 0.5,
                }}
              >
                {skill.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.65rem",
                  color: "text.secondary",
                  textAlign: "center",
                }}
              >
                {skill.strength}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  // Desktop layout (unchanged)
  return (
    <Box sx={{ mb: 6 }}>
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
        <GroupIcon sx={{ color: "primary.main" }} />
        Professional Skills
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Beyond technical expertise, these professional capabilities enable
        effective collaboration and leadership in modern development teams.
      </Typography>

      <Grid container spacing={3}>
        {professionalSkills.map((skill, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <motion.div
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: "100%",
                  background: `linear-gradient(135deg, ${skill.color}08 0%, ${skill.color}03 100%)`,
                  border: `1px solid ${skill.color}20`,
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    borderColor: `${skill.color}60`,
                    boxShadow: `0 12px 40px ${skill.color}20`,
                    "& .skill-emoji": {
                      transform: "scale(1.3) rotate(10deg)",
                    },
                    "& .skill-highlights": {
                      maxHeight: "200px",
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Strength Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: getStrengthStyle(skill.strength).background,
                    color: "white",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <span>{getStrengthStyle(skill.strength).icon}</span>
                  {skill.strength}
                </Box>

                <CardContent sx={{ p: 3, pt: 5 }}>
                  {/* Skill Header */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      className="skill-emoji"
                      sx={{
                        fontSize: "2.5rem",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {skill.emoji}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {skill.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            p: 0.5,
                            borderRadius: 1,
                            background: `linear-gradient(135deg, ${skill.color} 0%, ${skill.color}cc 100%)`,
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {skill.icon}
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.5,
                      mb: 2,
                    }}
                  >
                    {skill.description}
                  </Typography>

                  {/* Highlights - Show on Hover */}
                  <Box
                    className="skill-highlights"
                    sx={{
                      maxHeight: 0,
                      opacity: 0,
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                      pt: 1,
                      borderTop: `1px solid ${skill.color}20`,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: skill.color,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                        mb: 1,
                        display: "block",
                      }}
                    >
                      Key Applications:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {skill.highlights.map((highlight, highlightIndex) => (
                        <Typography
                          key={highlightIndex}
                          variant="caption"
                          sx={{
                            background: `${skill.color}15`,
                            color: skill.color,
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: "0.7rem",
                            fontWeight: 500,
                            lineHeight: 1.2,
                          }}
                        >
                          {highlight}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProfessionalSkills;
