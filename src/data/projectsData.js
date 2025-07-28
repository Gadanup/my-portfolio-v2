// data/projectsData.js

export const projectsData = {
  projects: [
    {
      id: 7,
      title: "Personal Portfolio Website",
      description:
        "A comprehensive portfolio showcasing modern web development practices and interactive design.",
      longDescription:
        "This portfolio represents the culmination of my frontend development journey, featuring a fully responsive design with smooth animations, sophisticated dark theme, and modular component architecture. Built with Next.js and Material-UI, it demonstrates my ability to create engaging user experiences while maintaining clean, maintainable code. Every component has been carefully crafted to showcase technical skills while providing an intuitive and enjoyable browsing experience.",
      images: [
        "/portfolio/portfolio-about.png",
        "/portfolio/portfolio-experience.png",
        "/portfolio/portfolio-projects.png",
        "/portfolio/portfolio-skills.png",
        "/portfolio/portfolio-contact.png",
      ],
      technologies: [
        "Next.js",
        "React",
        "Material-UI",
        "Framer Motion",
        "JavaScript",
        "CSS3",
        "Responsive Design",
      ],
      category: "Next.js",
      status: "Live",
      liveUrl: "", // Dynamic current URL
      githubUrl: "https://github.com/claudio/portfolio-website",
      completedDate: new Date().toISOString().split("T")[0], // Current date
      duration: "3 months",
      highlights: [
        "Responsive design system",
        "Smooth micro-interactions",
        "Component-based architecture",
        "Advanced animations",
        "SEO optimized",
        "Performance focused",
        "Accessibility compliant",
        "Modern dark theme",
      ],
      achievements: [
        "100% Lighthouse performance score",
        "Fully responsive across all devices",
        "Smooth 60fps animations",
        "Component reusability of 90%+",
      ],
      challenges:
        "Creating a cohesive design system that effectively showcases technical skills while maintaining excellent user experience across all devices. Balancing rich animations with performance optimization and ensuring accessibility compliance without compromising visual appeal.",
      featured: true,
      color: "#4a90e2",
    },
    {
      id: 2,
      title: "Liga dos Veteranos do Sado",
      description:
        "Setúbal's 7-a-side Football League Platform that provides comprehensive data.",
      longDescription:
        "A comprehensive website to manage and display all data related to the Liga dos Veteranos do Sado, a 7-a-side football league based in Setúbal, Portugal. Features include standings, statistics, game pages, team information, and more.",
      images: [
        "/veteranos/veteranos-cup.png",
        "/veteranos/veteranos-hero.png",
        "/veteranos/veteranos-match.png",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Material-UI"],
      category: "Full Stack",
      status: "Live",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/claudio/ecommerce-dashboard",
      completedDate: "2024-01-15",
      duration: "3 months",
      highlights: [
        "Real-time analytics",
        "Responsive design",
        "Advanced filtering",
        "Role-based access",
      ],
      challenges:
        "Optimizing real-time updates for large datasets while maintaining smooth user experience",
      featured: true,
      color: "#4a90e2",
    },
    {
      id: 3,
      title: "Benny's CheatSheet",
      description:
        "A comprehensive inventory and order management system for a GTA V RP mechanic shop.",
      longDescription:
        "Benny's CheatSheet is a complete business management solution developed for the 'Benny's' mechanic shop in the GTA V RP server 'Vida Real Roleplay - Legacy'. The system serves as a centralized database for automotive parts inventory, materials management, and client service operations. Used daily by multiple players, it streamlines the entire workflow from customer requests to order fulfillment, providing automated cost calculations and comprehensive stock management.",
      images: [
        "/bennys/bennys.png",
        "/bennys/bennys-criar.png",
        "/bennys/bennys-orcamentos.png",
        "bennys/bennys-inventario.png",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Supabase",
        "Database Management",
        "API Integration",
      ],
      category: "Business Management",
      status: "Live",
      liveUrl: "https://bennys-cheatsheet.com",
      githubUrl: "https://github.com/your-username/bennys-cheatsheet",
      completedDate: "10/02/2025",
      duration: "1 month",
      highlights: [
        "Automated cost calculations",
        "Client ticket generation",
        "Real-time inventory management",
        "Partner pricing system",
        "Multi-user daily usage",
        "Complete stock control",
      ],
      challenges:
        "Creating an intuitive interface that handles complex pricing calculations across different customer types while maintaining real-time inventory accuracy in a multi-user environment",
      featured: true,
      color: "#ffa500",
    },
    {
      id: 4,
      title: "Tugamon",
      description:
        "A Pokemon-inspired web experience celebrating Portuguese cultures.",
      longDescription:
        "Tugamon reimagines the beloved Pokemon universe through a distinctly Portuguese lens, transforming iconic elements into representations of Portugal's diverse culture. From pastéis de nata-inspired creatures to locations based on historic Portuguese cities, this project creates an immersive digital experience that celebrates national identity while maintaining the charm and adventure of the original concept.",
      images: ["tugamon/tugamon-main.jpg", "tugamon/tugamon-pokedex.jpg"],
      technologies: ["Next.js", "React", "Design Tools"],
      category: "Web Applications",
      status: "In Development",
      liveUrl: null,
      githubUrl: "https://github.com/your-username/tugamon",
      completedDate: null,
      duration: "Ongoing",
      highlights: [
        "Portuguese-themed creatures",
        "Cultural location mapping",
        "Traditional food integration",
        "Heritage character design",
        "Interactive exploration",
      ],
      challenges:
        "Balancing authentic Portuguese cultural representation with engaging gameplay mechanics while creating original designs that honor both Pokemon's legacy and Portugal's unique identity",
      featured: true,
      color: "#ffcc00",
    },
    {
      id: 5,
      title: "Blackbeardz DJ Website",
      description:
        "Professional portfolio and  platform for Portuguese DJ duo Blackbeardz.",
      longDescription:
        "A dynamic web presence designed to elevate the Blackbeardz brand and streamline their booking process. The site serves as both a comprehensive portfolio showcasing their musical journey and a professional tool for event organizers to discover and book the duo. With seamless integration of major music platforms and smooth animations, the website captures the energy and professionalism of their performances.",
      images: [
        "blackbeardz/blackbeardz-main.png",
        "blackbeardz/blackbeardz-duo.png",
        "blackbeardz/blackbeardz-tracks.png",
      ],
      technologies: [
        "Next.js",
        "YouTube API",
        "Spotify API",
        "Framer Motion",
        "React",
      ],
      category: "Artist Portfolio",
      status: "In Development",
      liveUrl: null,
      githubUrl: "https://github.com/your-username/blackbeardz-website",
      completedDate: null,
      duration: "Ongoing",
      highlights: [
        "Music platform integration",
        "Booking management system",
        "Event showcase gallery",
        "Smooth animations",
        "Professional portfolio",
        "Mobile-responsive design",
      ],
      challenges:
        "Creating a visually striking design that reflects the duo's musical style while integrating multiple APIs seamlessly and ensuring optimal performance for media-heavy content",
      featured: true,
      color: "#1db954",
    },
  ],

  categories: ["All", "React", "Next.js", "Full Stack", "Landing Pages"],

  hero: {
    title: "My Projects",
    subtitle:
      "A collection of web applications and websites I've built using modern technologies",
    stats: [
      { label: "Projects Completed", value: "25+", icon: "🚀" },
      { label: "Technologies Mastered", value: "15+", icon: "💻" },
      { label: "Lines of Code", value: "50K+", icon: "⚡" },
      { label: "Client Satisfaction", value: "100%", icon: "⭐" },
    ],
    skills: [
      { name: "React", level: 95, color: "#61dafb" },
      { name: "Next.js", level: 90, color: "#000000" },
      { name: "TypeScript", level: 85, color: "#3178c6" },
      { name: "Node.js", level: 80, color: "#339933" },
    ],
  },

  animations: {
    floatingIcons: ["⚛️", "🚀", "💻", "🎨", "🔧", "✨"],
  },
};
