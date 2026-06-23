import React, { useState, useEffect, useCallback } from 'react';
import { photo, SETS, GALLERY_TABS } from '../galleryData';

export default function Gallery() {
  const [active, setActive] = useState(GALLERY_TABS[0].key);
  const [lightbox, setLightbox] = useState(null); // index into `files` or null
  const files = SETS[active] || [];
  const activeLabel = GALLERY_TABS.find((t) => t.key === active)?.label;

  const close = useCallback(() => setLightbox(null), []);
  const show = useCallback((i) => setLightbox((i + files.length) % files.length), [files.length]);
  const next = useCallback(() => setLightbox((i) => (i + 1) % files.length), [files.length]);
  const prev = useCallback(() => setLightbox((i) => (i - 1 + files.length) % files.length), [files.length]);

  // keyboard + body scroll lock while the lightbox is open
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, next, prev]);

  const switchTab = (key) => { setLightbox(null); setActive(key); };

  return (
    <section id="galerie" className="cb-section" style={{ background: '#F5EFFC' }}>
      <div className="cb-container">
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
          <span className="cb-eyebrow">Galerie</span>
          <h2 className="cb-h2">
            Nos plus belles <span className="script" style={{ color: '#6A48AC', fontWeight: 400, fontSize: '1.05em' }}>réalisations.</span>
          </h2>
          <p className="cb-body" style={{ marginTop: 22 }}>
            Coffrets de fiançailles, douceurs, buffets salés, décors et événements professionnels : explorez nos créations par catégorie, et cliquez pour les voir en grand.
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

        <div className="cb-gal-grid">
          {files.map((name, i) => (
            <figure key={name} className="cb-gal-item" onClick={() => show(i)}>
              <img src={photo(name)} alt={`${activeLabel} — Casa Buffet`} loading="lazy" decoding="async" />
              <span className="cb-gal-zoom" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                </svg>
              </span>
            </figure>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="cb-lb" onClick={close} role="dialog" aria-modal="true">
          <button className="cb-lb-close" aria-label="Fermer" onClick={close}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <button className="cb-lb-nav cb-lb-prev" aria-label="Précédent" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <figure className="cb-lb-stage" onClick={(e) => e.stopPropagation()}>
            <img src={photo(files[lightbox])} alt={`${activeLabel} — Casa Buffet`} />
            <figcaption>{activeLabel} · {lightbox + 1} / {files.length}</figcaption>
          </figure>
          <button className="cb-lb-nav cb-lb-next" aria-label="Suivant" onClick={(e) => { e.stopPropagation(); next(); }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      )}
    </section>
  );
}
