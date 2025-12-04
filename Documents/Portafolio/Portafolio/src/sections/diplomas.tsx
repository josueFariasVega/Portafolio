import { motion } from "motion/react";
import { InfiniteDiplomasScroller } from "../components/ui/infinite-diplomas-scroller";
import { fadeInUp } from "../lib/animations";

export function DiplomasSection() {

  const diplomas = [
    {
      title: "HTML5",
      institution: "Certificación Técnica",
      date: "2024",
      src: "/diplomas/diploma-html5.png",
      description: "Certificación completa en HTML5, incluyendo semántica avanzada, accesibilidad web y mejores prácticas para desarrollo frontend moderno."
    },
    {
      title: "CSS3",
      institution: "Certificación Técnica",
      date: "2024",
      src: "/diplomas/diploma-CSS3.png",
      description: "Dominio de CSS3 con enfoque en layouts responsivos, animaciones, Flexbox, Grid y diseño moderno con preprocessores."
    },
    {
      title: "JavaScript",
      institution: "Certificación Técnica",
      date: "2024",
      src: "/diplomas/diploma-javascript.png",
      description: "Certificación en JavaScript ES6+, incluyendo programación funcional, asíncrona, manipulación del DOM y desarrollo de aplicaciones interactivas."
    },
    {
      title: "React.js",
      institution: "Certificación Técnica",
      date: "2024",
      src: "/diplomas/diploma-react.png",
      description: "Especialización en React.js con hooks, context API, optimización de rendimiento y desarrollo de aplicaciones complejas con TypeScript."
    },
    {
      title: "TypeScript",
      institution: "Certificación Técnica",
      date: "2024",
      src: "/diplomas/diploma-typescript.png",
      description: "Certificación en TypeScript para desarrollo robusto, incluyendo tipos avanzados, generics, configuración de proyectos y mejores prácticas."
    },
    {
      title: "NestJS",
      institution: "Certificación Técnica",
      date: "2024",
      src: "/diplomas/diploma-nestJs.png",
      description: "Framework backend con NestJS, incluyendo APIs REST, GraphQL, autenticación, bases de datos y arquitectura de microservicios."
    },
    {
      title: "Git & GitHub",
      institution: "Certificación Técnica",
      date: "2024",
      src: "/diplomas/diploma-gitYgithub.png",
      description: "Control de versiones con Git, flujos de trabajo colaborativos en GitHub, CI/CD básico y mejores prácticas de desarrollo en equipo."
    }
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="apple-title text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Diplomas & Certificaciones
          </h2>
          <p className="apple-body text-xl text-gray-400 max-w-2xl mx-auto">
            Mi viaje de aprendizaje continuo y especialización en tecnologías modernas
          </p>
        </motion.div>

        {/* Infinite Moving Diplomas Component */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InfiniteDiplomasScroller diplomas={diplomas} />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Siempre aprendiendo • Siempre creciendo • Siempre innovando
          </p>
        </motion.div>
      </div>

      {/* Cyberpunk corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gray-700/50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gray-700/50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gray-700/50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gray-700/50" />
    </section>
  );
}
