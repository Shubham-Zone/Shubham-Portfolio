import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [loading, setLoading] = useState(false); 
  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const userEmail = e.target.user_email.value;
    const message = e.target.message.value;

    if (!name || !userEmail || !message) {
      toast.error('Please fill out all fields before sending your message.');
      return;
    }

    setLoading(true); 

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false); 
          toast.success('Message sent successfully!'); 
          e.target.reset(); 
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          toast.error('Failed to send the message. Please try again later.'); 
        }
      );
  };

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
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-4 bg-black border border-green-400 text-green-300 placeholder-green-500 focus:outline-none focus:border-green-500 rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-4 bg-black border border-green-400 text-green-300 placeholder-green-500 focus:outline-none focus:border-green-500 rounded"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="p-4 bg-black border border-green-400 text-green-300 placeholder-green-500 focus:outline-none focus:border-green-500 rounded"
        ></textarea>

        <button
          type="submit"
          className="mt-4 px-6 py-3 border border-green-400 hover:bg-green-500 hover:text-black transition-colors duration-300 rounded flex items-center justify-center"
        >
          {loading ? (
            "Sending email..."
          ) : (
            "$ send"
          )}
        </button>
      </motion.form>

      <ToastContainer /> {/* Toast notifications container */}
    </section>
  );
};

export default Contact;
