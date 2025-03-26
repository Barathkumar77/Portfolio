import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FlipText } from "./magicui/flip-text";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="border-b border-neutral-900 py-16 relative overflow-hidden" id="about">
      {/* Section Heading */}
      <FlipText className="text-5xl font-extrabold text-orange-500 pb-12">
        ABOUT ME
      </FlipText>

      <div className="flex flex-wrap items-center relative">
        {/* Left Side - Floating Effects */}
        <motion.div
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start relative"
        >
          {/* Floating Gradient Circles */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-10 left-10 h-16 w-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full opacity-60 blur-md"
          ></motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.3 }}
            className="absolute bottom-10 right-10 h-24 w-24 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full opacity-50 blur-lg"
          ></motion.div>

          {/* Rotating Border Circle Around Icons */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute -bottom-10 left-20 h-28 w-28 border-2 border-orange-500 rounded-full opacity-40"
          ></motion.div>
        </motion.div>

        {/* Right Side - Staggered Text Animation */}
        <motion.div
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.5 },
            },
          }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="my-2 max-w-xl py-6 text-lg leading-relaxed relative"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>

          {/* Social Icons with Enhanced Floating Animation */}
          <div className="flex justify-center lg:justify-start space-x-6 mt-6">
            {/* LinkedIn Icon */}
            <motion.a
              href="http://www.linkedin.com/in/barathkumarm" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative text-gray-500 hover:text-blue-500 transition-all duration-300"
            >
              <FaLinkedin className="h-10 w-10 drop-shadow-lg" />
              {/* Pulsating Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-lg cursor-none "
                whileHover={{ opacity: 1, scale: 1.3 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.a>

            {/* GitHub Icon */}
            <motion.a
              href="https://github.com/Barathkumar77"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              className="relative text-gray-500 hover:text-white transition-all duration-300"
            >
              <FaGithub className="h-10 w-10 drop-shadow-lg" />
              {/* Pulsating Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-red-600 opacity-20 blur-lg cursor-none"
                whileHover={{ opacity: 1, scale: 1.3 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
