'use client';
import { useState } from 'react';
import { ImageReveal } from './motion';
import { StoryImage } from './grohe-media';
import { GroheSmile } from './grohe-smile';
import './grohe-what-stays.css';

export function GroheWhatStays() {
  const [open, setOpen] = useState(false);
  return (
    <section id="what-stays" className="grohe-chapter what-stays-editorial" aria-labelledby="what-stays-title">
      <div className="what-stays-inner">
        <ImageReveal reveal><h2 id="what-stays-title">What Stays</h2></ImageReveal>
        <div className={`what-stays-stage ${open ? 'is-open' : ''}`}
          onPointerLeave={event => { if (event.pointerType === 'mouse') setOpen(false); }}
          onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
          onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
          <div className="what-stays-copy">
            <p className="what-stays-subtitle">The last day.<br />Much more to take away.</p>
            <p className="what-stays-summary">September 2022 — May 2026. Two teams, new responsibilities, and a journey through digital and brand experiences. It ends here with the people who made it meaningful.</p>
          </div>
          <div id="what-stays-photos" className="what-stays-deck" onPointerEnter={event => { if (event.pointerType === 'mouse') setOpen(true); }}>
            <div className="what-stays-card"><StoryImage id="farewell-gift" alt="Farewell presents and an envelope addressed to Qussai" caption="" contain /></div>
            <div className="what-stays-card"><StoryImage id="farewell-note" alt="Handwritten farewell note describing thoughtful gifts for the road ahead" caption="" contain /></div>
            <div className="what-stays-card"><StoryImage id="farewell-message" alt="Handwritten message thanking Qussai and inviting him to stay in touch" caption="" contain /></div>
            <div className="what-stays-card"><StoryImage id="farewell" alt="Qussai with his GROHE colleagues on his last day" caption="" /></div>
          </div>
          <button className="what-stays-toggle" aria-expanded={open} aria-controls="what-stays-photos" onClick={() => setOpen(value => !value)}>
            {open ? 'Close memories' : 'Explore memories'} <span aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
        </div>
        <GroheSmile />
      </div>
    </section>
  );
}
