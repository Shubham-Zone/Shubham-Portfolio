import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { BsFillFileLockFill } from "react-icons/bs"; // LeetCode icon

const Links = () => {
  return (
    <section id="links" className="py-20 bg-black text-green-400 font-mono px-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">Find Me On</h2>

      <div className="flex flex-wrap justify-center sm:flex-col md:flex-row sm:space-y-6 md:space-x-12">
  {/* LinkedIn */}
  <div className="text-center sm:w-full md:w-auto mb-6 sm:mb-4">
    <GrLinkedin className="text-4xl mb-3 mx-auto" />
    <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
    <a
      href="https://www.linkedin.com/in/shubham-kumar-33748a229/?original_referer=https%3A%2F%2Fgithub.com%2F"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 border border-green-400 hover:bg-green-500 hover:text-black transition-colors duration-300 rounded"
    >
      Visit Profile
    </a>
  </div>

  {/* GitHub */}
  <div className="text-center sm:w-full md:w-auto mb-6 sm:mb-4">
    <FaGithub className="text-4xl mb-3 mx-auto" />
    <h3 className="text-xl font-semibold mb-2">GitHub</h3>
    <a
      href="https://github.com/Shubham-Zone"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 border border-green-400 hover:bg-green-500 hover:text-black transition-colors duration-300 rounded"
    >
      View Repositories
    </a>
  </div>

  {/* LeetCode */}
  <div className="text-center sm:w-full md:w-auto mb-6 sm:mb-4">
    <BsFillFileLockFill className="text-4xl mb-3 mx-auto" />
    <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
    <a
      href="https://leetcode.com/u/ShubhamBytes/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 border border-green-400 hover:bg-green-500 hover:text-black transition-colors duration-300 rounded"
    >
      Solve Problems
    </a>
  </div>
</div>


    </section>
  );
};

export default Links;
