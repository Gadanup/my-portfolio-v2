// components/contact/ContactForm.jsx

"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
  Collapse,
  Divider,
} from "@mui/material";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { contactData } from "../../data/contactData";

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { form } = contactData;
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    subject: "",
    timeline: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  // EmailJS configuration
  const EMAIL_SERVICE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
  const EMAIL_TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
  const EMAIL_PUBLIC_KEY =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

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

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not specified",
        position: formData.position || "Not specified",
        subject: formData.subject,
        timeline: formData.timeline || "Not specified",
        message: formData.message,
        to_name: "Cláudio Jesus",
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);

      setFormData({
        name: "",
        email: "",
        company: "",
        position: "",
        subject: "",
        timeline: "",
        message: "",
      });

      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      setShowErrorAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));

    if (formErrors[field]) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  if (isMobile) {
    return (
      <>
        <Card sx={{ p: 3, mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              textAlign: "center",
              color: "primary.main",
            }}
          >
            {form.title}
          </Typography>

          <Box component="form" ref={formRef} onSubmit={handleSubmit}>
            {/* Essential Fields */}
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Your Name"
                name="from_name"
                value={formData.name}
                onChange={handleInputChange("name")}
                error={!!formErrors.name}
                helperText={formErrors.name}
                required
                disabled={isSubmitting}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Email Address"
                name="from_email"
                type="email"
                value={formData.email}
                onChange={handleInputChange("email")}
                error={!!formErrors.email}
                helperText={formErrors.email}
                required
                disabled={isSubmitting}
                sx={{ mb: 2 }}
              />

              <FormControl
                fullWidth
                error={!!formErrors.subject}
                sx={{ mb: 2 }}
              >
                <InputLabel>Subject</InputLabel>
                <Select
                  value={formData.subject}
                  onChange={handleInputChange("subject")}
                  label="Subject"
                  name="subject"
                  required
                  disabled={isSubmitting}
                >
                  {form.fields.subjectOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                {formErrors.subject && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ mt: 1, ml: 2 }}
                  >
                    {formErrors.subject}
                  </Typography>
                )}
              </FormControl>

              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange("message")}
                error={!!formErrors.message}
                helperText={
                  formErrors.message ||
                  "Tell me about the opportunity or any questions you have"
                }
                required
                disabled={isSubmitting}
              />
            </Box>

            {/* Optional Fields Toggle */}
            <Button
              variant="text"
              onClick={() => setShowOptionalFields(!showOptionalFields)}
              endIcon={
                showOptionalFields ? <ExpandLessIcon /> : <ExpandMoreIcon />
              }
              sx={{ mb: 2, color: "text.secondary" }}
              fullWidth
            >
              {showOptionalFields ? "Hide" : "Show"} Optional Fields
            </Button>

            <Collapse in={showOptionalFields}>
              <Box sx={{ mb: 3 }}>
                <Divider sx={{ mb: 2, opacity: 0.5 }} />

                <TextField
                  fullWidth
                  label="Company (Optional)"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange("company")}
                  helperText="Company or organization name"
                  disabled={isSubmitting}
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Your Position (Optional)"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange("position")}
                  helperText="Your role or title"
                  disabled={isSubmitting}
                  sx={{ mb: 2 }}
                />

                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Timeline (Optional)</InputLabel>
                  <Select
                    value={formData.timeline}
                    onChange={handleInputChange("timeline")}
                    label="Timeline (Optional)"
                    name="timeline"
                    disabled={isSubmitting}
                  >
                    {form.fields.timelineOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Collapse>

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              startIcon={
                isSubmitting ? <CircularProgress size={20} /> : <SendIcon />
              }
              fullWidth
              sx={{
                background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                "&:disabled": {
                  background: "rgba(74, 144, 226, 0.3)",
                },
              }}
            >
              {isSubmitting
                ? form.submitButton.loadingText
                : form.submitButton.text}
            </Button>
          </Box>
        </Card>

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
            {form.submitButton.successMessage}
          </Alert>
        </Snackbar>

        {/* Error Alert */}
        <Snackbar
          open={showErrorAlert}
          autoHideDuration={6000}
          onClose={() => setShowErrorAlert(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setShowErrorAlert(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Sorry, there was an error sending your message. Please try again or
            contact me directly.
          </Alert>
        </Snackbar>
      </>
    );
  }

  // Desktop version (unchanged)
  return (
    <>
      <Card sx={{ p: 4, height: "100%" }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          {form.title}
        </Typography>

        <Box component="form" ref={formRef} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Your Name"
                name="from_name"
                value={formData.name}
                onChange={handleInputChange("name")}
                error={!!formErrors.name}
                helperText={formErrors.name}
                required
                disabled={isSubmitting}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Email Address"
                name="from_email"
                type="email"
                value={formData.email}
                onChange={handleInputChange("email")}
                error={!!formErrors.email}
                helperText={formErrors.email}
                required
                disabled={isSubmitting}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Company (Optional)"
                name="company"
                value={formData.company}
                onChange={handleInputChange("company")}
                helperText="Company or organization name"
                disabled={isSubmitting}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Your Position (Optional)"
                name="position"
                value={formData.position}
                onChange={handleInputChange("position")}
                helperText="Your role or title"
                disabled={isSubmitting}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth error={!!formErrors.subject}>
                <InputLabel>Subject</InputLabel>
                <Select
                  value={formData.subject}
                  onChange={handleInputChange("subject")}
                  label="Subject"
                  name="subject"
                  required
                  disabled={isSubmitting}
                >
                  {form.fields.subjectOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                {formErrors.subject && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ mt: 1, ml: 2 }}
                  >
                    {formErrors.subject}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Timeline (Optional)</InputLabel>
                <Select
                  value={formData.timeline}
                  onChange={handleInputChange("timeline")}
                  label="Timeline (Optional)"
                  name="timeline"
                  disabled={isSubmitting}
                >
                  {form.fields.timelineOptions.map((option) => (
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
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange("message")}
                error={!!formErrors.message}
                helperText={
                  formErrors.message ||
                  "Tell me about the opportunity, role requirements, or any questions you have"
                }
                required
                disabled={isSubmitting}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={
                  isSubmitting ? <CircularProgress size={20} /> : <SendIcon />
                }
                sx={{
                  background:
                    "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  "&:disabled": {
                    background: "rgba(74, 144, 226, 0.3)",
                  },
                }}
              >
                {isSubmitting
                  ? form.submitButton.loadingText
                  : form.submitButton.text}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>

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
          {form.submitButton.successMessage}
        </Alert>
      </Snackbar>

      {/* Error Alert */}
      <Snackbar
        open={showErrorAlert}
        autoHideDuration={6000}
        onClose={() => setShowErrorAlert(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowErrorAlert(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Sorry, there was an error sending your message. Please try again or
          contact me directly.
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
