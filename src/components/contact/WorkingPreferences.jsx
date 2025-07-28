// components/contact/WorkingPreferences.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import SpeedIcon from "@mui/icons-material/Speed";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { contactData } from "../../data/contactData";

const WorkingPreferences = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { workingPreferences } = contactData;

  const iconMap = {
    Work: WorkIcon,
    Group: GroupIcon,
    Speed: SpeedIcon,
    Schedule: ScheduleIcon,
  };

  if (isMobile) {
    return (
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          {workingPreferences.title}
        </Typography>

        <Grid container spacing={2}>
          {workingPreferences.preferences.map((pref, index) => {
            const IconComponent = iconMap[pref.icon];
            return (
              <Grid size={{ xs: 6 }} key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    sx={{
                      p: 2,
                      textAlign: "center",
                      background: "rgba(74, 144, 226, 0.05)",
                      border: "1px solid rgba(74, 144, 226, 0.1)",
                      transition: "all 0.3s ease",
                      height: 100,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      minHeight: 80,
                      "&:hover": {
                        background: "rgba(74, 144, 226, 0.1)",
                        borderColor: "rgba(74, 144, 226, 0.3)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box sx={{ color: "primary.main", mb: 1 }}>
                      <IconComponent />
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {pref.title}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  }

  // Desktop version (unchanged)
  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        {workingPreferences.title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {workingPreferences.preferences.map((pref, index) => {
          const IconComponent = iconMap[pref.icon];
          return (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  background: "rgba(74, 144, 226, 0.05)",
                  border: "1px solid rgba(74, 144, 226, 0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(74, 144, 226, 0.1)",
                    borderColor: "rgba(74, 144, 226, 0.3)",
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mt: 0.5 }}>
                  <IconComponent />
                </Box>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 0.5 }}
                  >
                    {pref.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pref.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Card>
  );
};

export default WorkingPreferences;
