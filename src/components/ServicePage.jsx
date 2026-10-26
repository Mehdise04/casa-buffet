import React from 'react';
import { photo, SETS } from '../galleryData';
import { WHATSAPP } from '../data';
import { SERVICES, SERVICE_PROMISE, servicePath } from '../seo';
import { WhatsAppIcon, Arrow, Check, Star } from './icons';
import { useLightbox, ZoomBadge } from './Lightbox';
import Contact from './Contact';

export default function ServicePage({ service: s }) {
  const { open } = useLightbox();
  const files = SETS[s.set] || [];
  const openAt = (i) => open(files.map((f) => ({ src: photo(f), caption: s.name })), i);
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <main>
      <section className="cb-svc-head">
        <div className="cb-container">
          <nav className="cb-crumbs" aria-label="Fil d'Ariane">
            <a href="/">Accueil</a>
            <span aria-hidden="true">/</span>
            {s.group !== s.name && (
              <>
                <a href={`/#${s.homeAnchor}`}>{s.group}</a>
                <span aria-hidden="true">/</span>
              </>
            )}
            <span aria-current="page">{s.name}</span>
          </nav>

          <span className="cb-eyebrow">{s.group}</span>
          <h1 className="cb-svc-title">{s.h1}</h1>
          {s.intro.map((p) => (
            <p key={p} className="cb-body cb-svc-intro">{p}</p>
          ))}
          <p className="cb-body cb-svc-intro">{SERVICE_PROMISE}</p>

          {s.formats && (
            <ul className="cb-solutions-list cb-svc-formats">
              {s.formats.map((f) => (
                <li key={f} className="cb-solution">
                  <span className="tick"><Check stroke="#fff" /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="cb-svc-ctas">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cb-btn cb-btn-primary">
              <WhatsAppIcon fill="#fff" />
              Devis WhatsApp
            </a>
            <a href="#contact" className="cb-btn cb-btn-ghost">
              Parlons de votre projet
              <Arrow stroke="#5A3E96" />
            </a>
          </div>

          <div className="cb-svc-rating">
            <div style={{ display: 'flex', gap: 2 }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
            </div>
            <span><strong>5 / 5</strong> sur Google · +150 événements réalisés</span>
          </div>
        </div>
      </section>

      {files.length > 0 && (
        <section className="cb-svc-photos" aria-label={`Photos — ${s.name}`}>
          <div className="cb-container cb-svc-grid">
            {files.map((name, i) => (
              <figure key={name} className="cb-cell cb-zoomable" onClick={() => openAt(i)}>
                <img
                  src={photo(name)}
                  alt={`${s.name} — buffet CasaBuffet à Casablanca, photo ${i + 1}`}
                  loading={i < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <ZoomBadge />
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="cb-svc-more">
        <div className="cb-container">
          <h2 className="cb-h2 cb-h2-serif">Nos autres prestations</h2>
          <ul className="cb-svc-links">
            {others.map((o) => (
              <li key={o.slug}>
                <a href={servicePath(o)}>
                  <span>{o.name}</span>
                  <Arrow stroke="#6A48AC" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </main>
  );
}
