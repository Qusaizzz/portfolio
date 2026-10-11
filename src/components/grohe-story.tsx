import Image from 'next/image';
import { ScrollIndicator } from './scroll-indicator';
import { chapters } from '@/data/grohe-story-data';
import { TextReveal, ImageReveal } from './motion';
import { GroheMediaProvider } from './grohe-media';
import { GroheTimeline } from './grohe-timeline';
import { GroheDigitalPlatforms } from './grohe-digital-platforms';
import { GroheVirtualShowrooms } from './grohe-virtual-showrooms';
import { GroheExhibitions } from './grohe-exhibitions';
import { GroheWhatStays } from './grohe-what-stays';
import './grohe-story.css';
import './grohe-editorial.css';


export function GroheStory() {
  return <GroheMediaProvider><main id="main" className="grohe-story content-section">
    <header className="grohe-intro">
      <div className="grohe-overline"><span>BRAND & DIGITAL EXPERIENCE</span><span>SEPTEMBER 2022 — MAY 2026</span></div>
      <div className="grohe-journey-opening">
        <div className="grohe-journey-copy">
          <TextReveal><h1>My journey at<br/>GROHE</h1><p>through the work, the<br/>places, and the people in<br/>between :)</p></TextReveal>
          <ScrollIndicator href="#my-role" className="grohe-scroll-cue" description="my GROHE journey" />
        </div>
        <div className="grohe-journey-artwork">
          <Image src="/assets/grohe/G2.png" alt="Memories from my journey at GROHE: my joining announcement, farewell invitation, and handwritten role timeline ? Digital Content & Experience, September 2022 to March 2024; Brand Experience, March 2024 to May 2026." width={1600} height={900} sizes="(max-width: 700px) 160vw, (max-width: 1100px) 930px, 1100px" preload />
        </div>
      </div>
    </header>
    <GroheTimeline />

    <div className="grohe-chapters">
      <section id={chapters[0].id} className="grohe-chapter role-editorial" aria-labelledby={`${chapters[0].id}-title`}>
        <div className="chapter-body role-editorial-grid">
          <TextReveal className="role-editorial-intro"><h2 id={`${chapters[0].id}-title`}>Stepping Into<br/>GROHE</h2></TextReveal>
          <div className="role-image-stack">
            <ImageReveal className="role-company" reveal delay={0.12}>
              <div className="role-location"><strong>DÜSSELDORF</strong><span>51.2256° N, 6.7767° E</span></div>
              <div className="role-hq"><Image src="/assets/grohe/HQ.jpg" alt="GROHE headquarters in Düsseldorf" width={1200} height={630} sizes="(max-width: 700px) 74vw, 300px" /></div>
            </ImageReveal>
            <ImageReveal className="role-portrait" reveal delay={0.24}><Image src="/assets/grohe/My_pic.png" alt="Portrait of Qussai at GROHE" width={692} height={912} sizes="(max-width: 700px) 64vw, 285px" /></ImageReveal>
          </div>
          <div className="role-summary">
            <TextReveal><h3>My Role</h3></TextReveal>
            <div className="role-summary-content">
              <div className="role-history">
                <div><strong>Brand Experience</strong><span>03.2024 – 05.2026</span></div>
                <div><strong>Digital Content &amp; Experience</strong><span>09.2022 – 03.2024</span></div>
              </div>
              <div className="role-copy">
                <p>My journey at GROHE began in the <strong>Digital Content &amp; Experience</strong> team, where I worked at the intersection of design, technology, and digital storytelling. I contributed to interactive experiences across digital and physical platforms, including UX/UI design, AR/VR applications, WebGL experiences, cross-platform content creation, and overall user experience.</p>
                <p>I later became part of the wider <strong>Brand Experience</strong> team, where my work expanded with a stronger focus on brand identity, visual communication, and experience design across Europe markets. Alongside creative projects and international collaborations, I contributed to GROHE&apos;s evolving digital presence through website development, digital campaigns, and brand storytelling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GroheDigitalPlatforms />

      <GroheVirtualShowrooms />

      <GroheExhibitions />

      <GroheWhatStays />
    </div>
  </main></GroheMediaProvider>;
}
