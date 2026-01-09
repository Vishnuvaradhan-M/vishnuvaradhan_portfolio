import React from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PROFILE } from '@/data/profile';
import { Github, ExternalLink } from 'lucide-react';
export function Projects() {
  return (
    <SectionContainer id="projects">
      <SectionHeading title="Selected Projects" number="03." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROFILE.projects.map((project, idx) => (
          <Card key={idx} className="bg-navy-900/40 border-border/50 hover:border-primary/40 hover:bg-navy-900/60 transition-all duration-500 flex flex-col group h-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </CardTitle>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View Source on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-primary font-bold tracking-widest opacity-80">Problem</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-primary font-bold tracking-widest opacity-80">Approach</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-primary font-bold tracking-widest opacity-80">Impact</span>
                <p className="text-sm text-foreground/90 font-medium leading-relaxed">{project.impact}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs font-mono px-2 py-1 leading-none rounded bg-navy-800/80 text-muted-foreground border border-border/20 group-hover:border-primary/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}