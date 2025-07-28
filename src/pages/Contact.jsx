// Contact.jsx

"use client";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import WorkingPreferences from "../components/contact/WorkingPreferences";
import ContactFAQ from "../components/contact/ContactFAQ";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (isMobile) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ p: 2, maxWidth: "600px", mx: "auto", overflow: "hidden" }}>
          {/* Hero Section */}
          <motion.div variants={itemVariants}>
            <ContactHero />
          </motion.div>

          {/* Contact Form - Full Width on Mobile */}
          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>

          {/* Contact Info - Compact */}
          <motion.div variants={itemVariants}>
            <ContactInfo />
          </motion.div>

          {/* Working Preferences - Grid */}
          <motion.div variants={itemVariants}>
            <WorkingPreferences />
          </motion.div>

          {/* FAQ - Reduced */}
          <motion.div variants={itemVariants}>
            <ContactFAQ />
          </motion.div>
        </Box>
      </motion.div>
    );
  }

  // Desktop layout (unchanged)
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Box
        sx={{
          p: 4,
          maxWidth: "1400px",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <ContactHero />
        </motion.div>

        {/* Contact Form and Info */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <ContactForm />
            </Grid>

            {/* Contact Information */}
            <Grid size={{ xs: 12, md: 4 }}>
              <ContactInfo />
            </Grid>
          </Grid>
        </motion.div>

        {/* Working Preferences and FAQ */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4}>
            {/* Working Preferences */}
            <Grid size={{ xs: 12, md: 6 }}>
              <WorkingPreferences />
            </Grid>

            {/* FAQ */}
            <Grid size={{ xs: 12, md: 6 }}>
              <ContactFAQ />
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default ContactSection;
