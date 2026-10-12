"use client";

import { motion } from "framer-motion";
import { FaCode, FaReact, FaPencilRuler } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const services = [
  {
    icon: <FaCode size={32} className="text-cyan-400" />,
    title: "Front-End Development",
    desc: "Crafting fast, responsive and modern web apps using React, JavaScript and CSS. Strong foundation in the MERN stack.",
  },
  {
    icon: <FaReact size={32} className="text-cyan-400" />,
    title: "React Applications",
    desc: "Building scalable single-page apps with React, custom hooks and state management tools like Context API.",
  },
  {
    icon: <SiNextdotjs size={32} className="text-cyan-400" />,
    title: "Next.js Development",
    desc: "Building SEO-friendly, high-performance apps with Next.js App Router, Server Components, and optimized routing.",
  },
  {
    icon: <FaPencilRuler size={32} className="text-cyan-400" />,
    title: "UI / UX Design",
    desc: "Designing simple, user-friendly interfaces with a focus on usability and clean visual aesthetics.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 14 },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-cyan-400">
            What I offer
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            My <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
                borderColor: "rgba(34,211,238,0.4)",
                transition: { duration: 0.25 },
              }}
              className="glass group rounded-2xl p-6 text-center sm:p-7"
            >
              <motion.div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {s.icon}
              </motion.div>
              <h3 className="mb-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
