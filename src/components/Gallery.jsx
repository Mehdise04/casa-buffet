import React, { useState, useRef } from 'react';
import { photo, SETS, GALLERY_TABS } from '../galleryData';
import { useLightbox, ZoomBadge } from './Lightbox';

export default function Gallery() {
  const [active, setActive] = useState(GALLERY_TABS[0].key);
  const { open } = useLightbox();
  const rowRef = useRef(null);
  const files = SETS[active] || [];
  const activeLabel = GALLERY_TABS.find((t) => t.key === active)?.label;

  const openAt = (i) => open(files.map((f) => ({ src: photo(f), caption: activeLabel })), i);

  const scroll = (dir) => {
    const el = rowRef.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 720), behavior: 'smooth' });
  };

  const switchTab = (key) => {
    setActive(key);
    if (rowRef.current) rowRef.current.scrollTo({ left: 0 });
  };

  return (
    <section id="galerie" className="cb-section" style={{ background: '#F5EFFC' }}>
      <div className="cb-container">
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <span className="cb-eyebrow">Galerie</span>
          <h2 className="cb-h2">
            Nos plus belles <span className="script" style={{ color: '#6A48AC', fontWeight: 400, fontSize: '1.05em' }}>réalisations.</span>
          </h2>
          <p className="cb-body" style={{ marginTop: 22 }}>
            Choisissez une catégorie, puis cliquez sur une photo pour l'ouvrir en grand et faire défiler toute la série.
          </p>
        </div>

        <div className="cb-gal-tabs" role="tablist">
          {GALLERY_TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={active === t.key}
              className={`cb-gal-tab ${active === t.key ? 'is-active' : ''}`}
              onClick={() => switchTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="cb-gal-rowwrap">
        <button className="cb-gal-arrow cb-gal-arrow-l" aria-label="Précédent" onClick={() => scroll(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="cb-gal-row" ref={rowRef}>
          {files.map((name, i) => (
            <figure key={name} className="cb-gal-card cb-zoomable" onClick={() => openAt(i)}>
              <img src={photo(name)} alt={`${activeLabel} — CasaBuffet`} loading="lazy" decoding="async" />
              <ZoomBadge />
            </figure>
          ))}
        </div>
        <button className="cb-gal-arrow cb-gal-arrow-r" aria-label="Suivant" onClick={() => scroll(1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </section>
  );
}
