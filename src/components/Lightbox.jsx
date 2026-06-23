import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LightboxCtx = createContext({ open: () => {} });
export const useLightbox = () => useContext(LightboxCtx);

// Wrap the app in this provider; any component can call open(items, index).
// items: array of { src, caption }
export function LightboxProvider({ children }) {
  const [state, setState] = useState(null); // { items, index } | null

  const open = useCallback((items, index = 0) => setState({ items, index }), []);
  const close = useCallback(() => setState(null), []);
  const next = useCallback(() => setState((s) => (s ? { ...s, index: (s.index + 1) % s.items.length } : s)), []);
  const prev = useCallback(() => setState((s) => (s ? { ...s, index: (s.index - 1 + s.items.length) % s.items.length } : s)), []);

  useEffect(() => {
    if (!state) return;
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
  }, [state, close, next, prev]);

  const cur = state ? state.items[state.index] : null;
  const many = state && state.items.length > 1;

  return (
    <LightboxCtx.Provider value={{ open }}>
      {children}
      {state && (
        <div className="cb-lb" onClick={close} role="dialog" aria-modal="true">
          <button className="cb-lb-close" aria-label="Fermer" onClick={close}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          {many && (
            <button className="cb-lb-nav cb-lb-prev" aria-label="Précédent" onClick={(e) => { e.stopPropagation(); prev(); }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
          )}
          <figure className="cb-lb-stage" onClick={(e) => e.stopPropagation()}>
            <img src={cur.src} alt={cur.caption || ''} />
            {cur.caption && (
              <figcaption>{cur.caption}{many ? ` · ${state.index + 1} / ${state.items.length}` : ''}</figcaption>
            )}
          </figure>
          {many && (
            <button className="cb-lb-nav cb-lb-next" aria-label="Suivant" onClick={(e) => { e.stopPropagation(); next(); }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          )}
        </div>
      )}
    </LightboxCtx.Provider>
  );
}

// Small reusable magnifier badge shown on hover over a zoomable image.
export function ZoomBadge() {
  return (
    <span className="cb-zoom-ic" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
      </svg>
    </span>
  );
}
