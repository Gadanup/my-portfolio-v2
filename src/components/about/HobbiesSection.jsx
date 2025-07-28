// components/about/HobbiesSection.jsx

"use client";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { hobbiesAndInterests } from "../../data/aboutData";

const HobbiesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Mobile: Simple uniform grid
  if (isMobile) {
    return (
      <Card sx={{ height: "100%" }}>
        <CardContent sx={{ p: 2.5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              textAlign: "center",
              color: "secondary.main",
            }}
          >
            Hobbies & Interests
          </Typography>

          {/* Simple 3x2 grid with uniform sizing */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
            }}
          >
            {hobbiesAndInterests.map((hobby, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  p: 1.5,
                  background: "rgba(216, 27, 96, 0.05)",
                  borderRadius: 1.5,
                  border: "1px solid rgba(216, 27, 96, 0.1)",
                  aspectRatio: "1", // Perfect squares
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "80px", // Ensures uniform height
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.5rem",
                    mb: 0.5,
                  }}
                >
                  {hobby.icon}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600,
                    color: "#d81b60",
                    fontSize: "0.7rem",
                    textAlign: "center",
                    lineHeight: 1.1,
                  }}
                >
                  {hobby.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    );
  }

  // Desktop layout (unchanged)
  return (
    <Card sx={{ height: "100%", p: 3 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 3,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <FavoriteIcon sx={{ color: "primary.main" }} />
        Hobbies & Interests
      </Typography>

      <Grid container spacing={2}>
        {hobbiesAndInterests.map((hobby, index) => (
          <Grid size={{ xs: 6, sm: 4, lg: 6 }} key={index}>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(216, 27, 96, 0.05) 0%, rgba(216, 27, 96, 0.02) 100%)",
                  border: "1px solid rgba(216, 27, 96, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  height: "100%",
                  perspective: "1000px",
                  "&:hover": {
                    borderColor: "#d81b60",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 30px rgba(216, 27, 96, 0.2)",
                    "& .hobby-icon": {
                      transform: "scale(1.2) rotate(10deg)",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 2.5, textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1.5,
                      transition: "all 0.3s ease",
                    }}
                    className="hobby-icon"
                  >
                    {hobby.icon}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      color: "#d81b60",
                    }}
                  >
                    {hobby.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.4,
                      display: "block",
                      mb: 0.5,
                    }}
                  >
                    {hobby.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "0.65rem",
                      color: "text.disabled",
                      fontStyle: "italic",
                    }}
                  >
                    {hobby.detail}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default HobbiesSection;
