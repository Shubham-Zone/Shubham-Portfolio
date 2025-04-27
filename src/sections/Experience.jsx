import { motion } from "framer-motion";
import { experience } from "../constants/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black text-green-400 font-mono px-6">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-center mb-16 text-glow"
      >
        $ Experience & Internships
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid gap-10 md:grid-cols-2"
      >
        {experience.map((exp) =>
          <div className="p-8 bg-gradient-to-br from-green-900 via-black to-black rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">$ {exp.title}</h3>
            <p className="text-white mb-4">
              {exp.desc}
            </p>
            <p className="text-green-400 font-semibold">Tech Stack: {exp.techstack}</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Experience;
