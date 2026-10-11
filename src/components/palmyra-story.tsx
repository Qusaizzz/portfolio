import Image from 'next/image';
import { PalmyraReveal as ImageReveal } from './palmyra-interactions';
import { PalmyraAtmosphere, PalmyraBeforeAfter, PalmyraPrototype } from './palmyra-interactions';
import './palmyra-story.css';

export function PalmyraStory() {
  return <main id="main" className="content-section palmyra-story">
    <header className="pal-hero">
      <ImageReveal reveal><h1>Memory of<br /><span>Palmyra</span></h1></ImageReveal>
      <div className="pal-hero-intro">
        <p>An interactive, particle-based experience exploring architecture, absence, and the memory of the lost city of Palmyra.</p>
          <dl className="pal-meta">
            <div><dt>Project:</dt><dd>Particle Visualization · Digital Storytelling · Spatial Experience</dd></div>
            <div><dt>Tools:</dt><dd className="pal-tool-tags"><span>Unity</span><span>3ds Max</span><span>TouchDesigner</span></dd></div>
          </dl>
      </div>
      <PalmyraAtmosphere />
    </header>


    <section id="pal-context" className="pal-section" aria-labelledby="pal-context-title">
      <div className="pal-editorial">
        <ImageReveal reveal><h2 id="pal-context-title">What remains<br />when a place<br /><em>disappears?</em></h2></ImageReveal>
        <ImageReveal reveal><div className="pal-body">
          <p>Palmyra was once one of Syria’s most important ancient cities, known for its unique architecture and rich cultural history. Much of this heritage was destroyed in 2015, leaving behind not only ruins, but also the memory of a place that once existed.</p>
          <p>This project is not about simply rebuilding Palmyra digitally or showing what was destroyed. Instead, I wanted to explore the feeling of its absence and create an experience that connects what is there today with what once stood there.</p>
          <p>Using TouchDesigner, I created an interactive particle-based visualization where fragments of Palmyra’s architecture appear, shift, and dissolve. The particles became a way to represent memory itself — something that can come back into view, but never quite return in the same form.</p>
        </div></ImageReveal>
      </div>
    </section>

    <section id="pal-fragments" className="pal-section pal-before-after" aria-label="Palmyra before and after">
      <ImageReveal reveal>
        <PalmyraBeforeAfter />
      </ImageReveal>
    </section>

    <section id="pal-prototype" className="pal-section" aria-labelledby="pal-prototype-title">
      <div className="pal-prototype-heading">
        <div>
          <h2 id="pal-prototype-title">Prototype</h2>
          <p className="pal-section-intro">Explore Palmyra in a spatial environment, moving between its landmarks and discovering the stories held within its architecture.</p>
        </div>
      </div>
      <PalmyraPrototype />
    </section>

    <section id="pal-outcome" className="pal-section pal-outcome" aria-label="Palmyra visual identity and conclusion">
      <div className="pal-identity">
        <ImageReveal reveal>
          <h2>From Architecture to <em>Identity</em></h2>
          <p>The logo is an abstract combination of two key architectural elements from Palmyra: the column and the arch.</p>
        </ImageReveal>
        <ImageReveal reveal><Image src="/assets/Palmyra/Icon2.png" alt="Palmyra logo development, abstracting the column and arch into geometric identity marks" width={800} height={1100} sizes="(max-width: 700px) 90vw, 550px" /></ImageReveal>
      </div>
      <ImageReveal reveal><Image className="pal-final-image" src="/assets/Palmyra/statement.jpg" alt="The memory remains. To remember is to preserve; to preserve is to ensure it never truly disappears. Particle columns recede into darkness." width={1920} height={880} sizes="(max-width: 700px) 90vw, 1100px" /></ImageReveal>
      <div className="pal-end"><span>Memory of Palmyra</span><a href="/#work">Back to selected work ↗</a></div>
    </section>
  </main>;
}
