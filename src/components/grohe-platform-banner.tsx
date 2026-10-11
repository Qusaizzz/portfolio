'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function GrohePlatformBanner() {
  const banner = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = banner.current;
    const layer = background.current;
    if (!section || !layer) return;

    const enabled = window.matchMedia('(min-width: 901px) and (prefers-reduced-motion: no-preference)');
    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
      // Positive travel offsets the page's upward movement: the image scrolls slower.
      // CSS supplies 32px of overscan at both ends for this bounded +/-26px travel.
      layer.style.transform = `translate3d(0, ${(progress - 0.5) * 52}px, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const configure = () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.cancelAnimationFrame(frame);
      frame = 0;
      if (enabled.matches) {
        update();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule, { passive: true });
      } else {
        layer.style.transform = 'none';
      }
    };

    configure();
    enabled.addEventListener('change', configure);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      enabled.removeEventListener('change', configure);
    };
  }, []);

  return <div ref={banner} className="grohe-platform-banner">
    <div ref={background} className="grohe-platform-background" aria-hidden="true">
      <Image src="/assets/grohe/hero1.jpg" alt="" fill sizes="(max-width: 700px) 100vw, 1100px" />
    </div>
    <div className="grohe-platform-foreground">
      <h3>GROHE X –<br/>Award-Winning Digital<br/>Experience Platform</h3>
      <div className="grohe-platform-card">
        <p>GROHE X was GROHE’s global digital experience platform, combining storytelling, product communication, immersive content, and hybrid event experiences into one ecosystem. With its innovative approach to digital brand experience, GROHE X received several awards, including the Red Dot Design Award, Digital Communication Awards, and Galaxy Awards.</p>
        <div className="grohe-platform-contribution">
          <h4>My contribution</h4>
          <p>I contributed to UX/UI design and content creation for GROHE X, shaping website pages and digital stories around architecture, technology, and sustainability. My work combined interface design, content moderation, and visual storytelling to create a consistent and engaging brand experience.</p>
        </div>
      </div>
    </div>
  </div>;
}
