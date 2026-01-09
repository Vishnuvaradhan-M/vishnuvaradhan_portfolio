import React from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { SectionHeading } from '@/components/ui/section-heading';
import { PROFILE } from '@/data/profile';
import { Badge } from '@/components/ui/badge';
export function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionHeading title="Technical Skills" number="04." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {(Object.entries(PROFILE.skills) as [string, string[]][]).map(([category, skills]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg md:text-xl font-mono font-bold leading-tight text-foreground">
              <span className="text-primary mr-2">{'>'}</span>{category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="bg-navy-800 hover:bg-navy-700 text-xs font-medium leading-none text-muted-foreground hover:text-foreground border-transparent">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}