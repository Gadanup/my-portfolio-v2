// components/about/DeveloperStatusCard.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { developerStatusCard } from "../../data/aboutData";

const DeveloperStatusCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        height: isMobile ? 160 : 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        mt: isMobile ? 2 : 0,
        px: isMobile ? 1 : 0,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{ width: "100%" }}
      >
        <Card
          sx={{
            background: "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)",
            border: "1px solid rgba(74, 144, 226, 0.3)",
            borderRadius: 3,
            p: isMobile ? 2 : 2.5,
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              borderColor: "#4a90e2",
              boxShadow: "0 8px 25px rgba(74, 144, 226, 0.3)",
            },
          }}
        >
          {/* Background Code Animation */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              opacity: 0.05,
              fontSize: isMobile ? "0.7rem" : "0.8rem",
              fontFamily: "monospace",
              color: "#4a90e2",
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ padding: "10px" }}
            >
              {developerStatusCard.backgroundCode}
            </motion.div>
          </Box>

          {/* Main Content */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* Header Row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: isMobile ? 1.5 : 2,
              }}
            >
              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{
                  fontWeight: 700,
                  color: "#4a90e2",
                  fontSize: isMobile ? "1rem" : "1.2rem",
                }}
              >
                {developerStatusCard.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: isMobile ? 1 : 1.5,
                  py: 0.3,
                  borderRadius: 15,
                  background: "rgba(76, 175, 80, 0.15)",
                  border: "1px solid rgba(76, 175, 80, 0.3)",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Box
                    sx={{
                      width: isMobile ? 6 : 8,
                      height: isMobile ? 6 : 8,
                      borderRadius: "50%",
                      backgroundColor: developerStatusCard.status.color,
                    }}
                  />
                </motion.div>
                <Typography
                  variant="caption"
                  sx={{
                    color: developerStatusCard.status.color,
                    fontWeight: 600,
                    fontSize: isMobile ? "0.65rem" : "0.75rem",
                  }}
                >
                  {developerStatusCard.status.label}
                </Typography>
              </Box>
            </Box>

            {/* Stats Grid */}
            <Grid container spacing={isMobile ? 1 : 1.5}>
              {developerStatusCard.stats.map((stat, index) => (
                <Grid size={4} key={index}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: isMobile ? 1 : 1.5,
                      borderRadius: 2,
                      background: `rgba(${
                        stat.color === "#4a90e2"
                          ? "74, 144, 226"
                          : stat.color === "#d81b60"
                          ? "216, 27, 96"
                          : "76, 175, 80"
                      }, 0.1)`,
                      border: `1px solid rgba(${
                        stat.color === "#4a90e2"
                          ? "74, 144, 226"
                          : stat.color === "#d81b60"
                          ? "216, 27, 96"
                          : "76, 175, 80"
                      }, 0.2)`,
                    }}
                  >
                    <motion.div
                      animate={stat.animation}
                      transition={{
                        duration: stat.animation.rotate
                          ? 4
                          : stat.animation.scale
                          ? 3
                          : 1.5,
                        repeat: Infinity,
                        ease: stat.animation.rotate ? "linear" : "easeInOut",
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: isMobile ? "1.5rem" : "2rem",
                          mb: 0.5,
                        }}
                      >
                        {stat.icon}
                      </Typography>
                    </motion.div>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        color: stat.color,
                        fontSize: isMobile ? "0.65rem" : "0.75rem",
                        display: "block",
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: stat.color,
                        fontWeight: 700,
                        fontSize: isMobile ? "1rem" : "1.2rem",
                      }}
                    >
                      {stat.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Bottom Status */}
            <Box
              sx={{
                mt: isMobile ? 1.5 : 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontStyle: "italic",
                  fontSize: isMobile ? "0.65rem" : "0.75rem",
                }}
              >
                {developerStatusCard.bottomText}
              </Typography>
            </Box>
          </Box>
        </Card>
      </motion.div>
    </Box>
  );
};

export default DeveloperStatusCard;
