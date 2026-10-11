'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function SidebarNavigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="navigation">
    <Link href="/" className="name-mark" aria-label="Qussai Khaddour home" onClick={() => setOpen(false)}><span>Qussai</span><span>Khaddour</span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? 'nav-links is-open' : 'nav-links'}>
      <Link href={path === '/' ? '#main' : '/'} onClick={() => setOpen(false)}>Home</Link>
      <Link href={path === '/' ? '#work' : '/#work'} onClick={() => setOpen(false)}>Work</Link>
      <Link href={path === '/' ? '#about' : '/#about'} onClick={() => setOpen(false)}>About</Link>
    </nav>
  </header>;
}
