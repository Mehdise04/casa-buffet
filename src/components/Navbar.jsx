import React, { useState } from 'react';
import { WHATSAPP } from '../data';
import { WhatsAppIcon } from './icons';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#prives', label: 'Événements privés' },
  { href: '#pro', label: 'Professionnels' },
  { href: '#pourquoi', label: 'Pourquoi nous' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
];

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
