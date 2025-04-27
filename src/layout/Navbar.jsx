const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 p-4 bg-black bg-opacity-80 backdrop-blur-md z-50 flex justify-between items-center font-mono text-green-400">
      <h1 className="text-2xl font-bold text-glow">$ Shubham</h1>

      <ul className="flex space-x-6 text-sm uppercase tracking-widest">
        <a
          href="/path-to-your-resume.pdf"
          download
          className="hover:text-green-500 transition-colors duration-300"
        >
          $ Download Resume
        </a>
        <li>
          <a href="#about" className="hover:text-green-500 transition-colors duration-300">
            about/
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-green-500 transition-colors duration-300">
            projects/
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-green-500 transition-colors duration-300">
            contact/
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
