// data/resumeData.js

import StarIcon from "@mui/icons-material/Star";

export const experienceHero = {
  title: "Professional Experience",
  subtitle:
    "My professional journey as a Frontend Developer, including work experience, education, and key achievements that have shaped my career.",
  description:
    "From university studies to frontend development roles, explore the milestones and experiences that define my professional background.",
  lastUpdated: "Last updated: December 2025",
};

export const experience = [
  {
    id: 1,
    title: "Frontend Developer (SAPUI5/React)",
    company: "ATOM",
    location: "Dubai, Remote",
    period: "July 2023 - Present",
    type: "Full-time",
    current: true,
    responsibilities: [
      "Built and maintained enterprise-grade frontend apps using SAPUI5 and React.js, serving over +1000 internal users across several departments",
      "Developed modular, reusable components using React.js and SAPUI5 XML views, improving code maintainability.",
      "Collaborated with designers and backend teams to integrate REST APIs and ensure pixel-perfect UI delivery",
      "Led frontend testing and debugging processes, reducing production bugs",
      "Contributed to sprint planning, reviews, and retrospectives in a cross-functional agile team using JIRA",
    ],
    technologies: [
      "React.js",
      "SAPUI5",
      "Javascript (ES6+)",
      "TypeScript",
      "SAP BTP",
      "OData Services",
      "Material UI",
      "Redux",
      "Figma",
      "Monday.com",
      "JIRA",
    ],
    achievements: [
      "Improved code maintainability",
      "Served 1000+ internal users",
      "Led testing processes",
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
      "Learned and implemented SAPUI5 framework for enterprise application development",
      "Assisted in building React.js components for internal dashboard applications",
      "Gained hands-on experience with SAP BTP and OData service integration",
      "Participated in daily standups and sprint planning meetings",
      "Collaborated with senior developers to understand enterprise development workflows",
    ],
    technologies: [
      "SAPUI5",
      "React.js",
      "JavaScript",
      "SAP BTP",
      "OData Services",
      "HTML5/CSS3",
      "Figma",
      "JIRA",
    ],
    achievements: [
      "Successfully completed 3-month internship",
      "Transitioned to full-time role",
      "Mastered SAPUI5 framework basics",
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
      "Information Systems",
      "Web Development",
      "Database Management",
      "Software Engineering",
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

export const skillsCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: "Expert", years: "3+" },
      { name: "JavaScript/TypeScript", level: "Advanced", years: "3+" },
      { name: "CSS3/SASS", level: "Advanced", years: "4+" },
      { name: "Next.js", level: "Intermediate", years: "2+" },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", level: "Intermediate", years: "2+" },
      { name: "Git/GitHub", level: "Advanced", years: "3+" },
      { name: "Docker", level: "Beginner", years: "1+" },
      { name: "AWS", level: "Beginner", years: "1+" },
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      { name: "Team Leadership", level: "Advanced", years: "2+" },
      { name: "Project Management", level: "Intermediate", years: "2+" },
      { name: "Mentoring", level: "Advanced", years: "1+" },
      { name: "Client Communication", level: "Advanced", years: "3+" },
    ],
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
    "Condensed layout for single-page printing",
    "Contact information prominently displayed",
    "QR code linking to your online portfolio",
  ],
};

export const skillLevelColors = {
  Expert: "#4caf50",
  Advanced: "#4a90e2",
  Intermediate: "#ff9800",
  Beginner: "#9e9e9e",
};
