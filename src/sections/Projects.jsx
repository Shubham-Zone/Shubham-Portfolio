import { motion } from 'framer-motion';
import { projects } from '../constants/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-green-400 font-mono px-6 md:px-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl mb-12 text-center text-glow"
      >
        $ ls -la Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="border border-green-400 p-6 rounded hover:bg-green-700 hover:text-black transition-colors flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-green-300 mb-6">{project.description}</p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto bg-green-400 text-black font-bold py-2 px-4 rounded hover:bg-green-300 transition"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
