import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiTypescript, SiFramer, SiNextdotjs, SiFigma, SiCanva } from 'react-icons/si';
import './Homepage.css'

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-300' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'Next JS', icon: SiNextdotjs, color: 'text-white-400' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-purple-400' },
  { name: 'Figma', icon: SiFigma, color: 'text-white-200' },
  { name: 'Canva', icon: SiCanva, color: 'text-violet-400' },
  { name: 'Database Design', icon: FaDatabase, color: 'text-red-400' },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="min-h-screen homepage pb-28 text-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <motion.h1
        className="bebas-neue-regular text-start text-6xl md:text-9xl pt-12 mb-28"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg p-6 rounded-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <skill.icon className={`text-7xl ${skill.color}`} />
            <p className="text-xl font-medium mt-4 text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
