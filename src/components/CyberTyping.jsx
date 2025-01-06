import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CyberTyping = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = ["FULLSTACK WEB DEVELOPER", "UI/UX DESIGNER"];
  
  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (isTyping && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } 
    
    else if (isTyping && displayText === currentText) {
      timeout = setTimeout(() => setIsTyping(false), 2000);
    }
    
    else if (!isTyping && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50);
    }
    
    else if (!isTyping && displayText === '') {
      setIndex((prev) => (prev + 1) % texts.length);
      setIsTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [displayText, index, isTyping]);

  return (
    <div className="">
      <motion.h1 
        className="text-4xl md:text-4xl oswald text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block ml-1 text-white"
        >
          |
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default CyberTyping;