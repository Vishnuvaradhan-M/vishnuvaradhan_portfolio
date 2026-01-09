import { jsPDF } from 'jspdf';
import { PROFILE } from '@/data/profile';
export const generateResumePDF = () => {
  console.log('generateResumePDF started');
  console.log('PROFILE loaded:', PROFILE.name);
  try {
    const doc = new jsPDF('p', 'mm', 'a4');
    console.log('jsPDF doc created');
    const margin = 20;
    const pageWidth = 210;
    const contentWidth = pageWidth - (margin * 2);
    let y = margin;
    const checkPageBreak = (needed: number) => {
      if (y + needed > 280) {
        doc.addPage();
        y = margin;
        return true;
      }
      return false;
    };
    const LINE_HEIGHT = 5;
    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(2, 6, 23); // Navy 950
    doc.text((PROFILE.name || 'Name').toUpperCase(), margin, y);
    y += 10;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(56, 189, 248); // Primary blue
    doc.text(PROFILE.role || 'Role', margin, y);
    y += 7;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105); // Slate 600 for print clarity
    const contactInfo = [PROFILE.location, PROFILE.email, PROFILE.phone].filter(Boolean).join(' | ');
    doc.text(contactInfo, margin, y);
    y += 5;
    const socialInfo = [
      (PROFILE.socials?.github) ? `GitHub: ${PROFILE.socials.github}` : null,
      (PROFILE.socials?.linkedin) ? `LinkedIn: ${PROFILE.socials.linkedin}` : null
    ].filter(Boolean).join(' | ');
    if (socialInfo) {
      doc.text(socialInfo, margin, y);
      y += 12;
    } else {
      y += 7;
    }
    // Professional Summary
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(2, 6, 23);
    doc.text('PROFESSIONAL SUMMARY', margin, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const summaryLines = doc.splitTextToSize(PROFILE.summary || '', contentWidth);
    const summaryHeight = summaryLines && summaryLines.length > 0 ? (summaryLines.length * LINE_HEIGHT) : 0;
    if (summaryHeight > 0) {
      doc.text(summaryLines, margin, y);
    }
    y += summaryHeight + 10;
    // Experience
    checkPageBreak(30);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('EXPERIENCE', margin, y);
    y += 8;
    (PROFILE.experience || []).forEach(exp => {
      checkPageBreak(35);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      const roleText = exp.role || 'Role';
      const companyText = ` @ ${exp.company || 'Company'}`;
      doc.text(roleText, margin, y);
      const roleWidth = doc.getTextWidth(roleText);
      doc.setFont('helvetica', 'normal');
      doc.text(companyText, margin + roleWidth, y);
      doc.setFont('helvetica', 'italic');
      doc.text(exp.period || 'Period', pageWidth - margin, y, { align: 'right' });
      y += 6;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      const descLines = doc.splitTextToSize(exp.description || '', contentWidth);
      const descHeight = descLines && descLines.length > 0 ? (descLines.length * LINE_HEIGHT) : 0;
      if (descHeight > 0) {
        doc.text(descLines, margin, y);
      }
      y += descHeight + 3;
      doc.setTextColor(2, 6, 23);
      (exp.outcomes || []).forEach(outcome => {
        if (outcome) {
          const outcomeLines = doc.splitTextToSize(`• ${outcome}`, contentWidth - 5);
          if (outcomeLines && outcomeLines.length > 0) {
            checkPageBreak(outcomeLines.length * LINE_HEIGHT + 2);
            doc.text(outcomeLines, margin + 5, y);
            y += (outcomeLines.length * LINE_HEIGHT);
          }
        }
      });
      y += 8;
    });
    // Key Projects
    checkPageBreak(40);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(2, 6, 23);
    doc.text('KEY PROJECTS', margin, y);
    y += 8;
    (PROFILE.projects || []).forEach(project => {
      checkPageBreak(30);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(project.title || 'Project', margin, y);
      y += 5;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(56, 189, 248);
      const safeStack = (project.stack || []).join(', ');
      const stackText = safeStack ? `Tech Stack: ${safeStack}` : 'Tech Stack: N/A';
      const stackLines = doc.splitTextToSize(stackText, contentWidth);
      const stackHeight = stackLines && stackLines.length > 0 ? (stackLines.length * LINE_HEIGHT) : 0;
      if (stackHeight > 0) {
        doc.text(stackLines, margin, y);
      }
      y += stackHeight;
      doc.setTextColor(2, 6, 23);
      const impactText = project.impact ? `Impact: ${project.impact}` : 'Impact: N/A';
      const impactLines = doc.splitTextToSize(impactText, contentWidth);
      const impactHeight = impactLines && impactLines.length > 0 ? (impactLines.length * LINE_HEIGHT) : 0;
      if (impactHeight > 0) {
        doc.text(impactLines, margin, y);
      }
      y += impactHeight + 6;
    });
    // Technical Skills
    checkPageBreak(35);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL SKILLS', margin, y);
    y += 8;
    Object.entries(PROFILE.skills || {}).forEach(([category, skills]) => {
      checkPageBreak(12);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      const catLabel = `${category}: `;
      doc.text(catLabel, margin, y);
      doc.setFont('helvetica', 'normal');
      const skillList = (skills || []).join(', ');
      const skillLines = doc.splitTextToSize(skillList, contentWidth - 45);
      const skillsHeight = skillLines && skillLines.length > 0 ? (skillLines.length * LINE_HEIGHT) : 0;
      if (skillsHeight > 0) {
        doc.text(skillLines, margin + 45, y);
      }
      y += Math.max(7, skillsHeight + 2);
    });
    // Education
    y += 6;
    checkPageBreak(35);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', margin, y);
    y += 8;
    (PROFILE.education || []).forEach(edu => {
      checkPageBreak(18);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.school || 'School', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.text(edu.period || 'Period', pageWidth - margin, y, { align: 'right' });
      y += 5;
      doc.text(`${edu.degree || 'Degree'}${edu.location ? ` | ${edu.location}` : ''}`, margin, y);
      y += 10;
    });
    console.log('PDF pages generated:', doc.getNumberOfPages() || 0);
    const pdfBlob = doc.output('blob');
    console.log('PDF Blob:', pdfBlob ? `size ${pdfBlob.size} type ${pdfBlob.type}` : 'null');
    if (!pdfBlob || pdfBlob.size === 0) {
      console.error('ERROR: Empty PDF blob generated! Check data/profile.ts');
      return;
    }
    const url = URL.createObjectURL(pdfBlob);
    console.log('Creating download anchor');
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(PROFILE.name || 'Resume').replace(/\s+/g, '_')}_Resume.pdf`;
    a.style.position = 'absolute';
    a.style.left = '-9999px';
    document.body.appendChild(a);
    a.click();
    console.log('Anchor click() called');
    const anchorTimeout = setTimeout(() => {
      if (document.body.contains(a)) {
        document.body.removeChild(a);
      }
      URL.revokeObjectURL(url);
      console.log('Anchor removed & URL revoked');
    }, 100);
  } catch (error) {
    console.error('PDF gen error:', error, error.stack);
  }
};