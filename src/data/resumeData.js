// data/resumeData.js

import StarIcon from "@mui/icons-material/Star";

export const experienceHero = {
  title: "Professional Experience",
  subtitle:
    "My professional journey as a Frontend Developer specializing in modern web technologies and enterprise solutions, including React, SAP UI5, and cloud platforms.",
  description:
    "From university studies to developing enterprise-grade applications, explore the milestones and experiences that define my technical expertise across both modern web and enterprise development.",
  lastUpdated: "Last updated: December 2024",
};

export const experience = [
  {
    id: 1,
    title: "Frontend Developer (SAP UI5/React)",
    company: "ATOM",
    location: "Dubai, Remote",
    period: "July 2023 - Present",
    type: "Full-time",
    current: true,
    responsibilities: [
      "Built and maintained enterprise-grade frontend applications using SAP UI5 and React.js, serving over 1000+ internal users across multiple departments",
      "Developed and deployed cloud-native solutions on SAP BTP, leveraging various BTP services for scalable application architecture",
      "Created modular, reusable components using React.js hooks and SAP UI5 XML views, improving code maintainability",
      "Integrated OData services and REST APIs to connect frontend applications with SAP backend systems and external services",
      "Collaborated with UX/UI designers and backend teams to deliver pixel-perfect, responsive interfaces across web and mobile platforms",
      "Led frontend testing strategies and debugging processes, reducing production bugs and improving application stability",
      "Contributed to sprint planning, reviews, and retrospectives in cross-functional agile teams using JIRA and Monday.com",
    ],
    technologies: [
      "React.js",
      "SAP UI5",
      "JavaScript (ES6+)",
      "TypeScript",
      "SAP BTP",
      "SAP Fiori",
      "OData Services",
      "Material UI",
      "Redux",
      "HTML5/CSS3",
      "Figma",
      "Monday.com",
      "JIRA",
    ],
    achievements: [
      "Improved code maintainability",
      "Served 1000+ internal users",
      "Led testing and deployment processes",
      "Successfully integrated cloud services",
    ],
    companyColor: "#4a90e2",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "ATOM",
    location: "Dubai, Remote",
    period: "April 2023 - June 2023",
    type: "Internship",
    current: false,
    responsibilities: [
      "Learned and implemented SAP UI5 framework for enterprise application development following Fiori design principles",
      "Assisted in building React.js components for internal dashboard applications with modern state management",
      "Gained hands-on experience with SAP BTP platform services including deployment, monitoring, and integration capabilities",
      "Worked with OData services to fetch and manipulate data from SAP backend systems",
      "Participated in daily standups, sprint planning meetings, and code review sessions",
      "Collaborated with senior developers to understand enterprise development workflows and best practices",
      "Contributed to UI/UX improvements based on user feedback and usability testing results",
    ],
    technologies: [
      "SAP UI5",
      "React.js",
      "JavaScript",
      "SAP BTP",
      "SAP Fiori",
      "OData Services",
      "HTML5/CSS3",
      "Bootstrap",
      "Git",
      "Figma",
      "JIRA",
    ],
    achievements: [
      "Successfully completed 3-month internship",
      "Transitioned to full-time role",
      "Mastered SAP UI5  fundamentals",
    ],
    companyColor: "#d81b60",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Systems Management",
    institution: "Instituto Politécnico de Setúbal",
    location: "Setúbal, Portugal",
    period: "September 2020 - October 2023",
    grade: "Bachelor's Degree",
    coursework: [
      "Information Systems Architecture",
      "Web Development Technologies",
      "Database Management Systems",
      "Software Engineering Principles",
      "Enterprise System Integration",
      "Cloud Computing Fundamentals",
    ],
    achievements: ["Completed degree in 3 years"],
  },
];

export const certifications = [
  {
    id: 1,
    name: "Complete Modern Web Development with JavaScript",
    issuer: "Udemy",
    date: "2024",
    credentialId: "DEF456UVW",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-e07f5a86-9c27-42a7-824d-9b6501900def",
    logo: "🔥",
  },
  {
    id: 2,
    name: "React - The Complete Guide 2025",
    issuer: "Udemy",
    date: "Currently Learning",
    credentialId: "ABC123XYZ",
    logo: "⚛️",
  },
  {
    id: 3,
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    date: "Currently Learning",
    logo: "🛠️",
  },
];

export const languages = [
  {
    name: "Portuguese",
    level: "Native",
    proficiency: 100,
    flag: "🇵🇹",
    color: "#4caf50",
  },
  {
    name: "English",
    level: "Fluent",
    proficiency: 90,
    flag: "🇺🇸",
    color: "#4a90e2",
  },
  {
    name: "Spanish",
    level: "Basic",
    proficiency: 40,
    flag: "🇪🇸",
    color: "#ff9800",
  },
];

export const printDialog = {
  title: "Print Resume",
  features: [
    "Professional black and white formatting",
    "Condensed layout optimized for ATS systems",
    "Contact information prominently displayed",
    "Technology skills clearly categorized",
    "QR code linking to your online portfolio",
  ],
};

export const skillLevelColors = {
  Expert: "#4caf50",
  Advanced: "#4a90e2",
  Intermediate: "#ff9800",
  Beginner: "#9e9e9e",
};
