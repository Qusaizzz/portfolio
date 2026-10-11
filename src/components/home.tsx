import { ScrollIndicator } from './scroll-indicator';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { ProjectCard } from './work-project-card';
import { ParticleNetwork } from './particle-network';
import { TextReveal, ImageReveal } from './motion';
import { HeroSmile } from './grohe-smile';
import './about.css';

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <ParticleNetwork />
    <div className="hero-copy"><TextReveal><p className="hero-greeting">Hi, I am Qussai.</p><h1 id="hero-title" className="hero-experience-title">I turn Ideas into engaging <span className="hero-phrase">immersive experiences</span></h1><HeroSmile /></TextReveal></div>
    <ScrollIndicator />
  </section>;
}
export function WorkGrid() {
  const workProjects = projects.filter(project => !['flying-lab', 'journey-in-life-evolution'].includes(project.slug));
  return <section id="work" className="content-section work-section" aria-labelledby="work-title"><div className="work-stack"><div className="work-stack-heading"><h2 id="work-title">Selected works</h2></div><div className="work-stack-list">{workProjects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></div></section>;
}
export function About() {
  const services = [
    { title: 'Concept Development', description: 'Brand experience concepts, digital storytelling, and visual direction—from an initial idea to a clear design approach.' },
    { title: 'Spatial Experiences', description: 'Immersive environments, interactive installations, and AR/VR experiences that connect physical and digital spaces.' },
    { title: 'AI & Automation', description: 'Real-time and interactive AI systems, Generative and agentic AI workflows for content, marketing, and operations.' },
    { title: 'Creative Technology', description: 'Creative coding, generative art, real-time visuals, sensor integration, and custom hardware prototyping.' },
  ];

  return <section className="about-section about-profile" aria-labelledby="about-title">
    <div id="about" className="content-section about-profile-content">
      <p className="about-profile-label">Qussai Khaddour</p>
      <div className="about-profile-intro">
        <TextReveal className="about-profile-heading">
          <h2 id="about-title">Designer &amp; Creative Technologist</h2>
        </TextReveal>
        <TextReveal className="about-profile-bio">
          <p>I&apos;m Qussai, a designer and creative technologist based in Germany, with a background in architecture and a master&apos;s focus on Design and Interaction. I create playful, immersive experiences that connect the physical and digital worlds.</p>
          <p>Over the past four years, I&apos;ve worked across digital content and brand experience at GROHE, contributing to interactive projects, AR/VR applications, and digital storytelling for global platforms and international events. My practice brings together spatial thinking, visual design, and hands-on prototyping with tools like Unity, TouchDesigner, and Figma.</p>
          <p>My current interests lie in exploring new ways to connect people and spaces through interactive storytelling, brand experiences, and responsive environments. I&apos;m always curious about emerging technologies, creative experimentation, and ideas that challenge how we communicate and experience the world around us.</p>
        </TextReveal>
        <ImageReveal className="about-profile-photo">
          <Image src="/assets/me12.png" alt="Qussai Khaddour surrounded by turquoise lights in an immersive installation" width={377} height={503} sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1440px) 34vw, 490px" />
        </ImageReveal>
      </div>
      <div className="about-services" aria-labelledby="about-services-title">
        <h3 id="about-services-title" className="about-profile-label">What I do</h3>
        <div className="about-services-grid">
          {services.map((service, index) => <article className="about-service" key={service.title}>
            <span className="about-service-number">{String(index + 1).padStart(2, '0')}</span>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </article>)}
        </div>
      </div>
    </div>
  </section>;
}
