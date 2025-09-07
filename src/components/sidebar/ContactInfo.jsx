// components/sidebar/ContactInfo.jsx

"use client";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { socialLinks, contactInfo } from "../../data/navigationData";

const ContactInfo = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="subtitle2"
        sx={{
          color: "text.secondary",
          mt: 1,
          mb: 2,
          px: 2,
          textTransform: "uppercase",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
        }}
      >
        Contact Info
      </Typography>

      <Box sx={{ px: 2, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 1.5,
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "translateX(4px)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 20,
              height: 20,
              borderRadius: 1,
              background:
                "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%)",
              border: "1px solid rgba(74, 144, 226, 0.2)",
            }}
          >
            <EmailIcon sx={{ fontSize: 12, color: "primary.main" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "0.8rem",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            {contactInfo.email}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "translateX(4px)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 20,
              height: 20,
              borderRadius: 1,
              background:
                "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%)",
              border: "1px solid rgba(74, 144, 226, 0.2)",
            }}
          >
            <PhoneIcon sx={{ fontSize: 12, color: "primary.main" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "0.8rem",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            {contactInfo.phone}
          </Typography>
        </Box>
      </Box>

      {/* Social Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, px: 2 }}>
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Tooltip title={social.label} arrow>
              <IconButton
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%)",
                  border: "1px solid rgba(74, 144, 226, 0.3)",
                  color: "primary.main",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(74, 144, 226, 0.1) 100%)",
                    borderColor: "primary.main",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            </Tooltip>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default ContactInfo;
