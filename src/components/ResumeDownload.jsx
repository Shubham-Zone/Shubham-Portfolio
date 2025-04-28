const ResumeDownload = () => {
    return (
      <section id="resume" className="py-20 bg-black text-green-400 font-mono px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">Download My Resume</h2>
        <div className="text-center">
          <a
            href="/Shubham_kumar.pdf"
            download
            className="px-6 py-3 border border-green-400 hover:bg-green-500 hover:text-black transition-colors duration-300 rounded"
          >
            $ Download Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default ResumeDownload;
  