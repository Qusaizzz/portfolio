'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/data/projects';
import { TextReveal } from './motion';

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const cardImage = project.slug === 'inner-nature' ? '/assets/inner-nature/teaser.png' : project.image;
  const hasTools = project.tools !== 'To be added' && project.tools !== 'Not specified';
  const methods = project.slug === 'my-journey' ? ['Brand experience', 'UX/UI', 'Content creation', 'Storytelling', 'Spatial Design'] : hasTools ? project.tools.split(', ') : [project.category];
  const detailId = `work-details-${project.slug}`;
  const comingSoon = project.slug === 'flying-lab' || project.slug === 'journey-in-life-evolution';
  const cardClass = `work-card-link${cardImage ? ' project-with-image' : ''}`;
  const content = <>
        {cardImage && <Image src={cardImage} alt="" fill sizes="(max-width: 700px) calc(100vw - 48px), 620px" className="stacked-project-image" />}
        <h3 className="work-card-title">{(project.cardLines ?? [project.title]).map((line, index) => <span key={index}>{line}</span>)}</h3>
        <div className="work-card-overlay" id={detailId}>
          <div className="work-card-detail">
            <p>{project.introduction}</p>
            {!comingSoon && <div className="work-card-methods"><ul>{methods.map(method => <li key={method}>{method}</li>)}</ul></div>}
            {!comingSoon && <span className="work-card-cta">View project <span aria-hidden="true">↗</span></span>}
          </div>
        </div>
      </>;
  return <TextReveal className="stacked-project">
    <div className="work-card" data-project={project.slug} data-open={open} onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}>
      {comingSoon ? <div className={`${cardClass} work-card-coming-soon`} tabIndex={0} role="group" aria-label={`${project.title} — coming soon`}>{content}</div> : <Link href={`/work/${project.slug}`} className={cardClass} aria-label={`Explore ${project.title}`}>{content}</Link>}
      <button type="button" className="work-card-info" aria-expanded={open} aria-controls={detailId} aria-label={`${open ? 'Hide' : 'Show'} details for ${project.title}`} onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Info +'}</button>
    </div>
  </TextReveal>;
}
