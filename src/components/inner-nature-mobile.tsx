'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { bioCases, innerNatureMedia, mobileScreens, type MobileScreen } from '@/data/inner-nature';

// Frame the original moving output; never replace it with captured stills.
export function NatureVideo({ caseIndex = 0, view = 'generated', playing = false }: { caseIndex?: number; view?: 'particle' | 'generated'; playing?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let active = true;
    if (playing && visible) {
      setFailed(false);
      video.play().catch(error => {
        if (active && error.name !== 'AbortError') setFailed(true);
      });
    }
    else video.pause();
    return () => { active = false; };
  }, [playing, visible, caseIndex]);
  return <div className={`in-nature-video ${view === 'generated' ? 'is-generated' : ''}`}>
    <video ref={ref} src={`${innerNatureMedia}${bioCases[caseIndex].video}.mp4`} muted playsInline loop preload="metadata" onError={() => setFailed(true)} aria-label={`${bioCases[caseIndex].shortName} ${view} recorded visual`} />
    {failed && <span className="in-video-fallback">Recording unavailable</span>}
  </div>;
}

export function OriginalCaseVideo({ caseIndex }: { caseIndex: number }) {
  return <div className="in-case-video-frame"><OriginalRecordingVideo file={`${bioCases[caseIndex].video}.mp4`} label={`${bioCases[caseIndex].title}: original particle and diffusion video`} playOnView /></div>;
}

export function OriginalRecordingVideo({ file, label, className = 'in-case-video', playOnView = false }: { file: string; label: string; className?: string; playOnView?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const video = ref.current;
      if (!video) return;
      if (!entry.isIntersecting) video.pause();
      else if (playOnView) void video.play().catch(() => {
        // Playback can be interrupted by scrolling or restricted by the browser.
      });
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [playOnView]);
  return <video ref={ref} className={className} controls={!playOnView} muted={playOnView} loop={playOnView} disablePictureInPicture={playOnView} playsInline preload="metadata" aria-label={label}>
    <source src={`${innerNatureMedia}${file}`} type="video/mp4" />
    <a href={`${innerNatureMedia}${file}`}>Watch the original recording</a>
  </video>;
}

export function NatureMark() {
  return <svg className="in-nature-mark" viewBox="0 0 120 150" fill="none" aria-hidden="true">
    <path d="M60 138V62M60 109 30 83M60 96 91 67M60 77 38 53M60 64 82 38M60 50V17" />
    <path d="M30 83C11 81 10 62 13 52c17 1 24 14 17 31ZM91 67c19-3 25-22 21-33-19 5-26 17-21 33ZM38 53c-17-4-20-21-16-32 18 5 23 17 16 32ZM82 38c16-5 20-20 15-29-15 4-20 15-15 29Z" />
    <circle cx="60" cy="14" r="5" />
  </svg>;
}

function Headband({ ready = false }: { ready?: boolean }) {
  return <svg className={`in-headband ${ready ? 'is-ready' : ''}`} viewBox="0 0 240 200" fill="none" role="img" aria-label={ready ? 'Headband contact check ready in the demo' : 'Illustrated headband contact guide'}>
    <ellipse cx="120" cy="98" rx="64" ry="80" className="in-head-outline" />
    <path d="M54 74Q120 36 186 74M54 74 44 132M186 74l10 58" className="in-band-line" />
    <circle cx="89" cy="60" r="7" /><circle cx="151" cy="60" r="7" /><circle cx="44" cy="132" r="7" /><circle cx="196" cy="132" r="7" />
    <path d="M108 136q12 8 24 0M117 90l-4 25h12" className="in-face-line" />
  </svg>;
}

function SignalTrace() {
  return <svg className="in-signal-trace" viewBox="0 0 280 55" fill="none" aria-hidden="true">
    <path d="M0 31 12 31 19 17 25 39 36 25 48 28 59 11 68 40 77 24 89 27 100 18 111 38 122 21 133 31 145 27 156 10 166 37 178 23 188 28 200 13 210 39 222 24 235 31 247 18 258 34 271 22 280 28" />
    <path d="M0 42Q20 15 40 42T80 42T120 42T160 42T200 42T240 42T280 42" />
  </svg>;
}

export function PhoneFrame({ children, dark = false, className = '' }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <div className={`in-phone ${dark ? 'in-phone-dark' : ''} ${className}`}>
    <div className="in-phone-hardware" aria-hidden="true"><span>9:41</span><i /><span>▰</span></div>
    {children}
    <div className="in-home-indicator" aria-hidden="true" />
  </div>;
}

export function MobileScreenStudy({ screen }: { screen: MobileScreen }) {
  const [playing, setPlaying] = useState(false);
  return <PhoneFrame dark={screen === 'session'} className="in-study-phone">
    <div className="in-phone-brand">inner nature <span>✳</span></div>
    <div className="in-study-body">
      {screen === 'home' && <><span className="in-mobile-eyebrow">A MOMENT FOR YOU</span><h3>Meet your<br />inner nature.</h3><div className="in-orbit-mark"><NatureMark /></div><p>Let your body become<br />the creator.</p><div className="in-mock-button">Begin a session ↗</div><small>Your sessions</small></>}
      {screen === 'connect' && <><span className="in-mobile-eyebrow">01 / CONNECT</span><h3>A little closer<br />to yourself.</h3><Headband /><div className="in-device-row"><span>Muse 2<small>Ready to connect</small></span><span>＋</span></div><div className="in-mock-button">Connect headband</div><small>Need help finding Muse?</small></>}
      {screen === 'fit' && <><span className="in-mobile-eyebrow">02 / FIND YOUR FIT</span><h3>Comfortable?<br />Let’s settle in.</h3><Headband ready /><div className="in-contact-row"><span>Forehead ✓</span><span>Ear contacts ✓</span></div><p>Your signal is ready.<br />The visual can begin.</p><div className="in-mock-button">Start experience ↗</div></>}
      {screen === 'session' && <><div className="in-session-heading"><span>Your nature,<br />in motion.</span><small>SESSION CONCEPT</small></div><NatureVideo playing={playing} /><div className="in-study-signal"><span>Biofeedback → visual</span><SignalTrace /></div><div className="in-mock-pill">Particle <b>Generated</b></div><button className="in-mock-button" onClick={() => setPlaying(value => !value)}>{playing ? 'Pause preview' : 'Play screen preview'}</button></>}
      {screen === 'reflect' && <><span className="in-mobile-eyebrow">A MOMENT TO KEEP</span><h3>That was<br />your nature.</h3><div className="in-orbit-mark small"><NatureMark /></div><label>Session name</label><div className="in-mock-input">A quiet moment</div><div className="in-mock-button">Save session ↗</div><small>Or simply let it go</small></>}
      {screen === 'library' && <><span className="in-mobile-eyebrow">YOUR COLLECTION</span><h3>Little moments.<br />Still yours.</h3>{['A quiet moment', 'After the rain', 'An evening pause'].map((name, i) => <div className="in-library-row" key={name}><NatureMark /><span>{name}<small>Session {String(i + 1).padStart(2, '0')}</small></span><b>↗</b></div>)}<div className="in-mock-button">Begin again +</div><small>Illustrative session names</small></>}
    </div>
  </PhoneFrame>;
}

export function MobileWireframe({ screen }: { screen: MobileScreen }) {
  return <div className="in-mobile-wire" aria-hidden="true"><div className="in-wire-notch" /><span>INNER NATURE</span>
    <div className="in-wire-heading">{({ home: 'Begin a session', connect: 'Connect Muse 2', fit: 'Check contact', session: 'Your visual', reflect: 'Keep this moment', library: 'Your sessions' })[screen]}</div>
    {screen === 'connect' || screen === 'fit' ? <><Headband ready={screen === 'fit'} /><div className="in-wire-option">{screen === 'fit' ? 'Forehead / ears' : 'Muse 2 · available'}</div></> : screen === 'session' ? <><div className="in-wire-visual">Responsive visual</div><SignalTrace /><div className="in-wire-option">Particle / Generated</div></> : screen === 'reflect' ? <><div className="in-wire-visual short">Session moment</div><div className="in-wire-option">Name your session</div></> : screen === 'library' ? <>{['Session 01', 'Session 02', 'Session 03'].map(name => <div className="in-wire-option" key={name}>{name} ↗</div>)}</> : <><div className="in-wire-visual">Invitation / identity</div><div className="in-wire-option">Previous sessions</div></>}
    <div className="in-wire-action">{({ home: 'Begin', connect: 'Connect', fit: 'Start', session: 'Pause / finish', reflect: 'Save', library: 'New session' })[screen]}</div>
  </div>;
}

type SavedSession = { id: number; name: string; caseIndex: number; view: 'particle' | 'generated' };

export function InnerNatureMobileDemo() {
  const [screen, setScreen] = useState<MobileScreen>('home');
  const [caseIndex, setCaseIndex] = useState(0);
  const [view, setView] = useState<'particle' | 'generated'>('generated');
  const [connected, setConnected] = useState(false);
  const [contactsReady, setContactsReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [signalLost, setSignalLost] = useState(false);
  const [showSignals, setShowSignals] = useState(false);
  const [immersive, setImmersive] = useState(false);
  const [name, setName] = useState('A quiet moment');
  const [sessions, setSessions] = useState<SavedSession[]>([]);
  const [notice, setNotice] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) { initial.current = false; return; }
    heading.current?.focus({ preventScroll: true });
  }, [screen]);

  function begin() {
    setNotice(''); setConnected(false); setContactsReady(false);
    setSignalLost(false); setPaused(false); setScreen('connect');
  }
  function start() {
    setPaused(false); setSignalLost(false); setScreen('session');
    setNotice('Demo session started with original recorded visuals.');
  }
  function save() {
    if (!name.trim()) return;
    setSessions(previous => [...previous, { id: Date.now(), name: name.trim(), caseIndex, view }]);
    setNotice(`“${name.trim()}” saved for this page visit.`); setScreen('library');
  }
  function restore(session: SavedSession) {
    setCaseIndex(session.caseIndex); setView(session.view); setName(session.name);
    setConnected(true); setContactsReady(true); start();
    setNotice('Replaying the original case associated with this saved demo session.');
  }
  function toggleSignal() {
    setSignalLost(previous => !previous); setPaused(true);
    setNotice(signalLost ? 'Demo contact restored. Resume when you are ready.' : 'Demo contact lost. The visual pauses until the signal is restored.');
  }

  return <div className="in-mobile-prototype">
    <aside className="in-prototype-guide">
      <span className="in-eyebrow">TRY THE MOBILE FLOW</span><h3>Less adjusting.<br />More experiencing.</h3>
      <p>Walk through connecting Muse 2, finding the right fit, and entering a session. Your body is the input; the interface helps you stay with the experience.</p>
      <ol className="in-demo-progress">{mobileScreens.map((item, i) => <li key={item.id} aria-current={screen === item.id ? 'step' : undefined}><span>{String(i + 1).padStart(2, '0')}</span>{item.title}</li>)}</ol>
      <div className="in-demo-scenarios"><span>Recorded case for the demo</span><div>{bioCases.map((item, i) => <button key={item.id} onClick={() => setCaseIndex(i)} aria-pressed={caseIndex === i}>{item.shortName}</button>)}</div><small>These are two recorded input cases, not user-selectable growth settings in the proposed app.</small>{screen === 'session' && <button className="in-test-signal" onClick={toggleSignal}>{signalLost ? 'Restore demo contact' : 'Try a lost-contact state'}</button>}</div>
      <p className="in-prototype-disclosure">Interactive UI concept. Connection and contact checks are simulated; the plant is original video. Saving lasts for this page visit.</p>
    </aside>
    <PhoneFrame dark={screen === 'session'} className="in-interactive-phone">
      <div className="in-phone-brand"><button onClick={() => { setScreen('home'); setImmersive(false); }} aria-label="Inner Nature home">inner nature <span>✳</span></button><span className="in-demo-tag">DEMO</span></div>
      <div className={`in-phone-content ${screen === 'session' ? 'in-session-content' : ''}`}>
        {screen === 'home' && <><span className="in-mobile-eyebrow">A MOMENT FOR YOU</span><h3 ref={heading} tabIndex={-1}>Meet your<br />inner nature.</h3><div className="in-orbit-mark"><NatureMark /></div><p>Let your body become the creator.<br />A different visual, every time.</p><button className="in-phone-primary" onClick={begin}>Begin a session <span>↗</span></button><button className="in-phone-text-button" onClick={() => setScreen('library')}>Your sessions {sessions.length > 0 && `(${sessions.length})`}</button><small className="in-phone-footnote">Designed for Muse 2</small></>}

        {screen === 'connect' && <><span className="in-mobile-eyebrow">01 / CONNECT</span><h3 ref={heading} tabIndex={-1}>A little closer<br />to yourself.</h3><p>Turn on Muse 2 and keep it close to your phone.</p><Headband /><div className="in-device-row"><span>Muse 2<small>{connected ? 'Connected · demo' : 'Available · demo device'}</small></span><span>{connected ? '✓' : '＋'}</span></div><button className="in-phone-primary" onClick={() => { if (connected) setScreen('fit'); else { setConnected(true); setNotice('Muse 2 connected in the demo. Continue to check the fit.'); } }}>{connected ? 'Check the fit' : 'Connect Muse 2'} <span>↗</span></button><details className="in-phone-help"><summary>Can’t find your headband?</summary><p>In the app, check that Muse 2 is powered on and wireless access is enabled. This demo does not scan for hardware.</p></details></>}

        {screen === 'fit' && <><span className="in-mobile-eyebrow">02 / FIND YOUR FIT</span><h3 ref={heading} tabIndex={-1}>Comfortable?<br />Let’s settle in.</h3><p>Adjust the headband for good contact at your forehead and behind your ears.</p><Headband ready={contactsReady} /><div className="in-contact-row"><span>Forehead {contactsReady ? '✓' : '○'}</span><span>Ear contacts {contactsReady ? '✓' : '○'}</span></div><p className="in-fit-status" role="status">{contactsReady ? 'Demo signal ready. You can begin.' : 'Waiting for a comfortable fit.'}</p>{!contactsReady && <button className="in-phone-secondary" onClick={() => setContactsReady(true)}>Check demo contact</button>}<button className="in-phone-primary" disabled={!contactsReady} onClick={start}>Start experience <span>↗</span></button></>}

        {screen === 'session' && <>
          <div className="in-session-heading"><h3 ref={heading} tabIndex={-1}>Your nature,<br />in motion.</h3><span className={signalLost ? 'in-contact-lost' : ''}>{signalLost ? 'Contact lost' : paused ? 'Paused' : 'Demo session'}</span></div>
          <div className={`in-session-stage ${immersive ? 'is-immersive' : ''}`}><NatureVideo caseIndex={caseIndex} view={view} playing={!paused && !signalLost} />{signalLost && <div className="in-contact-message"><strong>A little adjustment.</strong><p>Check your headband contact.<br />Your session is still here.</p><button onClick={() => { setSignalLost(false); setPaused(true); setNotice('Demo contact restored. Tap Resume to continue.'); }}>Recheck demo contact</button></div>}{paused && !signalLost && <span className="in-pause-label">A moment of stillness.</span>}</div>
          <button className="in-immersive-button" onClick={() => setImmersive(previous => !previous)}>{immersive ? 'Show session controls' : 'Expand visual'} ↗</button>
          {!immersive && <><div className="in-output-toggle" role="group" aria-label="Visual representation"><button aria-pressed={view === 'particle'} onClick={() => setView('particle')}>Particle</button><button aria-pressed={view === 'generated'} onClick={() => setView('generated')}>Generated</button></div><button className="in-signal-toggle" aria-expanded={showSignals} onClick={() => setShowSignals(previous => !previous)}>Your signals <span>{showSignals ? '−' : '+'}</span></button>{showSignals && <div className="in-phone-signals"><span>Illustrative signal view</span><SignalTrace /><div><span>Brain → form</span><span>Heart → rhythm</span><span>Breath → motion</span></div></div>}</>}
          <div className="in-session-actions"><button className="in-phone-primary" disabled={signalLost} onClick={() => setPaused(previous => !previous)}>{paused ? '▶ Resume' : 'Ⅱ Pause'}</button><button className="in-phone-secondary" onClick={() => { setPaused(true); setImmersive(false); setScreen('reflect'); }}>Finish</button></div><small className="in-phone-footnote">Original recorded visual / {bioCases[caseIndex].shortName}</small>
        </>}

        {screen === 'reflect' && <><span className="in-mobile-eyebrow">A MOMENT TO KEEP</span><h3 ref={heading} tabIndex={-1}>That was<br />your nature.</h3><div className="in-orbit-mark small"><NatureMark /></div><p>A small moment, just for you.<br />Keep it, or let it go.</p><label className="in-session-name" htmlFor="in-session-name">Session name<input id="in-session-name" value={name} maxLength={60} onChange={e => setName(e.target.value)} /></label><button className="in-phone-primary" disabled={!name.trim()} onClick={save}>Save session <span>↗</span></button><button className="in-phone-text-button" onClick={() => { setScreen('home'); setNotice('Session discarded.'); }}>Let it go</button></>}

        {screen === 'library' && <><span className="in-mobile-eyebrow">YOUR COLLECTION</span><h3 ref={heading} tabIndex={-1}>Little moments.<br />Still yours.</h3>{sessions.length === 0 ? <div className="in-empty-library"><NatureMark /><p>Your first moment<br />is waiting to happen.</p></div> : <div className="in-saved-sessions">{sessions.map(session => <div className="in-library-row" key={session.id}><NatureMark /><button onClick={() => restore(session)}>{session.name}<small>Replay demo session ↗</small></button><button className="in-remove-session" onClick={() => { setSessions(previous => previous.filter(item => item.id !== session.id)); setNotice('Saved demo session removed.'); }} aria-label={`Delete ${session.name}`}>×</button></div>)}</div>}<button className="in-phone-primary" onClick={begin}>Begin again <span>＋</span></button><small className="in-phone-footnote">Demo sessions stay only for this page visit.</small></>}
      </div>
    </PhoneFrame>
    <p className="in-demo-status" role="status">{notice || 'Start with “Begin a session” on the phone.'}</p>
  </div>;
}
