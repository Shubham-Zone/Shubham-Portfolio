import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 p-4 bg-black bg-opacity-80 backdrop-blur-md z-50 flex justify-between items-center font-mono text-green-400">
      <h1 className="text-2xl font-bold text-glow">$ Shubham</h1>

      {/* Hamburger Icon for mobile */}
      <div className="block lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-400 hover:text-green-500">
          {isMenuOpen ? (
            <span className="text-3xl">&times;</span> // Close button (X)
          ) : (
            <span className="text-3xl">&#9776;</span> // Hamburger icon (three bars)
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`lg:flex lg:space-x-6 lg:text-sm lg:uppercase lg:tracking-widest space-y-4 lg:space-y-0 absolute lg:static top-20 right-0 w-full lg:w-auto bg-black bg-opacity-80 backdrop-blur-md lg:bg-transparent transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}
      >
        <li>
          <a
            href="/Shubham_kumar.pdf"
            download
            className="hover:text-green-500 transition-colors duration-300"
          >
            $ Download Resume
          </a>
        </li>
        <li>
          <a
            // href="#about"
            className="hover:text-green-500 hover:cursor-pointer transition-colors duration-300"
            onClick={() => {
              const element = document.getElementById("about");
              element?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            about/
          </a>
        </li>
        <li>
          <a
            // href="#projects"
            className="hover:text-green-500 hover:cursor-pointer transition-colors duration-300"
            onClick={() => {
              const element = document.getElementById("projects");
              element.scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            projects/
          </a>
        </li>
        <li>
          <a
            // href="#contact"
            className="hover:text-green-500 hover:cursor-pointer transition-colors duration-300"
            onClick={() => {
              const element = document.getElementById("contact");
              element.scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            contact/
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
