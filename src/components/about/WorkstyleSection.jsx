// components/about/WorkStyleSection.jsx

"use client";
import { Box, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import GroupIcon from "@mui/icons-material/Group";
import { workStyleTraits } from "../../data/aboutData";

const WorkStyleSection = () => {
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
        <GroupIcon sx={{ color: "primary.main" }} />
        Work Style & Personality
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {workStyleTraits.map((trait, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                p: 2,
                borderRadius: 2,
                background: `${trait.color}08`,
                border: `1px solid ${trait.color}20`,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: `${trait.color}15`,
                  borderColor: `${trait.color}40`,
                },
              }}
            >
              <Typography variant="h5" sx={{ mt: 0.5 }}>
                {trait.icon}
              </Typography>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    color: trait.color,
                  }}
                >
                  {trait.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.5 }}
                >
                  {trait.description}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Card>
  );
};

export default WorkStyleSection;
