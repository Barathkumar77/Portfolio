

import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import { FlipWords } from "./ui/flip-words";

// Animation Variants
const textVariants = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0, opacity: 1,
    transition: { duration: 0.5, delay },
  },
});
const words = ["React Developer", "Front End Developer", "MERN Stack Developer"];

// Floating Icons Component
const FloatingIcon = ({ text, position, delay, scale }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0, scale }}
      animate={{ x: 100, opacity: 1, scale: 1.2 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay }}
      className="absolute text-4xl font-bold text-gray-500"
      style={{ top: `${position[1]}%`, left: `${position[0]}%` }}
    >
      {text}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-900 mt-32 pb-8 lg:mb-36 overflow-hidden">
      {/* Floating Text Elements */}
      <FloatingIcon text="⚛️" position={[10, 20]} delay={0} scale={1} />
      <FloatingIcon text="💻" position={[30, 50]} delay={1} scale={1.2} />
      <FloatingIcon text="🎨" position={[50, 30]} delay={2} scale={1.3} />
      <FloatingIcon text="🚀" position={[70, 60]} delay={1.5} scale={1.1} />
      <FloatingIcon text="🖥️" position={[85, 40]} delay={2.2} scale={1.4} />
      <FloatingIcon text="📱" position={[20, 70]} delay={1.8} scale={1.5} />
      
      <div className="relative flex flex-col items-center gap-12 px-6 lg:px-20 z-10">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center max-w-2xl">
          <motion.h1
            variants={textVariants(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-purple-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg"
          >
            Barathkumar
          </motion.h1>
          <FlipWords words={words} />
          <motion.p
            variants={textVariants(0.5)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl text-sm md:text-lg font-medium leading-relaxed text-gray-400"
          >
            {HERO_CONTENT || "Passionate MERN Stack Developer with a focus on crafting seamless web experiences."}
          </motion.p>

          {/* View Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1pWb1MJDCDH_CCLhg3lQJMAa5RxGuaiKf/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            variants={textVariants(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-4 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-800 to-pink-500 text-white text-sm md:text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-all cursor-none"
          >
            View Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
