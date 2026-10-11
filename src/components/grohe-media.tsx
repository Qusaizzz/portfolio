'use client';
import Image from 'next/image';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import media from '@/data/grohe-media.json';
export type MediaKey = keyof typeof media;
type Selected = { id: MediaKey; alt: string; caption: string };
const MediaContext = createContext<(selection: Selected) => void>(() => {});

export function GroheMediaProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Selected | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!selected) return;
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  return <MediaContext.Provider value={setSelected}>
    {children}
    <dialog ref={dialog} className="grohe-lightbox" aria-label="Image viewer" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      {selected && <div className="grohe-lightbox-inner">
        <button autoFocus className="grohe-lightbox-close" aria-label="Close image viewer" onClick={() => dialog.current?.close()}>Close <span aria-hidden="true">×</span></button>
        <Image src={media[selected.id].src} alt={selected.alt} width={media[selected.id].width} height={media[selected.id].height} sizes="95vw" />
        {selected.caption && <p>{selected.caption}</p>}
      </div>}
    </dialog>
  </MediaContext.Provider>;
}

export function StoryImage({ id, alt, caption, className = '', priority = false, contain = false }: { id: MediaKey; alt: string; caption?: string; className?: string; priority?: boolean; contain?: boolean }) {
  const open = useContext(MediaContext);
  const asset = media[id];
  return <figure className={`story-image ${className}`}>
    <button className={`story-image-button ${contain ? 'contain' : ''}`} onClick={() => open({ id, alt, caption: caption ?? alt })} aria-label={`Enlarge image: ${alt}`}>
      <Image src={asset.src} alt={alt} width={asset.width} height={asset.height} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 75vw, 1100px" preload={priority} />
      <span className="image-enlarge" aria-hidden="true">↗</span>
    </button>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}

export function StoryVideo({ name, poster, label, description, portrait = false }: { name: string; poster: MediaKey; label: string; description: string; portrait?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const descriptionId = `video-description-${name}`;
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) video.pause(); });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return <figure className={`story-video ${portrait ? 'portrait-video' : ''}`}>
    <video ref={ref} controls playsInline preload="none" muted poster={media[poster].src} aria-label={label} aria-describedby={descriptionId} onError={() => setFailed(true)}>
      <source src={`/assets/grohe/web/${name}.mp4`} type="video/mp4" />
      Your browser does not support this video.
    </video>
    <figcaption><strong>{label}</strong><span id={descriptionId}>{description}</span>{failed && <a href={`/assets/grohe/web/${name}.mp4`}>Open the video file ↗</a>}</figcaption>
  </figure>;
}
