import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiArrowUp, HiX } from "react-icons/hi";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

// Initialize EmailJS with your public key
emailjs.init("A4UXz2L1aSIRijg-v");

const CTAModal = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "", // Changed from 'name' to match template
    from_email: "", // Changed from 'email' to match template
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToastId = toast.loading("Sending your message...");

    try {
      // Using template parameters that match your EmailJS template
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        message: formData.message,
        to_name: "Your Name", // Add this if your template expects it
      };

      const result = await emailjs.send(
        "service_5ahg9rr",
        "template_oim1fy9",
        templateParams
      );

      console.log("Email sent successfully:", result.text);
      toast.update(loadingToastId, {
        render: "Message sent successfully! 🎉",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
      setFormData({ from_name: "", from_email: "", message: "" });
      onClose();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.update(loadingToastId, {
        render: "Failed to send message. Please try again later. 😢",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 text-white bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#0c1015] rounded-2xl p-6 md:p-8 max-w-md w-full border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">
                Let's Collaborate
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <HiX className="w-5 h-5 text-white/60" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Quick Contact Options */}
              <div className="space-y-4">
                <a
                  href="mailto:jashram826@gmail.com"
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300"
                >
                  Send Email
                </a>

                <a
                  href="https://calendly.com/jashram826/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-300"
                >
                  Schedule a Call
                </a>
              </div>

              {/* Or divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-white/40 text-sm">or</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-white/30"
                />
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-white/30"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Brief message about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-white/30 resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-32 relative bg-[#08091f]"
      >
        {/* Gradient Divider */}
        <div className="h-px w-11/12 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Navigation</h3>
              <ul className="space-y-2">
                {["Home", "About", "Projects", "Skills", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-white/60 hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/60">
                  <a
                    href="webdev.priyanshu2007@gmail.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    webdev.priyanshu2007@gmail.com
                  </a>
                </li>
                <li className="text-white/60">
                  <a
                    href="tel:+918057607415"
                    className="hover:text-white transition-colors duration-300"
                  >
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
                  { icon: FaGithub, link: "https://github.com/Priyanshu43A" },
                  {
                    icon: FaYoutube,
                    link: "https://www.youtube.com/@gwpriyanshu43",
                  },
                  { icon: FaXTwitter, link: "https://x.com/Priyans29193156" },
                  {
                    icon: FaInstagram,
                    link: "https://instagram.com/maibhideveloper",
                  },
                  {
                    icon: FaWhatsapp,
                    link: "https://chat.whatsapp.com/H3UkSzpmVHg6gjKCaCUHuC",
                  },
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
              <h3 className="text-white font-semibold text-lg">
                Let's Work Together
              </h3>
              <p className="text-white/60">
                Open for freelance projects and full-time opportunities. Let's
                build something amazing together.
              </p>
              <motion.button
                onClick={() => setIsModalOpen(true)}
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
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Footer;
