"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SKILL_ICON_MAP } from "@/data/skillIcons";

interface SkillBadgeProps {
  name: string;
  index: number;
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  const iconUrl = SKILL_ICON_MAP[name] ?? null;

  return (
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="skill-badge"
    >
      {iconUrl ? (
        <Image
          src={iconUrl}
          alt={`${name} icon`}
          width={18}
          height={18}
          className="skill-icon"
          unoptimized
        />
      ) : (
        <span className="skill-icon-fallback">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </span>
      )}
      {name}
    </motion.span>
  );
}
