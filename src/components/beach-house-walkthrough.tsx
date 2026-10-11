'use client';
import Image from 'next/image';
import { useState } from 'react';

export function BeachHouseWalkthrough() {
  const [active, setActive] = useState(false);
  return <div className="beach-walkthrough">
    <div className="beach-player">
      {active ? <iframe title="Beach House interactive WebGL walkthrough" src="/assets/beach-house/Build/index.html" allow="autoplay; fullscreen; gamepad" allowFullScreen /> :
        <button onClick={() => setActive(true)} aria-label="Start the Beach House interactive walkthrough">
          <Image src="/assets/beach-house/info.png" alt="Walkthrough controls: click to look around and use W, A, S, D to move" width={1352} height={792} sizes="(max-width: 700px) 90vw, 1000px" />
          <span>Start walkthrough <span aria-hidden="true">↗</span></span>
        </button>}
    </div>
    <div className="beach-player-help"><p>Best explored on a desktop with a keyboard and mouse. Press Esc to release the cursor.</p></div>
    {active && <button className="beach-stop" onClick={() => setActive(false)}>Close walkthrough</button>}
  </div>;
}
