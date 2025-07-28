// components/contact/ContactHero.jsx

"use client";
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
  Card,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import { contactData } from "../../data/contactData";

const ContactHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { hero } = contactData;

  const iconMap = {
    Email: EmailIcon,
    Phone: PhoneIcon,
    CheckCircle: CheckCircleIcon,
    Download: DownloadIcon,
  };

  if (isMobile) {
    return (
      <Box sx={{ mb: 4 }}>
        {/* Mobile Hero - Compact & Centered */}
        <Box sx={{ textAlign: "left", py: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            {hero.title}
          </Typography>

          <Typography
            variant={isMobile ? "h6" : "h4"}
            sx={{
              color: "text.primary",
              mb: 3,
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            {hero.subtitle}
          </Typography>

          {/* Status Indicator - Mobile */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Card
              sx={{
                p: 2,
                mb: 3,
                background:
                  "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)",
                border: "1px solid rgba(76, 175, 80, 0.3)",
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#4caf50",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, color: "#4caf50" }}
                >
                  Available for Opportunities
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                Open to full-time positions & freelance projects
              </Typography>
            </Card>
          </motion.div>

          {/* Quick Actions - Mobile Stack */}
          <Stack spacing={2} sx={{ mb: 3 }}>
            <Button
              variant="contained"
              href="mailto:claudio@example.com"
              startIcon={<EmailIcon />}
              fullWidth
              sx={{
                background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Send Email
            </Button>
            <Button
              variant="outlined"
              href="tel:+351912345678"
              startIcon={<PhoneIcon />}
              fullWidth
              sx={{
                borderColor: "primary.main",
                color: "primary.main",
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Call Now
            </Button>
          </Stack>

          {/* Compact Chips */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Chip
              label="Responds within 24h"
              size="small"
              sx={{
                borderColor: "primary.main",
                color: "primary.main",
                fontSize: "0.75rem",
              }}
              variant="outlined"
            />
            <Chip
              label="3+ Years Experience"
              size="small"
              sx={{
                borderColor: "primary.main",
                color: "primary.main",
                fontSize: "0.75rem",
              }}
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>
    );
  }

  // Desktop version (unchanged)
  return (
    <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
      <Grid size={{ xs: 12, lg: 8 }}>
        <Box sx={{ py: 4 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            {hero.title}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "text.primary",
              mb: 3,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            {hero.subtitle}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {hero.chips.map((chip, index) => {
              const IconComponent = chip.icon ? iconMap[chip.icon] : null;
              return (
                <Chip
                  key={index}
                  icon={IconComponent ? <IconComponent /> : undefined}
                  label={chip.label}
                  sx={
                    chip.type === "success"
                      ? {
                          background:
                            "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
                          color: "white",
                          fontWeight: 500,
                        }
                      : {
                          borderColor: "primary.main",
                          color: "primary.main",
                        }
                  }
                  variant={chip.type === "outlined" ? "outlined" : "filled"}
                />
              );
            })}
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {hero.quickActions.map((action, index) => {
              const IconComponent = iconMap[action.icon];
              return (
                <Button
                  key={index}
                  variant={action.type}
                  href={action.href}
                  startIcon={<IconComponent />}
                  sx={
                    action.type === "contained"
                      ? {
                          background:
                            "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                          px: 3,
                          py: 1.5,
                        }
                      : {
                          borderColor: "primary.main",
                          color: "primary.main",
                          px: 3,
                          py: 1.5,
                        }
                  }
                >
                  {action.label}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, lg: 4 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card
            sx={{
              p: 3,
              background:
                "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(216, 27, 96, 0.1) 100%)",
              border: "1px solid rgba(74, 144, 226, 0.3)",
              borderRadius: 4,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#4caf50",
                  }}
                />
              </motion.div>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#4caf50" }}
              >
                Open to Opportunities
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Ready for My Next Role
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, lineHeight: 1.6 }}
            >
              Actively seeking frontend development opportunities with
              innovative teams or projects.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Button
                variant="outlined"
                href="mailto:claudio@example.com"
                startIcon={<EmailIcon />}
                size="small"
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  px: 3,
                  py: 1,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  "&:hover": {
                    background: "rgba(74, 144, 226, 0.1)",
                    borderColor: "primary.light",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Get in Touch
              </Button>
            </Box>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 2, display: "block", fontStyle: "italic" }}
            >
              Available for full-time positions or freelance projects.
            </Typography>
          </Card>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ContactHero;
