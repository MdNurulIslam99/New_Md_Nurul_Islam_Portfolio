"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_hyskud8",
        "template_ifgx3x9",
        form.current,
        "NI5p4K7Mh6KhxmhlJ"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully.",
          confirmButtonColor: "#22d3ee",
          background: "#0c0c14",
          color: "#e8e8ed",
        });
        form.current?.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again later.",
          confirmButtonColor: "#22d3ee",
          background: "#0c0c14",
          color: "#e8e8ed",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="glass rounded-2xl p-6 sm:p-10 grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Let&apos;s talk about your project
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Feel free to reach out. I&apos;m always open to new projects, ideas
              and opportunities. Have something in mind? Drop a message.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <FaEnvelope />
                </div>
                <span className="text-slate-300">mdnurulislam.eng@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <FaPhoneAlt />
                </div>
                <span className="text-slate-300">+880-1634064799</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-slate-300">Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold text-sm hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
