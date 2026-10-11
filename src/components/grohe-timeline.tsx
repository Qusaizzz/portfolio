'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { chapters } from '@/data/grohe-story-data';
export function GroheTimeline() {
  const [active, setActive] = useState(chapters[0].id);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    for (const { id } of chapters) { const el = document.getElementById(id); if (el) observer.observe(el); }
    return () => observer.disconnect();
  }, []);
  return <nav className="grohe-timeline" aria-label="GROHE story chapters">
    <div className="grohe-timeline-links">{chapters.map(chapter => <a key={chapter.id} href={`#${chapter.id}`} aria-current={active === chapter.id ? 'location' : undefined} onClick={() => setActive(chapter.id)}><span>{chapter.number}</span>{chapter.label}</a>)}</div>
    <motion.div className="grohe-reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
  </nav>;
}
