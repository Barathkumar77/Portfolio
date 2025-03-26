

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { motion } from "framer-motion";
import { FlipText } from "./magicui/flip-text";

// Variants for the icon animation
const iconVariants = (duration) => ({
  initial: { y: -10, opacity: 0.7 },
  animate: {
    y: [20, -10],
    opacity: 1,
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 mt-10  py-16 px-6 lg:px-20" id="technologies">
      <FlipText className="text-5xl font-extrabold tracking-widest text-orange-500 pb-10 text-center">
        TECHNOLOGIES
      </FlipText>

      {/* Animated icons container */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center"
      >
        {[
          { icon: RiReactjsLine, color: "text-cyan-400", duration: 3 },
          { icon: DiHtml5, color: "text-orange-500", duration: 3 },
          { icon: SiMongodb, color: "text-green-500", duration: 5 },
          { icon: DiCss3, color: "text-blue-400", duration: 5 },
          { icon: FaNodeJs, color: "text-green-500", duration: 6 },
          { icon: BiLogoJavascript, color: "text-yellow-300", duration: 4 },
          { icon: SiExpress, color: "text-gray-400", duration: 4 },
          { icon: SiTailwindcss, color: "text-blue-500", duration: 4 },
        ].map(({ icon: Icon, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale:1.2, rotate: 5   }}
            className="rounded-2xl border-4 border-neutral-700 p-6 bg-neutral-800/50 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
