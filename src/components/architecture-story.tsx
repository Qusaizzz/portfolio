import Image from 'next/image';
import { ImageReveal } from './motion';
import { BeachHouseWalkthrough } from './beach-house-walkthrough';
import './architecture-story.css';

function BeachImage({ file, alt, width, height, sizes = '(max-width: 700px) 45vw, 500px' }: { file: string; alt: string; width: number; height: number; sizes?: string }) {
  return <ImageReveal reveal><figure><Image src={`/assets/beach-house/${file}`} alt={alt} width={width} height={height} sizes={sizes} /></figure></ImageReveal>;
}

export function ArchitectureStory() {
  return <main id="main" className="architecture-story content-section">
    <header className="beach-intro">
      <ImageReveal reveal><h1>Seaside<br /><span>House</span></h1></ImageReveal>
      <div className="beach-opening">
        <p>Seaside House is an interactive WebGL experience exploring real-time architectural visualization. Users can freely navigate and experience the spaces directly in the browser.</p>
        <dl className="beach-meta">
          <div><dt>Project:</dt><dd>Architectural visualization · WebGL · Spatial Design</dd></div>
          <div><dt>Tools:</dt><dd className="beach-tool-tags"><span>Revit</span><span>3ds Max</span><span>V-Ray</span><span>Unity</span><span>WebGL</span></dd></div>
        </dl>
      </div>
      <BeachHouseWalkthrough />
    </header>

    <section className="beach-section" aria-labelledby="beach-concept">
      <ImageReveal reveal><h2 id="beach-concept">Concept & process</h2></ImageReveal>
      <div className="beach-copy-grid"><ImageReveal reveal><h3>From a building model<br />to a place to explore.</h3></ImageReveal><ImageReveal reveal><p>I designed the building in Revit using a full BIM workflow. The two levels follow the cliffside terrain, bringing the architecture into conversation with the landscape.</p><p>I then brought the model into 3ds Max, where I developed the materials and V-Ray renders. Finally, I built the interactive walkthrough in Unity and exported it to WebGL, making the space accessible directly in a browser, without installation.</p></ImageReveal></div>
      <div className="beach-gallery">
        <div className="beach-exterior-gallery">
          <BeachImage file="Pic_01.jpg" alt="Beach House glazed living spaces opening onto the hillside" width={1280} height={754} />
          <BeachImage file="Pic_02.jpg" alt="Rear view with stone lower level and glazed upper floor" width={1280} height={780} />
        </div>
        <div className="beach-drawings">
          <BeachImage file="Pic_11.jpg" alt="Beach House architectural plans and sections" width={10000} height={4300} sizes="(max-width: 700px) 90vw, 1000px" />
        </div>
        <div className="beach-interior-gallery">
          <div className="beach-interior-column">
            <BeachImage file="Pic_03.jpg" alt="Interior detail with planting, armchair, and adjoining bathroom" width={400} height={965} />
            <BeachImage file="Pic_04.jpg" alt="Bedroom and seating area with geometric wall panels" width={1228} height={640} />
          </div>
          <div className="beach-interior-column">
            <BeachImage file="Pic_06.jpg" alt="Living room with upholstered seating and full-height glazing" width={1000} height={670} />
            <BeachImage file="Pic_05.jpg" alt="Bathroom with freestanding black bathtub and stone vanity" width={1280} height={960} />
            <BeachImage file="Pic_07.jpg" alt="Dining table and pendant lights beside full-height windows" width={600} height={900} />
          </div>
        </div>
      </div>
    </section>

  </main>;
}
