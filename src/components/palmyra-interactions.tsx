'use client';
import Image from 'next/image';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export function PalmyraReveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number; reveal?: boolean }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduced ? {} : { opacity: [0.4, 1], y: [20, 0] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

const base = '/assets/Palmyra/';
const landmarks = [
  { title: 'Arch of Triumph', start: 0.2, end: 3.5, detail: 'The arch is the focus of the prototype’s story panel and before-and-after comparison. Its particle silhouette connects the city view to a closer reading of a single monument.' },
  { title: 'Temple of Baalshamin', start: 4, end: 7.4, detail: 'Selecting the temple brings its particle-based architecture into focus. The recorded viewpoint makes the relationship between the columns, roof, and surrounding space visible.' },
  { title: 'Palmyra Castle', start: 8, end: 11.4, detail: 'The castle view shifts attention from the monumental arch to a different part of the city. The same particle language holds these different places together.' },
];

export function PalmyraAtmosphere() {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { margin: '100px' });
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const sync = () => {
      if (inView && reduced === false && !paused && !document.hidden) void video.play().catch(() => {});
      else video.pause();
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => { video.pause(); document.removeEventListener('visibilitychange', sync); };
  }, [inView, reduced, paused]);
  return <div className="pal-atmosphere">
    {/* This asset contains a forward pass followed by its reverse, so repeating it has no end-to-start jump. */}
    <video ref={ref} src={inView && !reduced && !failed ? `${base}project5cover-pingpong.mp4` : undefined} poster={`${base}project5.jpg`} muted loop playsInline preload="none" aria-label="Particle-based views of Palmyra" onError={() => setFailed(true)} />
    {!failed && <button className="pal-motion-toggle" onClick={() => setPaused(!paused)}>{paused ? 'Play atmosphere' : 'Pause atmosphere'}</button>}
  </div>;
}

export function PalmyraBeforeAfter() {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduced = useReducedMotion();
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const sync = () => {
      if (inView && reduced === false && !document.hidden) {
        void video.play().catch(() => {});
      } else video.pause();
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => { video.pause(); document.removeEventListener('visibilitychange', sync); };
  }, [inView, reduced]);
  return <video ref={ref} src={`${base}BeforeAndAfter-trimmed.mp4`} poster={`${base}BeforeAndAfter-poster.jpg`} muted playsInline preload="none" disablePictureInPicture aria-label="Palmyra before-and-after visualization" />;
}

export function PalmyraPreview() {
  const video = useRef<HTMLVideoElement>(null);
  const comparison = useRef<HTMLVideoElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const inView = useInView(wrap);
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState(0);
  const [started, setStarted] = useState(false);
  const [story, setStory] = useState(false);
  const [mode, setMode] = useState<'explore' | 'compare'>('explore');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const landmark = landmarks[selected];
  useEffect(() => {
    if (!inView) { video.current?.pause(); comparison.current?.pause(); }
  }, [inView]);
  const cue = (index: number) => {
    setSelected(index); setMode('explore'); setStarted(true); setError(false);
    const el = video.current;
    if (el && el.readyState >= 1) {
      el.currentTime = landmarks[index].start;
      if (!reduced) void el.play().catch(() => {});
    }
  };
  const seekComparison = (value: number) => {
    setProgress(value);
    if (comparison.current?.readyState && comparison.current.duration) {
      comparison.current.pause();
      comparison.current.currentTime = value / 100 * Math.max(0, comparison.current.duration - 0.1);
    }
  };
  return <div className="pal-preview" ref={wrap}>
    <div className="pal-preview-bar"><span>Interactive preview</span><span>Recorded views · not live 3D</span></div>
    <div className="pal-preview-layout">
      <div className="pal-landmarks" aria-label="Select a recorded landmark view">
        {landmarks.map((item, index) => <button key={item.title} aria-pressed={mode === 'explore' && selected === index} onClick={() => cue(index)}><span>0{index + 1}</span>{item.title}<span aria-hidden="true">↗</span></button>)}
        <button className="pal-compare-button" aria-pressed={mode === 'compare'} onClick={() => { video.current?.pause(); setMode('compare'); setStarted(true); setStory(false); setError(false); }}>Before & after <span aria-hidden="true">↔</span></button>
      </div>
      <div className="pal-preview-stage">
        <video ref={video} hidden={mode !== 'explore'} src={started ? `${base}project5cover.mp4` : undefined} poster={`${base}project5.jpg`} muted playsInline controls preload={started ? "metadata" : "none"} aria-label={`Recorded view: ${landmark.title}`} onError={() => setError(true)} onLoadedMetadata={() => { if (video.current) { video.current.currentTime = landmark.start; if (!reduced && mode === 'explore') void video.current.play().catch(() => {}); } }} onTimeUpdate={() => { if (video.current && video.current.currentTime >= landmark.end) video.current.pause(); }} />
        {mode === 'compare' && <video ref={comparison} src={`${base}BeforeAndAfter.mp4`} muted playsInline preload="metadata" aria-label="Original Arch of Triumph comparison recording" onError={() => setError(true)} onLoadedMetadata={() => seekComparison(progress)} />}
        {error && <p role="alert" className="pal-media-error">This recording could not load. <a href={`${base}${mode === 'compare' ? 'BeforeAndAfter.mp4' : 'project5cover.mp4'}`}>Open the recording</a>.</p>}
        {mode === 'explore' ? <div className="pal-preview-caption"><span>{landmark.title}</span><button aria-expanded={story} aria-controls="pal-preview-story" onClick={() => setStory(!story)}>{story ? 'Close story −' : 'Read the interaction +'}</button></div> : <div className="pal-scrubber"><label htmlFor="pal-comparison-range">Explore the recorded comparison <span>{Math.round(progress)}%</span></label><input id="pal-comparison-range" type="range" min="0" max="100" step="1" value={progress} onChange={e => seekComparison(Number(e.target.value))} aria-describedby="pal-comparison-note" /><p id="pal-comparison-note">Drag to scrub the original sequence, including its divider and camera movement. This is footage, not an independently controlled 3D model.</p></div>}
        {story && mode === 'explore' && <div id="pal-preview-story" className="pal-preview-story"><h4>{landmark.title}</h4><p>{landmark.detail}</p></div>}
      </div>
    </div>
  </div>;
}

export function PalmyraPrototype() {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => { if (!inView) ref.current?.pause(); }, [inView]);
  return <div className="pal-prototype-player">
    <div className="pal-laptop">
      <Image src={`${base}013.png`} alt="" width={2981} height={1725} sizes="(max-width: 700px) 90vw, 1000px" />
      <div className="pal-laptop-screen">
        <video ref={ref} src={started ? `${base}project5vid.webm` : undefined} poster={`${base}interface.jpg`} controls={started} playsInline preload={started ? 'metadata' : 'none'} aria-label="Original Memory of Palmyra prototype recording" onError={() => setFailed(true)} onLoadedMetadata={() => { if (inView) void ref.current?.play().catch(() => {}); }} />
        {!started && <button className="pal-watch" onClick={() => setStarted(true)}><span aria-hidden="true">▶</span> Watch the prototype</button>}
      </div>
    </div>
    {failed && <p role="alert">Unable to play here. <a href={`${base}project5vid.webm`}>Open the original recording.</a></p>}
  </div>;
}
