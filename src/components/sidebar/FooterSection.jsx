// components/sidebar/FooterSection.jsx

"use client";
import { Box, Typography, Chip } from "@mui/material";
import { personalInfo, contactInfo } from "../../data/navigationData";

const FooterSection = () => {
  return (
    <Box
      sx={{
        p: 2,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Status and Location Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          px: 1,
        }}
      >
        {/* Status */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#4caf50",
              boxShadow: "0 0 6px rgba(76, 175, 80, 0.5)",
              animation: "pulse 2s infinite",
              "@keyframes pulse": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0.5 },
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontSize: "0.7rem",
            }}
          >
            Available Now
          </Typography>
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            fontSize: "0.7rem",
            opacity: 0.7,
          }}
        >
          Made with ❤️ in Portugal
        </Typography>
      </Box>

      {/* Copyright and Made with */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            fontSize: "0.75rem",
            display: "block",
            mb: 0.25,
          }}
        >
          {personalInfo.copyright}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterSection;
