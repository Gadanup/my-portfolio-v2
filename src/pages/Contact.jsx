"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useMediaQuery,
  useTheme,
  IconButton,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
  Alert,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import SpeedIcon from "@mui/icons-material/Speed";
import ScheduleIcon from "@mui/icons-material/Schedule";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    timeline: "",
    message: "",
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const subjectOptions = [
    "Project Inquiry",
    "Collaboration Opportunity",
    "Job Opportunity",
    "General Question",
    "Other",
  ];

  const budgetOptions = [
    "Under €5,000",
    "€5,000 - €10,000",
    "€10,000 - €25,000",
    "€25,000+",
    "Discuss Budget",
  ];

  const timelineOptions = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

  const contactMethods = [
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "claudio@example.com",
      action: "copy",
      color: "#4a90e2",
    },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: "+351 912 345 678",
      action: "call",
      color: "#4caf50",
    },
    {
      icon: <LocationOnIcon />,
      label: "Location",
      value: "Pinhal Novo, Portugal",
      action: "none",
      color: "#ff9800",
    },
    {
      icon: <AccessTimeIcon />,
      label: "Timezone",
      value: "GMT+1 (WET)",
      action: "none",
      color: "#9c27b0",
    },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://linkedin.com", color: "#0077b5" },
    { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com", color: "#333" },
    { icon: <TwitterIcon />, label: "Twitter", href: "https://twitter.com", color: "#1da1f2" },
  ];

  const workingPreferences = [
    {
      icon: <WorkIcon />,
      title: "Remote First",
      description: "Comfortable working with distributed teams worldwide",
    },
    {
      icon: <GroupIcon />,
      title: "Collaborative",
      description: "Love working closely with designers and backend developers",
    },
    {
      icon: <SpeedIcon />,
      title: "Agile Approach",
      description: "Prefer iterative development with regular feedback cycles",
    },
    {
      icon: <ScheduleIcon />,
      title: "Flexible Schedule",
      description: "Can adapt to different timezones for team collaboration",
    },
  ];

  const faqData = [
    {
      question: "What's your typical project timeline?",
      answer: "Most projects take 2-8 weeks depending on complexity. I provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I've worked with clients across Europe, North America, and beyond. I'm comfortable with different timezones and use modern collaboration tools to ensure smooth communication.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "My main expertise is in React, Next.js, TypeScript, and modern CSS. I also work with Node.js for full-stack projects and have experience with various design systems and UI libraries.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes! I offer maintenance packages for websites and applications I've built. This includes updates, security patches, performance optimization, and feature additions as needed.",
    },
    {
      question: "What's included in your development process?",
      answer: "I follow a collaborative approach including initial consultation, wireframing/prototyping, development with regular check-ins, testing, deployment, and post-launch support.",
    },
  ];

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject) {
      errors.subject = "Please select a subject";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters long";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        budget: "",
        timeline: "",
        message: "",
      });
      
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: "",
      }));
    }
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box sx={{ p: isMobile ? 2 : 4, maxWidth: "1200px", mx: "auto", overflow: "hidden" }}>
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box sx={{ py: isMobile ? 2 : 4 }}>
                <Typography
                  variant={isMobile ? "h3" : "h1"}
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  Let's Work Together
                </Typography>
                
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  sx={{
                    color: "text.primary",
                    mb: 3,
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}
                >
                  Have a project in mind? Let's discuss how we can bring your ideas to life.
                </Typography>
                
                <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
                  <Chip
                    icon={<CheckCircleIcon />}
                    label="Available for new projects"
                    sx={{
                      background: "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    label="Responds within 24 hours"
                    variant="outlined"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  />
                </Box>
                
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    href="mailto:claudio@example.com"
                    startIcon={<EmailIcon />}
                    sx={{
                      background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                      px: 3,
                      py: 1.5,
                    }}
                  >
                    Send Email
                  </Button>
                  <Button
                    variant="outlined"
                    href="tel:+351912345678"
                    startIcon={<PhoneIcon />}
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                      px: 3,
                      py: 1.5,
                    }}
                  >
                    Call Now
                  </Button>
                </Box>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  height: isMobile ? 200 : 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  mt: isMobile ? 2 : 0,
                }}
              >
                {/* Floating Contact Icons */}
                {["📧", "📱", "💼", "🤝"].map((emoji, index) => (
                  <motion.div
                    key={index}
                    style={{
                      position: "absolute",
                      fontSize: "3rem",
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    sx={{
                      top: `${20 + index * 15}%`,
                      left: `${15 + index * 20}%`,
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
                
                {/* Central Message */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      background: "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(216, 27, 96, 0.1) 100%)",
                      borderRadius: 4,
                      border: "1px solid rgba(74, 144, 226, 0.3)",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Ready to collaborate?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Let's create something amazing together!
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        {/* Contact Form and Info */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Card sx={{ p: 4, height: "100%" }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Send me a message
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        value={formData.name}
                        onChange={handleInputChange("name")}
                        error={!!formErrors.name}
                        helperText={formErrors.name}
                        required
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                        required
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth error={!!formErrors.subject}>
                        <InputLabel>Subject</InputLabel>
                        <Select
                          value={formData.subject}
                          onChange={handleInputChange("subject")}
                          label="Subject"
                          required
                        >
                          {subjectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {formErrors.subject && (
                          <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
                            {formErrors.subject}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Project Budget (Optional)</InputLabel>
                        <Select
                          value={formData.budget}
                          onChange={handleInputChange("budget")}
                          label="Project Budget (Optional)"
                        >
                          {budgetOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <FormControl fullWidth>
                        <InputLabel>Project Timeline (Optional)</InputLabel>
                        <Select
                          value={formData.timeline}
                          onChange={handleInputChange("timeline")}
                          label="Project Timeline (Optional)"
                        >
                          {timelineOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange("message")}
                        error={!!formErrors.message}
                        helperText={formErrors.message || "Tell me about your project, goals, or any questions you have"}
                        required
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
                        sx={{
                          background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                          px: 4,
                          py: 1.5,
                          fontSize: "1rem",
                          fontWeight: 600,
                        }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3, height: "100%" }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  {contactMethods.map((method, index) => (
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
                            background: method.action !== "none" ? "rgba(74, 144, 226, 0.1)" : "rgba(74, 144, 226, 0.05)",
                            borderColor: method.action !== "none" ? "rgba(74, 144, 226, 0.3)" : "rgba(74, 144, 226, 0.1)",
                          },
                        }}
                        onClick={() => handleContactAction(method)}
                      >
                        <Box sx={{ color: method.color }}>
                          {method.icon}
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
                          <Tooltip title={copiedEmail ? "Copied!" : "Copy to clipboard"}>
                            <IconButton size="small">
                              {copiedEmail ? <CheckCircleIcon color="success" /> : <ContentCopyIcon />}
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </motion.div>
                  ))}
                </Box>
                
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Follow Me
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {socialLinks.map((social, index) => (
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
                          {social.icon}
                        </IconButton>
                      </Tooltip>
                    </motion.div>
                  ))}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        {/* Working Preferences and FAQ */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4}>
            {/* Working Preferences */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 3, height: "100%" }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  How I Work
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {workingPreferences.map((pref, index) => (
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
                          {pref.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {pref.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {pref.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Card>
            </Grid>

            {/* FAQ */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 3, height: "100%" }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Frequently Asked
                </Typography>
                <Box>
                  {faqData.map((faq, index) => (
                    <Accordion
                      key={index}
                      sx={{
                        mb: 1,
                        background: "rgba(74, 144, 226, 0.05)",
                        border: "1px solid rgba(74, 144, 226, 0.1)",
                        "&:before": { display: "none" },
                        "&.Mui-expanded": {
                          background: "rgba(74, 144, 226, 0.1)",
                          borderColor: "rgba(74, 144, 226, 0.3)",
                        },
                      }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        {/* Success Alert */}
        <Snackbar
          open={showSuccessAlert}
          autoHideDuration={6000}
          onClose={() => setShowSuccessAlert(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setShowSuccessAlert(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Thank you for your message! I'll get back to you within 24 hours.
          </Alert>
        </Snackbar>
      </Box>
    </motion.div>
  );
};

export default ContactSection;