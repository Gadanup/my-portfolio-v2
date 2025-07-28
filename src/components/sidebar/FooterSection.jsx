// components/sidebar/FooterSection.jsx

"use client";
import { Box, Typography } from "@mui/material";
import { personalInfo } from "../../data/navigationData";

const FooterSection = () => {
  return (
    <Box
      sx={{
        p: 2,
        textAlign: "center",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        {personalInfo.copyright}
      </Typography>
    </Box>
  );
};

export default FooterSection;
