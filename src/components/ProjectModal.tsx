import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Layers, Tag, ExternalLink, ShieldAlert, Compass, Target } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-surface border border-surface-borderLight rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[88vh] flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="bg-midnight-950/80 border-b border-surface-border px-6 py-4 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-accent-purple uppercase">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 font-sans">
            
            {/* Tagline & Status Badge */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="px-2.5 py-1 rounded-md bg-midnight-950 border border-surface-border text-xs font-medium text-slate-300">
                  Status: {project.status}
                </span>
                {project.metric && (
                  <span className="px-2.5 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-xs font-semibold text-accent-blue">
                    {project.metric}
                  </span>
                )}
                {project.isFlagship && (
                  <span className="px-2.5 py-1 rounded-md bg-accent-purple/20 border border-accent-purple/40 text-xs font-semibold text-accent-purple">
                    Featured Project
                  </span>
                )}
              </div>
              <p className="text-base sm:text-lg font-medium text-slate-100 leading-snug">
                {project.tagline}
              </p>
            </div>

            {/* 1. Overview */}
            <div className="bg-midnight-950/60 rounded-xl p-5 border border-surface-border">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-purple mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-accent-purple" />
                Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {project.overview || project.fullDescription}
              </p>
            </div>

            {/* 2. Problem */}
            {project.problemStatement && (
              <div className="bg-midnight-950/60 rounded-xl p-5 border border-surface-border">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-blue mb-2 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-accent-blue" />
                  Problem
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {/* 3. Project Approach */}
            {project.researchDirections && project.researchDirections.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-accent-purple" />
                    Project Approach
                  </h4>
                  <span className="text-[11px] font-mono text-accent-purple bg-accent-purple/10 px-2.5 py-0.5 rounded border border-accent-purple/30">
                    {project.status === 'Prototype Completed' ? 'Prototype Technical Scope' : 'Technical Directions'}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.researchDirections.map((dir, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-midnight-950/70 border border-surface-border flex items-start gap-3 hover:border-slate-700 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-accent-purple/20 text-accent-purple border border-accent-purple/30 flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-heading font-bold text-white block">
                          {dir.title}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5 leading-relaxed font-normal">
                          {dir.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Implemented Features */}
            {((project.implementedFeatures && project.implementedFeatures.length > 0) || (project.highlights && project.highlights.length > 0)) && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Implemented Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(project.implementedFeatures || project.highlights).map((point, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-lg bg-midnight-950/40 border border-surface-border text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 5. Technology Stack */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-accent-blue" />
                Technology Stack
              </h4>

              {project.techStackBreakdown ? (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-midnight-950/60 border border-surface-border">
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {project.status.includes('Prototype') ? "Implemented in Prototype:" : "Implemented Core Technologies:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStackBreakdown.implemented.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-midnight-900 text-xs font-mono text-slate-200 border border-surface-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-midnight-950/60 border border-surface-border">
                    <span className="text-xs font-semibold text-accent-blue flex items-center gap-1.5 mb-2">
                      <span className="w-2 h-2 rounded-full bg-accent-blue" />
                      {project.status.includes('Prototype') ? "Planned Integrations & Exploration:" : "Planned & Under Active Exploration:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStackBreakdown.exploration.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-midnight-900 text-xs font-mono text-slate-300 border border-surface-border border-dashed"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-midnight-950 text-xs font-mono text-slate-300 border border-surface-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Future Directions */}
            {((project.futureDirections && project.futureDirections.length > 0) || project.longTermVision) && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-accent-purple/10 via-midnight-950 to-accent-blue/10 border border-surface-borderLight">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-blue mb-2.5 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-accent-blue" />
                  Future Directions
                </h4>
                {project.futureDirections && project.futureDirections.length > 0 ? (
                  <ul className="space-y-2">
                    {project.futureDirections.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {project.longTermVision}
                  </p>
                )}
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="bg-midnight-950/80 border-t border-surface-border px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Personal Project Portfolio &bull; Risadi Vidara
            </span>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="btn-outline px-4 py-2 rounded-lg text-xs"
              >
                Close
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} repository on GitHub (opens in new tab)`}
                  className="btn-purple px-4 py-2 rounded-lg text-xs flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
