import React from 'react';
import { WHATSAPP } from '../data';
import { WhatsAppIcon, Sparkle, Arrow, Pin, Star } from './icons';

export default function Hero() {
  return (
    <section id="accueil" className="cb-hero">
      <div className="cb-container-wide cb-hero-inner">
        <div className="cb-hero-content">
          <span className="cb-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            <Sparkle />
            CasaBuffet · Événements sur mesure
          </span>
          <h1 className="cb-h1">
            Les plus beaux événements se jouent souvent dans les{' '}
            <span className="script" style={{ fontWeight: 400, fontSize: '1.12em' }}>détails</span>.
          </h1>
          <p className="cb-lead">Des prestations élégantes et personnalisées pour vos événements privés et professionnels.</p>
          <div className="cb-hero-loc">
            <Pin stroke="#E3D7F5" /> Casablanca
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <a href="#contact" className="cb-btn cb-btn-white">
              Parlons de votre projet
              <Arrow stroke="#5A3E96" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cb-btn cb-btn-outline">
              <WhatsAppIcon fill="#fff" />
              Contact WhatsApp
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 30 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
            </div>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
              <strong style={{ color: '#fff' }}>5 / 5</strong> sur Google · +500 événements réalisés
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
