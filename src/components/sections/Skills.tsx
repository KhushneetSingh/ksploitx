"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/skills";
import SkillBadge from "@/components/ui/SkillBadge";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-muted tracking-widest">
            // SECTION_03
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-1">
            SKILL_MATRIX
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: catIndex * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <span className="text-lg">{category.icon}</span>
                <h3 className="font-mono text-sm text-accent-cyan tracking-widest uppercase">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {isInView &&
                  category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill}
                      name={skill}
                      index={catIndex * 3 + skillIndex}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
