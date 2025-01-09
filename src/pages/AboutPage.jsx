import React, { useState, useEffect } from 'react';
import { Twitter, Github, Linkedin, Mail, Code, Palette, Play, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import photo1 from '../assets/pic1.jpg'
import photo2 from '../assets/pic2.jpg'
import photo3 from '../assets/pic3.jpg'
import photo4 from '../assets/pic4.jpg'
import cover from '../assets/thumbnail.webp'
import { FaGithub, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';






const WordSearch = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [foundWordPositions, setFoundWordPositions] = useState([]); // Tracks positions of found words
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // Timer starts at 2 minutes (120 seconds)
  const [isTimerActive, setIsTimerActive] = useState(false);

  const hiddenWords = ['CODE', 'UI', 'UX', 'WEB', 'APP']; // List of words to find
  const grid = [
    ['C', 'O', 'D', 'E', 'W', 'A', 'X'],
    ['U', 'I', 'X', 'A', 'E', 'B', 'C'],
    ['W', 'U', 'X', 'P', 'B', 'Y', 'Z'],
    ['A', 'P', 'P', 'S', 'Z', 'E', 'L'],
    ['T', 'E', 'C', 'H', 'N', 'O', 'T'],
    ['H', 'I', 'D', 'E', 'M', 'E', 'S'],
    ['R', 'E', 'A', 'C', 'T', 'A', 'S']
  ];

  const handleLetterClick = (row, col) => {
    if (!isTimerActive) setIsTimerActive(true);

    const key = `${row}-${col}`;
    setSelectedLetters((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const checkForWords = () => {
    const selectedWord = selectedLetters
      .map((key) => {
        const [row, col] = key.split('-').map(Number);
        return grid[row][col];
      })
      .join('');

    if (hiddenWords.includes(selectedWord)) {
      const positions = selectedLetters.map((key) =>
        key.split('-').map(Number)
      );
      setFoundWordPositions((prev) => [...prev, ...positions]); // Store positions of the found word
      setSelectedLetters([]); // Clear selected letters
    }
  };

  useEffect(() => {
    checkForWords();
  }, [selectedLetters]);

  useEffect(() => {
    if (foundWordPositions.length === hiddenWords.join('').length) {
      setIsWon(true);
      setIsTimerActive(false);
    }
  }, [foundWordPositions]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsLost(true);
      setIsTimerActive(false);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isTimerActive, timeLeft]);

  const resetGame = () => {
    setSelectedLetters([]);
    setFoundWordPositions([]);
    setIsWon(false);
    setIsLost(false);
    setTimeLeft(120);
    setIsTimerActive(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!isWon && !isLost && (
        <>
          <div className="grid gap-1">
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-1">
                {row.map((letter, colIndex) => {
                  const key = `${rowIndex}-${colIndex}`;
                  const isSelected = selectedLetters.includes(key);
                  const isFound = foundWordPositions.some(
                    ([r, c]) => r === rowIndex && c === colIndex
                  );

                  return (
                    <button
                      key={colIndex}
                      onClick={() => handleLetterClick(rowIndex, colIndex)}
                      className={`w-6 h-6 rounded-sm flex items-center justify-center text-sm font-medium transition-all
                        ${
                          isFound
                            ? 'bg-green-500 text-white animate-pulse'
                            : isSelected
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Timer */}
          <div className="text-slate-300 text-sm">
            Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
          </div>
        </>
      )}

      {/* Winning or Losing Message */}
      {isWon && (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-yellow-500 animate-bounce">
            🎉 You Win! 🎉
          </h1>
          <button
            onClick={resetGame}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Play Again
          </button>
        </div>
      )}

      {isLost && (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 animate-bounce">
            😢 You Lose! 😢
          </h1>
          <button
            onClick={resetGame}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

 


const GalleryBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    photo2,
    photo1,
    photo3,
    photo4,
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex items-center h-full">
      <div className="relative inset-0 flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Work ${currentIndex + 1}`}
          className="max-h-full  max-w-full rounded-xl object-contain"
        />
        <button 
          onClick={prevImage}
          className="absolute left-2 p-1 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-2 p-1 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
        <div className="absolute bottom-2 flex gap-1 justify-center">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full ${
                idx === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


const AboutPage = () => {
  return (
    <div id='about' className="min-h-screen bg-slate-950 p-4 md:p-6">
      <div className="" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl py-12 bebas-neue-regular  text-white mb-8">
          About<span className="text-blue-400">.</span>
        </h1>

        <div className="grid w-11/12 mt-12 mx-auto grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">


        <div className="relative row-span-2 md:col-span-1 col-span-2 bg-slate-900/50 backdrop-blur-sm p-5 rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all h-full">
 
            <GalleryBox />
          </div>
          
          {/* Story Box */}
          <div className="col-span-2 row-span-2 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all overflow-hidden">
            <div className="relative aspect-video">
              <img 
                src={cover} 
                alt="Story" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <button className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-sm hover:bg-white/20 transition-colors">
                <Play className="w-4 h-4" />
                <span>Watch story</span>
              </button>
            </div>
            <div className="p-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                Crafting digital experiences through clean code and intuitive design. 
                Focused on creating seamless interfaces that bridge functionality and aesthetics.
              </p>
            </div>
          </div>

          {/* Experience - Development */}
          <div className="bg-slate-900/50  backdrop-blur-sm p-5 rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300 text-sm">Development</span>
            </div>
            <div className="text-3xl font-bold text-white">5+</div>
            <div className="text-slate-400 text-sm">Years</div>
          </div>

          {/* Experience - Design */}
          <div className="bg-slate-900/50 backdrop-blur-sm p-5 rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="w-5 h-5 text-violet-400" />
              <span className="text-slate-300 text-sm">Design</span>
            </div>
            <div className="text-3xl font-bold text-white">3+</div>
            <div className="text-slate-400 text-sm">Years</div>
          </div>

          {/* Social Icons - Even More Compact */}
          <div className='md:col-span-1 col-span-2 space-y-4' >

          <div className="h-12  bg-slate-900/50 backdrop-blur-sm px-3 rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all flex items-center justify-around">
          <>
              {[
                { icon: FaGithub, link: 'https://github.com/Priyanshu43A' },
                // { icon: FaYoutube, link: 'https://www.youtube.com/@gwpriyanshu43' },
                { icon: FaXTwitter, link: 'https://x.com/Priyans29193156' },
                { icon: FaInstagram, link: 'https://instagram.com/maibhideveloper' },
                { icon: FaWhatsapp, link: 'https://chat.whatsapp.com/H3UkSzpmVHg6gjKCaCUHuC' },


              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-white/60 hover:text-white" />
                </a>
              ))}
            </>
          </div>


          <div className="bg-slate-900/50 text-white col-span-2 w-full md:col-span-1  mx-auto backdrop-blur-sm p-4 rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all">
           <p>Languages</p>

           <div className='flex flex-col gap-2 font-semibold mt-6'>
            <p>Hindi (Native)</p>
            <p>English </p>
            <p>French</p>
           </div>
    
       </div>


          </div>
       

          {/* Color Matcher Game */}
          <div className="bg-slate-900/50 col-span-2 w-full md:col-span-1  mx-auto backdrop-blur-sm p-4 rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all">

         <p className='text-white text-xs mb-4'>Find  <span className='font-medium'> CODE, UI, UX, WEB, APP</span></p>
            <WordSearch />
       
          </div>

          <div className="bg-slate-900/50 flex flex-col justify-between md:col-span-2 col-span-2 w-full mx-auto backdrop-blur-sm p-4 rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all">
           <h1 className='font-medium text-white anton text-2xl poppins-regular' >I love to write, that's why i am a good speaker.</h1>
           
           <p className='text-white  italic mt-4 w-10/12 mx-auto'>"In a world bound by rules and doctrines, I choose to craft my own reality—where logic dances with imagination, and beliefs are not chains but wings that let me soar beyond the ordinary."</p>
          <div>
            
          </div>
          <button className='py-2  px-8 ml-auto mr-0 float-right rounded-lg w-fit bg-gray-300 font-medium oswald'>Contact meh</button>
    
       </div>
       

        </div>
      </div>
    </div>
  );
};

export default AboutPage;