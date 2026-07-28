export const personalInfo = {
  name: "RAKIB SARKER",
  role: "Frontend Developer",
  tagline:
    "Frontend Developer specializing in React.js, JavaScript, and Tailwind CSS, building responsive, high-performance, and user-friendly web applications.",
  location: "Bogura, Bangladesh",
  email: "mdrakibsarkar1@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1rlu4FQPxGqvzreRbI_r2Qb83QTKNaeXm/view?usp=sharing",
  social: {
    github: "https://github.com/Sark-Rakib",
    linkedin: "https://www.linkedin.com/in/rakib-sarker-",
    twitter: "https://x.com/Cap_tain01",
  },
  avatar: "/profile.jpg",
};

export const stats = [
  { label: "Projects Delivered", value: 20 },
  { label: "Years Experience", value: 3 },
  { label: "Happy Clients", value: 15 },
  { label: "Technologies", value: 10 },
];

export const aboutText = {
  intro:
    "I'm a Frontend Developer based in Bangalore with 3+ years of experience building modern, performant web applications. I specialize in React, Next.js, and TypeScript.",
  detail:
    "I focus on writing clean, maintainable code and creating intuitive user interfaces. I enjoy collaborating with designers and backend engineers to deliver products that make a real impact. When I'm not coding, I explore new technologies and contribute to open-source projects.",
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, icon: "⚛" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "TypeScript", level: 50, icon: "TS" },
      { name: "JavaScript", level: 92, icon: "JS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, icon: "⚛" },
      { name: "Express.js", level: 85, icon: "▲" },
      { name: "MongoDB", level: 80, icon: "M" },
      { name: "Firebase", level: 92, icon: "FB" },
    ],
  },
  {
    title: "Styling",
    skills: [
      { name: "Tailwind CSS", level: 95, icon: "TW" },
      { name: "CSS / Sass", level: 90, icon: "#" },
      { name: "Framer Motion", level: 75, icon: "FM" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 85, icon: "GIT" },
      { name: "VS Code", level: 90, icon: "VS" },
      { name: "Figma", level: 70, icon: "F" },
      { name: "REST APIs", level: 80, icon: "API" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with real-time cart, Stripe payments, and an admin dashboard for managing products and orders.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    live: "https://example.com",
    github: "https://github.com/rakibsarker/ecommerce",
    highlights: [
      "Real-time inventory management",
      "Stripe payment integration",
      "Role-based admin panel",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task manager with drag-and-drop boards, real-time updates, and team workspaces.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "TypeScript", "Node.js", "WebSocket"],
    live: "https://example.com",
    github: "https://github.com/rakibsarker/taskapp",
    highlights: [
      "Drag-and-drop Kanban boards",
      "Real-time collaboration",
      "Team workspaces",
    ],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with 7-day forecasts, location detection, and interactive charts.",
    image: "/projects/weather.jpg",
    tags: ["Next.js", "OpenWeather API", "Chart.js"],
    live: "https://example.com",
    github: "https://github.com/rakibsarker/weather",
    highlights: [
      "Geolocation-based weather",
      "7-day forecast charts",
      "Responsive design",
    ],
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description:
      "CLI tool that generates customizable portfolio websites from a JSON configuration file.",
    image: "/projects/portfolio-gen.jpg",
    tags: ["Node.js", "CLI", "Handlebars"],
    live: "https://example.com",
    github: "https://github.com/rakibsarker/portfolio-gen",
    highlights: [
      "JSON-driven generation",
      "Multiple theme support",
      "Zero-config setup",
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp",
    period: "2023 - Present",
    location: "Bangalore",
    description:
      "Leading frontend architecture for multiple high-traffic client projects. Established coding standards, code review processes, and mentored a team of 3 junior developers.",
    achievements: [
      "Improved Core Web Vitals by 40% across all projects",
      "Built a reusable component library adopted by 3 teams",
      "Reduced build times by 60% through webpack optimization",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "WebAgency",
    period: "2021 - 2023",
    location: "Bangalore",
    description:
      "Built responsive web applications using React and Next.js. Collaborated closely with designers to implement pixel-perfect, accessible UIs.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Achieved 95+ Lighthouse scores across all projects",
    ],
  },
  {
    id: 3,
    role: "Junior Frontend Developer",
    company: "StartupXYZ",
    period: "2020 - 2021",
    location: "Remote",
    description:
      "Developed and maintained client websites. Learned modern frontend workflows, best practices, and agile development methodologies.",
    achievements: [
      "Converted legacy jQuery codebase to React",
      "Improved page load speed by 50% with lazy loading",
      "Introduced modern CSS practices (Grid, Flexbox)",
    ],
  },
];
