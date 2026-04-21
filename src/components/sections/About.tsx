"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/about";
import { ExternalLink } from "lucide-react";
import { TimelineItem } from "@/types";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-muted tracking-widest">
            // SECTION_04
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-1">
            SYSTEM_LOG
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 md:-translate-x-px" />

          {timeline.map((item, index) => (
            <TimelineEntry
              key={item.id}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({
  item,
  index,
  isLeft,
}: {
  item: TimelineItem;
  index: number;
  isLeft: boolean;
}) {
  const typeLabels: Record<TimelineItem["type"], string> = {
    education: "// EDUCATION",
    achievement: "// ACHIEVEMENT",
    experience: "// EXPERIENCE",
    research: "// RESEARCH",
  };

  const typeColors: Record<TimelineItem["type"], string> = {
    education: "text-accent-cyan",
    achievement: "text-accent",
    experience: "text-yellow-400",
    research: "text-purple-400",
  };

  return (
    <div className="relative flex items-start mb-12 last:mb-0">
      {/* Node */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

      {/* Card - Mobile: always right, Desktop: alternating */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="bg-surface border border-border p-5 hover:border-accent/30 transition-colors duration-300 group">
          {/* Type Label */}
          <span
            className={`font-mono text-[10px] tracking-widest uppercase ${typeColors[item.type]} opacity-70`}
          >
            {typeLabels[item.type]}
          </span>

          {/* Title */}
          <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-1 group-hover:text-accent transition-colors duration-300">
            {item.title}
          </h3>

          {/* Subtitle */}
          <p className="font-mono text-xs text-accent-cyan/80 mb-1">
            {item.subtitle}
          </p>

          {/* Date */}
          <p className="font-mono text-[11px] text-muted mb-3">{item.date}</p>

          {/* Description */}
          <p className="text-sm text-muted-light leading-relaxed">
            {item.description}
          </p>

          {/* Image + Link */}
          <div className="flex items-center justify-between mt-4">
            {item.imageUrl && (
              <div
                className="w-16 h-16 bg-surface-container border border-accent/20 flex items-center justify-center overflow-hidden"
              >
                <span className="font-mono text-[10px] text-muted">IMG</span>
              </div>
            )}
            {item.link && item.link !== "#" && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:border-accent hover:text-accent transition-colors duration-200"
                aria-label={`Link for ${item.title}`}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
