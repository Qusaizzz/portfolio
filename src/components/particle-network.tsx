'use client';
import { useEffect, useRef } from 'react';

export function ParticleNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let w = 0, h = 0, frame = 0, visible = true, time = 0;
    let pointer = { x: 0, y: 0 };
    let points: { x: number; y: number; phase: number }[] = [];
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const moved = points.map(p => ({ x: p.x + Math.sin(time * .2 + p.phase) * 9 + pointer.x * 5, y: p.y + Math.cos(time * .18 + p.phase) * 15 + pointer.y * 4 }));
      const reach = w < 650 ? 125 : 155;
      for (let i = 0; i < moved.length; i++) {
        const a = moved[i];
        const neighbors = moved.map((b, j) => ({ b, j, d: Math.hypot(a.x-b.x, a.y-b.y) })).filter(n => n.j > i && n.d < reach).sort((a,b) => a.d-b.d).slice(0, 4);
        for (const {b, d} of neighbors) {
          ctx.strokeStyle = `rgba(94,108,114,${.31 * (1-d/reach) + .065})`;
          ctx.lineWidth = .7; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
        ctx.fillStyle = i % 7 === 0 ? 'rgba(74,91,101,.69)' : 'rgba(117,130,136,.43)';
        ctx.beginPath(); ctx.arc(a.x,a.y,i % 7 === 0 ? 1.6 : 1,0,Math.PI*2); ctx.fill();
      }
    };
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      const dpr = Math.min(devicePixelRatio, 2); canvas.width = w*dpr; canvas.height = h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
      const cols = Math.ceil(w / (w < 650 ? 85 : 90));
      points = Array.from({length: (cols + 2)*5}, (_,i) => {
        const col = Math.floor(i/5), row = i%5;
        const noise = Math.sin(i*127.1+311.7)*43758.5453 % 1;
        return { x: (col-1)*w/cols + noise*34, y: h*.5 + Math.sin(col*.65)*h*.17 + (row-2)*h*.09 + noise*25, phase:i*1.73 };
      }); draw();
    };
    const tick = () => { time += 1/60; draw(); frame = requestAnimationFrame(tick); };
    const sync = () => { cancelAnimationFrame(frame); if (visible && !document.hidden && !media.matches) frame=requestAnimationFrame(tick); else { pointer={x:0,y:0}; draw(); } };
    const observer = new IntersectionObserver(([entry]) => {visible=entry.isIntersecting; sync();}); observer.observe(canvas);
    const sizeObserver = new ResizeObserver(resize); sizeObserver.observe(canvas);
    const move = (event: PointerEvent) => { if (!media.matches && event.pointerType==='mouse') pointer={x:event.clientX/innerWidth-.5,y:event.clientY/innerHeight-.5}; };
    resize(); media.addEventListener('change',sync); document.addEventListener('visibilitychange',sync); window.addEventListener('pointermove',move,{passive:true});
    return () => {cancelAnimationFrame(frame); observer.disconnect(); sizeObserver.disconnect(); media.removeEventListener('change',sync); document.removeEventListener('visibilitychange',sync); window.removeEventListener('pointermove',move);};
  }, []);
  return <canvas ref={ref} className="particle-network" aria-hidden="true" />;
}
