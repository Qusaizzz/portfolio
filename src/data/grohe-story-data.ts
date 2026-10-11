// Dates and contribution descriptions: qussaik.com/project1 and /project2.
// Asset associations and remaining questions: docs/grohe-story-notes.md.
export const chapters = [
  { id: 'my-role', label: 'My Role', date: 'SEP 2022' },
  { id: 'digital-platforms', number: '01', label: 'Digital Platforms', date: 'UX/UI & CONTENT' },
  { id: 'virtual-showrooms', number: '02', label: 'Virtual Showrooms', date: 'SPATIAL EXPERIENCES' },
  { id: 'exhibitions', number: '03', label: 'Exhibitions', date: 'BRAND EXPERIENCE' },
  { id: 'what-stays', label: 'What Stays', date: 'MAY 2026' },
];
export const milestones = [
  { date: '2023', title: 'Milan Design Week', image: 'milan-2023', alt: 'Illuminated courtyard and reflecting water at the GROHE installation in Milan' },
  { date: '2024', title: 'Milan Design Week', image: 'milan-2024', alt: 'GROHE installation in a courtyard with greenery and architectural product displays' },
  { date: '2023', title: 'World Architecture Festival', image: 'waf-2023', alt: 'GROHE exhibition space at World Architecture Festival' },
  { date: '2025', title: 'ISH Frankfurt', image: 'ish-2025', alt: 'GROHE exhibition stand with immersive blue water imagery' },
] as const;
