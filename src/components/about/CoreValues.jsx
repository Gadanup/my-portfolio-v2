// components/about/CoreValues.jsx

"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { coreValues } from "../../data/aboutData";

const CoreValues = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {coreValues.map((value, index) => (
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
              background: "rgba(74, 144, 226, 0.05)",
              border: "1px solid rgba(74, 144, 226, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(74, 144, 226, 0.1)",
                borderColor: "rgba(74, 144, 226, 0.3)",
              },
            }}
          >
            <Box sx={{ color: value.color, mt: 0.5 }}>{value.icon}</Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                {value.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {value.description}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default CoreValues;
