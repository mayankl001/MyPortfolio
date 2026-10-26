import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const developerInfo = `{
  "name": "Mayank",
  "role": "Full-Stack Developer",
  "skills": [
    "React", "Next.js", "Node.js", 
    "TypeScript", "Tailwind CSS", "MongoDB"
  ],
  "hardWorker": true,
  "quickLearner": true,
  "problemSolver": true,
  "hireable": function() {
    return this.hardWorker && this.problemSolver;
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(developerInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center justify-center overflow-hidden bg-[#0a0518] py-16 lg:py-0">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#915EFF]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className={`max-w-7xl mx-auto ${styles.paddingX} w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 pt-16`}>
        
        {/* Left Column: Intro & Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#915EFF]/10 border border-[#915EFF]/30 text-[#915EFF] w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase">Available for Hire</span>
          </div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF] drop-shadow-[0_0_20px_rgba(145,94,255,0.4)]">Mayank</span>
          </h1>

          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
            Full-Stack Developer crafting high-performance, scalable, and visually compelling web applications.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="bg-[#915EFF] hover:bg-[#7d48e8] text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-[#915EFF]/25 transition-all duration-300"
            >
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#work"
              className="border border-[#915EFF]/40 bg-[#151030]/60 hover:bg-[#915EFF]/10 text-white px-7 py-3.5 rounded-xl font-semibold backdrop-blur-md transition-all duration-300"
            >
              View Work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3.5 rounded-xl font-semibold backdrop-blur-md transition-all duration-300"
            >
              Resume 📄
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Code Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 w-full"
        >
          <div className="rounded-2xl border border-gray-800 bg-[#0d091f]/90 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-sm">
            {/* Terminal Top Window Controls */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#130d2e]/80 border-b border-gray-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-gray-400 font-sans">developer.json</span>
              </div>

              {/* Copy Code Button */}
              <button 
                onClick={handleCopy}
                className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-sans px-2 py-1 rounded hover:bg-white/5"
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>

            {/* Terminal Body Code Output */}
            <div className="p-5 sm:p-6 overflow-x-auto text-xs sm:text-sm leading-relaxed">
              <code>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">name:</span>{" "}
                  <span className="text-green-300">"Mayank"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">role:</span>{" "}
                  <span className="text-green-300">"Full-Stack Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">skills:</span> [
                </div>
                <div className="pl-8 text-green-300">
                  "React", "Next.js", "Node.js",<br />
                  "TypeScript", "Tailwind CSS", "MongoDB"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-gray-400">hardWorker:</span>{" "}
                  <span className="text-orange-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">quickLearner:</span>{" "}
                  <span className="text-orange-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">problemSolver:</span>{" "}
                  <span className="text-orange-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">hireable:</span>{" "}
                  <span className="text-purple-400">function</span>() &#123;
                </div>
                <div className="pl-8 text-cyan-300">
                  return <span className="text-purple-400">this</span>.hardWorker && <span className="text-purple-400">this</span>.problemSolver;
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;;</div>
              </code>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to About">
          <div className="w-7 h-11 rounded-full border-2 border-gray-500 flex justify-center items-start p-1.5 hover:border-[#915EFF] transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-1.5 h-1.5 rounded-full bg-gray-400"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;