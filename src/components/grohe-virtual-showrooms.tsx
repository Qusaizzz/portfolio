import Image from 'next/image';
import { ImageReveal } from './motion';
import './grohe-virtual-showrooms.css';

export function GroheVirtualShowrooms() {
  return (
    <section id="virtual-showrooms" className="grohe-chapter virtual-showrooms" aria-labelledby="virtual-showrooms-title">
      <div className="virtual-showrooms-inner">
        <ImageReveal reveal>
          <h2 id="virtual-showrooms-title">Virtual<br />Showrooms</h2>
        </ImageReveal>
        <div className="virtual-showrooms-overview">
          <ImageReveal reveal className="virtual-showrooms-introduction">
            <p>GROHE Virtual Showrooms are interactive browser-based experiences designed to showcase GROHE products within realistic and inspiring living spaces. The virtual showrooms offer users an innovative way to explore products and experience the brand beyond traditional product catalogs.</p>
          </ImageReveal>
          <ImageReveal reveal delay={0.12}>
            <Image src="/assets/grohe/VS4.jpg" alt="GROHE Virtual Spaces displayed on a tablet" width={5802} height={4600} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 55vw, 630px" />
          </ImageReveal>
        </div>
        <ImageReveal reveal className="virtual-showrooms-contribution">
          <h3>My contribution</h3>
          <p>During my time at GROHE, I contributed to the development of the GROHE Virtual Showrooms, working on WebGL applications and enhancing the existing virtual showrooms through the integration of AR features. My work focused on creating interactive product experiences and extending the showrooms with web-based augmented reality functionality. This allowed users to move beyond exploring products inside the virtual showroom and experience selected products in their own physical space.</p>
        </ImageReveal>
        <ImageReveal reveal className="virtual-showrooms-ar">
          <Image src="/assets/grohe/AR_2.jpg" alt="GROHE showroom on a laptop alongside the Scan and Place augmented reality experience on a phone" width={1600} height={900} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 70vw, 780px" />
        </ImageReveal>
      </div>
    </section>
  );
}
