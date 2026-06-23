import React from 'react';
import { WHATSAPP } from '../data';
import { photo, SETS } from '../galleryData';
import { WhatsAppIcon, Sparkle, Arrow, Pin, Star, Heart } from './icons';

export default function Hero() {
  return (
    <section id="accueil" className="cb-hero">
      <div style={{ position: 'absolute', top: 60, right: '42%', opacity: 0.5 }}>
        <Sparkle size={20} />
      </div>
      <div className="cb-container-wide cb-hero-grid">
        <div>
          <span className="cb-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            <Sparkle />
            Casablanca · Événements sur mesure
          </span>
          <h1 className="cb-h1">
            Les plus beaux événements se jouent souvent dans les{' '}
            <span className="script" style={{ fontWeight: 400, color: '#6A48AC', fontSize: '1.12em' }}>détails</span>.
          </h1>
          <p className="cb-lead">Des prestations élégantes et personnalisées pour vos événements privés et professionnels.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 22, color: '#7A7090', fontSize: 15, fontWeight: 500 }}>
            <Pin /> Casablanca
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <a href="#contact" className="cb-btn cb-btn-primary">
              Parlons de votre projet
              <Arrow />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cb-btn cb-btn-ghost">
              <WhatsAppIcon fill="#5A3E96" />
              Contact WhatsApp
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 30 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
            </div>
            <span style={{ fontSize: 14, color: '#7A7090' }}>
              <strong style={{ color: '#4A4360' }}>5 / 5</strong> sur Google · +500 événements réalisés
            </span>
          </div>
        </div>

        <div className="cb-hero-art">
          <div className="cb-hero-frame" />
          <img className="cb-hero-img1" src={photo(SETS.decor[0])} alt="Décor d'événement Casa Buffet" />
          <img className="cb-hero-img2" src={photo(SETS.engagement[0])} alt="Coffrets de fiançailles" />
          <div className="cb-hero-badge">
            <span style={{ width: 40, height: 40, borderRadius: '50%', background: '#F1EBFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart />
            </span>
            <div style={{ lineHeight: 1.2 }}>
              <div className="script" style={{ fontSize: 21, lineHeight: 1, color: '#6A48AC', whiteSpace: 'nowrap' }}>Buffets &amp; Bonheur</div>
              <div style={{ fontSize: 10, letterSpacing: 1, color: '#A99AC4', textTransform: 'uppercase', fontWeight: 600, marginTop: 4 }}>faits avec amour</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
