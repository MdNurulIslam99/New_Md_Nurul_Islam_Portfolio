"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiMui,
  SiNextdotjs,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-500" /> },
  { name: "Tailwindcss", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
  { name: "DaisyUI", icon: <MdOutlineDesignServices size={40} className="text-purple-400" /> },
  { name: "Mamba UI", icon: <SiMui size={40} className="text-pink-500" /> },
  { name: "Material UI", icon: <SiMui size={40} className="text-blue-400" /> },
  { name: "Javascript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-cyan-400" /> },
  { name: "Firebase Auth", icon: <SiFirebase size={40} className="text-amber-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-cyan-400">
            What I work with
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4"
        >
          {skills.map((s) => (
            <motion.div
              key={s.name}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.05,
                borderColor: "rgba(34,211,238,0.45)",
                transition: { duration: 0.2 },
              }}
              className="glass flex flex-col items-center gap-3 rounded-2xl p-4 sm:p-5"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {s.icon}
              </motion.div>
              <span className="text-center text-sm font-medium text-slate-300">
                {s.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
