const Links = () => {
    return (
      <section id="links" className="py-20 bg-black text-green-400 font-mono px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">Find Me On</h2>
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-green-400 hover:bg-green-500 hover:text-black transition-colors duration-300 rounded mr-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-green-400 hover:bg-green-500 hover:text-black transition-colors duration-300 rounded"
          >
            GitHub
          </a>
        </div>
      </section>
    );
  };
  
  export default Links;
  