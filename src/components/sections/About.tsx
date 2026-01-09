import React from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { SectionHeading } from '@/components/ui/section-heading';
export function About() {
  return (
    <SectionContainer id="about">
      <SectionHeading title="About Me" number="01." />
      <div className="max-w-3xl space-y-6">
        <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
          I am a Data Science and AI Engineer currently pursuing an Integrated M.Sc in Data Science at <span className="text-primary font-bold">Amrita Vishwa Vidyapeetham</span>. I have hands-on experience working on production-grade AI systems during my internship at <span className="text-primary font-bold">HELYXON Healthcare Solutions</span>.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
          My interests lie in building reliable machine learning systems, LLM-powered retrieval pipelines, computer vision applications, and scalable backend APIs.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
          I enjoy working on problems where research-level ideas are translated into practical, deployable systems. I am actively seeking opportunities in Data Science, AI Engineering, and LLM system development roles.
        </p>
      </div>
    </SectionContainer>
  );
}