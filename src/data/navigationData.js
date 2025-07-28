// data/navigationData.js

import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export const navigationItems = [
  { text: "About", icon: <PersonIcon />, id: "about" },
  { text: "Experience", icon: <ArticleIcon />, id: "experience" },
  { text: "Skills", icon: <AutoStoriesIcon />, id: "skills" },
  { text: "Projects", icon: <FolderIcon />, id: "projects" },
  { text: "Contact", icon: <ContactMailIcon />, id: "contact" },
];

export const socialLinks = [
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/claudiojesus00/",
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    href: "https://github.com/Gadanup",
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    href: "mailto:claudio_jesus2000@hotmail.com",
  },
];

export const contactInfo = {
  email: "claudio_jesus2000@hotmail.com",
  phone: "+351 931327999",
  location: "Setúbal, Portugal",
};

export const personalInfo = {
  name: "Cláudio Jesus",
  title: "Frontend Developer",
  copyright: "© 2024 Cláudio Jesus",
};
