import Image from 'next/image';
import { ImageReveal } from './motion';
import './grohe-digital-platforms.css';

const assets = '/assets/grohe/Digital Platforms/';

export function GroheDigitalPlatforms() {
  return <section id="digital-platforms" className="grohe-chapter digital-platforms" aria-labelledby="digital-platforms-title">
    <div className="digital-platforms-inner">
      <ImageReveal reveal><h2 id="digital-platforms-title">Digital<br/>Platforms</h2></ImageReveal>
      <div className="digital-platforms-overview">
        <ImageReveal reveal><h3>GROHE X – Award-Winning<br/>Digital Experience Platform</h3></ImageReveal>
        <ImageReveal reveal delay={0.1}><p>GROHE X was GROHE’s global digital experience platform, combining storytelling, product communication, immersive content, and hybrid event experiences into one ecosystem. With its innovative approach to digital brand experience, GROHE X received several awards, including the Red Dot Design Award, Digital Communication Awards, and Galaxy Awards.</p></ImageReveal>
      </div>
      <ImageReveal reveal className="digital-platforms-devices">
        <Image src={`${assets}platform.webp`} alt="GROHE X website displayed on a desktop monitor and tablet" width={1800} height={915} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 65vw, 880px" />
      </ImageReveal>
      <div className="digital-platforms-contribution">
        <ImageReveal reveal className="digital-platforms-copy">
          <h3>My contribution</h3>
          <p>As part of GROHE&apos;s <strong>Digital Content &amp; Experience</strong> team, I contributed to GROHE X through creative concept development, UX/UI design, content strategy, and digital storytelling. I was closely involved in developing GROHE X Originals, from brainstorming content ideas and exploring new formats to creating engaging digital stories around architecture, sustainability, and technology.</p>
          <p>My work also included developing content playbooks and guidelines for Europe markets, helping maintain a consistent brand experience across different regions. I collaborated with internal departments, external partners, and clients to showcase their projects and perspectives through engaging visual and editorial content on GROHE X.</p>
          <p>Alongside this, I contributed to the platform&apos;s ongoing development through web page design, content management, and interactive experiences. I also worked on AR/VR applications and WebGL experiences, exploring new ways to bring GROHE&apos;s products and brand stories to life through interactive content.</p>
        </ImageReveal>
        <div className="digital-platforms-collage" aria-label="GROHE X content and immersive experiences">
          <ImageReveal reveal className="digital-platforms-collage-space"><Image src={`${assets}GX1_1.png`} alt="GROHE X immersive presentation space" width={1080} height={1100} sizes="(max-width: 700px) 35vw, 210px" /></ImageReveal>
          <ImageReveal reveal delay={0.08} className="digital-platforms-collage-logo"><Image src={`${assets}GX2.png`} alt="GROHE X logo" width={2880} height={1512} sizes="(max-width: 700px) 30vw, 190px" /></ImageReveal>
          <ImageReveal reveal delay={0.16} className="digital-platforms-collage-vr"><Image src={`${assets}GX3_1.jpg`} alt="A visitor exploring GROHE Living Spaces through a VR headset" width={1728} height={1000} sizes="(max-width: 700px) 65vw, 360px" /></ImageReveal>
          <ImageReveal reveal delay={0.24} className="digital-platforms-collage-stories"><Image src={`${assets}GX4.png`} alt="GROHE X Originals: architecture, people, water, and design stories" width={1052} height={451} sizes="(max-width: 700px) 80vw, 470px" /></ImageReveal>
        </div>
      </div>
      <div className="digital-platforms-new">
        <ImageReveal reveal className="digital-platforms-laptop"><Image src={`${assets}GROHE_Website.png`} alt="The new GROHE website displayed on a laptop" width={2981} height={1725} sizes="(max-width: 700px) 90vw, 440px" /></ImageReveal>
        <ImageReveal reveal delay={0.1} className="digital-platforms-copy">
          <h3>GROHE&apos;s New Digital Platform</h3>
          <p>As GROHE&apos;s digital ecosystem evolved, a new global website was developed to bring together GROHE X and several other GROHE digital platforms into one unified website.</p>
          <p>I was involved in the early concept development phase, collaborating closely with the websites team on UX/UI design, content structure, and digital storytelling to help shape a consistent and engaging user experience.</p>
        </ImageReveal>
      </div>
    </div>
  </section>;
}
