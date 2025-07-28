// components/contact/ContactInfo.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { contactData } from "../../data/contactData";

const ContactInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { contactInfo } = contactData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const iconMap = {
    Email: EmailIcon,
    Phone: PhoneIcon,
    LocationOn: LocationOnIcon,
    AccessTime: AccessTimeIcon,
    LinkedIn: LinkedInIcon,
    GitHub: GitHubIcon,
    Twitter: TwitterIcon,
  };

  // Copy email to clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("claudio@example.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  // Handle contact actions
  const handleContactAction = (method) => {
    if (method.action === "copy") {
      handleCopyEmail();
    } else if (method.action === "call") {
      window.open(`tel:${method.value}`);
    }
  };

  if (isMobile) {
    return (
      <Box sx={{ mb: 3 }}>
        {/* Contact Methods - Mobile Row Cards */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          Quick Contact
        </Typography>

        <Box sx={{ mb: 3 }}>
          {contactInfo.methods.map((method, index) => {
            const IconComponent = iconMap[method.icon];
            return (
              <motion.div
                key={index}
                whileTap={{ scale: 0.98 }}
                style={{ marginBottom: 8 }}
              >
                <Card
                  sx={{
                    p: 2,
                    cursor: method.action !== "none" ? "pointer" : "default",
                    background: "rgba(74, 144, 226, 0.05)",
                    border: "1px solid rgba(74, 144, 226, 0.1)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    "&:hover": {
                      background:
                        method.action !== "none"
                          ? "rgba(74, 144, 226, 0.1)"
                          : "rgba(74, 144, 226, 0.05)",
                      borderColor:
                        method.action !== "none"
                          ? "rgba(74, 144, 226, 0.3)"
                          : "rgba(74, 144, 226, 0.1)",
                      transform:
                        method.action !== "none" ? "translateY(-2px)" : "none",
                    },
                  }}
                  onClick={() => handleContactAction(method)}
                >
                  <Box sx={{ color: method.color }}>
                    <IconComponent />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {method.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {method.value}
                    </Typography>
                  </Box>
                  {method.action === "copy" && (
                    <Box sx={{ minWidth: 24 }}>
                      {copiedEmail ? (
                        <CheckCircleIcon
                          sx={{ color: "success.main", fontSize: 20 }}
                        />
                      ) : (
                        <ContentCopyIcon
                          sx={{ color: "text.secondary", fontSize: 18 }}
                        />
                      )}
                    </Box>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    );
  }

  // Desktop version (unchanged)
  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        {contactInfo.title}
      </Typography>

      <Box sx={{ mb: 4 }}>
        {contactInfo.methods.map((method, index) => {
          const IconComponent = iconMap[method.icon];
          return (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  background: "rgba(74, 144, 226, 0.05)",
                  border: "1px solid rgba(74, 144, 226, 0.1)",
                  cursor: method.action !== "none" ? "pointer" : "default",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background:
                      method.action !== "none"
                        ? "rgba(74, 144, 226, 0.1)"
                        : "rgba(74, 144, 226, 0.05)",
                    borderColor:
                      method.action !== "none"
                        ? "rgba(74, 144, 226, 0.3)"
                        : "rgba(74, 144, 226, 0.1)",
                  },
                }}
                onClick={() => handleContactAction(method)}
              >
                <Box sx={{ color: method.color }}>
                  <IconComponent />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {method.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {method.value}
                  </Typography>
                </Box>
                {method.action === "copy" && (
                  <Tooltip
                    title={copiedEmail ? "Copied!" : "Copy to clipboard"}
                  >
                    <IconButton size="small">
                      {copiedEmail ? (
                        <CheckCircleIcon color="success" />
                      ) : (
                        <ContentCopyIcon />
                      )}
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
            </motion.div>
          );
        })}
      </Box>

      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Follow Me
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        {contactInfo.socialLinks.map((social, index) => {
          const IconComponent = iconMap[social.icon];
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Tooltip title={social.label}>
                <IconButton
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: `${social.color}20`,
                    border: `1px solid ${social.color}40`,
                    color: social.color,
                    "&:hover": {
                      background: `${social.color}30`,
                      borderColor: social.color,
                    },
                  }}
                >
                  <IconComponent />
                </IconButton>
              </Tooltip>
            </motion.div>
          );
        })}
      </Box>
    </Card>
  );
};

export default ContactInfo;
