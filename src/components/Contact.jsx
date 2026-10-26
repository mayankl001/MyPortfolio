import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const currentDate = new Date().toLocaleString();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: "Portfolio Contact Form",
          time: currentDate,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Thank you! I will get back to you as soon as possible.",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus({
            type: "error",
            message: "Ahh, something went wrong. Please try again.",
          });
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Left Column: Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#100d25]/90 border border-[#915EFF]/30 p-8 rounded-2xl backdrop-blur-xl shadow-2xl"
      >
        <p className={`${styles.sectionSubText} text-[#915EFF]`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-white`}>
          Contact<span className="text-[#915EFF]">.</span>
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
              className="bg-[#151030] py-4 px-6 placeholder:text-gray-500 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-colors"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              required
              className="bg-[#151030] py-4 px-6 placeholder:text-gray-500 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-colors"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
              className="bg-[#151030] py-4 px-6 placeholder:text-gray-500 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-colors resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#915EFF] hover:bg-[#7b46e3] py-3.5 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-[#915EFF]/30 transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center gap-2"
          >
            {loading ? "Sending..." : "Send Message "}
          </button>

          {/* Status Message Notification */}
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl border text-sm font-medium ${
                status.type === "success"
                  ? "bg-green-500/10 border-green-500/30 text-green-400"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}
            >
              {status.message}
            </motion.div>
          )}
        </form>
      </motion.div>

      {/* Right Column: 3D Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");