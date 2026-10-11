import { GroheStory } from '@/components/grohe-story';
import { ArchitectureStory } from '@/components/architecture-story';
import { InnerNatureStory } from '@/components/inner-nature-story';
import { PalmyraStory } from '@/components/palmyra-story';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { CaseStudy } from '@/components/case-study';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:projects.find(p=>p.slug===slug)?.title ?? 'Project not found'};}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const index=projects.findIndex(p=>p.slug===slug);if(index<0)notFound();if(slug === 'my-journey') return <GroheStory/>;if(slug === 'inner-nature') return <InnerNatureStory/>;if(slug === 'seaside-house') return <ArchitectureStory/>;if(slug === 'palmyra') return <PalmyraStory/>;return <CaseStudy project={projects[index]} next={projects[(index+1)%projects.length]}/>;}
