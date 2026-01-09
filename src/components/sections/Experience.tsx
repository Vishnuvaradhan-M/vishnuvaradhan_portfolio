import React from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { SectionHeading } from '@/components/ui/section-heading';
import { PROFILE } from '@/data/profile';
import { cn } from '@/lib/utils';
export function Experience() {
  return (
    <SectionContainer id="experience">
      <SectionHeading title="Where I've Worked" number="02." />
      <div className="max-w-3xl">
        {PROFILE.experience.map((exp, idx) => {
          const isPresent = exp.period.toLowerCase().includes('present');
          return (
            <div key={idx} className="relative pl-8 border-l border-border/50 hover:border-primary/50 transition-colors">
              <div className={cn(
                "absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full",
                isPresent ? "bg-coral-500 shadow-[0_0_8px_rgba(255,127,80,0.6)]" : "bg-primary"
              )} />
              <div className="mb-12 group">
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                  {exp.role} <span className="text-primary/80">@ {exp.company}</span>
                </h3>
                <p className={cn(
                  "text-sm font-mono font-medium leading-tight mb-4",
                  isPresent ? "text-coral-400" : "text-muted-foreground"
                )}>
                  {exp.period}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground/80 mb-6 italic border-l-2 border-border/30 pl-4">
                  {exp.description}
                </p>
                <ul className="space-y-4">
                  {exp.outcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="flex gap-4 text-muted-foreground hover:text-foreground transition-colors">
                      <span className="text-primary mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm md:text-base leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}