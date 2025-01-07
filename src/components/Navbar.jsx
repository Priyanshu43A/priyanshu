import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', href: '#' },
    { title: 'Work', href: '#' },
    { title: 'About', href: '#' },
    { title: 'Contact', href: '#' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.1,
      color: '#64ffda',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed w-11/12 mx-auto px-6 md:px-12 py-4 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h2 
          className="text-2xl bebas-neue-regular md:text-3xl   text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Priyanshu
        </motion.h2>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <motion.li key={item.title} whileHover="hover" variants={linkVariants}>
                <a 
                  href={item.href}
                  className="text-white oswald uppercase text-sm tracking-wider hover:text-gray-300"
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed h-screen flex justify-center items-center inset-0 top-14 bg-black/95 backdrop-blur-lg md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 } 
                    }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <a
                      href={item.href}
                      className="text-white text-2xl uppercase tracking-wider"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;