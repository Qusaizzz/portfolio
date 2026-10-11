// Content controls. Provenance: docs/inner-nature-sources.md.
export const innerNatureSource = 'https://www.qussaikh.com/project6';
export const innerNatureMedia = '/assets/inner-nature/';
export const bioCases = [
  { id: 'flourishing', title: 'Relaxed', shortName: 'Flourishing', video: 'intro', description: 'In the relaxed scenario, the biofeedback inputs produce a flourishing visual. The recording pairs the reactive plant with its diffusion-generated representation.' },
  { id: 'bare', title: 'Stressed / less relaxed', shortName: 'Leafless', video: 'intro_1', description: 'In the stressed / less relaxed scenario, different input values produce a tree without leaves. Its generated representation changes with the underlying visual.' },
] as const;
export const mobileFlow = [
  { title: 'Arrive', detail: 'A quiet invitation to begin.' },
  { title: 'Connect', detail: 'Find and select Muse 2.' },
  { title: 'Check', detail: 'Confirm comfortable, clear contact.' },
  { title: 'Experience', detail: 'Let biofeedback shape the visual.' },
  { title: 'Keep', detail: 'Name a session and return to it.' },
];
export const mobileScreens = [
  { id: 'home', title: 'A gentle starting point', note: 'One primary action. Previous sessions stay one tap away.' },
  { id: 'connect', title: 'Connect with confidence', note: 'A named device and a clear connection state, before any session starts.' },
  { id: 'fit', title: 'Check the signal', note: 'A simple contact guide makes the next step clear when the headband needs adjusting.' },
  { id: 'session', title: 'Let the visual lead', note: 'An immersive canvas, optional signals, and a pause action within thumb reach.' },
  { id: 'reflect', title: 'Keep a moment', note: 'Name the session without turning the experience into a performance score.' },
  { id: 'library', title: 'Return to your nature', note: 'A personal session collection, organised by name rather than biometric rankings.' },
] as const;
export type MobileScreen = typeof mobileScreens[number]['id'];
