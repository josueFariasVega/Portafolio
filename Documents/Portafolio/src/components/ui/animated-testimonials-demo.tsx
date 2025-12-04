import { AnimatedTestimonials } from "./animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Certificación completa en HTML5, incluyendo semántica avanzada, accesibilidad web y mejores prácticas para desarrollo frontend moderno.",
      name: "HTML5",
      designation: "Certificación Técnica - 2024",
      src: "/diplomas/diploma-html5.png",
    },
    {
      quote:
        "Dominio de CSS3 con enfoque en layouts responsivos, animaciones, Flexbox, Grid y diseño moderno con preprocessores.",
      name: "CSS3",
      designation: "Certificación Técnica - 2024",
      src: "/diplomas/diploma-CSS3.png",
    },
    {
      quote:
        "Certificación en JavaScript ES6+, incluyendo programación funcional, asíncrona, manipulación del DOM y desarrollo de aplicaciones interactivas.",
      name: "JavaScript",
      designation: "Certificación Técnica - 2024",
      src: "/diplomas/diploma-javascript.png",
    },
    {
      quote:
        "Especialización en React.js con hooks, context API, optimización de rendimiento y desarrollo de aplicaciones complejas con TypeScript.",
      name: "React.js",
      designation: "Certificación Técnica - 2024",
      src: "/diplomas/diploma-react.png",
    },
    {
      quote:
        "Certificación en TypeScript para desarrollo robusto, incluyendo tipos avanzados, generics, configuración de proyectos y mejores prácticas.",
      name: "TypeScript",
      designation: "Certificación Técnica - 2024",
      src: "/diplomas/diploma-typescript.png",
    },
    {
      quote:
        "Framework backend con NestJS, incluyendo APIs REST, GraphQL, autenticación, bases de datos y arquitectura de microservicios.",
      name: "NestJS",
      designation: "Certificación Técnica - 2024",
      src: "/diplomas/diploma-nestJs.png",
    },
    {
      quote:
        "Control de versiones con Git, flujos de trabajo colaborativos en GitHub, CI/CD básico y mejores prácticas de desarrollo en equipo.",
      name: "Git & GitHub",
      designation: "Certificación Técnica - 2024",
      src: "/diplomas/diploma-gitYgithub.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
