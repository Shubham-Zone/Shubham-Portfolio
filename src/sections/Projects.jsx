import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../constants/projects';

const Projects = () => {
  // State for handling the zoomed image modal
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Function to handle image click for zoom
  const handleImageClick = (image) => {
    setZoomedImage(image);
    setIsZoomed(true);
  };

  // Function to close the zoomed image
  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage(null);
  };

  return (
    <section id="projects" className="py-20 bg-black text-green-400 font-mono px-6 md:px-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl mb-12 text-center text-glow"
      >
        $ ls -la Projects
      </motion.h2>

      <div className="flex flex-col space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="border border-green-400 p-6 rounded hover:bg-green-700 hover:text-black transition-colors flex flex-col"
          >
            {/* Project Title */}
            <div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-green-300 mb-6">{project.description}</p>
            </div>

            {/* Project Images - Full Width, Horizontal Stack */}
            <div className="flex overflow-x-auto mb-6 space-x-6">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} image`}
                  className="w-full lg:h-[80vh] object-contain rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(img)} // Open zoom modal on click
                />
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-green-300">Tech Stack</h4>
              <ul className="list-disc list-inside">
                {project.techStack.map((tech, idx) => (
                  <li key={idx} className="text-sm">{tech}</li>
                ))}
              </ul>
            </div>

            {/* Project Features (Optional) */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-green-300">Features</h4>
              <ul className="list-disc list-inside">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-sm">{feature}</li>
                ))}
              </ul>
            </div>

            {/* View on GitHub Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto bg-green-400 text-black font-bold py-2 px-4 rounded hover:bg-green-300 transition"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>

      {/* Zoomed Image Modal */}
      {isZoomed && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeZoom}
        >
          <img
            src={zoomedImage}
            alt="Zoomed Image"
            className="max-w-full max-h-full object-contain cursor-zoom-out"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
