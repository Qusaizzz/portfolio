'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import localFont from 'next/font/local';

const digitalFont = localFont({
  src: '../app/fonts/VT323.ttf',
  weight: '400',
  display: 'swap',
  variable: '--font-smile',
});

export function GroheSmile() {
  const ref = useRef<HTMLParagraphElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.75 });

  return (
    <p ref={ref} className={`what-stays-smile ${digitalFont.variable} ${visible ? 'is-typing' : ''}`} aria-label="A smile to end the journey">
      <span className="what-stays-smile-space" aria-hidden="true">
        <span className="what-stays-smile-type">:)..</span>
      </span>
    </p>
  );
}

export function HeroSmile() {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.75 });
  return <span ref={ref} className={`hero-smile ${digitalFont.variable} ${visible ? 'is-typing' : ''}`} aria-label="smile">
    <span className="hero-smile-type" aria-hidden="true">:)...</span>
  </span>;
}
