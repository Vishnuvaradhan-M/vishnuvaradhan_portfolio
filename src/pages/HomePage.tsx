import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  // Enforce dark mode on mount for blueprint compliance
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <div className="min-h-screen bg-navy-950 text-slate-50 selection:bg-primary/30 selection:text-primary-foreground dark text-base leading-relaxed">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Toaster richColors closeButton position="bottom-right" />
    </div>
  );
}