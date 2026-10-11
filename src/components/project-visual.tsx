import Image from 'next/image';
import type { Project } from '@/data/projects';
export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return <div className={`project-visual visual-${project.motif} ${large ? 'visual-large' : ''}`}>
    {project.image ? <Image src={project.image} alt={`${project.title} project visual`} fill sizes={large ? '90vw' : '(max-width: 700px) 100vw, 50vw'} className="object-cover" /> : <>
      <div className="artwork" aria-hidden="true">
        {project.motif==='water' && <><div className="water-ring ring-one"/><div className="water-ring ring-two"/><div className="water-ring ring-three"/><span className="grohe-word">GROHE<span>PURE EXPERIENCE</span></span></>}
        {project.motif==='flight' && <><i className="flight-line"/><i className="flight-line"/><i className="flight-line"/><span className="flight-word">flying<br/><b>lab.</b></span></>}
        {project.motif==='type' && <span className="type-word">Aa<span>FORM / FUNCTION</span></span>}
        {project.motif==='orbit' && <><div className="orbit"/><div className="orbit orbit-two"/><span className="xr-word">XR</span></>}
        {project.motif==='shape' && <><div className="shape-block"/><div className="shape-block second"/></>}
        {project.motif==='bio' && <><div className="bio-lines">{Array.from({length:15},(_,i)=><i key={i} style={{transform:`translate(-50%, -50%) rotate(${i*12}deg)`}}/>)}</div><span className="bio-word">Sensing.<br/>Feeling.<br/>Being.</span></>}
      </div>
      <span className="visual-caption">{project.number} / CONCEPT PLACEHOLDER</span>
    </>}
  </div>;
}
