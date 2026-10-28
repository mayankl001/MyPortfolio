import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  codezeal,
  digisaloon,
  digisaloons,
  digiestate,
  Ecom,
  tripguide,
  aiMood,
  threejs,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Chief Technical Head",
    company_name: "Digisaloon",
    icon: digisaloon,
    iconBg: "#1d1836",
    date: "June 2026 - Present",
    points: [
      "Leading technical strategy, architecture design, and core software development across all digital products.",
      "Managing cross-functional engineering teams to build scalable, high-performance web applications and services.",
      "Optimizing system performance, CI/CD pipelines, and integrating modern tech stacks for optimal developer productivity.",
      "Overseeing client requirements and transforming business needs into reliable technical solutions."
    ],
    skills: ["Leadership", "Full-Stack Architecture", "React", "Node.js", "System Design"],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Codezeal Private Limited",
    icon: codezeal,
    iconBg: "#E6DEDD",
    date: "July 2025 - Sept 2025",
    points: [
      "Developing and maintaining web applications using React.js and modern JavaScript frameworks.",
      "Collaborating with cross-functional teams including designers and product managers to deliver scalable products.",
      "Implementing responsive layouts, robust frontend state management, and ensuring seamless cross-browser compatibility.",
      "Participating in regular code reviews and optimizing web performance metrics."
    ],
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Git"],
  },
];

const testimonials = [
  {
    testimonial:
      "Mayank demonstrated exceptional problem-solving skills and delivered the project well ahead of our timeline.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "A proactive developer who really cares about user experience and code quality. Highly recommended!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "His expertise in full-stack architecture helped us streamline our web platform efficiently.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Digisaloon Platform",
    description:
      "Official digital marketing and IT solution website for Digisaloon. Built with modern full-stack architecture, dynamic service showcases, client onboarding flows, and optimized performance.",
    tags: [
      {
        name: "react",
        color: "text-cyan-400",
      },
      {
        name: "tailwind",
        color: "text-pink-400",
      },
      {
        name: "nodejs",
        color: "text-green-400",
      },
    ],
    image: digisaloons,
    source_code_link: "https://github.com/mayankl001",
    live_demo_link: "https://digisaloon.in",
  },
  {
    name: "Real Estate Website",
    description:
      "Full-featured Real Estate web platform enabling users to search, filter, buy, and rent properties. Includes interactive property viewings, agent contacts, and map integrations.",
    tags: [
      {
        name: "react",
        color: "text-cyan-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "express",
        color: "text-yellow-400",
      },
    ],
    image: digiestate,
    source_code_link: "https://github.com/mayankl001",
    live_demo_link: "https://digiestate-website.vercel.app/",
  },
  {
    name: "AI Mood Recommender",
    description:
      "AI-based system that detects user mood using NLP/ML techniques and provides personalized recommendations like music, movies, or activities to enhance user experience.",
    tags: [
      {
        name: "react",
        color: "text-cyan-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "tailwind",
        color: "text-pink-400",
      },
    ],
    image: aiMood,
    source_code_link: "https://github.com/mayankl001/mood-ai-recommender.git",
    live_demo_link: "https://mood-ai-recommender.vercel.app/",
  },
  {
    name: "E-Commerce Website",
    description:
      "Full-stack E-Commerce website featuring product filtering, cart management, and Django admin dashboard integration.",
    tags: [
      {
        name: "django",
        color: "text-emerald-400",
      },
      {
        name: "javascript",
        color: "text-yellow-400",
      },
      {
        name: "restapi",
        color: "text-purple-400",
      },
    ],
    image: Ecom,
    source_code_link: "https://github.com/mayankl001/E-CommerceWebsite.git",
    live_demo_link: "https://ecommerce-website.vercel.app/",
  },
];

export { navLinks, services, technologies, experiences, testimonials, projects };