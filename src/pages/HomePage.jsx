import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Avatar from '../assets/mainImg.png';
import CyberTyping from '../components/CyberTyping';
import './Homepage.css'

const HomePage = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const lines = document.querySelectorAll('.line-animation');
      const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
      lines.forEach((line, i) => {
        line.style.transform = `translateX(${xPos * (i + 1)}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id='home' className="min-h-screen homepage relative overflow-hidden bg-[#020617]">
      <div className="absolute bgImg inset-0">
        <div className="absolute bgImg inset-0 bg-[linear-gradient(to_right,#0f1729,#0a0f1d)]" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 50% 50%, #1e3a8a 0%, transparent 50%)',
              'radial-gradient(circle at 60% 60%, #1e3a8a 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="w-11/12 mx-auto flex flex-col h-full relative z-10">
        <Navbar />
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-20 md:mt-40 gap-12">
          <motion.div 
            className="text-white w-full md:w-1/2 space-y-8"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <div className="flex flex-wrap items-start">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl leading-none bebas-neue-regular"
                variants={textVariants}
              >
                RAISING
                <span className="relative ml-4 inline-flex items-center">
                  STANDARDS
                  <div className="hidden absolute -right-28 md:flex flex-col gap-3 justify-center pt-0 ml-6">
                    {[52, 72, 92].map((width, i) => (
                      <motion.div
                        key={i}
                        className="line-animation"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
                      >
                        <svg width={width} height="9" viewBox={`0 0 ${width} 9`} fill="none">
                          <path d={`M1 4L${width-1} ${4 + i * 0.2}`} stroke="white" strokeWidth="8"/>
                        </svg>
                      </motion.div>
                    ))}
                  </div>
                </span>
              </motion.h1>
            </div>

            <motion.p 
              variants={textVariants}
              className="oswald leading-snug text-base md:text-lg opacity-80 max-w-xs md:max-w-lg"
            >
              Since I Was 14, Always Wondering And Exploring TECH And Try To Create Everything Present
              On The Internet That's Why Coding Is Not My Work, It Is A HOBBY And PASSION,
              That's Why I Am A
            </motion.p>

            <motion.div 
              variants={textVariants}
              className="mt-8"
            >
              <CyberTyping />
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-64 h-64 md:w-96 md:h-96 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full">
              <motion.img
                src={Avatar}
                alt="Developer Avatar"
                className="w-full h-full object-cover relative z-10"
                whileHover={{ scale: 1.05 }}
                drag
                dragConstraints={{
                  top: -10,
                  left: -10,
                  right: 10,
                  bottom: 10,
                }}
                dragElastic={0.1}
              />
              <motion.div
                className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;