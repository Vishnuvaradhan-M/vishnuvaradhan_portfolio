import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { PROFILE } from '@/data/profile';
import { ArrowRight, FileText } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Enhanced Decorative Background Glow - Decentralized for better coverage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl -z-10 opacity-30 blur-[150px] pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/40 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/30 rounded-full" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <p className="text-primary font-mono mb-4 text-sm md:text-base font-medium tracking-widest">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 tracking-tighter leading-[1.1]">
          {PROFILE.name}.
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-muted-foreground/80 mb-6 leading-tight">
          Data Science & AI Engineer.
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-muted-foreground/70 mb-10 max-w-3xl leading-snug">
          Transforming complex data into production-ready intelligence.
        </h3>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Based in <span className="text-foreground font-semibold">Coimbatore, India</span>, I specialize in building
          RAG pipelines, Computer Vision systems, and robust backend architectures with
          <span className="text-primary font-mono text-sm ml-1 px-1 bg-primary/5 rounded">FastAPI & MongoDB</span>.
        </p>
        <div className="flex flex-wrap gap-5">
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-base md:text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
              Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
            </ScrollLink>
          </Button>
          <a
            href="/Vishnuvaradhan_M_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-8 text-base md:text-lg font-semibold border border-border/60 rounded-md hover:bg-navy-900 hover:border-primary/40 transition-all duration-300"
          >
            <FileText className="mr-2 h-5 w-5" /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}