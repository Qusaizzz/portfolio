import localFont from 'next/font/local';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SidebarNavigation } from '@/components/navigation';
import { PageTransition } from '@/components/motion';
import { Footer } from '@/components/footer';
import './globals.css';
import './home-refinement.css';
const inter = localFont({ src: './fonts/Inter-Variable.ttf', variable: '--font-inter', weight: '100 900', display: 'swap' });
export const metadata: Metadata = {
  title: { default: 'Qussai_KH Design', template: '%s — Qussai_KH Design' },
  description: "Hi, I'm Qussai – a designer and immersive experience creator based in Germany. My work focuses on spatial storytelling, interactive 3D environments, and real-time design.",
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en" data-scroll-behavior="smooth"><body className={inter.variable}><a href="#main" className="skip-link">Skip to content</a><SidebarNavigation/><PageTransition>{children}</PageTransition><Footer/>{process.env.VERCEL_ENV === 'production' && <Analytics />}</body></html>;}
