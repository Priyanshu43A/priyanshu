import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaYoutube,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaFigma,
  FaSketch,
  FaMedium,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiGreensock,
  SiFramer,
  SiCanva,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { ExternalLink } from "lucide-react";

const SkillsAndContact = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("skills");

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

  // Fetch Medium articles
  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        // Using Medium's API endpoint
        const MEDIUM_USERNAME = "jashram826";
        const MEDIUM_API_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

        const response = await fetch(MEDIUM_API_URL);
        const data = await response.json();

        if (data.status === "ok" && data.items) {
          const formattedArticles = data.items.map((item) => {
            // Get the thumbnail from the content or use the default thumbnail
            const contentMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
            const thumbnail = contentMatch?.[1] || item.thumbnail || null;

            return {
              title: item.title,
              description:
                item.description.replace(/<[^>]*>/g, "").substring(0, 200) +
                "...",
              link: item.link,
              thumbnail: thumbnail,
              pubDate: item.pubDate,
              categories: item.categories || ["Technology"],
            };
          });

          setArticles(formattedArticles);
        } else {
          console.error("Error fetching Medium articles:", data);
        }
        setArticlesLoading(false);
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
        setArticlesLoading(false);
      }
    };

    fetchMediumArticles();
  }, []);

  // Fetch YouTube videos
  useEffect(() => {
    const YOUTUBE_API_KEY = "AIzaSyC81HLrN_MPRmb5OKysIKPQ26J-GuUdoRc"; // Replace with your actual API key
    const CHANNEL_ID = "UCguwP3jXfHOTtdiqP_bFelw"; // This is your channel ID extracted from your URL

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`
        );
        const data = await response.json();

        // Check if we received valid data
        console.log(data);

        if (data.items) {
          // Transform the data to match our component's expected format
          const formattedVideos = data.items.map((item) => ({
            id: item.id.videoId,
            snippet: {
              title: item.snippet.title,
              thumbnails: item.snippet.thumbnails,
              publishedAt: item.snippet.publishedAt,
            },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen py-16 md:py-24 bg-[#090f1d] text-white">
      <div className="w-11/12 max-w-7xl mx-auto space-y-32">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-8 mb-16"
        >
          {["skills", "articles", "videos"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === section
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.nav>

        <AnimatePresence mode="wait">
          {activeSection === "skills" && (
            <motion.section
              key="skills"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="space-y-12"
            >
              <motion.div
                variants={itemVariants}
                className="text-center space-y-4"
              >
                <h2 className="bebas-nue-regular text-5xl md:text-6xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Technical Arsenal
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  A curated collection of technologies and tools I've mastered
                  to bring ideas to life
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-4 md:grid-cols-8 gap-6"
              >
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative"
                  >
                    <div className="relative h-20 bg-gray-900/40 rounded-2xl p-4 backdrop-blur-md border border-white/5 flex items-center justify-center transition-all duration-300 hover:bg-gray-900/60 hover:border-white/10">
                      <skill.icon
                        className={`w-8 h-8 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                      />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs whitespace-nowrap bg-gray-900/90 px-2 py-1 rounded-md">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {activeSection === "articles" && (
            <motion.section
              key="articles"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="space-y-12"
            >
              <motion.div
                variants={itemVariants}
                className="text-center space-y-4"
              >
                <h2 className="bebas-nue-regular text-5xl md:text-6xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Written Words
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Exploring the intersection of technology and creativity
                  through articles and poetry
                </p>
              </motion.div>

              {articlesLoading ? (
                <motion.div
                  variants={itemVariants}
                  className="text-center text-white/60"
                >
                  Loading articles...
                </motion.div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  className="grid md:grid-cols-3 gap-8"
                >
                  {articles.map((article, index) => (
                    <motion.a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                      <div className="relative p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-white/5 group-hover:border-white/10 transition-all duration-300 h-full">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <FaMedium className="w-5 h-5 text-green-400" />
                            <span className="oswald text-sm text-green-400">
                              Medium Article
                            </span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />
                        </div>

                        {article.thumbnail && (
                          <div className="mb-4 rounded-xl overflow-hidden">
                            <img
                              src={article.thumbnail}
                              alt={article.title}
                              className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}

                        <h3 className="oswald text-xl mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-white/70 text-sm mb-4 line-clamp-3">
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-white/50">
                          <span>
                            {new Date(article.pubDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            {article.categories?.[0] || "Technology"}
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </motion.section>
          )}

          {activeSection === "videos" && (
            <motion.section
              key="videos"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="space-y-12"
            >
              <motion.div
                variants={itemVariants}
                className="text-center space-y-4"
              >
                <h2 className="bebas-nue-regular text-5xl md:text-6xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Latest Videos
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Watch my latest tutorials and tech explorations on YouTube
                </p>
              </motion.div>

              {loading ? (
                <motion.div
                  variants={itemVariants}
                  className="text-center text-white/60"
                >
                  Loading videos...
                </motion.div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  className="grid md:grid-cols-3 gap-8"
                >
                  {videos.map((video) => (
                    <motion.a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={video.id}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:from-red-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                      <div className="relative rounded-2xl bg-gray-900/40 backdrop-blur-md border border-white/5 group-hover:border-white/10 overflow-hidden">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.title}
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                        </div>
                        <div className="p-6">
                          <h3 className="oswald text-lg mb-3 line-clamp-2 group-hover:text-red-400 transition-colors">
                            {video.snippet.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <FaYoutube className="text-red-500" />
                            <span>
                              {new Date(
                                video.snippet.publishedAt
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillsAndContact;
