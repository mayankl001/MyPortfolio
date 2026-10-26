import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    whileHover={{ y: -8 }}
    className="bg-[#100d25]/90 backdrop-blur-2xl p-7 rounded-2xl sm:w-[340px] w-full border border-[#915EFF]/30 hover:border-[#915EFF] transition-all duration-300 shadow-2xl group flex flex-col justify-between relative overflow-hidden"
  >
    {/* Subtle Inner Card Glow */}
    <div className="absolute -right-10 -top-10 w-28 h-28 bg-[#915EFF]/10 rounded-full blur-2xl group-hover:bg-[#915EFF]/25 transition-all duration-300 pointer-events-none" />

    <div>
      {/* Decorative Quote Icon */}
      <div className="text-[#915EFF] font-serif font-black text-[55px] leading-none select-none drop-shadow-[0_0_12px_rgba(145,94,255,0.6)] h-8">
        “
      </div>

      <p className="mt-4 text-gray-300 tracking-wide text-[14px] sm:text-[15px] leading-[25px]">
        {testimonial}
      </p>
    </div>

    <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center gap-3 relative z-10">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-semibold text-[15px] group-hover:text-[#915EFF] transition-colors">
          <span className="text-[#915EFF] font-bold">@</span> {name}
        </p>
        <p className="mt-0.5 text-gray-400 text-[12px]">
          {designation} of <span className="text-gray-300 font-medium">{company}</span>
        </p>
      </div>

      <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#915EFF] to-indigo-500 shadow-md">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-full h-full rounded-full object-cover bg-[#100d25]"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-[#09061a]/90 rounded-3xl overflow-hidden border border-[#915EFF]/25 shadow-[0_10px_40px_-15px_rgba(145,94,255,0.2)]">
      {/* Top Banner Header */}
      <div className={`${styles.padding} bg-[#151030] min-h-[260px] rounded-t-3xl relative overflow-hidden`}>
        <div className="absolute right-0 top-0 w-72 h-72 bg-[#915EFF]/10 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div variants={textVariant()} className="relative z-10">
          <p className={`${styles.sectionSubText} text-[#915EFF] font-semibold tracking-wider uppercase`}>
            What others say
          </p>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            Testimonials<span className="text-[#915EFF]">.</span>
          </h2>
        </motion.div>
      </div>

      {/* Cards Floating Row */}
      <div className={`-mt-16 pb-12 ${styles.paddingX} flex flex-wrap gap-6 justify-center sm:justify-start items-stretch`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");