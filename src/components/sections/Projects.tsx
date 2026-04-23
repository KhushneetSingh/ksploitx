"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-muted tracking-widest">
            // SECTION_02
          </span>
          <div className="flex items-center justify-between mt-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              PROJECTS
            </h2>
            <span className="hidden md:block font-mono text-xs text-accent/50">
              [{projects.length} SYSTEMS LOADED]
            </span>
          </div>
        </motion.div>
      </div>

      {/* Project Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://github.com/KhushneetSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent font-mono text-sm hover:bg-accent/10 transition-colors duration-200 tracking-wider"
          >
            VIEW_ALL →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
