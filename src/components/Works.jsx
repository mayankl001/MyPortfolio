import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)} className="w-full sm:w-[360px]">
      <div className="bg-[#100d25]/90 p-5 rounded-2xl w-full border border-[#915EFF]/20 hover:border-[#915EFF]/60 transition-all duration-300 group hover:shadow-[0_10px_30px_-10px_rgba(145,94,255,0.35)] backdrop-blur-xl flex flex-col justify-between h-full">
        <div>
          {/* Project Image & Action Links Container */}
          <div className="relative w-full h-[220px] rounded-2xl overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Quick Action Overlay (GitHub + Live Demo) */}
            <div className="absolute top-3 right-3 flex gap-2 z-10">
              {/* GitHub Button */}
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="bg-[#090325]/80 hover:bg-[#915EFF] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer backdrop-blur-md shadow-md border border-white/10 transition-all duration-300 hover:scale-110"
                  title="Source Code"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}

              {/* Live Demo / Website Button */}
              {live_demo_link && live_demo_link !== "#" && (
                <div
                  onClick={() => window.open(live_demo_link, "_blank")}
                  className="bg-[#915EFF] hover:bg-[#7b46e3] text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg shadow-[#915EFF]/40 transition-all duration-300 hover:scale-110"
                  title="Live Demo"
                >
                  <span className="text-sm font-bold">🔗</span>
                </div>
              )}
            </div>
          </div>

          {/* Project Title & Description */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[22px] tracking-wide group-hover:text-[#915EFF] transition-colors">
              {name}
            </h3>
            <p className="mt-2 text-gray-300 text-[14px] leading-[22px]">
              {description}
            </p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-white/10">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] font-mono px-2 py-0.5 rounded-md bg-[#1d1836] border border-white/5 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#915EFF] font-semibold tracking-wider uppercase`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Projects<span className="text-[#915EFF]">.</span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-300 text-[16px] sm:text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and real-world experience. Each project is described with links to code repositories and live demos. They reflect my ability to solve complex problems, work with modern technologies, and deliver production-grade applications.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap gap-7 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");