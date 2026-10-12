"use client";

import { motion } from "framer-motion";
import { GiJourney } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { FaFutbol, FaHandsHelping } from "react-icons/fa";
import Link from "next/link";

const cards = [
  {
    icon: <GiJourney className="text-2xl text-cyan-400" />,
    title: "My Journey",
    text: "My programming journey started with curiosity about how websites work. I began with HTML & CSS, learned JavaScript, then progressed to React, Node.js, Express and modern tools like Tailwind to build responsive apps.",
  },
  {
    icon: <MdWork className="text-2xl text-emerald-400" />,
    title: "Work I Enjoy",
    text: "I love building responsive, user-friendly applications that solve real-world problems. My focus is on clean code, smooth UX and scalable solutions.",
  },
  {
    icon: <FaFutbol className="text-2xl text-amber-400" />,
    title: "Hobbies",
    text: "Outside of coding I’m passionate about football and cricket. I also enjoy exploring new tech trends and learning tools that push creativity forward.",
  },
  {
    icon: <FaHandsHelping className="text-2xl text-violet-400" />,
    title: "Personality",
    text: "Curious, optimistic and detail-oriented. I believe in continuous learning and love collaborating with people who share a passion for technology.",
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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-cyan-400">
            Get to know me
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              whileHover={{
                scale: 1.03,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="glass group cursor-default rounded-2xl p-5 transition hover:border-cyan-500/30 sm:p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition group-hover:scale-110">
                  {c.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{c.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 p-5 sm:flex-row sm:p-6"
        >
          <div>
            <h4 className="mb-1 text-lg font-semibold text-white">
              Let’s Connect!
            </h4>
            <p className="text-sm text-slate-400">
              Always open to exciting collaborations and innovative projects.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            Get in Touch →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
