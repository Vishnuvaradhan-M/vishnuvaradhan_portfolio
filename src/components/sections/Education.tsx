import React from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { SectionHeading } from '@/components/ui/section-heading';
import { PROFILE } from '@/data/profile';
export function Education() {
  return (
    <SectionContainer id="education">
      <SectionHeading title="Education" number="05." />
      <div className="space-y-10">
        {PROFILE.education.map((edu, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 group">
            <div className="space-y-1">
              <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
                {edu.school}
              </h3>
              <p className="text-base font-medium leading-tight text-primary">{edu.degree}</p>
              {edu.location && <p className="text-sm text-muted-foreground">{edu.location}</p>}
            </div>
            <div className="font-mono text-sm text-muted-foreground bg-navy-900 px-4 py-2 rounded border border-border/50 self-start group-hover:border-primary/30 transition-colors duration-200">
              {edu.period}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}