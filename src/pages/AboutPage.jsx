import React from 'react'
import "./AboutPage.css"
import  {motion} from 'framer-motion'

const AboutPage = () => {
  return (
    <div className='aboutpage  w-full min-h-screen bg-[#020617] pt-10 md:pt-20'>
        <div className='w-11/12  text-white mx-auto' >
        <motion.h1
        className="bebas-neue-regular text-white text-start text-6xl md:text-9xl pt-12 mb-28"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About
      </motion.h1>
        </div>
    </div>
  )
}

export default AboutPage