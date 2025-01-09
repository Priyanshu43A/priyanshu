import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiCanva,
} from "react-icons/si";

const SkillsAndContact = () => {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-300" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Next JS", icon: SiNextdotjs, color: "text-white-400" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Framer Motion", icon: SiFramer, color: "text-purple-400" },
    { name: "Figma", icon: SiFigma, color: "text-white-200" },
    { name: "Canva", icon: SiCanva, color: "text-violet-400" },
    { name: "Database Design", icon: FaDatabase, color: "text-red-400" },
  ];

  const testimonials = [
    {
      text: "An exceptional developer with a keen eye for detail.",
      author: "Sarah Johnson",
      role: "Product Manager",
    },
    {
      text: "Delivers high-quality work consistently.",
      author: "Michael Chen",
      role: "Tech Lead",
    },
  ];

  return (
    <div className="min-h-screen py-40 bg-[#090f1d] text-white p-6 md:p-12 lg:p-16">
      <div className="w-11/12 mt-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="space-y-16">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl oswald font-medium mb-12 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
              {skills.map((Skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition-all duration-300" />
                  <div className="relative h-16 bg-gray-900/80 rounded-2xl p-4 backdrop-blur-md border border-white/5 shadow-lg flex items-center justify-center group-hover:border-white/10 transition-all duration-300">
                    <Skill.icon
                      className={`w-8 h-8 ${Skill.color} transition-all duration-300 group-hover:scale-110`}
                    />
                    <div className="absolute z-[999999] -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-white/80 whitespace-nowrap">
                      {Skill.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12"
          >
            <h2 className="text-4xl oswald font-medium mb-12 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Testimonials
            </h2>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-md border border-white/5 group-hover:border-white/10 transition-all duration-300">
                  <p className="text-lg text-white/90 italic mb-6">
                    {testimonial.text}
                  </p>
                  <div>
                    <p className="font-medium text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="sticky top-16">
            <h2 className="text-4xl oswald font-medium mb-12 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
              <form className="relative space-y-6 p-8 rounded-2xl bg-gray-900/50 backdrop-blur-md border border-white/5">
                <div className="space-y-2">
                  <label className="text-sm text-white/60 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60 ml-1">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-white/30 resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsAndContact;
