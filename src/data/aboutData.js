// data/aboutData.js

import CodeIcon from "@mui/icons-material/Code";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export const heroContent = {
  greeting: "Hi there! 👋",
  subtitle:
    "I'm a Frontend Developer passionate about creating beautiful, functional web experiences",
};

export const typingWords = [
  "React Enthusiast",
  "JavaScript Lover",
  "UI/UX Focused",
  "Clean Code Advocate",
  "Gaming Fanatic",
];

export const stats = [
  { label: "Years Experience", value: "2+", icon: <WorkIcon /> },
  { label: "Technologies", value: "15+", icon: <CodeIcon /> },
  { label: "Projects Built", value: "5+", icon: <TrendingUpIcon /> },
  { label: "Energy Drinks", value: "∞", icon: <FavoriteIcon /> },
];

export const cvOptions = [
  {
    label: "English Version",
    filename: "Claudio_Jesus_CV.pdf",
    language: "EN",
    size: "89 KB",
    icon: <PictureAsPdfIcon />,
  },
  {
    label: "Portuguese Version",
    filename: "Claudio_Jesus_CV_PT.pdf",
    language: "PT",
    size: "91 KB",
    icon: <PictureAsPdfIcon />,
  },
];

export const developerStatusCard = {
  title: "🎮 Developer.exe",
  status: {
    label: "ONLINE",
    color: "#4caf50",
  },
  stats: [
    {
      icon: "⚡",
      label: "Energy",
      value: "MAX",
      color: "#4a90e2",
      animation: { rotate: [0, 360] },
    },
    {
      icon: "🎵",
      label: "Music",
      value: "ON",
      color: "#d81b60",
      animation: { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] },
    },
    {
      icon: "🚀",
      label: "Focus",
      value: "100%",
      color: "#4caf50",
      animation: { y: [0, -3, 0] },
    },
  ],
  bottomText: "Coding to the rhythm • Ready to build 💻",
  backgroundCode: `const developer = {
  name: 'Cláudio',
  fuel: '🎵 music',
  mode: 'coding',
  status: 'available'
};

while(motivated) {
  buildAwesomeStuff();
}`,
};

export const journeyContent = {
  title: "My Journey & Philosophy",
  sections: [
    {
      title: "How It All Started",
      content: [
        "Ever since I was young, I've been a total tech head – gaming, gadgets, understanding how technology works. Just before university, I discovered HTML and CSS while customizing gaming forums, and what started as simple curiosity quickly became an obsession with building things.",
        "After starting my career with SAP UI5 and Fiori, I began learning React.js in my spare time as a hobby. Those late-night coding sessions and weekend projects proved invaluable when my workplace modernized their tech stack – suddenly, my 'hobby' became my superpower at work, and I knew I'd found my true calling.",
      ],
    },
    {
      title: "My Development Philosophy",
      isValues: true,
    },
  ],
  bottomText:
    "When I'm not coding, you'll find me gaming, discovering new music, or staying up-to-date with the latest tech trends. I believe the best developers are those who stay curious, keep learning, and never lose that excitement for building something awesome.",
};

export const coreValues = [
  {
    title: "Clean Code",
    description:
      "Writing maintainable, readable code that stands the test of time",
    icon: <CodeIcon />,
    color: "#4a90e2",
  },
  {
    title: "User First",
    description:
      "Every decision is made with the end user's experience in mind",
    icon: <FavoriteIcon />,
    color: "#d81b60",
  },
  {
    title: "Performance",
    description: "Building fast, optimized applications that users love",
    icon: <SpeedIcon />,
    color: "#4caf50",
  },
  {
    title: "Team Player",
    description:
      "Collaborating effectively and sharing knowledge with the team",
    icon: <GroupIcon />,
    color: "#ff9800",
  },
];

export const workStyleTraits = [
  {
    title: "Collaborative Team Player",
    description:
      "I thrive in team environments and believe the best solutions come from diverse perspectives working together.",
    icon: "🤝",
    color: "#4a90e2",
  },
  {
    title: "Detail-Oriented & Quality-Focused",
    description:
      "I pay attention to the small things that make a big difference in user experience and code quality.",
    icon: "🔍",
    color: "#4caf50",
  },
  {
    title: "Continuous Learner",
    description:
      "Technology evolves fast, and I'm always excited to learn new tools and improve my craft.",
    icon: "📚",
    color: "#ff9800",
  },
  {
    title: "Creative Problem Solver",
    description:
      "I enjoy breaking down complex challenges into manageable pieces and finding elegant solutions.",
    icon: "🧩",
    color: "#9c27b0",
  },
];

export const hobbiesAndInterests = [
  {
    name: "Gaming",
    icon: "🎮",
    description: "Exploring new worlds and stories",
    detail: "Action & adventure games",
  },
  {
    name: "Music",
    icon: "🎶",
    description: "Listening to various genres",
    detail: "Hip-hop, rock & pop",
  },
  {
    name: "Movies & Shows",
    icon: "🎬",
    description: "Sci-fi, action, and documentaries",
    detail: "Love exploring different stories",
  },
  {
    name: "Sports",
    icon: "⚽",
    description: "Football and basketball enthusiast",
    detail: "Playing and watching matches",
  },
  {
    name: "Technology",
    icon: "💻",
    description: "Latest tech trends",
    detail: "AI, crypto, and emerging tools",
  },
  {
    name: "Side Projects",
    icon: "🚀",
    description: "Building cool stuff",
    detail: "Personal projects and experiments",
  },
];
