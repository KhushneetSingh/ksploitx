"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" ref={containerRef} className="relative">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border py-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <span className="font-mono text-xs text-muted tracking-widest">
              // SECTION_02
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-1">
              DEPLOYMENTS
            </h2>
          </div>
          <motion.div
            className="hidden md:block font-mono text-xs text-accent/50"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 1]) }}
          >
            [{projects.length} SYSTEMS LOADED]
          </motion.div>
        </div>
      </div>

      {/* Card Stack */}
      <div className="min-h-[200vh] relative">
        <div className="sticky top-28 px-6 md:px-12 lg:px-24 pb-24">
          <div className="max-w-7xl mx-auto space-y-6 pt-8">
            {projects.map((project, index) => (
              <ProjectCardAnimated
                key={project.id}
                project={project}
                index={index}
                total={projects.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* View All */}
      <div className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.a
            href="https://github.com/KhushneetSingh"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent font-mono text-sm hover:bg-accent/10 transition-colors duration-200 tracking-wider"
          >
            VIEW_ALL →
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function ProjectCardAnimated({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, end],
    [0, 1, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start],
    [60, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, end, Math.min(1, end + 0.1)],
    [1, 1, index < total - 1 ? 0.95 : 1]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="relative"
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}
