// components/contact/ContactFAQ.jsx

"use client";
import {
  Box,
  Typography,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { contactData } from "../../data/contactData";

const ContactFAQ = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { faq } = contactData;

  if (isMobile) {
    return (
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          {faq.title}
        </Typography>
        <Box>
          {faq.questions.map((faqItem, index) => (
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
                borderRadius: 2,
                "&:last-child": {
                  borderRadius: 2,
                },
                "&:first-of-type": {
                  borderRadius: 2,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  minHeight: 48,
                  "& .MuiAccordionSummary-content": {
                    margin: "8px 0",
                  },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                >
                  {faqItem.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.5, fontSize: "0.85rem" }}
                >
                  {faqItem.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    );
  }

  // Desktop version (unchanged)
  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        {faq.title}
      </Typography>
      <Box>
        {faq.questions.map((faqItem, index) => (
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
                {faqItem.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
              >
                {faqItem.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Card>
  );
};

export default ContactFAQ;
