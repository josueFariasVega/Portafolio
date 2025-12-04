import { motion } from "motion/react";
import { Card } from "./card";
import { Badge } from "./badge";
import { Calendar, Award } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface Diploma {
  title: string;
  institution: string;
  date: string;
  src: string;
  description: string;
}

interface InfiniteDiplomasScrollerProps {
  diplomas: Diploma[];
}

export function InfiniteDiplomasScroller({ diplomas }: InfiniteDiplomasScrollerProps) {
  // Duplicar los diplomas para crear el efecto infinito
  const duplicatedDiplomas = [...diplomas, ...diplomas, ...diplomas]; // Más duplicados para mejor scroll

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-6 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing"
        animate={{
          x: [0, -100 * diplomas.length * 3], // Mover basado en el número de diplomas duplicados
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // Duración más lenta
            ease: "linear",
          },
        }}
        drag="x"
        dragConstraints={{ left: -2000, right: 0 }}
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
        style={{ width: `${duplicatedDiplomas.length * 320}px` }} // Ancho aproximado por card
      >
        {duplicatedDiplomas.map((diploma, index) => (
          <motion.div
            key={`${diploma.title}-${index}`}
            className="relative group shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500/20 via-gray-400/20 to-gray-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <Card className="relative w-80 h-96 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 border border-gray-700/50 backdrop-blur-sm p-4 overflow-hidden flex flex-col">
              {/* Tech pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.01)_25%,rgba(255,255,255,0.01)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.01)_75%)] bg-[length:20px_20px] opacity-20" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Diploma image - very large, covering most of the card */}
                <div className="flex-1 flex items-center justify-center mb-2">
                  <div className="relative w-full max-w-64 h-64">
                    <div className="w-full h-full rounded-xl overflow-hidden border-2 border-gray-600/50 group-hover:border-gray-500/70 transition-all duration-300 shadow-lg group-hover:shadow-gray-500/20">
                      <ImageWithFallback
                        src={diploma.src}
                        alt={`${diploma.title} diploma`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Tech accent */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse shadow-lg" />
                    {/* Glow around image */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </div>
                </div>

                {/* Title and info at bottom - minimal */}
                <div className="text-center">
                  {/* Título con gradiente */}
                  <h3 className="futuristic-subtitle text-sm bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-1">
                    {diploma.title}
                  </h3>

                  {/* Institución y fecha en una línea */}
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Badge className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-300 border-gray-500/30 text-xs">
                      {diploma.institution}
                    </Badge>
                    <span className="text-gray-400 text-xs">{diploma.date}</span>
                  </div>

                  {/* Cert icon */}
                  <div className="flex justify-center">
                    <Award className="w-4 h-4 text-green-400" />
                  </div>
                </div>

                {/* Animated lines */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-gray-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-gray-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-gray-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}