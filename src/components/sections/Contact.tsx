"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "singhkhushneet601@gmail.com";

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [email]);

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-24 bg-surface-container"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-muted tracking-widest block mb-6"
        >
          // INIT_CONTACT
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-8"
        >
          LET&apos;S BUILD<span className="text-accent">.</span>
        </motion.h2>

        {/* Email Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <button
            onClick={copyEmail}
            className="relative inline-flex items-center gap-3 px-6 py-3 bg-surface border border-border hover:border-accent/40 transition-colors duration-200 group"
          >
            <Mail size={16} className="text-accent" />
            <span className="font-mono text-sm text-foreground/80 group-hover:text-accent transition-colors">
              {email}
            </span>

            {/* Copied Feedback */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                copied
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              className="absolute -top-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-accent bg-surface border border-accent/30 px-3 py-1 whitespace-nowrap"
            >
              COPIED_TO_CLIPBOARD
            </motion.span>
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://github.com/KhushneetSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/khushneet-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-3 border border-border hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-mono text-[11px] text-muted tracking-widest"
        >
          © 2026 KSPLOITX // ALL_SYSTEMS_OPERATIONAL
        </motion.p>
      </div>
    </section>
  );
}
