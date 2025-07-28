// Technical Skills Data - Centralized data for the TechnicalSkills component

export const technicalSkillsData = {
  frontend: {
    title: "Frontend Arsenal",
    color: "#61dafb",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    skills: [
      {
        name: "React",
        icon: "⚛️",
        description: "Building dynamic UIs with modern patterns",
        tags: ["Hooks", "Context", "JSX", "Virtual DOM"],
      },
      {
        name: "Next.js",
        icon: "▲",
        description: "Full-stack React framework for production",
        tags: ["SSR", "API Routes", "App Router", "Middleware"],
      },
      {
        name: "TypeScript",
        icon: "🔷",
        description: "Type-safe JavaScript for scalable apps",
        tags: ["Interfaces", "Generics", "Decorators", "Type Guards"],
      },
      {
        name: "JavaScript",
        icon: "🟨",
        description: "The language powering modern web",
        tags: ["ES6+", "Async/Await", "Modules", "Closures"],
      },
      {
        name: "Vue.js",
        icon: "💚",
        description: "Progressive framework for building UIs",
        tags: ["Composition API", "Vuex", "Nuxt", "Reactivity"],
      },
      {
        name: "Angular",
        icon: "🅰️",
        description: "Platform for building enterprise apps",
        tags: ["RxJS", "Services", "Guards", "Dependency Injection"],
      },
    ],
  },
  styling: {
    title: "Design & Styling",
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    skills: [
      {
        name: "CSS3",
        icon: "🎨",
        description: "Modern styling with latest features",
        tags: ["Grid", "Flexbox", "Animations", "Custom Properties"],
      },
      {
        name: "Sass",
        icon: "💄",
        description: "CSS with superpowers and organization",
        tags: ["Mixins", "Variables", "Nesting", "Partials"],
      },
      {
        name: "Tailwind",
        icon: "🌊",
        description: "Utility-first CSS framework",
        tags: ["JIT", "Components", "Responsive", "Dark Mode"],
      },
      {
        name: "Material-UI",
        icon: "🎯",
        description: "React component library with Material Design",
        tags: ["Theming", "Custom Components", "Responsive", "Accessibility"],
      },
      {
        name: "Styled Components",
        icon: "💅",
        description: "CSS-in-JS styling solution",
        tags: ["Dynamic Styling", "Theming", "Props", "Server Rendering"],
      },
      {
        name: "Framer Motion",
        icon: "🎬",
        description: "Production-ready motion library for React",
        tags: ["Gestures", "Variants", "Layout Animations", "SVG"],
      },
    ],
  },
  backend: {
    title: "Backend & Database",
    color: "#4ecdc4",
    gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    skills: [
      {
        name: "Node.js",
        icon: "🟢",
        description: "JavaScript runtime for server-side development",
        tags: ["Express", "Middleware", "REST APIs", "Event Loop"],
      },
      {
        name: "MongoDB",
        icon: "🍃",
        description: "NoSQL database for flexible data storage",
        tags: ["Aggregation", "Indexing", "Mongoose", "Atlas"],
      },
      {
        name: "PostgreSQL",
        icon: "🐘",
        description: "Advanced open-source relational database",
        tags: ["Complex Queries", "Relations", "Optimization", "JSONB"],
      },
      {
        name: "Firebase",
        icon: "🔥",
        description: "Google's comprehensive app platform",
        tags: ["Firestore", "Authentication", "Hosting", "Functions"],
      },
      {
        name: "GraphQL",
        icon: "🏛️",
        description: "Query language for APIs",
        tags: ["Resolvers", "Schema", "Apollo", "Subscriptions"],
      },
      {
        name: "Prisma",
        icon: "🔺",
        description: "Next-generation database toolkit",
        tags: ["ORM", "Migrations", "Type Safety", "Schema"],
      },
    ],
  },
  tools: {
    title: "Tools & Workflow",
    color: "#feca57",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    skills: [
      {
        name: "Git",
        icon: "🔀",
        description: "Distributed version control system",
        tags: ["Branching", "Merging", "Workflow", "Collaboration"],
      },
      {
        name: "Docker",
        icon: "🐳",
        description: "Containerization platform for deployment",
        tags: ["Images", "Compose", "Deployment", "Microservices"],
      },
      {
        name: "Webpack",
        icon: "📦",
        description: "Static module bundler for modern apps",
        tags: ["Loaders", "Plugins", "Optimization", "Code Splitting"],
      },
      {
        name: "Vite",
        icon: "⚡",
        description: "Next generation frontend build tool",
        tags: ["Hot Reload", "ESBuild", "Rollup", "Lightning Fast"],
      },
      {
        name: "Jest",
        icon: "🃏",
        description: "Delightful JavaScript testing framework",
        tags: ["Unit Testing", "Mocking", "Coverage", "Snapshots"],
      },
      {
        name: "Figma",
        icon: "🎨",
        description: "Collaborative interface design tool",
        tags: ["Prototyping", "Components", "Design Systems", "Handoff"],
      },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    color: "#a55eea",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    skills: [
      {
        name: "AWS",
        icon: "☁️",
        description: "Amazon Web Services cloud platform",
        tags: ["S3", "Lambda", "EC2", "CloudFront"],
      },
      {
        name: "Vercel",
        icon: "▲",
        description: "Platform for frontend deployment",
        tags: ["Serverless", "Edge Functions", "Analytics", "Preview"],
      },
      {
        name: "Netlify",
        icon: "🌐",
        description: "JAMstack deployment platform",
        tags: ["Edge Functions", "Forms", "CDN", "Split Testing"],
      },
      {
        name: "GitHub Actions",
        icon: "🤖",
        description: "CI/CD workflows for automation",
        tags: ["Automation", "Testing", "Deployment", "Workflows"],
      },
      {
        name: "Heroku",
        icon: "🟣",
        description: "Cloud platform for app deployment",
        tags: ["Dynos", "Add-ons", "Pipelines", "Scaling"],
      },
      {
        name: "Railway",
        icon: "🚂",
        description: "Modern application hosting platform",
        tags: ["Git Deploy", "Database", "Monitoring", "Templates"],
      },
    ],
  },
};

// Legacy skillsData export for backward compatibility with existing components
export const skillsData = {
  // Core technical competencies
  coreSkills: [
    {
      name: "React & Ecosystem",
      proficiency: "Expert",
      years: "3+",
      highlights: [
        "Advanced Patterns",
        "Performance Optimization",
        "Context API",
        "Custom Hooks",
      ],
      businessValue:
        "Reduced development time by 40% through reusable component architecture",
    },
    {
      name: "JavaScript/TypeScript",
      proficiency: "Expert",
      years: "3+",
      highlights: ["ES6+", "Async Programming", "Type Safety", "Modern Syntax"],
      businessValue:
        "Improved code quality and reduced bugs by 60% with TypeScript adoption",
    },
    {
      name: "Next.js",
      proficiency: "Advanced",
      years: "2+",
      highlights: ["App Router", "SSR/SSG", "API Routes", "Performance"],
      businessValue:
        "Achieved 50% faster page loads through server-side optimization",
    },
    {
      name: "CSS3 & Styling",
      proficiency: "Expert",
      years: "4+",
      highlights: [
        "Responsive Design",
        "CSS Grid/Flexbox",
        "Animations",
        "Modern CSS",
      ],
      businessValue:
        "Delivered pixel-perfect designs with 98% mobile compatibility",
    },
  ],

  // Professional capabilities
  professionalSkills: [
    {
      category: "Leadership & Communication",
      skills: [
        {
          name: "Team Leadership",
          description: "Led cross-functional teams of 3-5 developers",
          impact: "Delivered 12+ projects on time with 95% client satisfaction",
        },
        {
          name: "Client Communication",
          description: "Direct client interaction and requirement gathering",
          impact:
            "Reduced project revisions by 50% through clear communication",
        },
        {
          name: "Code Review & Mentoring",
          description:
            "Mentored 2 junior developers, conducted 200+ code reviews",
          impact: "Improved team code quality score from 7.2 to 9.1",
        },
      ],
    },
    {
      category: "Project Management",
      skills: [
        {
          name: "Agile Methodologies",
          description:
            "Scrum Master experience, sprint planning, retrospectives",
          impact: "Increased team velocity by 30% through process optimization",
        },
        {
          name: "Timeline Management",
          description: "Multi-project coordination and deadline management",
          impact: "Maintained 100% on-time delivery rate across 25+ projects",
        },
        {
          name: "Stakeholder Management",
          description: "Requirements gathering and expectation management",
          impact: "Achieved 98% stakeholder satisfaction in project deliveries",
        },
      ],
    },
  ],

  // Technical stack by category
  technicalStack: [
    {
      category: "Frontend Frameworks",
      icon: "⚛️",
      color: "#61dafb",
      technologies: [
        { name: "React", level: "Expert", projects: "15+" },
        { name: "Next.js", level: "Advanced", projects: "8+" },
        { name: "Vue.js", level: "Intermediate", projects: "3+" },
        { name: "Angular", level: "Familiar", projects: "2+" },
      ],
    },
    {
      category: "Languages & Core",
      icon: "📝",
      color: "#f7df1e",
      technologies: [
        { name: "JavaScript", level: "Expert", projects: "25+" },
        { name: "TypeScript", level: "Advanced", projects: "12+" },
        { name: "HTML5/CSS3", level: "Expert", projects: "25+" },
        { name: "Node.js", level: "Intermediate", projects: "6+" },
      ],
    },
    {
      category: "Styling & UI",
      icon: "🎨",
      color: "#1572b6",
      technologies: [
        { name: "Material-UI", level: "Expert", projects: "10+" },
        { name: "Tailwind CSS", level: "Advanced", projects: "8+" },
        { name: "Sass/SCSS", level: "Advanced", projects: "12+" },
        { name: "Styled Components", level: "Advanced", projects: "6+" },
      ],
    },
    {
      category: "Tools & Workflow",
      icon: "🔧",
      color: "#4a90e2",
      technologies: [
        { name: "Git/GitHub", level: "Expert", projects: "25+" },
        { name: "VS Code", level: "Expert", projects: "25+" },
        { name: "Figma", level: "Advanced", projects: "15+" },
        { name: "Chrome DevTools", level: "Expert", projects: "25+" },
      ],
    },
  ],

  // Recent achievements and milestones
  achievements: [
    {
      title: "Performance Champion",
      description:
        "Optimized application performance, achieving 40% faster load times",
      impact: "Improved user engagement by 25%",
      timeframe: "Last 6 months",
    },
    {
      title: "Team Mentor",
      description:
        "Successfully mentored 2 junior developers to mid-level positions",
      impact: "Reduced onboarding time by 50%",
      timeframe: "2023",
    },
    {
      title: "Technical Leader",
      description:
        "Led migration to Next.js 14 App Router across 3 major projects",
      impact: "Enhanced SEO performance by 60%",
      timeframe: "2024",
    },
  ],

  // Current learning initiatives
  currentLearning: [
    {
      technology: "Three.js",
      progress: "Learning",
      motivation: "3D web experiences and interactive portfolios",
      timeline: "3 months",
      businessRelevance: "Emerging demand for immersive web experiences",
    },
    {
      technology: "GraphQL",
      progress: "Implementing",
      motivation: "More efficient API communication",
      timeline: "2 months",
      businessRelevance: "Reduced data fetching overhead by 30%",
    },
    {
      technology: "DevOps & CI/CD",
      progress: "Expanding",
      motivation: "Full-stack deployment capabilities",
      timeline: "4 months",
      businessRelevance: "Streamlined deployment processes",
    },
  ],

  // Career progression and timeline
  careerMilestones: [
    {
      year: "2024",
      role: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      keyAchievements: [
        "Led team of 3 developers",
        "Delivered 8 major projects",
        "Implemented performance optimization strategies",
        "Mentored junior developers",
      ],
      technologiesUsed: ["React", "Next.js", "TypeScript", "Material-UI"],
    },
    {
      year: "2023",
      role: "Frontend Developer",
      company: "StartupCo",
      keyAchievements: [
        "Built responsive web applications",
        "Integrated payment systems",
        "Achieved 95% test coverage",
        "Improved mobile experience",
      ],
      technologiesUsed: ["React", "JavaScript", "CSS3", "Redux"],
    },
    {
      year: "2022",
      role: "Junior Frontend Developer",
      company: "Digital Agency",
      keyAchievements: [
        "Developed 25+ client websites",
        "Maintained WordPress projects",
        "Learned React ecosystem",
        "Achieved client satisfaction goals",
      ],
      technologiesUsed: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    },
  ],

  // Value propositions for hiring managers
  valueProposition: {
    technical: [
      "3+ years of React expertise with proven track record",
      "Performance optimization specialist - 40% improvement average",
      "Full-stack capabilities with modern development practices",
      "Cross-browser compatibility and responsive design expert",
    ],
    business: [
      "Delivered 25+ projects with 100% on-time completion rate",
      "Reduced development costs through reusable component architecture",
      "Client satisfaction rate of 98% across all projects",
      "Team productivity increase of 30% through mentoring and best practices",
    ],
    leadership: [
      "Successfully mentored junior developers to mid-level positions",
      "Led technical decisions for team of 5+ developers",
      "Established coding standards and review processes",
      "Bridged communication between technical and business stakeholders",
    ],
  },

  // Certifications and education
  credentials: [
    {
      title: "React Developer Professional Certificate",
      issuer: "Meta",
      year: "2023",
      credentialId: "ABC123XYZ",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "GHI789RST",
    },
    {
      title: "Bachelor's Degree in Computer Science",
      issuer: "University of Lisbon",
      year: "2021",
      honors: "First Class Honours",
    },
  ],
};

// Skill statistics and metadata
export const skillsMetadata = {
  totalTechnologies: Object.values(technicalSkillsData).reduce(
    (total, category) => total + category.skills.length,
    0
  ),
  totalCategories: Object.keys(technicalSkillsData).length,
  yearsExperience: "3+",

  // Most used technologies (could be used for highlighting)
  featured: ["React", "TypeScript", "Next.js", "Material-UI", "Node.js", "Git"],

  // Learning trajectory
  currentlyLearning: [
    {
      name: "Three.js",
      category: "frontend",
      progress: "Beginner",
      motivation: "3D web experiences",
    },
    {
      name: "GraphQL",
      category: "backend",
      progress: "Intermediate",
      motivation: "Efficient API queries",
    },
    {
      name: "Kubernetes",
      category: "cloud",
      progress: "Learning",
      motivation: "Container orchestration",
    },
  ],

  // Expertise levels by category
  expertiseByCategory: {
    frontend: "Expert",
    styling: "Expert",
    backend: "Intermediate",
    tools: "Advanced",
    cloud: "Intermediate",
  },
};
