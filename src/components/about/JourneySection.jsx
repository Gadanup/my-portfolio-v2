// components/about/JourneySection.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import CoreValues from "./CoreValues";
import { journeyContent } from "../../data/aboutData";

const JourneySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Mobile: Simple single column layout
  if (isMobile) {
    return (
      <Box sx={{ mb: 3 }}>
        <Card sx={{ p: 2.5, borderRadius: 2 }}>
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              textAlign: "center",
              color: "primary.main",
            }}
          >
            {journeyContent.title}
          </Typography>

          {/* Journey Text - Condensed */}
          <Box sx={{ mb: 2.5 }}>
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.6,
                color: "text.secondary",
                textAlign: "center",
              }}
            >
              My journey into frontend development started with curiosity about
              how websites work. Over 3+ years, I've specialized in React and
              modern JavaScript, building everything from responsive landing
              pages to complex web applications.
            </Typography>
          </Box>

          <Divider sx={{ my: 2, borderColor: "rgba(255, 255, 255, 0.1)" }} />

          {/* Core Values - Simple Grid */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 1.5,
              textAlign: "center",
              color: "secondary.main",
            }}
          >
            Core Values
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
            }}
          >
            {[
              { title: "Clean Code", icon: "💻" },
              { title: "User First", icon: "❤️" },
              { title: "Performance", icon: "⚡" },
              { title: "Team Player", icon: "🤝" },
            ].map((value, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  p: 1.5,
                  background: "rgba(74, 144, 226, 0.05)",
                  borderRadius: 1.5,
                  border: "1px solid rgba(74, 144, 226, 0.1)",
                }}
              >
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  {value.icon}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    fontSize: "0.75rem",
                  }}
                >
                  {value.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    );
  }

  // Desktop layout (unchanged)
  return (
    <Card sx={{ mb: 6, p: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 4,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <SchoolIcon sx={{ color: "primary.main" }} />
        {journeyContent.title}
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 600, color: "primary.main" }}
            >
              {journeyContent.sections[0].title}
            </Typography>
            {journeyContent.sections[0].content.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ mb: 3, lineHeight: 1.7 }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 600, color: "primary.main" }}
            >
              {journeyContent.sections[1].title}
            </Typography>
            <CoreValues />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          lineHeight: 1.7,
          fontStyle: "italic",
        }}
      >
        {journeyContent.bottomText}
      </Typography>
    </Card>
  );
};

export default JourneySection;
