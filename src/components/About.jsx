import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    whileHover={{ y: -10, scale: 1.03 }}
    className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[22px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
  >
    <div className="bg-[#0e0a24]/90 backdrop-blur-xl rounded-[22px] py-7 px-8 min-h-[280px] flex justify-evenly items-center flex-col border border-white/10 group hover:border-[#915EFF]/50 transition-colors">
      <div className="w-20 h-20 rounded-2xl bg-[#151030] p-4 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform shadow-inner">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-white text-[19px] font-bold text-center tracking-wide">
        {title}
      </h3>
    </div>
  </motion.div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview & Expertise</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <div className="mt-8 flex flex-col-reverse lg:flex-row gap-12 items-stretch justify-between">
        {/* Interactive Bio & Code Terminal Card */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-1 bg-[#100d25]/80 border border-[#915EFF]/30 p-6 sm:p-8 rounded-3xl backdrop-blur-2xl shadow-[0_10px_40px_rgba(11,7,30,0.8)] relative overflow-hidden flex flex-col justify-between"
        >
          {/* Ambient Corner Glow */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#915EFF]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Header Switcher Tabs */}
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab("bio")}
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "bio"
                      ? "bg-[#915EFF] text-white shadow-[0_0_15px_#915EFF]"
                      : "bg-[#151030] text-gray-400 hover:text-white border border-white/5"
                  }`}
                >
                  👤 Overview
                </button>
                <button
                  onClick={() => setActiveTab("stack")}
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "stack"
                      ? "bg-[#915EFF] text-white shadow-[0_0_15px_#915EFF]"
                      : "bg-[#151030] text-gray-400 hover:text-white border border-white/5"
                  }`}
                >
                  ⚡ Core Philosophy
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 bg-[#0b071e] px-3 py-1 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                <span className="text-[11px] text-gray-300 font-mono">Status: Ready to Code</span>
              </div>
            </div>

            {/* Dynamic Content Views */}
            <AnimatePresence mode="wait">
              {activeTab === "bio" ? (
                <motion.div
                  key="bio"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-gray-300 text-[16px] sm:text-[17px] leading-[32px]">
                    Hello! I'm <span className="text-[#915EFF] font-bold">Mayank</span>, a Full-Stack Engineer who loves engineering high-performance digital experiences. I bring together sleek UI architecture, robust backend logic, and immersive 3D elements using <span className="text-cyan-400 font-semibold">React</span>, <span className="text-emerald-400 font-semibold">Node.js</span>, and <span className="text-purple-400 font-semibold">Three.js</span>.
                  </p>
                  <p className="text-gray-400 text-[15px] leading-[28px] mt-4">
                    Whether architecting scalable REST API infrastructures or designing pixel-perfect glassmorphic interfaces, I focus on building fast, reliable, and accessible applications.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-sm bg-[#0b071e]/90 p-4 rounded-2xl border border-white/10 text-gray-300 space-y-2"
                >
                  <p className="text-[#915EFF]">// Development Philosophy</p>
                  <p><span className="text-pink-400">const</span> developer = &#123;</p>
                  <p className="pl-4">codeQuality: <span className="text-yellow-300">"Clean & Maintainable"</span>,</p>
                  <p className="pl-4">architecture: <span className="text-yellow-300">"Scalable & Modular"</span>,</p>
                  <p className="pl-4">uiFocus: <span className="text-yellow-300">"Glassmorphism & Micro-animations"</span>,</p>
                  <p className="pl-4">problemSolving: <span className="text-emerald-400">true</span></p>
                  <p>&#125;;</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Metrics & Skills Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-[#151030]/80 p-3 rounded-2xl border border-white/5 text-center">
              <p className="text-[#915EFF] font-bold text-xl">100%</p>
              <p className="text-gray-400 text-xs mt-0.5">Commitment</p>
            </div>
            <div className="bg-[#151030]/80 p-3 rounded-2xl border border-white/5 text-center">
              <p className="text-[#00cea8] font-bold text-xl">Full-Stack</p>
              <p className="text-gray-400 text-xs mt-0.5">End-to-End</p>
            </div>
            <div className="bg-[#151030]/80 p-3 rounded-2xl border border-white/5 text-center col-span-2 sm:col-span-1">
              <p className="text-pink-400 font-bold text-xl">Modern Web</p>
              <p className="text-gray-400 text-xs mt-0.5">Stack Standards</p>
            </div>
          </div>
        </motion.div>

        {/* Personal Portrait Container with Clean Ambient Glow */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="relative group flex justify-center items-center"
        >
          {/* Soft Animated Neon Backdrop Glow */}
          <div className="absolute w-[85%] h-[85%] bg-gradient-to-tr from-[#915EFF]/40 via-[#38bdf8]/30 to-[#00cea8]/40 rounded-full blur-2xl group-hover:blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse" />

          {/* Sleek Outer Border Card */}
          <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] rounded-3xl p-[2px] bg-gradient-to-b from-[#915EFF]/60 via-white/10 to-[#00cea8]/40 shadow-[0_15px_35px_rgba(11,7,30,0.9)]">
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0e0a24] relative group">
              <img
                src="/my-photo.png"
                alt="Mayank"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Soft Bottom Shadow Edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b071e]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
          </div>

          {/* Clean Floating Badges */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-2 sm:-left-6 bg-[#0f0b29]/95 border border-[#915EFF]/40 px-4 py-2 rounded-2xl text-xs font-medium text-white backdrop-blur-xl shadow-2xl flex items-center gap-2 z-20"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#915EFF] shadow-[0_0_10px_#915EFF]" />
            <span>Full-Stack Developer</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-2 sm:-right-6 bg-[#0f0b29]/95 border border-[#00cea8]/40 px-4 py-2 rounded-2xl text-xs font-medium text-white backdrop-blur-xl shadow-2xl flex items-center gap-2 z-20"
          >
            <span className="text-amber-400 text-sm">⚡</span>
            <span>Modern UI Architecture</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="mt-20 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");