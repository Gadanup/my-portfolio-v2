"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import { languages } from "../../data/resumeData";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSection = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 3,
          mt: 4,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <LanguageIcon sx={{ color: "primary.main" }} />
        Languages
      </Typography>

      <Card
        sx={{
          background:
            "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(216, 27, 96, 0.1) 100%)",
          border: "1px solid rgba(74, 144, 226, 0.3)",
        }}
      >
        <CardContent sx={{ p: 2.5 }}>
          {languages.map((language, index) => (
            <Box
              key={index}
              sx={{ mb: index === languages.length - 1 ? 0 : 2.5 }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}
              >
                <Typography variant="h6" sx={{ fontSize: "1.5rem" }}>
                  {language.flag}
                </Typography>
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {language.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: language.color,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        fontSize: "0.7rem",
                      }}
                    >
                      {language.level}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={language.proficiency}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: language.color,
                        borderRadius: 3,
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default LanguageSection;
