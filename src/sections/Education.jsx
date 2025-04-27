import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black text-green-400 font-mono px-6">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-center mb-12 text-glow"
      >
        $ Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {/* MCA Education Card */}
        <div className="education-item p-8 bg-black rounded-lg shadow-xl hover:bg-green-900 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-green-400 hover:text-green-300 tracking-wider">
            MCA, J.C. Bose University of Science and Technology, YMCA Faridabad
          </h3>
          <div className="mt-4">
            <p className="text-gray-400">Graduating: 2025</p>
            <p className="text-gray-400">CGPA: 9.0</p>
            <p className="text-gray-400">Specialization: Software Engineering</p>
            <p className="text-gray-400">Focus Areas: Advanced Algorithms, System Design</p>
          </div>
        </div>

        {/* B.Sc. Computer Science Education Card */}
        <div className="education-item p-8 bg-black rounded-lg shadow-xl hover:bg-green-900 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-green-400 hover:text-green-300 tracking-wider">
            B.Sc. Computer Science, Delhi University
          </h3>
          <div className="mt-4">
            <p className="text-gray-400">Graduated: 2022</p>
            <p className="text-gray-400">CGPA: 8.34</p>
            <p className="text-gray-400">Focus Areas: Algorithms, Data Structures, Software Development</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
