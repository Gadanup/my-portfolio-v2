// components/resume/ExperienceCard.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const ExperienceCard = ({ job, isMobile, isLast }) => {
  return (
    <Box
      sx={{
        display: "flex",
        mb: isLast ? 0 : 4,
        position: "relative",
      }}
    >
      {/* Timeline Dot */}
      <Box
        sx={{
          width: isMobile ? 40 : 60,
          height: isMobile ? 40 : 60,
          borderRadius: "50%",
          background: job.current
            ? "linear-gradient(135deg, #4caf50 0%, #45a049 100%)"
            : job.companyColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          mr: 3,
          zIndex: 1,
          border: "3px solid #1a1a1a",
        }}
      >
        <BusinessIcon sx={{ color: "white", fontSize: isMobile ? 20 : 24 }} />
      </Box>

      {/* Job Content */}
      <Card
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: job.companyColor,
            boxShadow: `0 8px 25px rgba(0, 0, 0, 0.3)`,
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                {job.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: job.companyColor,
                  fontWeight: 500,
                }}
              >
                {job.company}
              </Typography>
            </Box>
            {job.current && (
              <Chip
                label="Current"
                size="small"
                sx={{
                  background: "#4caf50",
                  color: "white",
                  fontWeight: 500,
                }}
              />
            )}
          </Box>

          {/* Period and Location */}
          <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <CalendarTodayIcon
                sx={{ fontSize: 16, color: "text.secondary" }}
              />
              <Typography variant="body2" color="text.secondary">
                {job.period}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOnIcon sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {job.location}
              </Typography>
            </Box>
          </Box>

          {/* Responsibilities */}
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
            Key Responsibilities:
          </Typography>
          <List sx={{ py: 0 }}>
            {job.responsibilities.map((responsibility, idx) => (
              <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: job.companyColor,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={responsibility}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: { lineHeight: 1.5 },
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* Technologies */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
              Technologies:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {job.technologies.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  size="small"
                  sx={{
                    background: `${job.companyColor}20`,
                    color: job.companyColor,
                    border: `1px solid ${job.companyColor}40`,
                    fontSize: "0.75rem",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Achievements */}
          {job.achievements.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Key Achievements:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {job.achievements.map((achievement, idx) => (
                  <Chip
                    key={idx}
                    label={achievement}
                    size="small"
                    icon={<EmojiEventsIcon />}
                    sx={{
                      background:
                        "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)",
                      color: "#4caf50",
                      border: "1px solid rgba(76, 175, 80, 0.3)",
                      fontSize: "0.75rem",
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExperienceCard;
