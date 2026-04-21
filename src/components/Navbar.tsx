"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, TerminalSquare } from "lucide-react";
import Terminal from "@/components/ui/Terminal";

const NAV_LINKS = [
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Prevent body scroll when mobile menu or terminal open
  useEffect(() => {
    if (mobileOpen || terminalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, terminalOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              className="font-mono text-sm text-accent glow-green tracking-widest hover:text-accent/80 transition-colors"
            >
              KSPLOITX://
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs text-muted-light hover:text-accent transition-colors duration-200 tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setTerminalOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 border border-accent/40 font-mono text-xs text-accent hover:bg-accent/10 transition-colors duration-200"
              >
                <TerminalSquare size={14} />
                TERMINAL_ACCESS
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatedMobileMenu
          isOpen={mobileOpen}
          onNavClick={handleNavClick}
          onTerminalOpen={() => {
            setMobileOpen(false);
            setTerminalOpen(true);
          }}
        />
      </motion.nav>

      {/* Terminal Overlay */}
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}

function AnimatedMobileMenu({
  isOpen,
  onNavClick,
  onTerminalOpen,
}: {
  isOpen: boolean;
  onNavClick: () => void;
  onTerminalOpen: () => void;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="md:hidden overflow-hidden bg-surface-container border-b border-border"
    >
      <div className="px-6 py-6 flex flex-col gap-4">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onNavClick}
            className="font-mono text-sm text-muted-light hover:text-accent transition-colors tracking-wider py-2"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={onTerminalOpen}
          className="flex items-center gap-2 px-3 py-2 border border-accent/40 font-mono text-xs text-accent hover:bg-accent/10 transition-colors duration-200 w-fit mt-2"
        >
          <TerminalSquare size={14} />
          TERMINAL_ACCESS
        </button>
      </div>
    </motion.div>
  );
}
