import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

// Skill Categories Mapping
const categories = ["All", "Frontend", "Backend", "Tools & DevOps"];

const getCategory = (name) => {
  const nameLower = name.toLowerCase();
  if (["html 5", "css 3", "javascript", "typescript", "react js", "redux toolkit", "tailwind css", "three js"].includes(nameLower)) {
    return "Frontend";
  }
  if (["node js", "mongodb"].includes(nameLower)) {
    return "Backend";
  }
  return "Tools & DevOps";
};

const Tech = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTechnologies = technologies.filter((tech) => {
    if (activeTab === "All") return true;
    return getCategory(tech.name) === activeTab;
  });

  return (
    <>
      <motion.div variants={textVariant()} className="mb-10 text-center">
        <p className={`${styles.sectionSubText} text-[#915EFF] font-semibold tracking-wider uppercase`}>
          Technical Capabilities
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Technologies & Tools<span className="text-[#915EFF]">.</span>
        </h2>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 backdrop-blur-md border ${
              activeTab === tab
                ? "bg-[#915EFF] text-white border-[#915EFF] shadow-[0_0_20px_rgba(145,94,255,0.4)]"
                : "bg-[#100d25]/60 text-gray-400 border-white/10 hover:border-[#915EFF]/40 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Animated Tech Cards Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filteredTechnologies.map((technology, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              key={technology.name}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-[#915EFF]/30 via-purple-500/10 to-transparent hover:from-[#915EFF] hover:to-indigo-500 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(145,94,255,0.35)]"
            >
              <div className="bg-[#0e0b21]/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center gap-3 h-full border border-white/5 group-hover:border-transparent transition-all duration-300">
                
                {/* Icon Container with Glow */}
                <div className="relative flex items-center justify-center w-14 h-14">
                  <div className="absolute inset-0 bg-[#915EFF]/15 rounded-full blur-md group-hover:bg-[#915EFF]/35 transition-all duration-300" />
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-12 h-12 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_10px_rgba(145,94,255,0.4)]"
                  />
                </div>

                {/* Tech Title */}
                <div className="text-center">
                  <span className="text-gray-200 group-hover:text-white text-sm font-semibold tracking-wide block transition-colors">
                    {technology.name}
                  </span>
                  <span className="text-[10px] text-gray-500 group-hover:text-[#915EFF] font-medium block mt-0.5">
                    {getCategory(technology.name)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");