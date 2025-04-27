import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 px-6 md:px-24 bg-black text-green-400 font-mono min-h-screen">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">

      {/* === LEFT SIDE (Terminal Style Text Content) === */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col space-y-8 max-w-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold tracking-wide text-glow"
        >
          $ whoami
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-green-300 leading-relaxed"
        >
          Hi, I’m <span className="text-green-500 font-bold">Shubham</span> — a Full Stack Developer blending code with spirituality. I love building products that solve real-world problems, with a hacker's mindset and a creator’s heart.
        </motion.p>

        {/* === New Section: Mission & Values === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-2 text-green-300">
            <p className="text-green-500 font-bold">$ cat mission.txt</p>
            <p className="text-green-300 leading-relaxed">
              Build impactful, scalable tech solutions.  
              Keep learning. Keep shipping. Stay humble.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-green-300">
            <p className="text-green-500 font-bold">$ cat values.txt</p>
            <ul className="pl-6 list-[square] space-y-3">
              <li>Code with purpose.</li>
              <li>Keep growing every single day.</li>
              <li>Stay balanced between ambition and peace.</li>
              <li>Create tech that makes the world better.</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* === RIGHT SIDE (ASCII Style Image / Logo) === */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mt-10 md:mt-0"
      >
        <pre className="text-green-600 text-xs sm:text-sm leading-tight">
{`
 _______ _           _     _                 
|__   __| |         (_)   | |                
   | |  | |__   __ _ _  __| | ___ _ __  ___  
   | |  | '_ \\ / _\` | |/ _\` |/ _ \\ '_ \\/ __| 
   | |  | | | | (_| | | (_| |  __/ | | \\__ \\ 
   |_|  |_| |_|\\__,_|_|\\__,_|\\___|_| |_|___/ 
`}
        </pre>
      </motion.div>

    </div>
  </section>
);

export default About;
