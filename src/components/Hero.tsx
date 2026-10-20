import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-midnight-900"
    >
      {/* Tasteful Ambient Lighting Orbs */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-28 right-10 w-[450px] h-[450px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Intro & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label */}
            <div className="section-label mb-5">
              <span>AI &times; CYBERSECURITY</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
              Hi, I’m <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-accent-purple bg-clip-text text-transparent">
                {personal.name}.
              </span>
            </h1>

            {/* Main Role Subtitle */}
            <h2 className="mt-4 text-xl sm:text-2xl font-heading font-semibold text-accent-blue">
              {personal.role}
            </h2>

            {/* Concise Human Introduction (2-3 lines) */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl font-normal">
              I build intelligent, resilient digital solutions at the intersection of security operations, machine learning, and modern software design.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-purple px-6 py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 w-full sm:w-auto shadow-purple-soft"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-outline px-6 py-3 rounded-xl text-sm font-medium tracking-wide flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Elegant Social Profile Buttons */}
            <div className="mt-8 pt-4 border-t border-surface-border/60 flex flex-wrap items-center gap-3 w-full">
              <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mr-1">
                Profiles:
              </span>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Risadi Vidara on GitHub (opens in new tab)"
                title="GitHub: https://github.com/dahamsividara-dotcom"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-surface-border hover:border-slate-600 transition-all duration-200 group shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
              >
                <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Risadi Vidara on LinkedIn (opens in new tab)"
                title="LinkedIn: https://www.linkedin.com/in/risadi-vidara-88713a361"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-slate-800 text-slate-200 hover:text-accent-blue text-xs font-semibold border border-surface-border hover:border-accent-purple/50 transition-all duration-200 group shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              >
                <LinkedinIcon className="w-4 h-4 text-accent-purple group-hover:text-accent-blue transition-colors" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Elegant Portrait Visual (Not a HUD) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              
              {/* Subtle Elegant Lighting Behind Portrait */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent-purple/30 via-accent-blue/20 to-transparent rounded-3xl blur-xl opacity-60 -z-10" />

              {/* Clean Framed Portrait */}
              <div className="bg-surface p-3 rounded-2xl border border-surface-borderLight shadow-2xl relative overflow-hidden group">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={personal.avatarUrl}
                    alt="Risadi Vidara - Aspiring AI & Cybersecurity Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  
                  {/* Soft bottom vignette for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Subtle caption bar below portrait */}
                <div className="mt-3 px-1.5 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Risadi Vidara</span>
                  <span className="text-accent-blue text-[11px] font-mono">Sri Lanka</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
