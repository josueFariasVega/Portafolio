import {
  Skill,
  Project,
  Experience,
  ContactInfo,
} from "../types";

export const PERSONAL_INFO = {
  name: "Josué Farías",
  title: "Fullstack Developer",
  subtitle:
    "Creando experiencias digitales excepcionales con tecnologías modernas",
  bio: "Desarrollador Fullstack de Asunción, Paraguay con pasión por crear soluciones digitales innovadoras. Combino +1 año de experiencia práctica con habilidades en diseño, pensamiento sistemático y visión estratégica para desarrollar aplicaciones web escalables.",
};

export const SKILLS: Skill[] = [
  {
    id: "1",
    name: "React.js",
    category: "frontend",
    level: 95,
    icon: "⚛️",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    description:
      "Framework principal para desarrollo de aplicaciones web modernas",
  },
  {
    id: "2",
    name: "Next.js",
    category: "frontend",
    level: 90,
    icon: "▲",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description:
      "Framework React para aplicaciones web full-stack",
  },
  {
    id: "3",
    name: "TypeScript",
    category: "frontend",
    level: 70,
    icon: "📘",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "Tipado estático para JavaScript, mejorando la robustez del código",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    category: "frontend",
    level: 92,
    icon: "🎨",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    description:
      "Framework CSS utility-first para diseños responsivos",
  },
  {
    id: "5",
    name: "Node.js",
    category: "backend",
    level: 85,
    icon: "🟢",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    description:
      "Runtime de JavaScript para desarrollo backend escalable",
  },
  {
    id: "6",
    name: "NestJS",
    category: "backend",
    level: 75,
    icon: "🔴",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    description:
      "Framework progresivo de Node.js para aplicaciones del lado del servidor",
  },
  {
    id: "7",
    name: "PostgreSQL",
    category: "backend",
    level: 80,
    icon: "💾",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    description: "Base de datos relacional avanzada",
  },
  {
    id: "8",
    name: "MongoDB",
    category: "backend",
    level: 78,
    icon: "💾",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    description:
      "Base de datos NoSQL para aplicaciones modernas",
  },
  {
    id: "9",
    name: "GraphQL",
    category: "backend",
    level: 50,
    icon: "💾",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    description: "Lenguaje de consulta para APIs",
  },
  {
    id: "10",
    name: "Git",
    category: "tools",
    level: 90,
    icon: "🌿",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    description:
      "Control de versiones y colaboración en proyectos",
  },
  {
    id: "11",
    name: "Vercel",
    category: "tools",
    level: 92,
    icon: "▲",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    description:
      "Plataforma de deployment para aplicaciones web modernas",
  },
  {
    id: "12",
    name: "Figma",
    category: "design",
    level: 85,
    icon: "🎨",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    description:
      "Herramienta de diseño para prototipado y colaboración",
  },
  {
    id: "13",
    name: "Framer Motion",
    category: "design",
    level: 88,
    icon: "✨",
    iconUrl: "YOUR_FRAMER_LOGO_URL",
    description: "Biblioteca de animaciones para React",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Nutri AI",
    description:
      "Dashboard nutricional inteligente con IA que combina ciencia nutricional avanzada",
    longDescription:
      "NutriAI combina inteligencia artificial avanzada con ciencia nutricional para crear el plan alimenticio perfecto que se adapta a tu ADN metabólico único. Una aplicación web completa con dashboard interactivo, análisis de precisión y optimización 24/7.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "OpenAI API",
    ],
    imageUrl: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NDEzNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "https://github.com/josueFariasVega/nutri-ai",
    liveUrl: "https://nutri-ai-sigma.vercel.app/",
    featured: true,
    status: "completed",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Desarrollo Fullstack",
    position: "Fullstack Developer (Frontend + Backend)",
    duration: "2024 - Presente",
    description: [
      "Desarrollo de aplicaciones web completas tanto en frontend con React/Next.js como backend con NestJS",
      "Implementación de APIs REST robustas y escalables utilizando NestJS, TypeORM y PostgreSQL",
      "Diseño y desarrollo de arquitecturas backend modulares siguiendo principios SOLID y patrones de diseño",
      "Integración de servicios backend con interfaces modernas de React utilizando TypeScript",
      "Gestión de autenticación, autorización y seguridad en aplicaciones fullstack",
    ],
    technologies: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "TypeORM",
    ],
    type: "freelance",
  },
  {
    id: "2",
    company: "Formación Autodidacta",
    position: "Desarrollo Web & Backend",
    duration: "2021 - 2024",
    description: [
      "Inicio en desarrollo web desde 2021 con aprendizaje autodidacta continuo",
      "+3 años de contacto con desarrollo web, +1 año de experiencia formal",
      "Especialización progresiva en tecnologías backend: Node.js, NestJS, bases de datos SQL y NoSQL",
      "Enfoque en arquitecturas escalables, APIs RESTful y patrones de desarrollo backend",
      "Desarrollo de proyectos personales integrando frontend y backend de forma profesional",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    type: "education",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "jf0981157235@gmail.com",
  github: "https://github.com/josueFariasVega",
  linkedin:
    "https://www.linkedin.com/in/josue-farias-426326267/",
  twitter: "https://twitter.com/josuefarías",
  location: "Asunción, Paraguay",
};