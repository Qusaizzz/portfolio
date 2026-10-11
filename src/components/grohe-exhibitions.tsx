import Image from 'next/image';
import { ImageReveal } from './motion';
import './grohe-exhibitions.css';

const exhibitions = [
  { image: 'web/ish-2025.webp', year: '2025', title: 'ISH Frankfurt', alt: 'GROHE exhibition stand at ISH Frankfurt 2025' },
  { image: 'web/milan-2024.webp', year: '2024', title: 'Milan Design Week', alt: 'GROHE outdoor installation at Milan Design Week 2024' },
  { image: 'web/milan-2023.webp', year: '2023', title: 'Milan Design Week', alt: 'Illuminated courtyard installation at Milan Design Week 2023' },
  { image: 'WAF0.png', year: '2022', title: 'World Architecture Festival', alt: 'GROHE exhibition stand at the World Architecture Festival 2022' },
];

export function GroheExhibitions() {
  return (
    <section id="exhibitions" className="grohe-chapter exhibitions-editorial" aria-labelledby="exhibitions-title">
      <div className="exhibitions-inner">
        <ImageReveal reveal>
          <h2 id="exhibitions-title">Exhibitions</h2>
          <p className="exhibitions-subtitle">Brand experience<br />Beyond the screen.</p>
        </ImageReveal>
        <div className="exhibitions-introduction">
          <ImageReveal reveal className="exhibitions-names">
            <span>Milan Design<br />Week</span>
            <span>WAF</span>
            <span>ISH</span>
          </ImageReveal>
          <ImageReveal reveal delay={0.1} className="exhibitions-copy">
            <p>During my time at GROHE as a working student, I had the opportunity to collaborate with internationally recognized design studios and international colleagues, supporting digital communication and brand experiences for major international events, including Milan Design Week, GROHE X Summit, World Architecture Festival, and ISH.</p>
            <p>My contribution included digital storytelling, brand communication, and content creation across both on-site experiences and digital platforms. Working across different teams and touchpoints, my focus was on maintaining a consistent visual identity and creating a connected brand experience.</p>
          </ImageReveal>
        </div>
        <div className="exhibitions-gallery">
          {exhibitions.map((event, index) => (
            <ImageReveal key={event.image} reveal delay={index % 2 * 0.12} className="exhibitions-item">
              <figure>
                <div className="exhibitions-photo">
                  <Image src={`/assets/grohe/${event.image}`} alt={event.alt} fill sizes="(max-width: 700px) 85vw, (max-width: 1100px) 38vw, 405px" />
                </div>
                <figcaption><span>{event.year}</span>{event.title}</figcaption>
              </figure>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
