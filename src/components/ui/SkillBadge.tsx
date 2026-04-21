"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  index: number;
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-accent/20 font-mono text-xs text-foreground/80 hover:border-accent/60 hover:text-accent transition-colors duration-200"
    >
      <span className="w-1.5 h-1.5 bg-accent inline-block flex-shrink-0" />
      {name}
    </motion.span>
  );
}
