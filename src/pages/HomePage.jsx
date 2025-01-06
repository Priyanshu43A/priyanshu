 

import React from 'react'
import './Homepage.css'
import Navbar from '../components/Navbar';
import Avatar from '../assets/mainImg.png'
import CyberTyping from '../components/CyberTyping';

const HomePage = () => {
  return (
    <div className="min-h-screen homepage relative overflow-hidden">

<div className="bgImg">
      <div className="w-11/12 mx-auto flex flex-col h-full">
      <Navbar />
         
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-20 md:mt-40">
          <div className="text-white w-1/2">
            <div className="flex flex-wrap items-center">
              <h1 className="text-4xl bebas-neue-regular md:text-6xl lg:text-8xl leading-none">
                RAISING 
                <span className="relative ml-4 inline-flex items-center">
                  STANDARDS
                  <div className="absolute -right-28 flex flex-col  gap-3 justify-center pt-0 ml-6">
                    <svg width="52" height="9" viewBox="0 0 52 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L50.9982 4.42733" stroke="white" strokeWidth="8"/>
                    </svg>
                    <svg width="72" height="9" viewBox="0 0 72 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L70.9974 4.59827" stroke="white" strokeWidth="8"/>
                    </svg>
                    <svg width="92" height="9" viewBox="0 0 92 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L90.9967 4.7692" stroke="white" strokeWidth="8"/>
                    </svg>
                  </div>
                </span>
              </h1>
            </div>
            
            <p className="mt-4 oswald leading-snug text-lg opacity-80 max-w-lg">
              Since I Was 14, Always Wondering And Exploring TECH And Try To Create Everything Present
              On The Internet That's Why Coding Is Not My Work, It Is A HOBBY And PASSION,
              That's Why I Am A
            </p>
            <div className='mt-20'>
           <CyberTyping />

            </div>
          </div>
          
          <div className="mt-0 ml-auto w-1/2 md:mt-0">
            <div className="w-64 h-64 ml-auto lg:mx-auto md:w-96 md:h-96 relative overflow-hidden">
              <img 
                src={Avatar}
                alt="Developer Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;