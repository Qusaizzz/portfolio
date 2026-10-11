export type Project = {
  slug: string; title: string; category: string; number: string; motif: string;
  introduction: string; role: string; year: string; client: string; tools: string; type: string;
  image?: string; cardLines?: string[];
};
export const projects: Project[] = [
  { slug: 'my-journey', title: 'GROHE', category: 'Brand & Digital Experience', number: '01', motif: 'water', image: '/assets/grohe/web/hero.webp', introduction: 'My journey at GROHE, through the projects, digital experiences, and creative work I contributed to along the way.', role: 'Brand & experience design', year: 'To be added', client: 'GROHE', tools: 'To be added', type: 'Brand / Digital' },
  { slug: 'flying-lab', title: 'Lufthansa FlyingLab', image: '/assets/flying-lab/L1.png', cardLines: ['LUFTHANSA', 'FlyingLab'], category: 'Exploration in motion', number: '02', motif: 'flight', introduction: 'this project will be added soon', role: 'To be added', year: 'To be added', client: 'To be added', tools: 'To be added', type: 'Creative exploration' },
  { slug: 'seaside-house', title: 'Seaside House — WebGL Experience', cardLines: ['Seaside house'], category: 'Architecture / Immersive walkthrough', number: '03', motif: 'type', image: '/assets/beach-house/project4.jpg', introduction: 'An interactive WebGL experience for real-time architectural visualization.', role: 'Architecture, visualization & interactive walkthrough', year: 'Not specified', client: 'Not specified', tools: 'Revit, 3ds Max, V-Ray, Unity, WebGL', type: 'Architecture / WebGL' },
  { slug: 'inner-nature', title: 'Inner Nature', category: 'Creative Technology / Interaction Design', number: '04', motif: 'orbit', image: '/assets/inner-nature/p6.jpg', introduction: 'A bio-driven TouchDesigner experiment, explored as an approachable digital product.', role: 'Design & Interaction', year: 'Not specified', client: 'Academic project', tools: 'TouchDesigner, Muse 2, OSC, Python, StreamDiffusion', type: 'Bio-driven experience / Product concept' },
  { slug: 'palmyra', title: 'Memory of Palmyra', image: '/assets/Palmyra/Palmyra01.png', cardLines: ['MEMORY OF', 'PALMYRA'], category: 'Interactive memory / Creative technology', number: '05', motif: 'shape', introduction: 'An interactive, particle-based exploration of architecture, absence, and remembrance.', role: 'Design & Interaction', year: 'Not specified', client: 'Academic project', tools: 'TouchDesigner, 3ds Max, Unity', type: 'Interactive web design / VR exploration' },
  { slug: 'journey-in-life-evolution', title: 'Journey in Life Evolution', image: '/assets/life-evolution/Hero.jpg', cardLines: ['JOURNEY IN LIFE', 'EVOLUTION'], category: 'Design exploration', number: '06', motif: 'shape', introduction: 'this project will be added soon', role: 'To be added', year: 'To be added', client: 'To be added', tools: 'To be added', type: 'To be added' },
];
export const expertise = ['Concept Development', 'Creative & Art Direction', 'Experience Design', 'Spatial Design', 'UX/UI Design', 'Digital Storytelling', 'AR/VR & Immersive Experiences', 'Interactive Installations', '3D Design & Visualization', 'Real-Time Visualization', 'Projection Mapping', 'Creative Coding & Visual Programming', 'Sensor & Hardware Integration', 'BCI & Biofeedback'];
export const contactLinks: { label: string; href: string | null }[] = [
  { label: 'Email', href: 'mailto:qusai.khadour7@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/qussai-khaddour/' },
];
