'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export function TextReveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 1, y: 0 }} whileInView={reduced ? {} : { y: [18, 0], opacity: [0.4, 1] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export function ImageReveal({ children, className = '', reveal = false, delay = 0 }: { children: ReactNode; className?: string; reveal?: boolean; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={`image-reveal ${className}`} initial={reveal && !reduced ? { opacity: 0, y: 32 } : false} animate={reduced ? { opacity: 1, y: 0 } : undefined} whileInView={reduced ? {} : reveal ? { opacity: 1, y: 0 } : { clipPath: ['inset(5% 0 0 0)', 'inset(0% 0 0 0)'] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 1.05, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export function PageTransition({ children }: { children: ReactNode }) {
  const path = usePathname();
  const reduced = useReducedMotion();
  return <motion.div key={path} initial={{ opacity: 1, y: 0 }} animate={reduced ? {} : { opacity: [0.5, 1], y: [6, 0] }} transition={{ duration: 0.4 }}>{children}</motion.div>;
}
