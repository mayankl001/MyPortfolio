import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#100d25",
        color: "#fff",
        boxShadow: "0 10px 30px -10px rgba(145, 94, 255, 0.2)",
        border: "1px solid rgba(145, 94, 255, 0.3)",
        borderRadius: "20px",
        backdropFilter: "blur(12px)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #100d25" }}
      date={experience.date}
      dateClassName="text-gray-400 font-medium text-sm sm:mx-2"
      iconStyle={{ 
        background: experience.iconBg || "#1d1836",
        boxShadow: "0 0 0 4px #915EFF, 0 0 15px rgba(145, 94, 255, 0.6)"
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden p-1">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={`w-full h-full ${
              experience.company_name.toLowerCase().includes("codezeal")
                ? "object-contain scale-90"
                : "object-cover"
            }`}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] sm:text-[22px] font-bold tracking-wide">
          {experience.title}
        </h3>
        <p className="text-[#915EFF] text-[15px] sm:text-[16px] font-semibold mt-1">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2.5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-[14px] leading-[22px] tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Tech Stack Badges */}
      {experience.skills && (
        <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-white/10">
          {experience.skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs px-2.5 py-1 rounded-md bg-[#915EFF]/10 border border-[#915EFF]/30 text-[#915EFF] font-mono"
            >
              #{skill}
            </span>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[#915EFF] font-semibold tracking-wider uppercase`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Work Experience<span className="text-[#915EFF]">.</span>
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="#915EFF">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");