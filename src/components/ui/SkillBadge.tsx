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
          width={14}
          height={14}
          className="skill-icon"
          unoptimized
        />
      ) : (
        <span className="w-1.5 h-1.5 bg-accent inline-block flex-shrink-0" />
      )}
      {name}
    </motion.span>
  );
}
