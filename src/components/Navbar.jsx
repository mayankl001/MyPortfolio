import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  // Background blur and solid background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto Active-State Highlight on Scroll (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchedNav = navLinks.find(
              (link) => link.id === entry.target.id
            );
            if (matchedNav) {
              setActive(matchedNav.title);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    navLinks.forEach((nav) => {
      const element = document.getElementById(nav.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b071e]/85 backdrop-blur-md border-b border-[#915EFF]/20 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand Image Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#100d25] border border-[#915EFF]/40 flex justify-center items-center p-1.5 shadow-[0_0_15px_rgba(145,94,255,0.4)] group-hover:border-[#915EFF] group-hover:shadow-[0_0_22px_rgba(145,94,255,0.7)] transition-all duration-300">
            <img
              src={logo}
              alt="Mayank Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            Mayank &nbsp;
            <span className="sm:block hidden text-gray-400 font-normal border-l border-gray-600/60 pl-2.5 ml-0.5 text-sm">
              Full-Stack Developer
            </span>
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-[#915EFF] font-semibold"
                  : "text-gray-300"
              } hover:text-white text-[15px] font-medium cursor-pointer transition-colors duration-200 relative py-1`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>

              {/* Glowing Active Underline Indicator */}
              {active === nav.title && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#915EFF] rounded-full shadow-[0_0_8px_#915EFF]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}

          {/* Resume CTA Button */}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915EFF]/10 border border-[#915EFF]/50 hover:bg-[#915EFF] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-[#915EFF]/30 flex items-center gap-1.5"
            >
              <span>Resume</span>
              <span className="text-xs">📄</span>
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl focus:outline-none p-2 rounded-lg bg-[#100d25]/60 border border-white/10"
            aria-label="Toggle Menu"
          >
            {toggle ? "✕" : "☰"}
          </button>

          {/* Animated Mobile Dropdown Menu */}
          <AnimatePresence>
            {toggle && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setToggle(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  className="p-6 bg-[#0f0b29]/95 backdrop-blur-2xl border border-[#915EFF]/40 absolute top-16 right-4 min-w-[200px] z-20 rounded-2xl shadow-2xl flex flex-col gap-4"
                >
                  <ul className="list-none flex flex-col gap-4">
                    {navLinks.map((nav) => (
                      <li
                        key={nav.id}
                        className={`${
                          active === nav.title
                            ? "text-[#915EFF] font-bold"
                            : "text-gray-300"
                        } font-medium cursor-pointer text-[16px] transition-colors`}
                        onClick={() => {
                          setToggle(false);
                          setActive(nav.title);
                        }}
                      >
                        <a href={`#${nav.id}`} className="block w-full">
                          {nav.title}
                        </a>
                      </li>
                    ))}
                    <li className="pt-2 border-t border-white/10">
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-[#915EFF] text-white py-2 rounded-xl font-semibold text-sm shadow-md"
                        onClick={() => setToggle(false)}
                      >
                        Resume 📄
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;