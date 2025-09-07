// Technical Skills Data - Centralized data for the TechnicalSkills component

import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import {
  TbBrandFramerMotion,
  TbBrandMonday,
  TbBrandVscode,
} from "react-icons/tb";

// Import React Icons for technology logos
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVite,
  SiJira,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiGithubactions,
  SiHeroku,
  SiSap,
} from "react-icons/si";
import { Box } from "@mui/material";

export const heroData = {
  title: "Skills & Expertise",
  subtitle:
    "A showcase of my technical capabilities across enterprise and modern web development.",
  description:
    "Here you'll find a comprehensive overview of my skills spanning SAP enterprise solutions, modern React development, and the full spectrum of frontend technologies.",
  keyStats: [
    { label: "Years Experience", value: "2+", color: "#4a90e2" },
    { label: "Technologies Mastered", value: "25+", color: "#4caf50" },
    { label: "Projects Delivered", value: "5+", color: "#ff9800" },
  ],
};

// Category icons for the navigation
export const categoryIcons = {
  enterprise: <CloudIcon />,
  frontend: <LanguageIcon />,
  styling: <BrushIcon />,
  backend: <StorageIcon />,
  tools: <BuildIcon />,
};

// Technology logo mapping
export const technologyIcons = {
  // Enterprise
  "SAP UI5": <SiSap color="#0070F3" />,
  "SAP Fiori": <SiSap color="#0070F3" />,
  "SAP BTP": <SiSap color="#0070F3" />,
  "OData Services": <SiSap color="#0070F3" />,

  // Frontend
  JavaScript: <SiJavascript color="#F7DF1E" />,
  React: <SiReact color="#61DAFB" />,
  "Next.js": <SiNextdotjs color="#000000" />,
  TypeScript: <SiTypescript color="#3178C6" />,
  HTML5: <SiHtml5 color="#E34F26" />,
  CSS3: <SiCss3 color="#1572B6" />,
  Redux: <SiRedux color="#764ABC" />,

  // Styling
  "Material-UI": <SiMui color="#007FFF" />,
  Tailwind: <SiTailwindcss color="#06B6D4" />,
  "Styled Components": <SiStyledcomponents color="#DB7093" />,
  "Framer Motion": <TbBrandFramerMotion color="#0055FF" />,
  "Responsive Design": <Box sx={{ fontSize: "2rem" }}>📱</Box>,
  "UI/UX Design": <Box sx={{ fontSize: "2rem" }}>🎨</Box>,

  // Backend
  Supabase: <SiSupabase color="#3ECF8E" />,
  "Node.js": <SiNodedotjs color="#339933" />,
  PostgreSQL: <SiPostgresql color="#336791" />,

  // Tools
  Git: <SiGit color="#F05032" />,
  Github: <SiGithub color="#181717" />,
  Vite: <SiVite color="#646CFF" />,
  Figma: <SiFigma color="#F24E1E" />,
  Monday: <TbBrandMonday color="#F24E1E" />,
  JIRA: <SiJira color="#2684FF" />,
  "VS Code": <TbBrandVscode color="#007ACC" />,
  Vercel: <SiVercel color="#000000" />,
  Netlify: <SiNetlify color="#00C7B7" />,
};

// Helper function to get skill icon
export const getSkillIcon = (skillName) => {
  return technologyIcons[skillName] || <Box sx={{ fontSize: "2rem" }}>⚡</Box>;
};

export const technicalSkillsData = {
  frontend: {
    title: "Modern Frontend",
    color: "#61dafb",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    skills: [
      {
        name: "React",
        description: "Building dynamic UIs with modern patterns",
        tags: ["Hooks", "Context API", "JSX", "Component Architecture"],
      },
      {
        name: "Next.js",
        description: "Full-stack React framework for production",
        tags: ["SSR/SSG", "API Routes", "App Router", "Performance"],
      },
      {
        name: "JavaScript",
        description: "The language powering modern web",
        tags: ["ES6+", "Async/Await", "Modules", "Event Handling"],
      },
      {
        name: "TypeScript",
        description: "Type-safe JavaScript for scalable applications",
        tags: ["Interfaces", "Generics", "Type Safety", "IntelliSense"],
      },
      {
        name: "HTML5",
        description: "Semantic markup and modern web standards",
        tags: ["Semantic Elements", "Accessibility", "Forms", "APIs"],
      },
      {
        name: "CSS3",
        description: "Modern styling with advanced techniques",
        tags: ["Flexbox", "Grid", "Animations", "Custom Properties"],
      },
      {
        name: "Redux",
        description: "Predictable state management for JavaScript apps",
        tags: ["Actions", "Reducers", "Store", "Middleware"],
      },
    ],
  },
  enterprise: {
    title: "Enterprise Solutions",
    color: "#0070F3",
    gradient: "linear-gradient(135deg, #0070F3 0%, #0052CC 100%)",
    skills: [
      {
        name: "SAP UI5",
        description: "Enterprise-grade UI development framework",
        tags: ["MVC Pattern", "XML Views", "Data Binding", "Custom Controls"],
      },
      {
        name: "SAP Fiori",
        description: "Modern UX for SAP applications",
        tags: ["Design Guidelines", "Launchpad", "Elements", "Freestyle"],
      },
      {
        name: "SAP BTP",
        description: "Business Technology Platform for cloud applications",
        tags: ["Cloud Foundry", "Integration", "Services", "Deployment"],
      },
      {
        name: "OData Services",
        description: "REST-based data services for SAP integration",
        tags: ["CRUD Operations", "Filtering", "Metadata", "Navigation"],
      },
    ],
  },
  styling: {
    title: "Design & Styling",
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    skills: [
      {
        name: "Material-UI",
        description: "React component library with Material Design",
        tags: ["Theming", "Components", "Customization", "Responsive"],
      },
      {
        name: "Tailwind",
        description: "Utility-first CSS framework for rapid development",
        tags: ["Utility Classes", "Responsive", "Custom Config", "JIT"],
      },
      {
        name: "Styled Components",
        description: "CSS-in-JS styling solution for React",
        tags: ["Dynamic Styling", "Theming", "Props-based", "Encapsulation"],
      },
      {
        name: "Framer Motion",
        description: "Production-ready motion library for React",
        tags: ["Animations", "Gestures", "Layout", "SVG Animations"],
      },
      {
        name: "Responsive Design",
        description: "Creating adaptable layouts for all devices",
        tags: ["Mobile-First", "Breakpoints", "Fluid Grids", "Touch"],
      },
      {
        name: "UI/UX Design",
        description: "User-centered design principles and practices",
        tags: ["User Experience", "Interface Design", "Prototyping", "Testing"],
      },
    ],
  },
  backend: {
    title: "Backend & Integration",
    color: "#4ecdc4",
    gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    skills: [
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side development",
        tags: ["Express", "API Development", "Middleware", "Event Loop"],
      },
      {
        name: "Supabase",
        description: "Open-source Firebase alternative",
        tags: ["PostgreSQL", "Authentication", "Real-time", "Storage"],
      },
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database",
        tags: ["SQL", "Relations", "Indexing", "JSON Support"],
      },
    ],
  },
  tools: {
    title: "Development Tools",
    color: "#feca57",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    skills: [
      {
        name: "VS Code",
        description: "Powerful code editor with rich ecosystem",
        tags: ["Extensions", "Debugging", "IntelliSense", "Git Integration"],
      },
      {
        name: "Git",
        description: "Distributed version control for collaboration",
        tags: ["Branching", "Merging", "Workflows", "Conflict Resolution"],
      },
      {
        name: "Github",
        description: "Code hosting platform for project collaboration",
        tags: ["Pull Requests", "Issues", "Actions", "Code Review"],
      },
      {
        name: "Vite",
        description: "Next generation frontend build tool",
        tags: ["Hot Reload", "Build Optimization", "Plugin System", "Fast"],
      },
      {
        name: "Figma",
        description: "Collaborative interface design tool",
        tags: ["Design Systems", "Prototyping", "Handoff", "Components"],
      },
      {
        name: "Monday",
        description: "Work operating system for project management",
        tags: ["Task Management", "Collaboration", "Automation", "Reporting"],
      },
      {
        name: "JIRA",
        description: "Agile project management and issue tracking",
        tags: ["Scrum", "Kanban", "Sprint Planning", "Bug Tracking"],
      },
      {
        name: "Vercel",
        description: "Platform for frontend deployment and hosting",
        tags: ["Serverless", "Edge Functions", "Analytics", "Previews"],
      },
      {
        name: "Netlify",
        description: "JAMstack deployment platform",
        tags: ["Continuous Deployment", "Forms", "Functions", "CDN"],
      },
    ],
  },
};

// Legacy skillsData export for backward compatibility with existing components
export const skillsData = {
  // Core technical competencies
  coreSkills: [
    {
      name: "React & Modern Web",
      proficiency: "Advanced",
      years: "2+",
      highlights: [
        "Component Architecture",
        "State Management",
        "Performance Optimization",
        "Modern Patterns",
      ],
      businessValue:
        "Built responsive web applications serving 1000+ users with modern React patterns",
    },
    {
      name: "SAP UI5 & Enterprise",
      proficiency: "Advanced",
      years: "1.5+",
      highlights: [
        "Enterprise Apps",
        "Fiori Design",
        "OData Integration",
        "BTP Deployment",
      ],
      businessValue:
        "Delivered enterprise-grade SAP applications with improved user experience and performance",
    },
    {
      name: "JavaScript/TypeScript",
      proficiency: "Advanced",
      years: "3+",
      highlights: ["ES6+", "Async Programming", "Type Safety", "Modern Syntax"],
      businessValue:
        "Improved code quality and reduced bugs through strong JavaScript fundamentals and TypeScript adoption",
    },
    {
      name: "CSS3 & Modern Styling",
      proficiency: "Expert",
      years: "4+",
      highlights: [
        "Responsive Design",
        "CSS Grid/Flexbox",
        "Component Libraries",
        "Design Systems",
      ],
      businessValue:
        "Delivered pixel-perfect, mobile-responsive designs with excellent cross-browser compatibility",
    },
  ],

  // Professional capabilities - adjusted for 2+ year experience level
  professionalSkills: [
    {
      name: "Team Collaboration",
      color: "#4caf50",
      emoji: "🤝",
      strength: "Core Strength",
      description:
        "Working effectively with cross-functional teams, sharing knowledge, and contributing to team success.",
      highlights: [
        "Cross-team coordination",
        "Knowledge sharing sessions",
        "Agile methodology participation",
        "Code review collaboration",
      ],
    },
    {
      name: "Communication",
      color: "#4a90e2",
      emoji: "💬",
      strength: "Core Strength",
      description:
        "Clear technical communication with both technical and non-technical stakeholders.",
      highlights: [
        "Technical documentation",
        "Stakeholder updates",
        "Requirements clarification",
        "Cross-functional collaboration",
      ],
    },
    {
      name: "Problem Solving",
      color: "#9c27b0",
      emoji: "🧩",
      strength: "Core Strength",
      description:
        "Analytical thinking and creative solutions to complex technical challenges.",
      highlights: [
        "Complex bug resolution",
        "Performance optimization",
        "User experience solutions",
        "Technical troubleshooting",
      ],
    },
    {
      name: "Adaptability",
      color: "#ff9800",
      emoji: "🔄",
      strength: "Core Strength",
      description:
        "Quick adaptation to new technologies, changing requirements, and evolving project needs.",
      highlights: [
        "Rapid framework adoption",
        "Agile methodology expert",
        "Technology migration",
        "Requirement changes handling",
      ],
    },
    {
      name: "Learning & Growth",
      color: "#d81b60",
      emoji: "📚",
      strength: "Growing Strength",
      description:
        "Continuous learning and professional development in both enterprise and modern web technologies.",
      highlights: [
        "Technology research",
        "Best practices adoption",
        "Skill enhancement",
        "Industry trend awareness",
      ],
    },
    {
      name: "Time Management",
      color: "#607d8b",
      emoji: "⏰",
      strength: "Developed Skill",
      description:
        "Efficient project planning, deadline management, and prioritization of tasks.",
      highlights: [
        "Sprint planning participation",
        "Task prioritization",
        "Deadline adherence",
        "Multi-project coordination",
      ],
    },
  ],

  // Technical stack by category
  technicalStack: [
    {
      category: "Enterprise Development",
      icon: "🏢",
      color: "#0070F3",
      technologies: [
        { name: "SAP UI5", level: "Advanced", projects: "5+" },
        { name: "SAP Fiori", level: "Advanced", projects: "5+" },
        { name: "SAP BTP", level: "Intermediate", projects: "3+" },
        { name: "OData Services", level: "Advanced", projects: "5+" },
      ],
    },
    {
      category: "Frontend Frameworks",
      icon: "⚛️",
      color: "#61dafb",
      technologies: [
        { name: "React", level: "Advanced", projects: "8+" },
        { name: "Next.js", level: "Intermediate", projects: "3+" },
        { name: "JavaScript", level: "Advanced", projects: "10+" },
        { name: "TypeScript", level: "Intermediate", projects: "4+" },
      ],
    },
    {
      category: "Styling & Design",
      icon: "🎨",
      color: "#1572b6",
      technologies: [
        { name: "Material-UI", level: "Advanced", projects: "6+" },
        { name: "CSS3/SASS", level: "Expert", projects: "10+" },
        { name: "Tailwind CSS", level: "Intermediate", projects: "4+" },
        { name: "Responsive Design", level: "Expert", projects: "10+" },
      ],
    },
    {
      category: "Development Tools",
      icon: "🔧",
      color: "#4a90e2",
      technologies: [
        { name: "Git/GitHub", level: "Advanced", projects: "10+" },
        { name: "VS Code", level: "Expert", projects: "10+" },
        { name: "Figma", level: "Intermediate", projects: "8+" },
        { name: "JIRA", level: "Advanced", projects: "6+" },
      ],
    },
  ],

  // Value propositions for hiring managers
  valueProposition: {
    technical: [
      "2+ years of hands-on experience in both SAP enterprise and modern React development",
      "Proficient in SAP UI5, Fiori, and BTP alongside React, TypeScript, and modern web technologies",
      "Strong foundation in responsive design, component architecture, and integration patterns",
      "Experience with enterprise development lifecycle and modern web deployment practices",
      "Versatile skill set bridging traditional enterprise and cutting-edge web development",
    ],
    delivery: [
      "Proven track record delivering both enterprise SAP solutions and modern web applications",
      "Focus on clean, maintainable code following industry best practices",
      "Experience with agile development methodologies and cross-functional team collaboration",
      "Strong problem-solving skills with systematic approach to debugging and optimization",
      "Reliable delivery of features that meet both technical and business requirements",
    ],
    professional: [
      "Unique combination of enterprise SAP experience and modern frontend development skills",
      "Excellent communication with both technical teams and business stakeholders",
      "Adaptable between enterprise environments and modern web development workflows",
      "Continuous learner with passion for both established enterprise technologies and emerging web trends",
      "Collaborative team player with strong work ethic and attention to detail",
    ],
  },
};
