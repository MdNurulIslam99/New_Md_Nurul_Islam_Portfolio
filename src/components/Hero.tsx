"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-grid pt-24 pb-8 sm:pt-28 sm:pb-10"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-cyan-400">
              Welcome to my portfolio
            </p>

            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Md Nurul Islam</span>
            </h1>

            <h2 className="mb-6 min-h-[2rem] text-lg text-slate-300 sm:text-xl md:text-2xl">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "MERN Stack Developer",
                  "Web Designer",
                  "React Enthusiast",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </h2>

            <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base lg:mx-0">
              Dedicated Frontend Developer focused on building responsive,
              user-friendly and interactive web applications. I turn ideas into
              real-world projects with clean, maintainable code.
            </p>

            {/* Social icons */}
            <div className="mb-8 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://github.com/MdNurulIslam99"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
              >
                Get in Touch
              </a>
              <a
                href="/ResumeOfMdNurulIslam.pdf"
                download
                className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
              >
                Download CV <IoMdDownload size={18} />
              </a>
            </div>
          </motion.div>

          {/* Avatar column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/30 to-emerald-500/20 blur-2xl" />
              <div className="glow-strong relative h-52 w-52 overflow-hidden rounded-full border-2 border-cyan-500/30 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/nurul.jpeg"
                  alt="Md Nurul Islam"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="glass absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium text-cyan-300">
                Available for work
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
