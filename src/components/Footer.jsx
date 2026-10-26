import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    icon: "💻",
    url: "https://github.com/mayankl001",
    color: "hover:border-gray-400 hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    url: "https://linkedin.com/in/mayank", // Apni LinkedIn URL lagayein
    color: "hover:border-blue-500 hover:text-blue-400",
  },
  {
    name: "Email",
    icon: "✉️",
    url: "mailto:mayank@example.com", // Apni Email ID lagayein
    color: "hover:border-purple-500 hover:text-purple-400",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b071e]/90 border-t border-[#915EFF]/20 py-10 px-6 backdrop-blur-md relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#915EFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Brand Name & Tagline */}
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold text-white tracking-wide">
            Mayank<span className="text-[#915EFF]">.</span>
          </a>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            Building high-performance web applications & AI solutions.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-[#100d25]/80 border border-white/10 text-gray-300 text-xs font-semibold backdrop-blur-md transition-all duration-300 shadow-md ${link.color}`}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Copyright Text */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Mayank. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;