import Link from 'next/link';
import { contactLinks } from '@/data/projects';
export const metadata={title:'Contact'};
export default function Contact(){return <main id="main" className="content-section utility-page"><Link className="back-link" href="/">↖ Back home</Link><p className="eyebrow">LET’S CONNECT</p><h1>A conversation<br/>starts here.</h1><p>For opportunities, collaborations, or just to say hi.</p><div className="contact-placeholders">{contactLinks.map(link=><p id={link.label.toLowerCase()} key={link.label}>{link.label}<span><a href={link.href ?? '#'}>{link.label === 'Email' ? 'qusai.khadour7@gmail.com' : 'Qussai Khaddour'}</a></span></p>)}</div></main>;}
