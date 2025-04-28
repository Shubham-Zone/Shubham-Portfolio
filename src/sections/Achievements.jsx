import { motion } from "framer-motion";
import { achievements } from "../constants/achievements";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-black text-green-400 font-mono px-6">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-center mb-12 text-glow"
      >
        $ Achievements
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        {achievements.map((achievement, index) =>
          <div key={index} className="achievement-item p-8 bg-black rounded-lg shadow-xl hover:bg-green-900 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-green-400 hover:text-green-300 tracking-wider">
              {achievement.title}
            </h3>
            <p className="text-white mt-2 text-lg leading-relaxed">
              {achievement.desc}
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Achievements;
