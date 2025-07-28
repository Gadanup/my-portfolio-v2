// data/contactData.js

export const contactData = {
  hero: {
    title: "Let's Connect",
    subtitle:
      "I'm actively seeking frontend development opportunities with innovative teams and exciting challenges.",
    chips: [
      {
        label: "Open to opportunities",
        type: "success",
        icon: "CheckCircle",
      },
      {
        label: "Available immediately",
        type: "outlined",
        icon: null,
      },
    ],
    quickActions: [
      {
        label: "Email Me",
        href: "mailto:claudio_jesus2000@hotmail.com",
        type: "contained",
        icon: "Email",
      },
      {
        label: "Call Now",
        href: "tel:+351931327999",
        type: "outlined",
        icon: "Phone",
      },
    ],
  },

  form: {
    title: "Get in Touch",
    fields: {
      subjectOptions: [
        "Job Opportunity",
        "Interview Request",
        "Project Inquiry",
        "Networking",
        "General Question",
      ],
      timelineOptions: [
        "Immediate Start",
        "Within 2 weeks",
        "Within 1 month",
        "1-3 months",
        "Flexible",
        "Future Opportunity",
      ],
    },
    submitButton: {
      text: "Send Message",
      loadingText: "Sending...",
      successMessage:
        "Thank you for reaching out! I'll get back to you within 24 hours.",
    },
  },

  contactInfo: {
    title: "Contact Information",
    methods: [
      {
        icon: "Email",
        label: "Email",
        value: "claudio_jesus2000@hotmail.com",
        action: "copy",
        color: "#4a90e2",
      },
      {
        icon: "Phone",
        label: "Phone",
        value: "+351 931 327 999",
        action: "call",
        color: "#4caf50",
      },
      {
        icon: "LocationOn",
        label: "Location",
        value: "Setúbal, Portugal",
        action: "none",
        color: "#ff9800",
      },
      {
        icon: "AccessTime",
        label: "Timezone",
        value: "GMT+1 (WET)",
        action: "none",
        color: "#9c27b0",
      },
    ],
    socialLinks: [
      {
        icon: "LinkedIn",
        label: "LinkedIn",
        href: "https://linkedin.com/in/claudio-jesus",
        color: "#1da1f2",
      },
      {
        icon: "GitHub",
        label: "GitHub",
        href: "https://github.com/claudio-jesus",
        color: "#1da1f2",
      },
      {
        icon: "Twitter",
        label: "Twitter",
        href: "https://twitter.com/claudio_jesus",
        color: "#1da1f2",
      },
    ],
  },

  workingPreferences: {
    title: "Work Preferences",
    preferences: [
      {
        icon: "Work",
        title: "Remote & Hybrid",
        description:
          "Open to remote, hybrid, or on-site positions with flexible arrangements",
      },
      {
        icon: "Group",
        title: "Team Collaboration",
        description:
          "Thrive in collaborative environments with cross-functional teams",
      },
      {
        icon: "Speed",
        title: "Agile Methodologies",
        description:
          "Experienced in Agile/Scrum processes for efficient project delivery",
      },
      {
        icon: "Schedule",
        title: "Growth Mindset",
        description:
          "Passionate about continuous learning and professional development",
      },
    ],
  },

  faq: {
    title: "Frequently Asked",
    questions: [
      {
        question: "What type of role are you looking for?",
        answer:
          "I'm seeking frontend developer positions or full-stack roles, particularly roles focused on React and modern JavaScript. I'm also open to opportunities that involve SAPUI5 or other frontend frameworks.",
      },
      {
        question: "Are you open to remote work?",
        answer:
          "Absolutely! I have extensive experience working remotely and am comfortable with distributed teams. I'm also open to hybrid or on-site arrangements within Lisbon or Setúbal.",
      },
      {
        question: "What's your notice period?",
        answer:
          "I have a 30-day notice period with my current employer, but I'm flexible and can negotiate an earlier start if needed.",
      },
      {
        question: "What are your salary expectations?",
        answer:
          "I'm open to discussing compensation based on the role, responsibilities, and company benefits. I'm looking for a competitive package that reflects my experience and the value I can bring to the team.",
      },
    ],
  },
};
