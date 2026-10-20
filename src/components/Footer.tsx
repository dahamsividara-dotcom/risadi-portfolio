import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-midnight-950 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info & Contact Details */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-heading font-bold text-white text-sm">
              {portfolioData.personal.name}
            </span>
            <span className="text-slate-400 text-xs">
              {portfolioData.personal.role} &bull; {portfolioData.personal.location}
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 pt-1.5 text-xs text-slate-400">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none focus:underline"
                title={`Send email to ${portfolioData.personal.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                <span>{portfolioData.personal.email}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">&bull;</span>
              <a
                href={`tel:${portfolioData.personal.phoneTel}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors font-mono focus:outline-none focus:underline"
                title={`Call ${portfolioData.personal.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>{portfolioData.personal.phone}</span>
              </a>
            </div>
          </div>

          {/* Minimal Nav Links */}
          <div className="flex items-center gap-6 text-slate-400 font-medium">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-surface hover:bg-slate-800 border border-surface-border hover:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
              title="GitHub Profile (opens in new tab)"
              aria-label="Risadi Vidara on GitHub (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-accent-blue rounded-lg bg-surface hover:bg-slate-800 border border-surface-border hover:border-accent-purple/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              title="LinkedIn Profile (opens in new tab)"
              aria-label="Risadi Vidara on LinkedIn (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-surface hover:bg-slate-800 transition-colors flex items-center gap-1 ml-2"
              title="Back to top"
            >
              <span className="text-[11px] font-medium hidden sm:inline">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-surface-border text-center text-slate-500 text-[11px] font-sans">
          &copy; {new Date().getFullYear()} Risadi Vidara. Personal Portfolio.
        </div>
      </div>
    </footer>
  );
};
