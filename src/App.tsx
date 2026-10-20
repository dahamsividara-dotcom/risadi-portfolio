import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { AnimeAtmosphere } from './components/AnimeAtmosphere';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-midnight-900 text-slate-100 antialiased selection:bg-accent-purple/30 selection:text-white relative">
      {/* Desktop Custom Cursor Effect */}
      <CustomCursor />

      {/* Subtle Anime-Inspired Background Atmosphere */}
      <AnimeAtmosphere />

      {/* Clean Minimalist Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ExperienceEducation />
        <Contact />
      </main>

      {/* Refined Footer */}
      <Footer />
    </div>
  );
};

export default App;
