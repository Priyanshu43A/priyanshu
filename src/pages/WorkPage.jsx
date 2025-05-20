import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import work1 from "../assets/work1.png";
import agency from "../assets/agency.png";
import oyekalakar from "../assets/oyekalakar.png";
import chain from "../assets/chain.png";
import obys from "../assets/obys.png";
import notes from "../assets/notes.png";
import web from "../assets/2dweb.png";
import planet from "../assets/planet.png";
import safety from "../assets/safety.png";

const WorkPage = () => {
  const works = [
    {
      id: 1,
      title: "Agency Portfolio",
      image: agency,
      role: "Developer and Designer",
      url: "https://agency-portfolio-alpha.vercel.app",
    },
    {
      id: 10,
      title: "My Safety Sarthi",
      image: safety,
      role: "Developer and Designer",
      url: "https://my-sarthi-app.vercel.app/about",
    },
    {
      id: 2,
      title: "OYE KALAKAR",
      image: oyekalakar,
      role: "Frontend Developer and Designer",
      url: "https://oyekalakar-eight.vercel.app/",
    },
    {
      id: 3,
      title: "CHAIN CONNECT",
      image: chain,
      role: "Frontend Developer and Designer",
      url: "https://chain-connect-blush.vercel.app/",
    },
    {
      id: 4,
      title: "OBYS Agency",
      image: obys,
      role: "Frontend Developer and Designer",
      url: "https://obys-agency-five.vercel.app/",
    },
    {
      id: 5,
      title: "Scroll based website",
      image: web,
      role: "Frontend Developer and Designer",
      url: "https://scroll-based-website-two.vercel.app/",
    },
    {
      id: 6,
      title: "PLANET FITNESS",
      image: planet,
      role: "Developer and Designer",
      url: "https://planet-fitness-eight.vercel.app/",
    },
    {
      id: 7,
      title: "GOOGLE NOTES",
      image: notes,
      role: "Developer and Designer",
      url: "https://notes-eight-eta.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="projects"
      className="workPage min-h-screen w-full bg-[#020617] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

      <motion.div
        className="w-11/12 text-white pt-20 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="bebas-neue-regular text-6xl md:text-9xl pt-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Selected Work
        </motion.h1>

        <motion.div
          className="work-cont w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {works.map((work) => (
            <motion.div
              key={work.id}
              className="work w-full mx-auto group"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent p-[1px] hover:bg-black transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl bg-[#020617] p-6">
                  <div className="flex flex-col gap-6">
                    <div className="relative overflow-hidden rounded-2xl aspect-video">
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black from-black via-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        <motion.div
                          className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                          initial={{ y: 20 }}
                          whileHover={{ y: 0 }}
                        >
                          <h2 className="text-2xl font-bold text-white">
                            {work.title}
                          </h2>
                          <p className="text-purple-300">{work.role}</p>
                          <motion.a
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Visit Project <ExternalLink size={16} />
                          </motion.a>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: works.length * 0.2 }}
          className="mt-20 text-center"
        >
          <p className="flex text-lg items-center justify-center gap-4 flex-wrap">
            For more projects and code, checkout my
            <motion.a
              className="flex items-center gap-3 bg-white rounded-lg font-semibold shadow-lg text-black px-6 py-3 hover:bg-purple-100 transition-all duration-300"
              href="https://github.com/Priyanshu43A"
              target="_blank"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github /> GITHUB
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkPage;
