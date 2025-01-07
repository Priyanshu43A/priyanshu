import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import work1 from '../assets/work1.png';

const WorkPage = () => {
    const works = [
        {
            id: 1,
            title: 'WORKFLOW - Please Try it out',
            image: work1,
            description: 'Workflow is my personal idea and project i spended 2 months on. Workflow solves major problems in industry standard work culture. You can create teams, assign tasks and much more. Do try it out on your own.',
            role: 'Developer and Designer',
            url: 'https://workflow-priyanshu-e6be8f79f114.herokuapp.com/',
            tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS' ]
        },
        {
            id: 2,
            title: 'OYE KALAKAR - marketplace for artists',
            image: work1,
            description: 'OYE KALAKAR is a marketplace where artists can sell their artwork, receive orders, and earn commission. It is a platform for artists to reach a wider audience and build their reputation.',
            role: 'Frontend Developer and Designer',
            url: 'https://oyekalakar-eight.vercel.app/',
            tech: ['React', 'Express', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Firebase']
        },
        {
            id: 3,
            title: 'CHAIN CONNECT - Web3 social media',
            image: work1,
            description: 'Chain connect is a web3 based social media application, that also offers great features and crypto benefits.',
            role: 'Frontend Developer and Designer',
            url: 'https://chain-connect-blush.vercel.app/',
            tech: ['React', 'Tailwind CSS']
        },
        {
            id: 4,
            title: 'OBYS Agency - Redesign',
            image: work1,
            description: 'Obys aency is a award winning website. and i tried to recreate its frontend at my own...',
            role: 'Frontend Developer and Designer',
            url: 'https://obys-agency-five.vercel.app/',
            tech: ['HTML', 'CSS', 'GSAP', 'JS', 'Tailwind CSS']
        },
        {
            id: 5,
            title: 'PLANET FITNESS - Gym website template',
            image: work1,
            description: 'This is a gym website teamplate, i coded to showcase my skills and attract some major clients.',
            role: 'Developer and Designer',
            url: 'https://planet-fitness-eight.vercel.app/',
            tech: ['HTML', 'CSS', 'GSAP', 'JS', 'Tailwind CSS']
        },
        {
            id: 6,
            title: 'GOOGLE NOTES - Redesign',
            image: work1,
            description: 'This is a practice project, where i tried to made a better and responsive version of google notes, and i actually maded it..',
            role: 'Developer and Designer',
            url: 'https://notes-eight-eta.vercel.app/',
            tech: ['HTML', 'CSS', 'GSAP', 'JS', 'Tailwind CSS']
        }
    ];

    return (
        <div className='workPage min-h-screen w-full bg-[#020617] relative'>
            <motion.div 
                className='w-11/12 text-white pt-20 mx-auto'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1 
                    className='bebas-neue-regular text-6xl md:text-9xl pt-12'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Selected Work
                </motion.h1>

                <div className="work-cont w-full flex flex-col items-center gap-28 mt-10 py-10">
                    {works.map((work, index) => (
                        <motion.div 
                            key={work.id} 
                            className="work w-full mx-auto p-6 flex flex-col md:flex-row justify-between gap-12 rounded-xl hover:bg-white/5 transition-all duration-300"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className='w-full md:w-3/5 relative overflow-hidden rounded-2xl group'>
                                <iframe 
                                    className='w-full aspect-video rounded-2xl transform group-hover:scale-105 transition-transform duration-500' 
                                    src={work.url} 
                                    frameBorder="0" 
                                    title={work.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className='flex flex-col gap-6 w-full md:w-2/5'>
                                <motion.h2 
                                    className='oswald text-2xl md:text-3xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400'
                                    whileHover={{ x: 10 }}
                                >
                                    {work.title}
                                </motion.h2>

                                <p className='w-11/12 barlow-regular text-gray-300'>{work.description}</p>
                                
                                <div className='flex flex-wrap gap-2'>
                                    {work.tech?.map(tech => (
                                        <span key={tech} className='px-3 py-1 text-sm bg-purple-700/20 rounded-full text-purple-300'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className='barlow-semibold text-gray-300'>Role: <span className='text-white'>{work.role}</span></p>

                                <motion.div 
                                    className='flex gap-4'
                                    whileHover={{ x: 10 }}
                                >
                                    <a 
                                        href={work.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className='button mt-4 px-6 py-3 uppercase oswald font-medium rounded-lg bg-purple-700 hover:bg-purple-600 transition-colors duration-300 flex items-center gap-2'
                                    >
                                        View Project <ExternalLink size={18} />
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: works.length * 0.2 }}
                        className="mt-20"
                    >
                        <p className='flex text-lg items-center gap-4 flex-wrap'> 
                            For more projects and code, checkout my 
                            <motion.a 
                                className='flex items-center gap-3 bg-white rounded-lg font-semibold shadow-lg text-black px-6 py-3 hover:bg-purple-100 transition-colors duration-300' 
                                href="https://github.com/Priyanshu43A" 
                                target='_blank'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            > 
                                <Github /> GITHUB
                            </motion.a> 
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default WorkPage;