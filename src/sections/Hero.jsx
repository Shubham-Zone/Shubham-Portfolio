import { motion } from 'framer-motion';
import EyeBall from '../components/EyeBall';

const Hero = () => {


  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center bg-black text-green-400 font-mono px-6 overflow-hidden">




      {/* Bubble Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-green-400 opacity-15 blur-3xl animate-spin-3d shadow-[0_0_60px_15px_rgba(34,197,94,0.3)]"></div>
        <div className="w-64 h-64 rounded-full bg-green-500 opacity-20 blur-2xl animate-spin-3d-reverse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_40px_10px_rgba(34,197,94,0.4)]"></div>
      </div>

      {/* EyeBalls above heading */}
      <div className="flex items-center justify-center space-x-4 mb-4 sm:mb-6 hidden sm:flex">
        <EyeBall />
        <EyeBall />
      </div>


      {/* Foreground Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-center text-glow tracking-widest mb-6"

      >
        $ Hello, World!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 text-lg sm:text-2xl text-green-300 text-center max-w-2xl leading-relaxed"
      >
        I'm <span className="text-green-500 font-bold">Shubham</span> — a Full Stack Developer blending code with creativity, crafting apps that <b>change the game</b>.
      </motion.p>

      <motion.a
        onClick={() => {
          const element = document.getElementById("contact");
          element.scrollIntoView({
            behavior: "smooth"
          })
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hover:cursor-pointer z-10 mt-10 px-8 py-4 border border-green-400 hover:bg-green-500 hover:text-black transition-colors duration-300 rounded-lg text-lg shadow-lg shadow-green-500/20"
      >
        $ Get in Touch
      </motion.a>
    </section>
  );
};

export default Hero;
