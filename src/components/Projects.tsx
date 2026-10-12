"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-2">
            Recent work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className={`glass rounded-2xl overflow-hidden flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 relative group">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-56 sm:h-72 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-300 flex items-center gap-1.5 hover:underline"
                  >
                    Live Preview <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {p.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 5 && (
                      <span className="px-2.5 py-1 text-xs text-slate-500">
                        +{p.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400 transition flex items-center gap-1.5"
                  >
                    Live <FaExternalLinkAlt size={12} />
                  </a>
                  <button
                    onClick={() => {
                      setSelected(p);
                      setImgIndex(0);
                    }}
                    className="px-4 py-2 rounded-lg glass text-sm text-slate-300 hover:text-cyan-400 transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <FaTimes size={20} />
              </button>

              <h3 className="text-2xl font-bold text-cyan-400 mb-3 pr-8">
                {selected.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{selected.description}</p>

              {/* Image carousel simple */}
              {selected.images.length > 0 && (
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src={selected.images[imgIndex]}
                    alt=""
                    className="w-full h-48 object-cover"
                  />
                  {selected.images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-2">
                      {selected.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setImgIndex(idx)}
                          className={`w-2 h-2 rounded-full ${
                            idx === imgIndex ? "bg-cyan-400" : "bg-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-white mb-1">Features</h4>
                <ul className="list-disc list-inside text-slate-400 text-sm space-y-0.5">
                  {selected.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-white mb-1">Challenges</h4>
                <p className="text-slate-400 text-sm">{selected.challenges}</p>
              </div>

              <div className="mb-5">
                <h4 className="text-sm font-semibold text-white mb-1">
                  Future Plans
                </h4>
                <p className="text-slate-400 text-sm">{selected.improvements}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-sm font-semibold flex items-center gap-1.5"
                >
                  Live Site <FaExternalLinkAlt size={12} />
                </a>
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg glass text-sm text-slate-300 flex items-center gap-1.5"
                  >
                    <FaGithub /> Client
                  </a>
                )}
                {selected.github_server && (
                  <a
                    href={selected.github_server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg glass text-sm text-slate-300 flex items-center gap-1.5"
                  >
                    <FaGithub /> Server
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
