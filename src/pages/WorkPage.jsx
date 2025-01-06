import React from 'react';
import work1 from '../assets/work1.png';
import { Github } from 'lucide-react';

const WorkPage = () => {
    const works = [
        {
            id: 1,
            title: 'WORKFLOW - Please Try it out',
            image: work1,
            description: 'Workflow is my personal idea and project i spended 2 months on. Workflow solves major problems in industry standard work culture. You can create teams, assign tasks and much more. Do try it out on your own.',
            role: 'Developer and Designer',
            url: 'https://workflow-priyanshu-e6be8f79f114.herokuapp.com/'
        },
        {
            id: 2,
            title: 'OYE KALAKAR - marketplace for artists',
            image: work1,
            description: 'OYE KALAKAR is a marketplace where artists can sell their artwork, receive orders, and earn commission. It’s a platform for artists to reach a wider audience and build their reputation.',
            role: 'Frontend Developer and Designer',
            url: 'https://oyekalakar-eight.vercel.app/'
        },
        {
            id: 3,
            title: 'CHAIN CONNECT - Web3 social media',
            image: work1,
            description: 'Chain connect is a web3 based social media application, that also offers great features and crypto benefits.',
            role: 'Frontend Developer and Designer',
            url: 'https://chain-connect-blush.vercel.app/'
        },
        {
            id: 4,
            title: 'OBYS Agency - Redesign',
            image: work1,
            description: 'Obys aency is a award winning website. and i tried to recreate its frontend at my own...',
            role: 'Frontend Developer and Designer',
            url: 'https://obys-agency-five.vercel.app/'
        },
        {
            id: 5,
            title: 'PLANET FITNESS - Gym website template',
            image: work1,
            description: 'This is a gym website teamplate, i coded to showcase my skills and attract some major clients.',
            role: 'Developer and Designer',
            url: 'https://planet-fitness-eight.vercel.app/'
        },
        {
            id: 5,
            title: 'GOOGLE NOTES - Redesign',
            image: work1,
            description: 'This is a practice project, where i tried to made a better and responsive version of google notes, and i actually maded it..',
            role: 'Developer and Designer',
            url: 'https://notes-eight-eta.vercel.app/'
        },
    ];

    return (
        <div className='workPage min-h-screen w-full'>
            <div className='w-11/12 text-white pt-20 mx-auto'>
                <h1 className='bebas-neue-regular text-9xl pt-12'>Workkk</h1>
                <div className="work-cont w-full flex flex-col items-center gap-28 mt-10 py-10">
                    {works.map(work => (
                        <div key={work.id} className="work w-full mx-auto p-6 flex flex-col md:flex-row justify-between gap-12">
                            <iframe 
                                className='w-full max-w-xl h-full aspect-[9/16] md:aspect-video rounded-2xl' 
                                src={work.url} 
                                frameBorder="0" 
                                title={work.title}
                            ></iframe>
                            <div className='flex flex-col gap-6'>
                                <h2 className='oswald text-3xl mb-4'>{work.title}</h2>
                                <p className='w-11/12 barlow-regular'>{work.description}</p>
                                <p className='barlow-semibold'>Role: <span>{work.role}</span></p>
                                <div className='flex gap-0'>
                                    <a 
                                        href={work.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className='button mt-8 px-6 py-2 uppercase oswald font-medium rounded-lg shadow-lg bg-purple-700'
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>

                    ))}

                    <div>
                        <p className='flex text-lg items-center gap-4' >For more projects and code. checkout my <a className='flex items-center gap-3 bg-gray-300 rounded-lg font-semibold shadow-md text-black px-6 py-3' href="https://github.com/Priyanshu43A" target='_blank' > <Github /> GITHUB</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkPage;
