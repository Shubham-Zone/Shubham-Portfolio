import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-green-400 font-mono px-6 md:px-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl mb-12 text-center text-glow"
      >
        $ ping me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 bg-black border border-green-400 text-green-300 placeholder-green-500 focus:outline-none focus:border-green-500 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 bg-black border border-green-400 text-green-300 placeholder-green-500 focus:outline-none focus:border-green-500 rounded"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-4 bg-black border border-green-400 text-green-300 placeholder-green-500 focus:outline-none focus:border-green-500 rounded"
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-3 border border-green-400 hover:bg-green-500 hover:text-black transition-colors duration-300 rounded"
        >
          $ send
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
