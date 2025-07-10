"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
  TextField,
  InputAdornment,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Fade,
  Skeleton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const BlogSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  
  // State management
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Reusable React Components: A Practical Guide",
      slug: "building-reusable-react-components",
      excerpt: "Learn how to create flexible, maintainable React components that can be used across multiple projects. We'll cover composition patterns, prop design, and TypeScript integration.",
      content: `# Building Reusable React Components

Creating reusable components is one of the most important skills for any React developer. In this comprehensive guide, we'll explore the patterns and principles that make components truly reusable.

## The Foundation: Component Composition

The key to reusable components lies in composition over inheritance. Instead of creating rigid component hierarchies, we design flexible building blocks that can be combined in different ways.

\`\`\`jsx
const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  ...props 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      {...props}
    >
      {children}
    </button>
  );
};
\`\`\`

## Props Design Patterns

When designing component APIs, consider these principles:

1. **Sensible defaults**: Most props should have reasonable default values
2. **Flexibility**: Accept both specific props and spread remaining props
3. **Composition**: Use children prop for flexible content
4. **TypeScript**: Define clear interfaces for better developer experience

## Real-World Example

Here's how we might build a flexible Card component:

\`\`\`jsx
interface CardProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  variant = 'elevated',
  padding = 'medium',
  children,
  className,
  ...props
}) => {
  return (
    <div 
      className={\`card card-\${variant} padding-\${padding} \${className || ''}\`}
      {...props}
    >
      {children}
    </div>
  );
};
\`\`\`

This approach ensures our components are both flexible and maintainable across different use cases.`,
      featuredImage: "/api/placeholder/800/400",
      category: "React",
      tags: ["React", "Components", "Best Practices", "TypeScript"],
      publishedAt: "2024-01-15",
      updatedAt: "2024-01-16",
      readTime: 8,
      difficulty: "Intermediate",
      author: {
        name: "Cláudio Jesus",
        avatar: "/api/placeholder/50/50",
        bio: "Frontend Developer passionate about React and user experience"
      },
      engagement: {
        views: 1250,
        likes: 45,
        shares: 12,
        comments: 8
      },
      featured: true,
      color: "#61dafb"
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use What",
      slug: "css-grid-vs-flexbox",
      excerpt: "A comprehensive comparison of CSS Grid and Flexbox, with practical examples and decision-making guidelines for choosing the right layout method.",
      content: `# CSS Grid vs Flexbox: The Ultimate Guide

Both CSS Grid and Flexbox are powerful layout systems, but knowing when to use each one can significantly improve your CSS skills and development efficiency.

## Understanding the Fundamentals

**Flexbox** is designed for one-dimensional layouts - either a row or a column. It excels at distributing space and aligning items within a single axis.

**CSS Grid** is designed for two-dimensional layouts - both rows and columns simultaneously. It's perfect for complex layouts where you need precise control over both dimensions.

## When to Use Flexbox

Use Flexbox when you need to:

- Align items within a container
- Distribute space between items
- Create responsive navigation bars
- Center content vertically and horizontally
- Build component layouts (buttons, cards, etc.)

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
}
\`\`\`

## When to Use CSS Grid

Use CSS Grid when you need to:

- Create complex page layouts
- Position items in both dimensions
- Overlap elements intentionally
- Create responsive designs without media queries
- Build magazine-style layouts

\`\`\`css
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
\`\`\`

## The Best of Both Worlds

Often, the most effective approach is combining both:

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
\`\`\`

Remember: Grid for layout, Flexbox for components!`,
      featuredImage: "/api/placeholder/800/400",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Layout", "Responsive"],
      publishedAt: "2024-01-08",
      readTime: 6,
      difficulty: "Beginner",
      author: {
        name: "Cláudio Jesus",
        avatar: "/api/placeholder/50/50",
        bio: "Frontend Developer passionate about React and user experience"
      },
      engagement: {
        views: 890,
        likes: 32,
        shares: 8,
        comments: 5
      },
      featured: false,
      color: "#1572b6"
    },
    {
      id: 3,
      title: "From Junior to Senior: Lessons Learned",
      slug: "junior-to-senior-lessons",
      excerpt: "My personal journey from junior to senior developer, including the technical skills, soft skills, and mindset shifts that made the difference.",
      content: `# From Junior to Senior: My Development Journey

Three years ago, I was a junior developer struggling with imposter syndrome and wondering if I'd ever feel confident in my abilities. Today, I'm leading projects and mentoring other developers. Here's what I learned along the way.

## The Technical Evolution

### Junior Developer Me:
- Focused on making code work
- Copied solutions without understanding
- Avoided complex problems
- Worked in isolation

### Senior Developer Me:
- Focuses on making code maintainable
- Understands the "why" behind solutions
- Breaks down complex problems systematically
- Collaborates and seeks feedback

## Key Mindset Shifts

### 1. From "I Need to Know Everything" to "I Need to Know How to Learn"

The biggest shift was realizing that senior developers aren't valued for knowing every API by heart, but for their ability to learn quickly and solve problems effectively.

### 2. From "Perfect Code" to "Pragmatic Code"

I learned that the best code isn't the most clever or complex - it's the code that:
- Solves the business problem
- Can be understood by teammates
- Can be maintained and extended
- Performs adequately for its use case

### 3. From "Individual Contributor" to "Team Multiplier"

Senior developers don't just write code faster - they make the entire team more effective through:
- Code reviews that teach and improve quality
- Documentation that saves everyone time
- Mentoring that accelerates junior developers
- Technical decisions that prevent future problems

## Practical Steps That Made the Difference

### 1. Regular Code Reviews
Participating in code reviews (both giving and receiving) taught me more about clean code than any tutorial.

### 2. Side Projects with Purpose
Instead of tutorial-following, I built projects that solved real problems I encountered.

### 3. Teaching Others
Writing blog posts and helping junior developers forced me to truly understand concepts, not just use them.

### 4. Reading Other People's Code
Studying well-written open-source projects showed me patterns and practices I wouldn't have discovered otherwise.

## The Soft Skills That Matter

Technical skills get you the interview, but soft skills get you the promotion:

- **Communication**: Explaining technical concepts to non-technical stakeholders
- **Empathy**: Understanding user needs and team dynamics
- **Leadership**: Guiding technical decisions and project direction
- **Mentoring**: Helping others grow while reinforcing your own knowledge

## Advice for Current Junior Developers

1. **Embrace the struggle** - Feeling confused is part of learning
2. **Ask questions** - Senior developers were juniors once too
3. **Focus on fundamentals** - Frameworks change, principles don't
4. **Build in public** - Share your learning journey
5. **Find mentors** - Actively seek guidance from experienced developers

The journey from junior to senior isn't just about accumulating years of experience - it's about deliberate practice, continuous learning, and growing your impact beyond just the code you write.

Remember: Every senior developer was once a junior developer who kept learning and didn't give up.`,
      featuredImage: "/api/placeholder/800/400",
      category: "Career",
      tags: ["Career", "Growth", "Leadership", "Mentoring"],
      publishedAt: "2024-01-01",
      readTime: 7,
      difficulty: "Beginner",
      author: {
        name: "Cláudio Jesus",
        avatar: "/api/placeholder/50/50",
        bio: "Frontend Developer passionate about React and user experience"
      },
      engagement: {
        views: 2100,
        likes: 78,
        shares: 25,
        comments: 15
      },
      featured: true,
      color: "#4caf50"
    },
    {
      id: 4,
      title: "Optimizing React Performance: A Complete Guide",
      slug: "react-performance-optimization",
      excerpt: "Deep dive into React performance optimization techniques, from basic memo usage to advanced profiling and bundle splitting strategies.",
      content: `# React Performance Optimization: Complete Guide

Performance optimization in React applications is crucial for providing excellent user experiences. Let's explore the techniques that can make your React apps blazingly fast.

## Understanding React's Rendering Process

Before optimizing, it's important to understand how React renders components:

1. **Trigger**: Something causes a re-render (state change, props change, parent re-render)
2. **Render**: React calls component functions to figure out what should be on screen
3. **Commit**: React applies changes to the DOM

## Basic Optimization Techniques

### 1. React.memo for Component Memoization

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  // This component only re-renders when data or onUpdate changes
  return (
    <div>
      {data.map(item => (
        <Item key={item.id} item={item} onUpdate={onUpdate} />
      ))}
    </div>
  );
});
\`\`\`

### 2. useMemo for Expensive Calculations

\`\`\`jsx
const DataTable = ({ items, filters }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      filters.every(filter => filter(item))
    );
  }, [items, filters]);

  return (
    <table>
      {filteredItems.map(item => (
        <TableRow key={item.id} item={item} />
      ))}
    </table>
  );
};
\`\`\`

### 3. useCallback for Function Stability

\`\`\`jsx
const TodoList = ({ todos }) => {
  const [filter, setFilter] = useState('all');

  const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={handleToggle} 
        />
      ))}
    </div>
  );
};
\`\`\`

## Advanced Optimization Strategies

### Code Splitting with React.lazy

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### Virtualization for Large Lists

For lists with thousands of items, consider using react-window or react-virtualized.

## Performance Profiling

Use React DevTools Profiler to identify performance bottlenecks:

1. Record a session while interacting with your app
2. Identify components that render frequently or take long to render
3. Apply optimization techniques to the identified components

## Common Performance Anti-Patterns

### 1. Creating Objects in Render
\`\`\`jsx
// ❌ Bad: Creates new object on every render
<Component style={{ marginTop: 10 }} />

// ✅ Good: Define outside or use useMemo
const styles = { marginTop: 10 };
<Component style={styles} />
\`\`\`

### 2. Using Index as Key
\`\`\`jsx
// ❌ Bad: Using index as key
{items.map((item, index) => (
  <Item key={index} item={item} />
))}

// ✅ Good: Using stable identifier
{items.map(item => (
  <Item key={item.id} item={item} />
))}
\`\`\`

Remember: Measure first, optimize second. Don't optimize prematurely - profile your app to identify real bottlenecks before applying these techniques.`,
      featuredImage: "/api/placeholder/800/400",
      category: "React",
      tags: ["React", "Performance", "Optimization", "memo", "Profiling"],
      publishedAt: "2023-12-20",
      readTime: 10,
      difficulty: "Advanced",
      author: {
        name: "Cláudio Jesus",
        avatar: "/api/placeholder/50/50",
        bio: "Frontend Developer passionate about React and user experience"
      },
      engagement: {
        views: 1680,
        likes: 67,
        shares: 18,
        comments: 12
      },
      featured: false,
      color: "#61dafb"
    },
    {
      id: 5,
      title: "The State of Frontend Development in 2024",
      slug: "frontend-development-2024",
      excerpt: "An analysis of current trends, emerging technologies, and predictions for the future of frontend development based on industry surveys and personal observations.",
      content: `# The State of Frontend Development in 2024

As we navigate through 2024, the frontend development landscape continues to evolve at a rapid pace. Let's examine the current trends, emerging technologies, and what the future might hold.

## Current Technology Trends

### 1. React's Continued Dominance
React maintains its position as the most popular frontend framework, with the new Server Components and concurrent features gaining adoption:

- **Server Components**: Enabling better performance and SEO
- **Concurrent Rendering**: Improving user experience with time slicing
- **React 18 features**: Automatic batching, startTransition, and Suspense improvements

### 2. The Rise of Full-Stack Frameworks
Frameworks that blur the line between frontend and backend are gaining traction:

- **Next.js 14**: App Router, Server Actions, and improved performance
- **Remix**: Full-stack web framework focused on web standards
- **SvelteKit**: Svelte's answer to full-stack development
- **Nuxt 3**: Vue's full-stack solution with excellent DX

### 3. TypeScript Adoption
TypeScript has become the default choice for new projects:
- 78% of developers now use TypeScript regularly
- Major libraries prioritizing TypeScript-first development
- Improved tooling and IDE support

## Emerging Technologies

### 1. Web Assembly (WASM)
Bringing near-native performance to web applications:
- Rust and C++ libraries running in browsers
- Image/video processing without server round-trips
- Complex calculations and simulations

### 2. Edge Computing
Moving computation closer to users:
- Cloudflare Workers and Vercel Edge Functions
- Faster response times globally
- Reduced server costs for compute-heavy operations

### 3. AI-Powered Development Tools
AI is transforming how we write code:
- **GitHub Copilot**: AI pair programming
- **ChatGPT/Claude**: Code explanation and debugging
- **v0.dev**: AI-generated UI components
- **Automated testing**: AI-generated test cases

## Performance and User Experience Focus

### Core Web Vitals Importance
Google's Core Web Vitals have become critical for SEO and user experience:
- **LCP (Largest Contentful Paint)**: Loading performance
- **FID/INP (First Input Delay/Interaction to Next Paint)**: Interactivity
- **CLS (Cumulative Layout Shift)**: Visual stability

### Progressive Enhancement
Return to web fundamentals:
- HTML-first development
- CSS-first styling
- JavaScript as enhancement
- Better accessibility by default

## CSS Evolution

### 1. Modern CSS Features
New CSS capabilities reducing JavaScript dependencies:
- **Container Queries**: Responsive components
- **CSS Grid**: Complex layouts without frameworks
- **Custom Properties**: Dynamic theming
- **CSS Modules**: Scoped styling

### 2. CSS-in-JS vs Atomic CSS
The debate continues:
- **CSS-in-JS**: Styled-components, Emotion
- **Atomic CSS**: Tailwind CSS, UnoCSS
- **Hybrid approaches**: Stitches, Vanilla Extract

## Developer Experience Improvements

### 1. Build Tools Evolution
Faster, more efficient build tools:
- **Vite**: Lightning-fast development server
- **Turbopack**: Rust-powered bundler for Next.js
- **esbuild**: Go-based bundler for speed
- **SWC**: Rust-based compiler replacing Babel

### 2. Testing Ecosystem
More comprehensive testing approaches:
- **Vitest**: Fast unit testing
- **Playwright**: Reliable E2E testing
- **Testing Library**: User-centric testing
- **Storybook**: Component development and testing

## Predictions for the Future

### 1. Framework Consolidation
Expect continued consolidation around major frameworks, with full-stack solutions becoming the norm.

### 2. AI Integration
AI will become more integrated into development workflows, from code generation to automated testing and optimization.

### 3. Performance by Default
Frameworks will prioritize performance optimization out of the box, making it easier to build fast applications.

### 4. Web Standards Adoption
Increased adoption of web standards and APIs, reducing dependency on heavy JavaScript libraries.

## Challenges Ahead

### 1. Complexity Management
As applications grow more complex, managing state, dependencies, and architecture becomes increasingly challenging.

### 2. Performance vs Features
Balancing rich user experiences with performance constraints remains a key challenge.

### 3. Accessibility
Ensuring applications are accessible to all users while maintaining developer productivity.

## Conclusion

Frontend development in 2024 is characterized by maturation, performance focus, and the integration of AI tools. While the ecosystem remains complex, the trends point toward better developer experience, improved performance, and more accessible web applications.

The key to success in this environment is staying curious, focusing on fundamentals, and gradually adopting new technologies that provide clear value to your projects and users.`,
      featuredImage: "/api/placeholder/800/400",
      category: "Industry",
      tags: ["Trends", "Frontend", "2024", "Technology", "Predictions"],
      publishedAt: "2023-12-15",
      readTime: 12,
      difficulty: "Intermediate",
      author: {
        name: "Cláudio Jesus",
        avatar: "/api/placeholder/50/50",
        bio: "Frontend Developer passionate about React and user experience"
      },
      engagement: {
        views: 3200,
        likes: 89,
        shares: 34,
        comments: 22
      },
      featured: true,
      color: "#9c27b0"
    }
  ];

  const categories = ["All", "React", "CSS", "Career", "Industry", "JavaScript"];

  // Popular posts (top 3 by views)
  const popularPosts = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => b.engagement.views - a.engagement.views)
      .slice(0, 3);
  }, []);

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Get featured posts
  const featuredPosts = useMemo(() => {
    return blogPosts.filter(post => post.featured);
  }, []);

  // Handle category filter
  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Handle search
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle post click
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "#4caf50";
      case "Intermediate": return "#ff9800";
      case "Advanced": return "#f44336";
      default: return "#9e9e9e";
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  // Blog post card component
  const PostCard = ({ post, featured = false }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          height: "100%",
          cursor: "pointer",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: post.color,
            boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px ${post.color}40`,
            "& .post-image": {
              transform: "scale(1.05)",
            },
          },
        }}
        onClick={() => handlePostClick(post)}
      >
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <CardMedia
            component="img"
            height={featured ? 250 : 200}
            image={post.featuredImage}
            alt={post.title}
            className="post-image"
            sx={{
              transition: "transform 0.3s ease",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              display: "flex",
              gap: 1,
            }}
          >
            <Chip
              label={post.category}
              size="small"
              sx={{
                background: post.color,
                color: "white",
                fontWeight: 500,
              }}
            />
            {featured && (
              <Chip
                label="Featured"
                size="small"
                sx={{
                  background: "#4caf50",
                  color: "white",
                  fontWeight: 500,
                }}
              />
            )}
          </Box>
          <Chip
            label={post.difficulty}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              background: getDifficultyColor(post.difficulty),
              color: "white",
              fontWeight: 500,
            }}
          />
        </Box>
        
        <CardContent sx={{ p: 3 }}>
          <Typography 
            variant={featured ? "h5" : "h6"} 
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.title}
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mb: 3, 
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: featured ? 3 : 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.excerpt}
          </Typography>
          
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar
                src={post.author.avatar}
                alt={post.author.name}
                sx={{ width: 24, height: 24 }}
              />
              <Typography variant="caption" color="text.secondary">
                {post.author.name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessTimeIcon sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="caption" color="text.secondary">
                {post.readTime} min read
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="caption" color="text.secondary">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <VisibilityIcon sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="caption" color="text.secondary">
                {post.engagement.views}
              </Typography>
              <FavoriteIcon sx={{ fontSize: 16, color: "text.secondary", ml: 1 }} />
              <Typography variant="caption" color="text.secondary">
                {post.engagement.likes}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );

  // Loading skeleton component
  const PostSkeleton = () => (
    <Card sx={{ height: 400 }}>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Skeleton variant="text" width="80%" height={32} />
        <Skeleton variant="text" width="100%" height={20} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="100%" height={20} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Skeleton variant="text" width="30%" height={20} />
          <Skeleton variant="text" width="20%" height={20} />
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box sx={{ p: isMobile ? 2 : 4, maxWidth: "1400px", mx: "auto", overflow: "hidden" }}>
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Box sx={{ py: isMobile ? 2 : 4 }}>
                <Typography
                  variant={isMobile ? "h3" : "h1"}
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #4a90e2 0%, #73b6f1 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  My Blog
                </Typography>
                
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  sx={{
                    color: "text.primary",
                    mb: 3,
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}
                >
                  Thoughts on web development, React, and the ever-evolving tech landscape
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  I write about frontend development, share lessons learned, and explore the latest trends in web technology. 
                  Join me on this journey of continuous learning and discovery.
                </Typography>
                
                <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
                  <Chip
                    icon={<TrendingUpIcon />}
                    label={`${blogPosts.length} articles`}
                    sx={{
                      background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    label="Updated weekly"
                    variant="outlined"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  background: "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(216, 27, 96, 0.1) 100%)",
                  borderRadius: 4,
                  border: "1px solid rgba(74, 144, 226, 0.3)",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Stay Updated
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Get notified when I publish new articles about web development and tech insights.
                </Typography>
                
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<NotificationsIcon />}
                    onClick={() => setShowNewsletter(true)}
                    sx={{
                      background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
                      },
                    }}
                  >
                    Subscribe to Newsletter
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<RssFeedIcon />}
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  >
                    RSS Feed
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={itemVariants}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                    },
                  }}
                />
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "contained" : "outlined"}
                      size="small"
                      onClick={() => handleCategoryChange(category)}
                      sx={{
                        borderRadius: 3,
                        textTransform: "none",
                        fontWeight: 500,
                        ...(selectedCategory === category && {
                          background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                        }),
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Blog Posts */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Featured Posts */}
            {!searchTerm && selectedCategory === "All" && (
              <motion.div variants={itemVariants}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Featured Articles
                </Typography>
                <Grid container spacing={3} sx={{ mb: 6 }}>
                  {featuredPosts.slice(0, 2).map((post) => (
                    <Grid size={{ xs: 12, md: 6 }} key={post.id}>
                      <PostCard post={post} featured={true} />
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )}

            {/* All Posts */}
            <motion.div variants={itemVariants}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                {searchTerm || selectedCategory !== "All" ? "Search Results" : "Recent Articles"}
                <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                  ({filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'})
                </Typography>
              </Typography>

              <AnimatePresence mode="wait">
                {isLoading ? (
                  <Grid container spacing={3}>
                    {[...Array(4)].map((_, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <PostSkeleton />
                      </Grid>
                    ))}
                  </Grid>
                ) : filteredPosts.length > 0 ? (
                  <Grid container spacing={3}>
                    {filteredPosts.map((post) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={post.id}>
                        <PostCard post={post} />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        py: 8,
                        px: 4,
                      }}
                    >
                      <Typography variant="h5" sx={{ mb: 2, color: "text.secondary" }}>
                        No articles found
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Try adjusting your search terms or browse different categories
                      </Typography>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, lg: 4 }}>
            {/* About the Author */}
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  mb: 4,
                  background: "linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(74, 144, 226, 0.02) 100%)",
                  border: "1px solid rgba(74, 144, 226, 0.1)",
                }}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Avatar
                    src="/api/placeholder/80/80"
                    alt="Cláudio Jesus"
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 2,
                      border: "3px solid",
                      borderColor: "primary.main",
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Cláudio Jesus
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                    Frontend Developer passionate about React, performance, and creating great user experiences. 
                    I love sharing knowledge and learning from the community.
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  >
                    Follow on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Popular Posts */}
            <motion.div variants={itemVariants}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Popular Articles
              </Typography>
              <Card
                sx={{
                  mb: 4,
                  background: "linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.02) 100%)",
                  border: "1px solid rgba(76, 175, 80, 0.1)",
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <List sx={{ p: 0 }}>
                    {popularPosts.map((post, index) => (
                      <ListItem
                        key={post.id}
                        sx={{
                          cursor: "pointer",
                          borderRadius: 2,
                          transition: "background-color 0.2s ease",
                          "&:hover": {
                            backgroundColor: "rgba(76, 175, 80, 0.1)",
                          },
                        }}
                        onClick={() => handlePostClick(post)}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "primary.main",
                              fontWeight: 700,
                              minWidth: 24,
                            }}
                          >
                            {index + 1}
                          </Typography>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 600,
                                lineHeight: 1.3,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {post.title}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                              <VisibilityIcon sx={{ fontSize: 14, color: "text.secondary" }} />
                              <Typography variant="caption" color="text.secondary">
                                {post.engagement.views} views
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>

            {/* Categories */}
            <motion.div variants={itemVariants}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Categories
              </Typography>
              <Card
                sx={{
                  background: "linear-gradient(135deg, rgba(216, 27, 96, 0.05) 0%, rgba(216, 27, 96, 0.02) 100%)",
                  border: "1px solid rgba(216, 27, 96, 0.1)",
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {categories.slice(1).map((category) => {
                      const categoryPosts = blogPosts.filter(post => post.category === category);
                      return (
                        <Button
                          key={category}
                          variant="text"
                          onClick={() => handleCategoryChange(category)}
                          sx={{
                            justifyContent: "space-between",
                            textTransform: "none",
                            color: selectedCategory === category ? "primary.main" : "text.primary",
                            fontWeight: selectedCategory === category ? 600 : 400,
                            "&:hover": {
                              backgroundColor: "rgba(216, 27, 96, 0.1)",
                            },
                          }}
                        >
                          <span>{category}</span>
                          <Chip
                            label={categoryPosts.length}
                            size="small"
                            sx={{
                              backgroundColor: selectedCategory === category ? "primary.main" : "text.secondary",
                              color: "white",
                              fontSize: "0.75rem",
                              height: 20,
                            }}
                          />
                        </Button>
                      );
                    })}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Newsletter Dialog */}
        <Dialog
          open={showNewsletter}
          onClose={() => setShowNewsletter(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 4,
            },
          }}
        >
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Subscribe to Newsletter
            </Typography>
            <IconButton onClick={() => setShowNewsletter(false)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 3 }}>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Get the latest articles about web development, React, and frontend best practices 
              delivered directly to your inbox. No spam, unsubscribe at any time.
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                fullWidth
                label="Your Email"
                type="email"
                placeholder="name@example.com"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
                  py: 1.5,
                }}
              >
                Subscribe
              </Button>
            </Box>
            
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: "block" }}>
              By subscribing, you agree to receive email updates. You can unsubscribe at any time.
            </Typography>
          </DialogContent>
        </Dialog>

        {/* Blog Post Detail Dialog */}
        <Dialog
          open={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 4,
              maxHeight: "90vh",
            },
          }}
        >
          {selectedPost && (
            <>
              <DialogTitle sx={{ p: 0, position: "relative" }}>
                <img
                  src={selectedPost.featuredImage}
                  alt={selectedPost.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "50%",
                  }}
                >
                  <IconButton onClick={() => setSelectedPost(null)} sx={{ color: "white" }}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                  }}
                >
                  <Chip
                    label={selectedPost.category}
                    sx={{
                      background: selectedPost.color,
                      color: "white",
                      mb: 1,
                    }}
                  />
                  <Typography variant="h4" sx={{ color: "white", fontWeight: 700 }}>
                    {selectedPost.title}
                  </Typography>
                </Box>
              </DialogTitle>
              
              <DialogContent sx={{ p: 4 }}>
                {/* Post Meta */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, flexWrap: "wrap" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar
                      src={selectedPost.author.avatar}
                      alt={selectedPost.author.name}
                      sx={{ width: 32, height: 32 }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {selectedPost.author.name}
                    </Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarTodayIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {new Date(selectedPost.publishedAt).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {selectedPost.readTime} min read
                    </Typography>
                  </Box>
                  <Chip
                    label={selectedPost.difficulty}
                    size="small"
                    sx={{
                      background: getDifficultyColor(selectedPost.difficulty),
                      color: "white",
                    }}
                  />
                </Box>

                {/* Post Content */}
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    "& h1": { fontSize: "2rem", fontWeight: 700, mt: 3, mb: 2 },
                    "& h2": { fontSize: "1.5rem", fontWeight: 600, mt: 3, mb: 2 },
                    "& h3": { fontSize: "1.25rem", fontWeight: 600, mt: 2, mb: 1 },
                    "& p": { mb: 2 },
                    "& code": {
                      background: "rgba(74, 144, 226, 0.1)",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontFamily: "monospace",
                      fontSize: "0.9em",
                    },
                    "& pre": {
                      background: "#1e1e1e",
                      padding: "16px",
                      borderRadius: "8px",
                      overflow: "auto",
                      my: 2,
                    },
                    "& pre code": {
                      background: "none",
                      padding: 0,
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: selectedPost.content.replace(/\n/g, '<br/>').replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
                  }}
                />

                {/* Tags */}
                <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                    Tags:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {selectedPost.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        sx={{
                          background: `${selectedPost.color}20`,
                          color: selectedPost.color,
                          border: `1px solid ${selectedPost.color}40`,
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Share and Actions */}
                <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="outlined"
                    startIcon={<ShareIcon />}
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  >
                    Share Article
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<BookmarkIcon />}
                    sx={{
                      borderColor: "text.secondary",
                      color: "text.secondary",
                    }}
                  >
                    Bookmark
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<LaunchIcon />}
                    sx={{
                      borderColor: "text.secondary",
                      color: "text.secondary",
                    }}
                  >
                    Read on Medium
                  </Button>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Box>
    </motion.div>
  );
};

export default BlogSection;