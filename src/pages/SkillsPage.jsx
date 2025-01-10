import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaDatabase, FaFigma, FaSketch } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiThreedotjs, SiGreensock, SiFramer, SiCanva, SiMongodb, SiExpress } from "react-icons/si";
import { PenTool } from "lucide-react";

const SkillsAndContact = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Core skills for compact display
  const coreSkills = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-300" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Three.js", icon: SiThreedotjs, color: "text-purple-500" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-indigo-600" },
    { name: "React Native", icon: FaReact, color: "text-cyan-400" },
    { name: "GSAP", icon: SiGreensock, color: "text-green-300" },
    { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" },
    { name: "Database Design", icon: FaDatabase, color: "text-red-500" },
    { name: "Figma", icon: FaFigma, color: "text-purple-400" },
    { name: "Canva", icon: SiCanva, color: "text-blue-500" },
    { name: "UI/UX Design", icon: FaSketch, color: "text-yellow-400" },
  ];
  

  // Sample writing pieces - replace with your actual content
  const writings = [
    {
      title: "Midnight Whispers",
      type: "Poem",
      excerpt: "Through the silence of the night,\nWhispers echo in moonlight...",
      date: "2024-01-15"
    },
    {
      title: "Digital Dreams",
      type: "Tech Poetry",
      excerpt: "In binary streams we float,\nThrough data seas remote...",
      date: "2024-01-10"
    },
    {
      title: "Code & Creativity",
      type: "Article",
      excerpt: "Where logic meets imagination, there lies the true essence of development...",
      date: "2024-01-05"
    }
  ];

  // Fetch YouTube videos
  useEffect(() => {
    const YOUTUBE_API_KEY = 'AIzaSyC81HLrN_MPRmb5OKysIKPQ26J-GuUdoRc'; // Replace with your actual API key
    const CHANNEL_ID = 'UCguwP3jXfHOTtdiqP_bFelw'; // This is your channel ID extracted from your URL
    
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`
        );
        const data = await response.json();
        
        // Check if we received valid data
        console.log(data)
        
        if (data.items) {
          // Transform the data to match our component's expected format
          const formattedVideos = data.items.map(item => ({
            id: item.id.videoId,
            snippet: {
              title: item.snippet.title,
              thumbnails: item.snippet.thumbnails,
              publishedAt: item.snippet.publishedAt
            }
          }));
          setVideos(formattedVideos);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    };

    fetchVideos();
    
  }, []);

  return (
    <div className="min-h-screen block py-10 md:py-20 bg-[#090f1d] text-white">
      <div className="w-11/12 max-w-7xl mx-auto space-y-20">
        {/* Skills Section - Compact Version */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="bebas-nue-regular text-4xl md:text-5xl text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="group relative"
              >
                <div className="relative h-16 bg-gray-900/80 rounded-xl p-4 backdrop-blur-md border border-white/5 flex items-center justify-center">
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  <span className="absolute z-[99999] -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Writing Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="bebas-nue-regular text-4xl md:text-5xl text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Written Words
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {writings.map((piece, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-md border border-white/5 group-hover:border-white/10 transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <PenTool className="w-5 h-5 text-blue-400" />
                    <span className="oswald text-sm text-blue-400">{piece.type}</span>
                  </div>
                  <h3 className="oswald text-xl mb-3">{piece.title}</h3>
                  <p className="text-white/70 text-sm mb-4 whitespace-pre-line">
                    {piece.excerpt}
                  </p>
                  <span className="text-xs text-white/50">{piece.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* YouTube Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="bebas-nue-regular text-4xl md:text-5xl text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Latest Videos
          </h2>
          {loading ? (
            <div className="text-center text-white/60">Loading videos...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video) => (
                <motion.a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:from-red-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                  <div className="relative rounded-xl bg-gray-900/50 backdrop-blur-md border border-white/5 group-hover:border-white/10 overflow-hidden">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="p-4">
                      <h3 className="oswald text-lg mb-2 line-clamp-2">
                        {video.snippet.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <FaYoutube className="text-red-500" />
                        <span>
                          {new Date(video.snippet.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </motion.a>
              ))}
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default SkillsAndContact;