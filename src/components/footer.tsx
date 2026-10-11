'use client';
import { usePathname } from 'next/navigation';
import { contactLinks } from '@/data/projects';
export function Footer() {
  const pathname = usePathname();
  if (['/work/my-journey', '/work/seaside-house', '/work/palmyra', '/work/inner-nature'].includes(pathname.replace(/\/$/, ''))) return null;
  return <footer className="footer content-section simple-footer"><h2>Let's connect :)</h2><div className="social-links">{contactLinks.map(link => <a key={link.label} href={link.href ?? `/contact#${link.label.toLowerCase()}`} aria-label={link.href ? link.label : `${link.label} — contact details coming soon`}>{link.label}</a>)}</div><p className="footer-copyright">© {new Date().getFullYear()} Qussai Khaddour</p></footer>;
}
