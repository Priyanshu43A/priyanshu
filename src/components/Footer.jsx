import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-32 relative bg-[#08091f]"
    >
      {/* Gradient Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/60">
                <a href="webdev.priyanshu2007@gmail.com" className="hover:text-white transition-colors duration-300">
                  webdev.priyanshu2007@gmail.com
                </a>
              </li>
              <li className="text-white/60">
                <a href="tel:+918057607415" className="hover:text-white transition-colors duration-300">
                  +91 8057607415
                </a>
              </li>
              <li className="text-white/60">
                Saharanpur, Uttar pardesh, India
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: FaGithub, link: 'https://github.com/Priyanshu43A' },
                { icon: FaYoutube, link: 'https://www.youtube.com/@gwpriyanshu43' },
                { icon: FaXTwitter, link: 'https://x.com/Priyans29193156' },
                { icon: FaInstagram, link: 'https://instagram.com/maibhideveloper' },
                { icon: FaWhatsapp, link: 'https://chat.whatsapp.com/H3UkSzpmVHg6gjKCaCUHuC' },


              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-white/60 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Let's Work Together */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Let's Work Together</h3>
            <p className="text-white/60">
              Open for freelance projects and full-time opportunities. Let's build something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Priyanshu. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
          >
            <HiArrowUp className="w-5 h-5 text-white/60 group-hover:text-white" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;