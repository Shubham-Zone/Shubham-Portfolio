import { motion } from "framer-motion";
import { FaNode, FaReact, FaAws, FaJava } from "react-icons/fa"; // Importing relevant icons
import { TbBrandFlutter } from "react-icons/tb";
import { SiCplusplus, SiDart, SiMongodb, SiSpringboot } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiJavaFill, RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-green-400 font-mono px-6">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-center mb-12 text-glow"
      >
        $ Skills & Tech Stack
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {/* Root Node */}
        <div className="skill-tree">
          {/* Frontend Branch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="branch"
          >
            <h3 className="text-3xl font-semibold text-green-400 text-center mb-6">
              Frontend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <FaReact className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">React</h3>
              </div>
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <RiNextjsFill className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">Next</h3>
              </div>
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <TbBrandFlutter className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">Flutter</h3>
              </div>
            </div>
          </motion.div>

          {/* Backend Branch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="branch"
          >
            <h3 className="text-3xl font-semibold text-green-400 text-center mb-6">
              Backend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <FaNode className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">Node.js</h3>
              </div>
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <SiSpringboot className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">Springboot</h3>
              </div>
            </div>
          </motion.div>

          {/* Databases Branch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="branch"
          >
            <h3 className="text-3xl font-semibold text-green-400 text-center mb-6">
              Databases
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <SiMongodb className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">MongoDB</h3>
              </div>
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <IoLogoFirebase className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">Firebase</h3>
              </div>
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <DiMysql className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">MySQL</h3>
              </div>
            </div>
          </motion.div>

          {/* Cloud/DevOps Branch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="branch"
          >
            <h3 className="text-3xl font-semibold text-green-400 text-center mb-6">
              Cloud/DevOps
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <FaAws className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">AWS</h3>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="branch"
          >
            <h3 className="text-3xl font-semibold text-green-400 text-center mb-6">
              Coding Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <SiCplusplus className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">C++</h3>
              </div>
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <RiJavaFill className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">Core Java</h3>
              </div>
              <div className="skill-item p-4 bg-black rounded-lg shadow-md hover:bg-green-900 transition-all duration-300 text-center">
                <SiDart className="text-5xl mb-4 transition-transform duration-300 hover:scale-110 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">Dart</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
