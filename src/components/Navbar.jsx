import React, { useState } from 'react';
import { WHATSAPP } from '../data';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#prives', label: 'Événements privés' },
  { href: '#pro', label: 'Professionnels' },
  { href: '#pourquoi', label: 'Pourquoi nous' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
];

function WhatsAppIcon({ size = 17, fill = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm5.83-6.288c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="cb-header">
      <div className="cb-container-wide">
        <div className="cb-nav">
          <a href="#accueil" className="cb-brand" aria-label="Casa Buffet Events">
            <img src="/casabuffet logo watermark.png" alt="Casa Buffet Events" />
          </a>

          <nav className="cb-nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="cb-nav-link">{l.label}</a>
            ))}
          </nav>

          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cb-btn cb-btn-sm cb-nav-cta" style={{ flex: 'none' }}>
            <WhatsAppIcon />
            Devis WhatsApp
          </a>

          <button className="cb-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="cb-mobile" style={{ display: 'flex' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cb-btn cb-btn-primary" onClick={() => setOpen(false)}>
            <WhatsAppIcon /> Devis WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
