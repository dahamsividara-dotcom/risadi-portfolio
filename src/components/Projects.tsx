import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { TiltCard } from './TiltCard';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Featured Project: TITAN OMEGA-X
  const featuredProject = projects.find((p) => p.isFlagship) || projects[0];
  
  // Remaining 4 projects: AEGIS360-X, OBSIDIAN-X, Agentic AI-SOC, Phishing URL Detection System
  const standardProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-24 bg-midnight-900 border-t border-surface-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-start mb-14"
        >
          <span className="section-label mb-3">
            Selected Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Featured Cybersecurity &amp; AI Systems
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl font-sans font-normal">
            A selection of projects exploring threat detection pipelines, security operations triage, and machine learning defense.
          </p>
          <div className="w-12 h-1 bg-accent-purple rounded-full mt-3" />
        </motion.div>

        {/* 1. Featured Project: TITAN OMEGA-X (Flagship Showcase Card with 3D Tilt & Glow) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <TiltCard
            isFlagship={true}
            className="card-dark p-7 sm:p-9 relative overflow-hidden group border border-accent-purple/35 shadow-card hover:shadow-card-hover"
          >
            {/* Subtle background gradient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Details (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple text-xs font-semibold border border-accent-purple/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Project
                  </span>
                  <span className="text-xs text-slate-400">
                    &bull; {featuredProject.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight group-hover:text-accent-blue transition-colors">
                  {featuredProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-accent-blue font-sans font-medium">
                  {featuredProject.tagline}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal max-w-2xl">
                  {featuredProject.shortDescription}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-midnight-950 text-xs font-mono text-slate-300 border border-surface-border transition-colors hover:border-accent-purple/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Action */}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featuredProject)}
                    className="btn-purple px-5 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Abstract Visual Badge (4 cols) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs aspect-video sm:aspect-square rounded-2xl bg-gradient-to-br from-midnight-950 via-slate-900 to-indigo-950/60 p-6 border border-surface-border flex flex-col justify-between relative overflow-hidden group-hover:border-accent-purple/40 transition-colors">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span className="text-accent-purple font-semibold">FLAGSHIP</span>
                    <span>2026</span>
                  </div>

                  {/* Clean Geometric Abstract Visual */}
                  <div className="my-auto flex flex-col items-center justify-center text-center py-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center text-accent-purple font-heading font-bold text-lg mb-2 shadow-purple-soft">
                      Ω-X
                    </div>
                    <span className="text-xs font-heading font-bold text-white">
                      TITAN OMEGA-X
                    </span>
                    <span className="text-[11px] text-slate-400 font-sans mt-0.5 text-center">
                      Security Intelligence &amp; Orchestration
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-500 text-center font-mono">
                    Research Initiative &bull; Tap to Inspect
                  </div>
                </div>
              </div>

            </div>
          </TiltCard>
        </motion.div>

        {/* 2. Remaining 4 Projects Grid with TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {standardProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="h-full"
            >
              <TiltCard
                onClick={() => setSelectedProject(project)}
                className="card-dark p-6 sm:p-7 flex flex-col justify-between cursor-pointer group h-full"
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span className="text-accent-blue font-medium">
                      {project.category}
                    </span>
                    <span>{project.status}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white tracking-tight group-hover:text-accent-purple transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-accent-purple transition-colors shrink-0" />
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-slate-400 mt-1 mb-3 font-sans">
                    {project.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed font-sans font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Verified Benchmark metric if available */}
                  {project.metric && (
                    <div className="mt-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-xs font-semibold text-accent-blue font-mono">
                      <span>Benchmark:</span>
                      <span className="font-bold">{project.metric}</span>
                    </div>
                  )}
                </div>

                {/* Technologies & View Action */}
                <div className="mt-6 pt-4 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-midnight-950 text-xs font-mono text-slate-300 border border-surface-border transition-colors hover:border-accent-purple/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-medium text-slate-400 group-hover:text-accent-blue transition-colors shrink-0">
                    View Case Study &rarr;
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
