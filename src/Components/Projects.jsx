

import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FlipText } from "./magicui/flip-text";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 px-6 lg:px-20" id="projects">
      <FlipText className="text-5xl font-extrabold tracking-widest text-orange-500 pt-10 pb-20 text-center lg:text-left">
        PROJECTS
      </FlipText>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-16 lg:gap-24">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.title} 
            className="flex flex-col lg:flex-row items-center lg:bg-inherit sm:bg-neutral-800/40 lg:justify-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-48 h-48 rounded-xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-2/3 text-center lg:text-left mt-6 lg:mt-0"
            >
              <h6 className="mb-2 text-2xl font-bold text-white">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-lg leading-relaxed">{project.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-purple-900/20 px-4 py-2 text-sm font-medium text-purple-400 border border-purple-500"
                  >
                    {tech}
                  </span>
                ))}

                {/* Visit Live Button */}
                <Link 
                  to={`${project.Link}`} 
                  target="_blank" 
                  className="rounded bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white hover:opacity-80 transition-opacity duration-300 shadow-md cursor-none"
                >
                  Visit Live
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
