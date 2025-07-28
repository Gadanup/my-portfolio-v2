// components/resume/CertificationsSection.jsx

"use client";
import { Typography, Card, CardContent, Box, Button } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LaunchIcon from "@mui/icons-material/Launch";
import { certifications } from "../../data/resumeData";

const CertificationsSection = () => {
  return (
    <Box sx={{ mb: 4, mt: 3 }}>
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
        <EmojiEventsIcon sx={{ color: "primary.main" }} />
        Certifications
      </Typography>

      {certifications.map((cert) => (
        <Card
          key={cert.id}
          sx={{
            mb: 2,
            background:
              "linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.02) 100%)",
            border: "1px solid rgba(76, 175, 80, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: "#4caf50",
              transform: "translateY(-2px)",
            },
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
              <Typography variant="h6" sx={{ fontSize: "1.5rem" }}>
                {cert.logo}
              </Typography>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, lineHeight: 1.2 }}
                >
                  {cert.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cert.issuer} • {cert.date}
                </Typography>
              </Box>
            </Box>
            <Button
              size="small"
              startIcon={<LaunchIcon />}
              href={cert.verifyUrl}
              target="_blank"
              sx={{ mt: 1, fontSize: "0.75rem" }}
            >
              Verify
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CertificationsSection;
