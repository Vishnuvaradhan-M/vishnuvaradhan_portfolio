import React from 'react';
import { Separator } from '@/components/ui/separator';
interface SectionHeadingProps {
  title: string;
  number: string;
}
export function SectionHeading({ title, number }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 leading-tight tracking-tight">
        <span className="text-lg font-mono font-bold text-primary">{number}</span>
        {title}
      </h2>
      <Separator className="flex-1" />
    </div>
  );
}