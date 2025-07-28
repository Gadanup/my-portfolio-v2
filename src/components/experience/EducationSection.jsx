// components/resume/EducationSection.jsx

"use client";
import { Typography, Card, CardContent, Box, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { education } from "../../data/resumeData";

const EducationSection = () => {
  return (
    <Box sx={{ mt: 6 }}>
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
        <SchoolIcon sx={{ color: "primary.main" }} />
        Education
      </Typography>

      {education.map((edu) => (
        <Card
          key={edu.id}
          sx={{
            mb: 3,
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: "primary.main",
              boxShadow: "0 8px 25px rgba(74, 144, 226, 0.3)",
            },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {edu.degree}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "primary.main", fontWeight: 500, mb: 1 }}
            >
              {edu.institution}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
              <Typography variant="body2" color="text.secondary">
                {edu.period}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.location}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#4caf50", fontWeight: 500 }}
              >
                {edu.grade}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <strong>Relevant Coursework:</strong> {edu.coursework.join(", ")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {edu.achievements.map((achievement, idx) => (
                <Chip
                  key={idx}
                  label={achievement}
                  size="small"
                  icon={<EmojiEventsIcon />}
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0.05) 100%)",
                    color: "#ffc107",
                    border: "1px solid rgba(255, 193, 7, 0.3)",
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default EducationSection;
