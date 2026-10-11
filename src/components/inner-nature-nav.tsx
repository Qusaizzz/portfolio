'use client';

import { useEffect, useRef, useState } from 'react';

// Labels and destinations for the five main chapters.
const chapters = [
  { id: 'experiment', label: 'About' },
  { id: 'biodata', label: 'Biodata' },
  { id: 'system-process', label: 'System/Process' },
  { id: 'cases', label: 'Two scenario cases' },
  { id: 'mobile-concept', label: 'Interface design' },
];

export function InnerNatureNav() {
  const nav = useRef<HTMLElement>(null);
  const [active, setActive] = useState(chapters[0].id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!nav.current) return;
      const top = parseFloat(getComputedStyle(nav.current).top) || 0;
      const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      // Activate the chapter as it reaches the upper reading area, including
      // the space reserved for the sticky navigation and page scroll offset.
      const readingLine = Math.max(top + nav.current.offsetHeight + scrollPadding + 28, window.innerHeight * 0.3);
      let current = chapters[0].id;
      let closestTop = -Infinity;
      for (const chapter of chapters) {
        const section = document.getElementById(chapter.id);
        // A diagram inside About belongs to About; it is not a new chapter.
        const parentSection = section?.parentElement?.closest('section[id]');
        if (parentSection && chapters.some(item => item.id === parentSection.id)) continue;
        const sectionTop = section?.getBoundingClientRect().top;
        if (sectionTop !== undefined && sectionTop <= readingLine && sectionTop > closestTop) {
          current = chapter.id;
          closestTop = sectionTop;
        }
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // Videos and fonts can move section boundaries without a scroll event.
    const observer = new ResizeObserver(schedule);
    const main = nav.current?.closest('main');
    if (main) observer.observe(main);
    for (const chapter of chapters) {
      const section = document.getElementById(chapter.id);
      if (section) observer.observe(section);
    }
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  useEffect(() => {
    const link = nav.current?.querySelector<HTMLElement>('[aria-current]');
    if (link && nav.current) {
      nav.current.scrollLeft = link.offsetLeft - nav.current.offsetLeft - (nav.current.clientWidth - link.offsetWidth) / 2;
    }
  }, [active]);

  return (
    <nav ref={nav} className="in-chapter-nav" aria-label="Inner Nature chapters">
      {chapters.map(chapter => (
        <a key={chapter.id} href={`#${chapter.id}`} aria-current={active === chapter.id ? 'location' : undefined}>
          {chapter.label}
        </a>
      ))}
    </nav>
  );
}
