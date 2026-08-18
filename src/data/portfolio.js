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
  avatar: "/IMG_20260510_022238.png",
};

import ProjectOne from "../assets/Screenshot from 2026-07-24 00-18-26.png";
import ProjectTwo from "../assets/Screenshot from 2026-07-23 23-53-38.png";
import ProjectThree from "../assets/Screenshot from 2026-07-24 00-39-13.png";
import ProjectFour from "../assets/Screenshot from 2026-07-27 22-01-16.png";
import ProjectFive from "../assets/Screenshot from 2026-08-18 20-36-53.png";
import ProjectSix from "../assets/Screenshot from 2026-08-18 20-34-47.png";

export const stats = [
  { label: "Projects", value: 12 },
  { label: "Years Experience", value: 1 },
  // { label: "Happy Clients", value: 15 },
  { label: "Technologies", value: 13 },
];

export const aboutText = {
  intro:
    "Hi, I'm Rakib Sarker — a Frontend Developer specializing in React.js, Next.js, JavaScript(ES6+), Tailwind CSS, and building fast, responsive, and modern web applications.",
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
    title: "Harir-Shad Dessert E-Commerce Platform",
    description:
      "Harir Shad is a modern and user-friendly dessert e-commerce platform built with Next.js, designed to make discovering and ordering delicious desserts simple and enjoyable. The website features a beautiful, responsive UI with Light Mode and Dark Mode, allowing users to browse dessert items comfortably across devices. Customers can easily search for products, explore product details through Quick View, add their favorite items to a Wishlist, manage their Shopping Cart, and place orders smoothly",
    image: ProjectFive,
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDb",
      "NextAuth",
    ],
    live: "https://harir-shad.vercel.app",
    githubClient: "https://github.com/Sark-Rakib/harir-shad",
    highlights: [
      "Advanced product search",
      "Quick view & wishlist",
      "Easy payment system",
      "Role-based admin panel",
    ],
  },

  {
    id: 2,
    title: "Remote Recruit — Job Recruitment Platform",
    description:
      "Remote Recruit is a modern job recruitment platform designed to connect job posters and job seekers in a simple and efficient way. The platform allows companies or recruiters to register as Job Posters and publish job opportunities, while users can register as Job Finders to explore and find suitable remote jobs. The platform also includes an Admin Panel where administrators can monitor and manage users, job postings, and overall platform activities.",
    image: ProjectSix,
    tags: [
      "React.js",
      "JavaScript(ES6+)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDb",
      "FireBase Auth",
    ],
    live: "https://remote-recruitt.vercel.app",
    githubClient: "https://github.com/Sark-Rakib/remote-recruit",
    highlights: [
      "Easy job posting system",
      "Job seeker registration & job search",
      "Job poster registration & management",
      "Role-based authentication",
      "Admin panel & platform management",
      "Job post management",
      "User & job monitoring",
    ],
  },
  {
    id: 3,
    title: "Lunor Official E-Commerce Platform",
    description:
      "Lunor is a responsive e-commerce platform that allows users to browse products, filter categories, and place orders through a modern and user-friendly interface. Built with React.js, Node.js, Express.js, MongoDB, and Firebase to deliver a scalable and seamless shopping experience",
    image: ProjectOne,
    tags: [
      "React.js",
      "JavaScript(ES6+)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDb",
      "FireBase Auth",
    ],
    live: "https://lunorr.netlify.app/",
    githubClient: "https://github.com/Sark-Rakib/lunor-client",
    githubServer: "https://github.com/Sark-Rakib/lunor-server",
    highlights: ["Easy payment system", "Role-based admin panel"],
  },
  {
    id: 4,
    title: "Googly Fashion",
    description:
      "Googly Fashion is a modern fashion eCommerce platform where users can browse trendy clothing, filter products by price, color, and size, add items to their cart, track orders, and enjoy a smooth, responsive shopping experience across all devices.",
    image: ProjectFour,
    tags: [
      "React",
      "JavaScript(ES6+)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDb",
      "FireBase Auth",
    ],
    live: "https://googly-fashionn.vercel.app",
    githubClient: "https://github.com/Sark-Rakib/googly-fashion",
    // githubServer: "https://github.com/rakibsarker/ecommerce",
    highlights: [
      "Price, color & size filtering",
      "Easy add to cart",
      "Real-time order tracking",
      "Secure order placement",
    ],
  },
  {
    id: 5,
    title: "Blood Connect Platform",
    description:
      "BloodConnect is a blood donation platform that connects blood donors with people in need. Users can search donors by blood group and location, register as donors, and quickly contact available donors through a simple, responsive, and user-friendly interface.",
    image: ProjectThree,
    tags: [
      "Next.js",
      "JavaScript(ES6+)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDb",
      "Next Auth",
    ],
    live: "https://blood-donation-dmya.vercel.app",
    githubClient: "https://github.com/Sark-Rakib/blood-donation",
    // githubServer: "https://github.com/rakibsarker/ecommerce",
    highlights: [
      "Search donors by blood group",
      "One-click call to donors",
      "Donor registration system",
    ],
  },

  {
    id: 6,
    title: "Mk Sports E-Commerce Jersey Shop",
    description:
      "MK Sports is a modern jersey eCommerce website where users can explore and purchase football, cricket, basketball, and national team jerseys. It features a clean, responsive design with product details, a shopping cart, secure authentication, and a smooth ordering experience across all devices.",
    image: ProjectTwo,
    tags: [
      "React",
      "JavaScript(ES6+)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDb",
      "FireBase Auth",
    ],
    live: "https://mk-sports.vercel.app",
    githubClient: "https://github.com/Sark-Rakib/mk-sports",
    githubServer: "https://github.com/rakibsarker/ecommerce",
    highlights: ["Smooth User Experience", "Real-time Data"],
  },
];

export const experiences = [
  // {
  //   id: 1,
  //   role: "Senior Frontend Developer",
  //   company: "TechCorp",
  //   period: "2023 - Present",
  //   location: "Bangalore",
  //   description:
  //     "Leading frontend architecture for multiple high-traffic client projects. Established coding standards, code review processes, and mentored a team of 3 junior developers.",
  //   achievements: [
  //     "Improved Core Web Vitals by 40% across all projects",
  //     "Built a reusable component library adopted by 3 teams",
  //     "Reduced build times by 60% through webpack optimization",
  //   ],
  // },
  // {
  //   id: 2,
  //   role: "Frontend Developer",
  //   company: "WebAgency",
  //   period: "2021 - 2023",
  //   location: "Bangalore",
  //   description:
  //     "Built responsive web applications using React and Next.js. Collaborated closely with designers to implement pixel-perfect, accessible UIs.",
  //   achievements: [
  //     "Delivered 15+ client projects on time and within budget",
  //     "Implemented CI/CD pipelines reducing deployment time by 70%",
  //     "Achieved 95+ Lighthouse scores across all projects",
  //   ],
  // },
  // {
  //   id: 3,
  //   role: "Junior Frontend Developer",
  //   company: "StartupXYZ",
  //   period: "2020 - 2021",
  //   location: "Remote",
  //   description:
  //     "Developed and maintained client websites. Learned modern frontend workflows, best practices, and agile development methodologies.",
  //   achievements: [
  //     "Converted legacy jQuery codebase to React",
  //     "Improved page load speed by 50% with lazy loading",
  //     "Introduced modern CSS practices (Grid, Flexbox)",
  //   ],
  // },
  {
    id: 1,
    role: "Frontend Developer",
    company: "Personal Projects",
    period: "2024 - Present",
    location: "Bangladesh",
    description:
      "Built modern, responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Focused on performance, accessibility, and creating intuitive user experiences through real-world projects.",
    achievements: [
      "Developed multiple responsive web applications with React.js and Next.js",
      "Implemented authentication, REST APIs, and reusable UI components",
      "Optimized application performance and responsive layouts across devices",
    ],
  },
];
