import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { bioCases, innerNatureMedia } from '@/data/inner-nature';
import { NextProject } from './case-study';
import { InnerNatureNav } from './inner-nature-nav';
import { OriginalCaseVideo, OriginalRecordingVideo } from './inner-nature-mobile';
import './inner-nature.css';

export function InnerNatureStory() {
  return (
    <main id="main" className="inner-nature content-section">
      <header className="in-hero">
        <Link href="/#work" className="back-link">↖ Back to work</Link>
        <div className="in-hero-copy">
          <div><h1>Inner<br /><span>Nature.</span></h1><p>Your body becomes<br />the creator</p></div>
          <div className="in-hero-composition">
            <div className="in-hero-organ in-hero-lungs"><Image src={`${innerNatureMedia}c1.png`} alt="Lungs illustration" width={1327} height={1150} sizes="500px" /></div>
            <div className="in-hero-organ in-hero-brain"><Image src={`${innerNatureMedia}c2.png`} alt="Brain illustration" width={1327} height={1150} sizes="500px" /></div>
            <div className="in-hero-organ in-hero-heart"><Image src={`${innerNatureMedia}c3.png`} alt="Heart illustration" width={1327} height={1150} sizes="500px" /></div>
            <div className="in-hero-phone">
            <Image src={`${innerNatureMedia}004.png`} alt="Inner Nature mobile app interface" width={1327} height={1150} sizes="800px" preload className="in-hero-artwork" />
            </div>
          </div>
        </div>
      </header>

      <InnerNatureNav />

      <section className="in-section" id="experiment" aria-label="About the project">
        <div className="in-project-overview">
          {/* Edit the project facts here. Software and hardware stay separate. */}
          <dl className="in-project-facts">
            <div><dt>Project</dt><dd>Inner Nature<br />Academic experiment</dd></div>
            <div><dt>My role</dt><dd>Design & Interaction<br />Creative technology · UX/UI</dd></div>
            <div><dt>Software</dt><dd>TouchDesigner · Python<br />StreamDiffusion</dd></div>
            <div><dt>Hardware</dt><dd>Muse 2 headband</dd></div>
          </dl>
          {/* Edit the project explanation and case-study introduction here. */}
          <div className="in-project-description">
            <p>Inner Nature is an interactive visual experiment that translates biofeedback into a living digital plant. Brainwaves, heart pulse, and breath influence its form, rhythm, and movement. Different input values create different visual expressions, from a flourishing plant to a tree without leaves.</p>
            <p>I developed the experiment as a master’s student in Design & Interaction. In TouchDesigner, I set rules based on the biofeedback inputs, with Muse 2 brainwave data arriving through OSC. The reactive visual becomes the basis for an evolving representation generated with StreamDiffusion.</p>
            <p>This case study explores how that existing system could become an approachable mobile experience. My focus is the interaction design and UX/UI: guiding someone through connecting Muse 2, checking the signal, experiencing the visual, and keeping a session.</p>
            <figure className="in-project-diagram">
              <div className="in-bio-path" aria-label="Biofeedback flows through TouchDesigner rules into a reactive visual and its generated representation">
                <div><span>INPUT</span><h3>Biofeedback</h3><p>Brainwaves · heart · breath</p></div><b aria-hidden="true">→</b>
                <div><span>MY SYSTEM</span><h3>TouchDesigner</h3><p>Rules responding to the inputs</p></div><b aria-hidden="true">→</b>
                <div><span>EXPRESSION</span><h3>A living visual</h3><p>Reactive form + generated appearance</p></div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="in-section" id="biodata" aria-labelledby="biodata-title">
        <div className="in-biodata-intro">
          <div className="in-biodata-heading">
            <h2 id="biodata-title">Bio-Data</h2>
            <p className="in-biodata-subtitle">The body as input.</p>
          </div>
          <p>Brainwaves, heart pulse, and breath become inputs for the experience. The rules I set in TouchDesigner translate changes in those signals into the form, rhythm, and movement of the visual.</p>
        </div>
        <figure className="in-biodata-media">
          <OriginalRecordingVideo file="white.mp4" label="Biodata: the body as input" className="in-biodata-video" playOnView />
        </figure>
      </section>

      <section className="in-section" id="system-process" aria-labelledby="system-process-title">
        <div className="in-process-intro">
          <div>
            <h2 id="system-process-title">System / Process</h2>
            <p className="in-process-subtitle">From signal to visual.</p>
          </div>
          <p>Muse 2 brainwave data reaches TouchDesigner through OSC. The rules I set translate biofeedback into a responsive plant, which becomes the input for StreamDiffusion and its evolving generated visuals.</p>
        </div>
        <figure className="in-process-recording">
          <div className="in-process-video-crop">
            <OriginalRecordingVideo file="Interface.mp4" label="Original TouchDesigner system and process recording" className="in-process-video" playOnView />
          </div>
          <figcaption>The original TouchDesigner network, from incoming signals to visual output.</figcaption>
        </figure>
        <figure className="in-process-wireframe">
          <Image src={`${innerNatureMedia}Diagram1.png`} alt="System process: Muse 2 brain signals pass through OSC to TouchDesigner for signal processing, parameter mapping, generative visuals, and StreamDiffusion transformation, producing live visuals." width={6103} height={1989} sizes="(max-width: 700px) 100vw, 1100px" className="in-process-diagram-image" />
        </figure>
      </section>

      <section className="in-section" id="cases" aria-labelledby="cases-title">
        <div className="in-two-column in-cases-intro"><div><h2 id="cases-title">Biofeedback Scenarios</h2><p className="in-cases-subtitle">Different States, Different Visuals</p></div><p>Two recordings show the relationship directly. Each pairs the bio-reactive visual with its generated representation: one flourishing, the other a tree without leaves.</p></div>
        <div className="in-video-cases">
          {bioCases.map((item, i) => (
            <figure key={item.id} className="in-video-case">
              <div className="in-case-heading"><span>CASE {String(i + 1).padStart(2, '0')}</span><h3>{item.title}</h3></div>
              <OriginalCaseVideo caseIndex={i} />
              <figcaption><p>{item.description}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="in-section" id="mobile-concept" aria-labelledby="mobile-concept-title">
        <div className="in-two-column"><h2 id="mobile-concept-title">Mobile App Design</h2><p>I translated the biofeedback experiment into a mobile application, designing the user flow and interface for connecting the Muse 2, starting a session, and viewing the real-time physiological response.</p></div>
        <figure className="in-mobile-teaser">
          <Image src={`${innerNatureMedia}teaser.png`} alt="Inner Nature mobile concept: a person wearing Muse 2 holds a phone displaying the reactive tree and biofeedback traces" width={1672} height={941} sizes="(max-width: 700px) 100vw, 1100px" />
        </figure>
        <section className="in-user-journey" id="ux" aria-labelledby="ux-title">
          <h3 id="ux-title">User Journey</h3>
          <figure>
            <Image src={`${innerNatureMedia}userjourny.png`} alt="User journey: open the app, connect Muse 2, check the signal, start meditation, capture biofeedback, switch between particle and AI visual views in real time, end the session, and save the visual." width={2172} height={724} sizes="(max-width: 700px) 100vw, 1238px" />
          </figure>
        </section>
      </section>

      <section className="in-section" id="wireframes" aria-labelledby="wireframes-title">
        <h3 className="in-wireframes-title" id="wireframes-title">Mobile wireframes</h3>
        <figure className="in-wireframes-image">
          <Image src={`${innerNatureMedia}Wireframest1.png`} alt="Eight mobile wireframes in two rows: begin a session, connect Muse 2, check signal, choose duration, particle view, AI visual view, save visual, and previous sessions." width={1802} height={2004} sizes="(max-width: 700px) 100vw, 1238px" />
        </figure>
      </section>

      <section className="in-section in-user-interface" id="final-prototype" aria-labelledby="final-prototype-title">
        <h2 id="final-prototype-title">User Interface</h2>
        <div className="in-interface-row">
          <div className="in-interface-phones">
            <div className="in-interface-phone"><Image src={`${innerNatureMedia}006.png`} alt="Meditation session in Particle mode with the reactive tree, signal traces, and session controls." width={1327} height={1150} sizes="(max-width: 700px) 150vw, 850px" /></div>
            <div className="in-interface-phone"><Image src={`${innerNatureMedia}007.png`} alt="Meditation session in Visual mode with the generated colourful tree." width={1327} height={1150} sizes="(max-width: 700px) 150vw, 850px" /></div>
          </div>
          <div className="in-interface-copy"><h3>Meditation session</h3><p>The session interface brings the biofeedback visual into focus. Switch between the generated Visual view and the reactive Particle view.</p></div>
        </div>
        <div className="in-interface-row in-interface-row-moments">
          <div className="in-interface-copy"><h3>Keep your moments</h3><p>Save the visual at the end of a session and give it a name. Your moments become a personal collection to revisit, with a new session always within reach.</p></div>
          <div className="in-interface-phones">
            <div className="in-interface-phone"><Image src={`${innerNatureMedia}009.png`} alt="Keep this moment screen with the final tree visual, session name, duration, and Save to my moments button." width={1327} height={1150} sizes="(max-width: 700px) 150vw, 850px" /></div>
            <div className="in-interface-phone"><Image src={`${innerNatureMedia}008.png`} alt="My moments collection showing named saved sessions and a New session button." width={1327} height={1150} sizes="(max-width: 700px) 150vw, 850px" /></div>
          </div>
        </div>
      </section>

    </main>
  );
}
