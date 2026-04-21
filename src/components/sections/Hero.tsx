"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソ>_{}[]|/\\ABCDEF";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(19, 19, 19, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff88";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.globalAlpha = Math.random() * 0.4 + 0.1;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="matrix-rain"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full py-32">
        {/* System Ready Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2 h-2 bg-accent animate-pulse inline-block" />
          <span className="font-mono text-xs text-accent/70 tracking-widest">
            ■ SYSTEM_READY // 2026
          </span>
        </motion.div>

        {/* Terminal Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="font-mono text-sm text-accent glow-green mb-4"
        >
          <span>&gt; ksploitx_</span>
          <span className="inline-block w-2 h-4 bg-accent ml-1 animate-blink align-middle" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-6 tracking-tight"
        >
          THE
          <br />
          <span className="text-gradient-green">SOVEREIGN</span>
          <br />
          MACHINE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-muted-light text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light"
        >
          Full-stack developer and AI engineer building intelligent systems
          at the intersection of security, machine learning, and scalable
          architecture. From embedded hardware to cloud-native deployments.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-cyan text-background font-mono text-sm font-semibold hover:opacity-90 transition-opacity duration-200 tracking-wider"
          >
            VIEW_PROJECTS →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent font-mono text-sm hover:bg-accent/10 transition-colors duration-200 tracking-wider"
          >
            INIT_CONTACT
          </a>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
