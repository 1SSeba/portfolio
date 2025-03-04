import { string } from "astro:schema";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
  github?: string;
  featured?: boolean;
};

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: "all", name: "Todos" },
  { id: "web", name: "Desarrollo Web" },
  { id: "mobile", name: "Apps Móviles" },
  { id: "iot", name: "IoT" },
  { id: "ai", name: "Inteligencia Artificial" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con gestión de inventario, pagos y análisis de datos en tiempo real.",
    image: "/images/projects/bg.jpg",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "https://github.com/username/ecommerce",
    featured: true
  },
  {
    id: "2",
    title: "Portfolio Builder",
    description: "Herramienta para crear portfolios profesionales con múltiples plantillas y opciones de personalización.",
    image: "/images/projects/bg.jpg",
    category: "web",
    tags: ["Vue", "Firebase", "Tailwind"],
    link: "#",
    github: "https://github.com/username/portfolio-builder",
    featured: true,
  },
  {
    id: "3",
    title: "Fitness Tracker App",
    description: "Aplicación móvil para seguimiento de rutinas de ejercicio, nutrición y progreso personal.",
    image: "/images/projects/bg.jpg",
    category: "mobile",
    tags: ["React Native", "Firebase", "GraphQL"],
    link: "#",
    github: "",
    featured: false
  },
  {
    id: "4",
    title: "Smart Home Dashboard",
    description: "Panel de control para dispositivos IoT del hogar con análisis de consumo energético.",
    image: "/images/projects/bg.jpg",
    category: "iot",
    tags: ["React", "Node.js", "MQTT", "Chart.js"],
    link: "#",
    github: "https://github.com/username/smart-home",
    featured: true,
  },
  {
    id: "5",
    title: "AI Image Generator",
    description: "Herramienta que utiliza inteligencia artificial para crear imágenes personalizadas.",
    image: "/images/projects/bg.jpg",
    category: "ai",
    tags: ["Python", "TensorFlow", "Next.js"],
    link: "#",
    featured: true
  }
  // Add more projects...
];