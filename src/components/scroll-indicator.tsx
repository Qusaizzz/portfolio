'use client';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ScrollIndicator({ href = '#work', className = '', description = 'selected work' }: { href?: string; className?: string; description?: string }) {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const threshold = reduced ? 16 : 140;
  const opacity = useTransform(scrollY, value => reduced ? (value >= 16 ? 0 : 1) : Math.max(0, 1 - value / 140));
  useMotionValueEvent(scrollY, 'change', value => setHidden(value >= threshold));
  useEffect(() => { setHidden(scrollY.get() >= threshold); }, [scrollY, threshold]);
  return <motion.a href={href} className={`scroll-indicator ${className}`} style={{ opacity, visibility: hidden ? 'hidden' : 'visible', pointerEvents: hidden ? 'none' : 'auto' }} aria-hidden={hidden || undefined} tabIndex={hidden ? -1 : 0}><span aria-hidden="true" />Scroll to explore<span className="sr-only"> {description}</span></motion.a>;
}
